/* =========================================================
   Exam One — app engine
   Exams register themselves in window.EXAMS (see exams/*.js)
   ========================================================= */
(function () {
  const EXAMS = window.EXAMS || [];
  const app = document.getElementById("app");
  const linksEl = document.getElementById("examLinks");
  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  /* ---------- helpers ---------- */
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  // Stable shuffle of options so the correct answer is in varied positions
  function shuffledOrder(n, seed) {
    const order = [...Array(n).keys()];
    const rnd = mulberry32(seed);
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function norm(s) { return s.toLowerCase().replace(/[^a-z0-9%$.\s]/g, " "); }

  /* ---------- state (saved in localStorage) ---------- */
  function loadState(id) {
    try { return JSON.parse(localStorage.getItem("examone_" + id)) || { mcq: {}, tf: {}, essay: {} }; }
    catch (e) { return { mcq: {}, tf: {}, essay: {} }; }
  }
  function saveState(id, st) { localStorage.setItem("examone_" + id, JSON.stringify(st)); }

  /* ---------- nav ---------- */
  function renderNav(activeId) {
    linksEl.innerHTML = "";
    EXAMS.forEach((ex, i) => {
      const a = el("a", ex.id === activeId ? "active" : "",
        `<span class="num">${i + 1}</span><span>${ex.nav || ex.title}</span>`);
      a.href = "#" + ex.id;
      linksEl.appendChild(a);
    });
    if (window.COURSE_COMPARISONS) {
      const compA = el("a", activeId === "comparisons" ? "active" : "",
        `<span class="num" style="font-size:10.5px; font-weight:800; letter-spacing:-.5px">VS</span><span>Comparisons</span>`);
      compA.href = "#comparisons";
      linksEl.appendChild(compA);
    }
  }

  /* ---------- exam rendering ---------- */
  function renderExam(exam) {
    const st = loadState(exam.id);
    app.innerHTML = "";
    window.scrollTo(0, 0);

    const hero = el("section", "hero",
      `<h1>${exam.title}</h1><p>${exam.subtitle || ""}</p>
       <div class="chips">
         <span class="chip">${exam.mcq.length} Multiple Choice</span>
         <span class="chip">${exam.tf.length} True / False</span>
         <span class="chip">${exam.essay.length} Essay</span>
       </div>`);
    app.appendChild(hero);

    // sticky sub-bar
    const bar = el("div", "subbar");
    bar.innerHTML = `
      <div class="tabs">
        <a href="#mcq-sec">MCQ</a>
        <a href="#tf-sec">True / False</a>
        <a href="#essay-sec">Essay</a>
      </div>
      <div class="score">
        <span>MCQ <b id="sMcq">0</b>/${exam.mcq.length}</span>
        <span>T/F <b id="sTf">0</b>/${exam.tf.length}</span>
        <span>Essays checked <b id="sEs">0</b>/${exam.essay.length}</span>
        <span class="pct" id="sPct">0%</span>
        <button class="btn-reset" id="resetBtn">Reset</button>
      </div>
      <div class="progress"><div id="prog"></div></div>`;
    app.appendChild(bar);
    // hash links inside page shouldn't change exam route
    bar.querySelectorAll(".tabs a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      });
    });
    bar.querySelector("#resetBtn").addEventListener("click", () => {
      if (confirm("Reset all your answers for " + exam.title + "?")) {
        localStorage.removeItem("examone_" + exam.id);
        renderExam(exam);
      }
    });

    function updateScore() {
      let mc = 0, tc = 0, answered = 0;
      exam.mcq.forEach((q, i) => { if (st.mcq[i] !== undefined) { answered++; if (st.mcq[i] === q.a) mc++; } });
      exam.tf.forEach((q, i) => { if (st.tf[i] !== undefined) { answered++; if (st.tf[i] === q.a) tc++; } });
      const es = Object.values(st.essay).filter((e) => e && e.checked).length;
      answered += es;
      const graded = Object.keys(st.mcq).length + Object.keys(st.tf).length;
      document.getElementById("sMcq").textContent = mc;
      document.getElementById("sTf").textContent = tc;
      document.getElementById("sEs").textContent = es;
      document.getElementById("sPct").textContent = graded ? Math.round(((mc + tc) / graded) * 100) + "%" : "0%";
      const total = exam.mcq.length + exam.tf.length + exam.essay.length;
      document.getElementById("prog").style.width = (answered / total) * 100 + "%";
    }

    /* ----- MCQ ----- */
    app.appendChild(el("h2", "section-title", `Part 1 · Multiple Choice <span class="tag">${exam.mcq.length} questions</span>`)).id = "mcq-sec";
    exam.mcq.forEach((q, i) => {
      const card = el("div", "q");
      card.innerHTML = `<div class="q-head"><div class="q-num">${i + 1}</div><div class="q-text">${q.q}</div></div>`;
      const opts = el("div", "options");
      const order = q.fixed ? [...q.o.keys()] : shuffledOrder(q.o.length, hash(exam.id + "mcq" + i));
      const buttons = [];
      order.forEach((origIdx, pos) => {
        const b = el("button", "opt", `<span class="letter">${LETTERS[pos]}</span><span>${q.o[origIdx]}</span>`);
        b.dataset.idx = origIdx;
        b.addEventListener("click", () => {
          if (st.mcq[i] !== undefined) return;
          st.mcq[i] = origIdx;
          saveState(exam.id, st);
          reveal();
          updateScore();
        });
        buttons.push(b);
        opts.appendChild(b);
      });
      card.appendChild(opts);

      function reveal() {
        const chosen = st.mcq[i];
        const ok = chosen === q.a;
        const correctLetter = LETTERS[order.indexOf(q.a)];
        buttons.forEach((b) => {
          const idx = +b.dataset.idx;
          b.disabled = true;
          if (idx === q.a) b.classList.add("is-correct");
          else if (idx === chosen) b.classList.add("is-wrong");
          else b.classList.add("dim");
        });
        card.classList.add(ok ? "correct" : "wrong");
        const fb = el("div", "feedback " + (ok ? "ok" : "bad"),
          `<div class="title ${ok ? "ok" : "bad"}">${ok ? "✔ Correct!" : "✘ Wrong — the right answer is (" + correctLetter + ") " + q.o[q.a]}</div>` +
          (q.e ? `<div class="exp">${q.e}</div>` : ""));
        card.appendChild(fb);
      }
      if (st.mcq[i] !== undefined) reveal();
      app.appendChild(card);
    });

    /* ----- True / False ----- */
    app.appendChild(el("h2", "section-title", `Part 2 · True or False <span class="tag">${exam.tf.length} questions</span>`)).id = "tf-sec";
    exam.tf.forEach((q, i) => {
      const card = el("div", "q");
      card.innerHTML = `<div class="q-head"><div class="q-num">${i + 1}</div><div class="q-text">${q.q}</div></div>`;
      const opts = el("div", "options tf");
      const buttons = [true, false].map((val) => {
        const b = el("button", "opt", val ? "✔ True" : "✘ False");
        b.dataset.val = val;
        b.addEventListener("click", () => {
          if (st.tf[i] !== undefined) return;
          st.tf[i] = val;
          saveState(exam.id, st);
          reveal();
          updateScore();
        });
        opts.appendChild(b);
        return b;
      });
      card.appendChild(opts);
      function reveal() {
        const chosen = st.tf[i];
        const ok = chosen === q.a;
        buttons.forEach((b) => {
          const v = b.dataset.val === "true";
          b.disabled = true;
          if (v === q.a) b.classList.add("is-correct");
          else if (v === chosen) b.classList.add("is-wrong");
        });
        card.classList.add(ok ? "correct" : "wrong");
        card.appendChild(el("div", "feedback " + (ok ? "ok" : "bad"),
          `<div class="title ${ok ? "ok" : "bad"}">${ok ? "✔ Correct!" : "✘ Wrong — the statement is " + (q.a ? "TRUE" : "FALSE")}</div>` +
          (q.e ? `<div class="exp">${q.e}</div>` : "")));
      }
      if (st.tf[i] !== undefined) reveal();
      app.appendChild(card);
    });

    /* ----- Essay ----- */
    app.appendChild(el("h2", "section-title", `Part 3 · Essay Questions <span class="tag">${exam.essay.length} questions</span>`)).id = "essay-sec";
    exam.essay.forEach((q, i) => {
      const card = el("div", "q essay");
      card.innerHTML = `<div class="q-head"><div class="q-num">${i + 1}</div><div class="q-text">${q.q}</div></div>`;
      const ta = el("textarea");
      ta.placeholder = "Write your answer here, then press “Check Answer” to see the model answer…";
      const saved = st.essay[i] || {};
      ta.value = saved.text || "";
      ta.addEventListener("input", () => {
        st.essay[i] = Object.assign(st.essay[i] || {}, { text: ta.value });
        saveState(exam.id, st);
      });
      const actions = el("div", "essay-actions");
      const btn = el("button", "btn", "Check Answer");
      const cov = el("span", "coverage");
      actions.appendChild(btn);
      actions.appendChild(cov);
      const model = el("div", "model", `<h4>✔ Model Answer</h4>${q.answer}`);
      model.style.display = "none";

      function showModel() {
        model.style.display = "block";
        btn.textContent = "Hide Answer";
        btn.classList.add("ghost");
        if (q.k && q.k.length) {
          const txt = norm(ta.value);
          const hits = q.k.filter((kw) => kw.split("|").some((alt) => txt.includes(norm(alt).trim())));
          const list = q.k.map((kw) => {
            const label = kw.split("|")[0];
            return hits.includes(kw) ? `<span class="kw-hit">✔ ${label}</span>` : `<span class="kw-miss">✘ ${label}</span>`;
          }).join(" · ");
          cov.innerHTML = `Key points covered: <b>${hits.length}/${q.k.length}</b>`;
          let kwBox = model.querySelector(".kwbox");
          if (!kwBox) { kwBox = el("p", "kwbox"); model.appendChild(kwBox); }
          kwBox.innerHTML = `<b>Key points:</b> ${list}`;
        }
      }
      btn.addEventListener("click", () => {
        if (model.style.display === "none") {
          st.essay[i] = Object.assign(st.essay[i] || {}, { checked: true, text: ta.value });
          saveState(exam.id, st);
          showModel();
          updateScore();
        } else {
          model.style.display = "none";
          btn.textContent = "Check Answer";
          btn.classList.remove("ghost");
        }
      });
      card.appendChild(ta);
      card.appendChild(actions);
      card.appendChild(model);
      if (saved.checked) showModel();
      app.appendChild(card);
    });

    updateScore();
  }

  /* ---------- comparisons page rendering ---------- */
  function renderComparisons() {
    const data = window.COURSE_COMPARISONS;
    if (!data) { app.innerHTML = "<p>No comparisons found.</p>"; return; }
    app.innerHTML = "";
    window.scrollTo(0, 0);

    const hero = el("section", "hero");
    hero.innerHTML = `
      <h1>${data.title}</h1>
      <p>${data.subtitle}</p>
      <div class="comp-controls">
        <div class="comp-search-wrap">
          <span class="comp-search-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input type="text" id="compSearch" class="comp-search-input" placeholder="Search any topic, memory, processor, acronym (e.g. SRAM, RISC, NRE, Flash)..." />
        </div>
        <div class="comp-cats" id="compCats"></div>
      </div>
    `;
    app.appendChild(hero);

    const statusEl = el("div", "comp-status");
    const listContainer = el("div", "comp-list");
    app.appendChild(statusEl);
    app.appendChild(listContainer);

    let activeCategory = "All";
    let searchQuery = "";

    function filterAndRender() {
      const q = norm(searchQuery.trim());
      const filtered = data.items.filter((item) => {
        const matchesCat = (activeCategory === "All") || (item.category === activeCategory);
        if (!matchesCat) return false;
        if (!q) return true;
        const textToSearch = norm(
          item.title + " " +
          item.category + " " +
          (item.summary || "") + " " +
          (item.examTip || "") + " " +
          item.rows.map(r => r.join(" ")).join(" ")
        );
        return textToSearch.includes(q);
      });

      statusEl.innerHTML = `<span>Showing <b>${filtered.length}</b> of ${data.items.length} comparisons${activeCategory !== "All" ? ` in <i>${activeCategory}</i>` : ""}</span>`;

      listContainer.innerHTML = "";
      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div style="text-align:center; padding: 50px 20px; color: var(--muted); background: var(--card); border: 1px dashed var(--border); border-radius: var(--radius);">
            <p style="font-size: 16px; margin-bottom: 6px; color: var(--text);">No comparisons match "<b>${searchQuery}</b>"</p>
            <p style="font-size: 13.5px;">Try clearing your search or switching category filters above.</p>
          </div>
        `;
        return;
      }

      filtered.forEach((item) => {
        const card = el("article", "comp-card");
        card.id = item.id;

        const header = el("div", "comp-card-header");
        header.innerHTML = `
          <span class="comp-badge">${item.category}</span>
          <a href="#${item.id}" style="color:var(--muted); font-size:12px; text-decoration:none;">#direct-link</a>
        `;
        card.appendChild(header);

        const title = el("h3", "", item.title);
        card.appendChild(title);

        if (item.summary) {
          const sumBox = el("div", "comp-summary", `<b>⚡ Core Summary:</b> ${item.summary}`);
          card.appendChild(sumBox);
        }

        const tableWrap = el("div", "comp-table-wrap");
        const table = el("table", "comp-table");
        
        let thHtml = "<tr>";
        item.headers.forEach(h => { thHtml += `<th>${h}</th>`; });
        thHtml += "</tr>";

        let tbHtml = "";
        item.rows.forEach(r => {
          tbHtml += "<tr>";
          r.forEach((cell, idx) => {
            tbHtml += `<td>${cell}</td>`;
          });
          tbHtml += "</tr>";
        });

        table.innerHTML = `<thead>${thHtml}</thead><tbody>${tbHtml}</tbody>`;
        tableWrap.appendChild(table);
        card.appendChild(tableWrap);

        if (item.examTip) {
          const tipBox = el("div", "comp-tip", `<b>🎯 High-Yield Exam Tip:</b> ${item.examTip}`);
          card.appendChild(tipBox);
        }

        listContainer.appendChild(card);
      });
    }

    // Category buttons
    const catsEl = hero.querySelector("#compCats");
    data.categories.forEach((cat) => {
      const btn = el("button", `comp-cat-btn ${cat === activeCategory ? "active" : ""}`, cat);
      btn.addEventListener("click", () => {
        activeCategory = cat;
        catsEl.querySelectorAll(".comp-cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterAndRender();
      });
      catsEl.appendChild(btn);
    });

    // Search input
    const searchInput = hero.querySelector("#compSearch");
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });

    filterAndRender();
  }

  /* ---------- router ---------- */
  function route() {
    const rawHash = (location.hash.replace("#", "") || "exam1").trim();
    if (rawHash === "comparisons" || rawHash.includes("-vs-") || rawHash === "es-scales" || rawHash === "rom-types-matrix" || rawHash === "cache-levels" || rawHash === "memory-hierarchy" || rawHash === "cpu-subsystems") {
      renderNav("comparisons");
      renderComparisons();
      document.title = "Course Comparisons — Embedded Exams";
      if (rawHash !== "comparisons") {
        setTimeout(() => {
          const targetEl = document.getElementById(rawHash);
          if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
      return;
    }

    if (!EXAMS.length) { app.innerHTML = "<p>No exams found.</p>"; return; }
    const exam = EXAMS.find((e) => e.id === rawHash) || EXAMS[0];
    renderNav(exam.id);
    renderExam(exam);
    document.title = exam.title + " — Embedded Exams";
  }
  window.addEventListener("hashchange", route);
  route();
})();
