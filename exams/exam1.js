/* =========================================================
   EXAM 1 — Embedded Systems (Lectures 1 – 10)
   50 MCQ · 20 True/False · Essay
   q = question, o = options, a = index of correct option, e = explanation
   ========================================================= */
window.EXAMS = window.EXAMS || [];
window.EXAMS.push({
  id: "exam1",
  title: "Exam 1",
  nav: "Exam One",
  subtitle: "Embedded Systems — Full comprehensive exam covering the whole material (Lectures 1 – 10)",

  /* ===================== MCQ (50) ===================== */
  mcq: [
    {
      q: "An Embedded System is best described as:",
      o: [
        "An electronic / electro-mechanical system designed to perform a specific function, combining hardware and firmware",
        "A general-purpose computer that can run any type of application",
        "A software package installed on a personal computer",
        "A network of computers sharing the same resources"
      ], a: 0,
      e: "An ES is designed to perform one specific function and is a combination of hardware and firmware (software). E.g. toys, mobile handsets, washing machines."
    },
    {
      q: "According to the lectures, an embedded system is a combination of three things:",
      o: ["Hardware, Software, and Mechanical components", "Processor, Memory, and I/O", "Sensors, Actuators, and Buses", "CPU, GPU, and DSP"], a: 0,
      e: "ES = Hardware + Software + Mechanical components, doing one specific task. (Processor, Memory, I/O are the components of any computing system.)"
    },
    {
      q: "Any computing system must consist of three main things:",
      o: ["Processor, Memory, and I/O", "ALU, CU, and RF", "Hardware, Software, and Firmware", "Data bus, Address bus, and Control bus"], a: 0,
      e: "Every computing system = Processor + Memory + I/O. (ALU, CU, RF are inside the processor.)"
    },
    {
      q: "Which of the following is an example of a specific-purpose computing system?",
      o: ["Microwave oven", "Personal laptop", "A desktop PC used for gaming and programming", "A general office workstation"], a: 0,
      e: "Specific-purpose systems are used for a single purpose like a fridge or microwave. Laptops/PCs are general purpose (many apps on the same resources)."
    },
    {
      q: "A sensor is a device that:",
      o: ["Converts physical events into electrical signals", "Converts electrical signals into physical events", "Stores the program code permanently", "Decodes instructions for the ALU"], a: 0,
      e: "A sensor takes input from the environment and converts it into electrical signals for the system (e.g. thermometer). The actuator does the opposite."
    },
    {
      q: "Which of the following is an actuator?",
      o: ["Electric motor", "Thermometer", "Light sensor", "Pressure sensor"], a: 0,
      e: "Actuators convert electrical signals into physical events — motors and heaters are common actuators."
    },
    {
      q: "The Graphics Processing Unit (GPU) is also occasionally called:",
      o: ["VPU — Visual Processing Unit", "MPU — Microprocessor Unit", "ECU — Electrical Control Unit", "MCU — Microcontroller Unit"], a: 0,
      e: "GPU is also occasionally called Visual Processing Unit (VPU). It assists the main processor in graphics operations."
    },
    {
      q: "Which register holds the memory address of the next instruction to be executed?",
      o: ["Program Counter (PC)", "Stack Pointer (SP)", "Instruction Register (IR)", "Accumulator (ACC)"], a: 0,
      e: "The PC is a special register that contains the address (location) of the NEXT program instruction to be executed."
    },
    {
      q: "The correct order of the instruction life cycle is:",
      o: ["Fetch → Decode → Execute", "Decode → Fetch → Execute", "Execute → Fetch → Decode", "Fetch → Execute → Decode"], a: 0,
      e: "The role of the processor: Fetch the instruction, Decode it, then Execute it."
    },
    {
      q: "The first recognized embedded system was:",
      o: ["The Apollo Guidance Computer (AGC) developed by MIT lab", "The Intel 4004", "The 555 timer IC", "The Arduino kit"], a: 0,
      e: "The AGC (MIT) is the first recognized ES. It used 5000 ICs and its UI was called DSKY (display/keyboard)."
    },
    {
      q: "In 1971 the world's first microprocessor chip, the 4004, was introduced by:",
      o: ["Intel", "Busicom", "MIT", "Motorola"], a: 0,
      e: "Intel introduced the 4004 in 1971, designed for use in business calculators produced by the Japanese company Busicom."
    },
    {
      q: "Dynamic RAM (DRAM) stores each bit using:",
      o: ["A capacitor (charge = 1, no charge = 0)", "A flip-flop built from at least 6 transistors", "A fuse", "A floating-gate MOSFET"], a: 0,
      e: "DRAM is capacitor-based. SRAM uses flip-flops (≥ 6 transistors), PROM uses fuses, ROM/Flash use floating-gate MOSFETs."
    },
    {
      q: "Which memory component is the FASTEST in the memory hierarchy?",
      o: ["Register Files", "Cache", "Main memory (RAM)", "Hard disk (HDD)"], a: 0,
      e: "Register files are the fastest because the CPU does not need buses to access them. Then cache → RAM → HDD."
    },
    {
      q: "Which bus determines the location in memory that the processor will read from or write to?",
      o: ["Address bus", "Data bus", "Control bus", "I/O bus"], a: 0,
      e: "Address bus → location; Data bus → contents being read/written; Control bus → read or write and timing."
    },
    {
      q: "An ECG machine that only displays a patient's heartbeat (without controlling anything) is an embedded system whose purpose is:",
      o: ["Monitoring", "Control", "Data communication", "Application-specific user interface"], a: 0,
      e: "Monitoring systems determine the state of variables using input sensors but cannot impose control over them. ECG is the typical example."
    },
    {
      q: "Network hubs, routers, switches, and modems are typical examples of embedded systems dedicated to:",
      o: ["Data communication", "Monitoring", "Data (signal) processing", "Control"], a: 0,
      e: "They are dedicated data-transmission embedded systems (wired like Ethernet or wireless like Wi-Fi/Bluetooth)."
    },
    {
      q: "Which example belongs to the FIRST generation of embedded systems?",
      o: ["Digital telephone keypads", "SCADA systems", "Robotics", "Smart phones"], a: 0,
      e: "1st gen: 8-bit MPs / 4-bit MCUs (telephone keypads). 2nd: SCADA. 3rd: robotics. 4th: smart phones."
    },
    {
      q: "Which of the following is NOT one of the embedded-system challenges (constraints)?",
      o: ["Number of applications that can be installed", "Power", "Cost", "Size"], a: 0,
      e: "ES challenges are Power, Cost, Speed/Time and Size. Installing many apps is a property of general-purpose systems."
    },
    {
      q: "Small-scale embedded systems are characterized by:",
      o: [
        "Simple application needs, non time-critical performance, low performance & low cost",
        "Highly complex hardware & firmware with time-critical response",
        "Usually containing an operating system",
        "Being built around multicore processors and SoC"
      ], a: 0,
      e: "Small-scale: simple, not time-critical, low performance & low cost — e.g. an electronic toy."
    },
    {
      q: "Which unit decodes the instruction during the Decode step?",
      o: ["The Instruction Decoder (ID) inside the Control Unit", "The ALU", "The Program Counter", "The Data bus"], a: 0,
      e: "The Instruction Decoder inside the CU understands the instruction and sends signals to the ALU (Add, Sub, ...)."
    },
    {
      q: "Non-Recurring Engineering (NRE) cost includes:",
      o: [
        "The personnel and other costs of designing the system",
        "The cost of the components of each produced unit",
        "The cost of assembling each unit",
        "The selling price of each unit"
      ], a: 0,
      e: "Cost = Manufacturing cost (components + assembly) + NRE (personnel & design costs, paid once)."
    },
    {
      q: "Which of the following is a NON-functional requirement?",
      o: ["Power consumption", "Always displays the current latitude and longitude", "Three user-selectable resolutions", "Searching the map database for the current position"], a: 0,
      e: "Typical non-functional requirements: Performance, Cost, Physical size & weight, Power consumption. The others describe functions."
    },
    {
      q: "The specification of an embedded system serves as:",
      o: ["The contract between the customer and the architects", "The final source code of the system", "A list of hardware component prices", "The user manual delivered with the product"], a: 0,
      e: "The specification is more precise than requirements and serves as the contract between the customer and the architects."
    },
    {
      q: "At which stage of the design process do many bugs appear for the first time?",
      o: ["System integration", "Requirements", "Specification", "Architecture design"], a: 0,
      e: "System integration puts the components together — many bugs appear only at this stage, so interfaces must be well designed."
    },
    {
      q: "A company spends $10,000 on hardware design, firmware and testing of a smart thermometer. Each unit costs $20 to manufacture. What is the total cost of producing 500 units?",
      o: ["$20,000", "$10,000", "$10,020", "$30,000"], a: 0,
      e: "NRE = $10,000; Manufacturing = 500 × $20 = $10,000; Total = $10,000 + $10,000 = $20,000."
    },
    {
      q: "In a smart-watch project, which of the following is a MANUFACTURING cost (not NRE)?",
      o: ["Assembling finished watches", "Designing the PCB", "Developing the firmware", "Testing prototypes"], a: 0,
      e: "PCB design, firmware development, prototype testing are NRE. Buying production components and assembling are manufacturing costs."
    },
    {
      q: "In an air conditioner with control functionality, the air compressor unit acts as:",
      o: ["The actuator", "The sensor", "The setting (feeding) unit", "The thermistor"], a: 0,
      e: "The thermistor is the sensor, the handheld unit sets the desired temperature, and the compressor is the actuator."
    },
    {
      q: "Hard real-time systems are those in which:",
      o: [
        "Missing a deadline can have catastrophic consequences (financial, loss of life)",
        "Missing a deadline can be tolerated to a certain degree",
        "Task run-times are dynamic and depend on events",
        "There are no deadlines at all"
      ], a: 0,
      e: "Hard RT: catastrophic if deadline missed. Soft RT: missing a deadline may be tolerated to a certain degree."
    },
    {
      q: "Time-triggered embedded systems are characterized by:",
      o: [
        "Activities following a statically computed schedule (allocated time slots), so they are predictable",
        "Activities that depend on the occurrence of different events",
        "Tolerating missed deadlines",
        "Using only 4-bit microcontrollers"
      ], a: 0,
      e: "Time-triggered → static schedule & predictable. Event-triggered → dynamic activities depending on events."
    },
    {
      q: "Comparing a System Board (SB) with a System on Chip (SoC), which statement is correct?",
      o: [
        "SB is larger, more expensive and consumes more power, but both give the same performance",
        "SoC is larger but cheaper than SB",
        "SB has higher performance than SoC",
        "SoC is configurable during the design phase while SB is not"
      ], a: 0,
      e: "SB: larger, expensive, high power (wires). SoC: smaller, cheaper, less power. Same performance. Only SB is configurable."
    },
    {
      q: "A System on Chip (SoC) can be described as:",
      o: [
        "A high-performance MCU containing MP, memory and I/O plus secondary processors such as GPU and DSP",
        "A breadboard carrying separate components connected by wires",
        "A single microprocessor without any memory",
        "A sensor connected directly to an actuator"
      ], a: 0,
      e: "SoC is a high-performance MCU: MP + Memory + I/O with GPU & DSP, all on one chip."
    },
    {
      q: "SoC is mainly used with which type of application, and why?",
      o: [
        "OS applications (e.g. Embedded Linux, Android), because they need a high-performance microcontroller",
        "Bare-metal applications, because they need no drivers",
        "Bare-metal applications, because they include a kernel",
        "OS applications, because they don't need any hardware"
      ], a: 0,
      e: "SoC deals with OS (non-bare-metal) applications because they need an MCU with high performance. Bare-metal SW is used with less powerful MCUs."
    },
    {
      q: "Compared to a microprocessor, a microcontroller:",
      o: [
        "Is an independent device that doesn't require other chips and includes many power-saving features",
        "Requires an external memory device to store its instructions",
        "Has only limited power-saving options",
        "Is a general-purpose device found in most electronic devices"
      ], a: 0,
      e: "The other three options describe the microprocessor (dependent unit, needs external memory, limited power saving, general purpose)."
    },
    {
      q: "Why does the CU fetch the instruction from memory into the Instruction Register (IR) inside the CPU?",
      o: [
        "Because memory and CPU are connected by the bus, and dealing with the bus is hard; a register inside the CPU is easier and faster",
        "Because memory cannot store instructions",
        "Because the ALU is physically located inside the memory",
        "Because the PC can only point to registers"
      ], a: 0,
      e: "The connection between memory and CPU is through the bus; it's easier to fetch the instruction into a register inside the CPU and deal with it there."
    },
    {
      q: "The instruction decoder built as a set of logic gates (fast, but expensive to extend) is called:",
      o: ["Hard-wired — used with RISC", "Memory-mapped — used with CISC", "Hard-wired — used with CISC", "Memory-mapped — used with RISC"], a: 0,
      e: "Hard-wired = logic gates (input → gate → output) → fast, RISC, needs strong compiler. Memory-mapped = searches instructions in memory → slower, CISC, simple compiler."
    },
    {
      q: "Why does RISC require a strong (complex) compiler?",
      o: [
        "Because it understands fewer instructions, so complex operations (e.g. ×) must be converted into many simpler ones (e.g. additions)",
        "Because it uses memory-mapped instruction decoding",
        "Because it understands many instructions directly",
        "Because it does not use any registers"
      ], a: 0,
      e: "If the processor only understands + and −, the compiler must convert × into many add operations."
    },
    {
      q: "Which statement about RISC / CISC architectures is correct according to the lectures?",
      o: [
        "RISC is used with Harvard architecture, while CISC can be Harvard or Von-Neumann",
        "RISC is used only with Von-Neumann architecture",
        "CISC can only be Harvard architecture",
        "Both RISC and CISC can only be Von-Neumann"
      ], a: 0,
      e: "RISC → Harvard architecture. CISC → can be Harvard or Von-Neumann."
    },
    {
      q: "Declaring a C variable with the <code>register</code> keyword:",
      o: [
        "Requests storing it in a GPR, but if no register is available the compiler stores it in memory",
        "Always guarantees the variable is stored in a GPR",
        "Stores the variable permanently in ROM",
        "Stores the variable in the Stack Pointer"
      ], a: 0,
      e: "It is NOT always stored in a GPR — it depends on whether the compiler has an available register; otherwise it is stored in memory."
    },
    {
      q: "The Stack Pointer (SP) holds:",
      o: [
        "The memory address of the last data element added to the stack (the top)",
        "The address of the next instruction",
        "The result of the last ALU operation",
        "The flags of the last ALU result"
      ], a: 0,
      e: "SP holds the last place in the stack (top). The stack stores temporary data in LIFO (Last In, First Out) manner."
    },
    {
      q: "In the Third generation of embedded systems, which processors were introduced?",
      o: [
        "High-performance 16/32-bit processors, Application Specific Instruction set Processors like DSPs, and ASICs",
        "8-bit microprocessors and 4-bit microcontrollers",
        "16-bit microprocessors and 8 or 16-bit microcontrollers",
        "System on Chips, reconfigurable and multicore processors"
      ], a: 0,
      e: "3rd generation: 16/32-bit, DSPs, ASICs with complex & powerful instruction sets (robotics, industrial process control, networking)."
    },
    {
      q: "An 8-bit instruction format is: 3-bit op-code | 3-bit operand 1 | 2-bit operand 2. If op-code <code>000</code> means ADD, what result does the ALU produce for the instruction <code>000 110 11</code>?",
      o: ["9", "6", "8", "18"], a: 0,
      e: "Op-code 000 = ADD, operand 1 = 110 = 6, operand 2 = 11 = 3 → 6 + 3 = 9."
    },
    {
      q: "The ALU computes 3 − 5. Afterwards, the sign flag in the Process Status Word (PSW) will be:",
      o: ["1, because the last result is negative", "0, because the last result is negative", "Unchanged, because subtraction does not affect flags", "0, because flags are always cleared after each instruction"], a: 0,
      e: "The sign flag represents the sign of the last ALU result: 0 means +ve, 1 means −ve. 3 − 5 = −2 → sign flag = 1."
    },
    {
      q: "An embedded device has an NRE of $50,000 and a manufacturing cost of $25 per unit. If 2,000 units are produced, the effective cost per unit is:",
      o: ["$50", "$25", "$75", "$27.50"], a: 0,
      e: "NRE per unit = 50,000 ÷ 2,000 = $25; effective cost = $25 + $25 = $50 per unit."
    },
    {
      q: "Why is DRAM slower than SRAM?",
      o: [
        "Its refresh circuit has higher priority to access the memory than the CPU, which delays the CPU",
        "It uses 6 transistors for each bit",
        "It is a non-volatile memory",
        "It needs a battery to keep its data"
      ], a: 0,
      e: "Capacitors leak charge, so the refresh circuit (DRAM controller) periodically reads & writes back data and has priority over the CPU → access time increases."
    },
    {
      q: "In a floating-gate MOSFET, the PROGRAMMED state means:",
      o: [
        "The floating gate holds trapped electrons (−ve charge) → logic 0",
        "The floating gate has no electrons → logic 1",
        "The floating gate holds trapped electrons → logic 1",
        "High voltage is applied to the drain → logic 0"
      ], a: 0,
      e: "Programmed state: electrons trapped in the floating gate → 0. Erased state (high voltage on drain releases electrons): no electrons → 1."
    },
    {
      q: "Which memory is byte-accessible, has an endurance of about 100,000 erase/write cycles and a high cost per bit?",
      o: ["EEPROM (E²PROM)", "Flash", "EPROM", "Mask programmable ROM"], a: 0,
      e: "EEPROM: erased electrically, byte access, endurance 100,000 (high) → expensive. Flash: sector access, endurance 10,000 → cheaper."
    },
    {
      q: "Flash memory differs from EEPROM in that Flash:",
      o: [
        "Is erased sector by sector (block access), has lower endurance (~10,000) and lower cost per bit",
        "Is erased byte by byte and has an endurance of 100,000",
        "Is a volatile memory",
        "Must be erased by ultraviolet light"
      ], a: 0,
      e: "Flash uses block (sector) access (256 B – 16 KB per sector), so it is faster than EEPROM, cheaper and high density — but cannot erase byte by byte."
    },
    {
      q: "Cache coherence solves which problem?",
      o: [
        "Two cores' caches holding different values for the same address after one core edits it",
        "Capacitors in DRAM losing their charge",
        "Radiation corrupting the data stored in EPROM",
        "The CPU being faster than the ROM"
      ], a: 0,
      e: "Each cache = SRAM + controller. When cache in core 1 changes a value, its controller must notify the controller of cache in core 2 with the edit."
    },
    {
      q: "A designer needs a 32 KB memory but only has 4 KB memory chips. Using memory organization, how many chips are needed?",
      o: ["8", "4", "16", "32"], a: 0,
      e: "Organization: connect chips together — 32 KB ÷ 4 KB = 8 chips (like four 4K chips give 16K)."
    },
    {
      q: "A CPU makes 500 requests to the cache, and 75 of them are misses. What is the hit ratio?",
      o: ["85%", "15%", "75%", "17.6%"], a: 0,
      e: "Hits = 500 − 75 = 425. Hit ratio = hits ÷ (hits + misses) = 425 ÷ 500 = 0.85 = 85%."
    }
  ],

  /* ===================== TRUE / FALSE (20) ===================== */
  tf: [
    { q: "The embedded system and the general-purpose computer are at two extremes.", a: true,
      e: "ES is designed for a specific task, while the general-purpose computer is meant for general use (games, movies, documents…)." },
    { q: "An embedded system will always have a chip (microprocessor or microcontroller) that holds the code that drives the system.", a: true,
      e: "Every ES contains an MPU or MCU that has the code/software." },
    { q: "The MPU (microprocessor) is a part of the MCU (microcontroller).", a: true,
      e: "MCU = small computer on one IC containing Processor (MPU) + Memory + I/O." },
    { q: "A system can have several CPUs that all act as primary processors at the same time.", a: false,
      e: "There is only one CPU per system (the primary/master). Other microprocessors such as GPU and DSP are secondary (slaves)." },
    { q: "A DSP is used to handle complex computations such as the Fourier transform to decrease the load on the primary processor.", a: true,
      e: "DSP is a secondary microprocessor that deals with complex computations." },
    { q: "In soft real-time systems, missing a deadline always causes catastrophic consequences.", a: false,
      e: "That is hard real-time. In soft real-time, missing a deadline may be tolerated to a certain degree." },
    { q: "Medium-scale embedded systems usually contain an operating system.", a: true,
      e: "Medium-scale: slightly complex HW & firmware, medium performance & low cost, usually contain OS (e.g. industrial machines)." },
    { q: "Jump instructions (JMP) require an ALU operation because they change the Program Counter.", a: false,
      e: "JMP only alters the flow by changing the PC to a new address; no computation → no ALU operation is required." },
    { q: "RAM is faster than ROM.", a: true,
      e: "Because of the components they are made of — the access time of ROM is slower than RAM." },
    { q: "The write access time of memory is smaller than the read access time.", a: false,
      e: "Write time is bigger than read time, because writing may have to clear the data in memory first and then write." },
    { q: "SRAM needs a refresh circuit to prevent charge leakage.", a: false,
      e: "DRAM (capacitor-based) needs the refresh circuit. SRAM is transistor/flip-flop based and does not need refresh, so it is faster." },
    { q: "In PROM, a burned fuse represents logic 1.", a: false,
      e: "Burned fuse = 0, not burned = 1. PROM is OTP and the code is installed by the user." },
    { q: "EPROM data can be corrupted by radiation and noise, and EPROM is erased using ultraviolet beams through a small window.", a: true,
      e: "Radiation can flip bits (0 → 1 and vice versa); EPROM is erasable with UV and can keep data ~10 years." },
    { q: "NVRAM is built from SRAM plus a battery (or SRAM + EEPROM + small battery), and it is faster than ROM.", a: true,
      e: "NVRAM combines RAM advantages (read/write) and ROM advantages (non-volatile); it is high cost per bit since it is SRAM-based." },
    { q: "The processor can write new code directly into ROM during normal operation.", a: false,
      e: "ROM is read-only to the processor. The code is written by a burner / flasher / flash driver that applies high voltage." },
    { q: "After the CPU fetches an instruction, it increases the Program Counter so it points to the next instruction, not the current one.", a: true,
      e: "The PC always holds the address of the next instruction." },
    { q: "The range of instructions in a RISC processor is about 30 to 40 instructions.", a: true,
      e: "RISC uses a small, highly optimized set of instructions (30 – 40) so it can operate at higher speed." },
    { q: "In embedded systems we usually use CISC because it needs a fewer number of instructions.", a: false,
      e: "Embedded systems use RISC because they need a fewer number of instructions. CISC is high performance like computers." },
    { q: "L2 cache is faster than L1 cache because it is located outside the cores.", a: false,
      e: "L1 (inside each core) is the fastest; L2 (outside cores) is slower than L1 but faster than L3." },
    { q: "When the CPU requests address 3001, the cache brings that address and the next few addresses (3002, 3003, …) because the CPU is expected to need them.", a: true,
      e: "The cache controller fetches the requested address plus the following addresses to increase the chance of a hit." }
  ],

  /* ===================== ESSAY ===================== */
  essay: [
    {
      q: "Define an Embedded System. Then explain its three main components using the <b>washing machine</b> and the <b>air conditioner</b> as examples.",
      k: ["specific", "hardware", "software|firmware", "mechanical", "chip|microcontroller|microprocessor", "sensor"],
      answer: `
        <p><b>Definition:</b> An electronic / electro-mechanical system designed to perform a <b>specific function</b>, combining <b>hardware and firmware (software)</b>. It is a combination of 3 things — Hardware, Software, Mechanical components — and does one specific task only.</p>
        <table>
          <tr><th>Component</th><th>Washing Machine</th><th>Air Conditioner</th></tr>
          <tr><td>Hardware</td><td>Buttons, display & buzzer, electronic circuitry</td><td>Remote, display & buzzer, infrared sensors, electronic circuitry</td></tr>
          <tr><td>Software</td><td>A chip on the circuit holding software that drives, controls & monitors the operations</td><td>Chip with software that monitors the external temperature through the sensors and releases / suppresses the coolant</td></tr>
          <tr><td>Mechanical</td><td>Internals that wash the clothes, control water input/output, the chassis</td><td>The motor, the chassis, the outlet, etc.</td></tr>
        </table>
        <p>An ES always has a chip (microprocessor or microcontroller) that has the code which drives the system. ESs are unique in character and behavior, with specialized hardware and software.</p>`
    },
    {
      q: "Compare <b>General-purpose</b> and <b>Specific-purpose</b> (embedded) computing systems. Then state the embedded-system challenges and compare <b>System Board (SB)</b> and <b>System on Chip (SoC)</b> based on them.",
      k: ["general", "specific", "power", "cost", "speed|time|performance", "size", "configurab", "same performance"],
      answer: `
        <ul>
          <li><b>General purpose:</b> like laptops — we can install many applications, each with a different function, but all share the same resources (same CPU, RAM, hardware).</li>
          <li><b>Specific purpose:</b> used for a single purpose (fridge, microwave). Because of this, ES must have <b>constraints</b>.</li>
        </ul>
        <p><b>ES challenges:</b> Power, Cost, Speed / Time, Size.</p>
        <table>
          <tr><th>Point</th><th>SB (System Board)</th><th>SoC (System on Chip)</th></tr>
          <tr><td>Size</td><td>Larger</td><td>Smaller</td></tr>
          <tr><td>Cost</td><td>Expensive</td><td>Less expensive</td></tr>
          <tr><td>Power</td><td>High (wires consume power)</td><td>Less</td></tr>
          <tr><td>Performance</td><td>Same</td><td>Same</td></tr>
          <tr><td>Configurability</td><td>Yes (editable during design phase)</td><td>No</td></tr>
        </table>`
    },
    {
      q: "Explain the classification of embedded systems based on <b>generation</b> (with an example of each) and based on <b>complexity & performance</b>.",
      k: ["8-bit", "4-bit", "16-bit", "32", "DSP", "ASIC", "System on Chip|SoC", "multicore", "small", "medium", "large"],
      answer: `
        <p><b>Based on generation:</b></p>
        <ol>
          <li><b>First:</b> 8-bit microprocessors & 4-bit microcontrollers — e.g. digital telephone keypads.</li>
          <li><b>Second:</b> 16-bit microprocessors & 8/16-bit microcontrollers — e.g. SCADA, data acquisition systems.</li>
          <li><b>Third:</b> high-performance 16/32-bit processors, ASIPs like DSPs, and ASICs; complex & powerful instruction set — e.g. robotics, industrial process control, networking.</li>
          <li><b>Fourth:</b> System on Chips, reconfigurable & multicore processors; high performance, tight integration, miniaturization — e.g. smart phones, MIDs.</li>
        </ol>
        <p><b>Based on complexity & performance:</b></p>
        <ul>
          <li><b>Small-scale:</b> simple, not time-critical, low performance & low cost — electronic toy.</li>
          <li><b>Medium-scale:</b> slightly complex HW & firmware, medium performance & low cost, usually contains OS — industrial machines.</li>
          <li><b>Large-scale:</b> highly complex HW & firmware, time-critical response — mission-critical applications.</li>
        </ul>
        <p>(Also: deterministic behavior → soft / hard real-time; triggering → event-triggered / time-triggered.)</p>`
    },
    {
      q: "List the six <b>purposes</b> of embedded systems and explain each briefly with an example. What is the main difference between a <b>monitoring</b> system and a <b>control</b> system?",
      k: ["collection|storage", "communication", "signal processing|processing", "monitoring", "control", "user interface", "actuator", "sensor"],
      answer: `
        <ol>
          <li><b>Data Collection / Storage / Representation:</b> acquires analog or digital data from the external world for storage, analysis, manipulation, transmission.</li>
          <li><b>Data Communication:</b> dedicated to data communication through wired (Ethernet) or wireless (Wi-Fi, Bluetooth) interfaces — routers, hubs, switches, modems.</li>
          <li><b>Data (Signal) Processing:</b> computationally intensive, employs DSPs — speech coding, audio/video codecs.</li>
          <li><b>Monitoring:</b> determines the state of variables using input sensors — ECG machine, digital multimeter, logic analyzer, digital CRO.</li>
          <li><b>Control:</b> imposes control over variables according to input changes — air conditioner (thermistor = sensor, compressor = actuator).</li>
          <li><b>Application-Specific User Interface:</b> specific UI (keyboard, display) for a target user group — mobile handsets, industrial control units.</li>
        </ol>
        <p><b>Difference:</b> Monitoring systems only have <b>sensors</b> and cannot impose control (just monitoring). Control systems contain both <b>sensors</b> (input port) and <b>actuators</b> (output port) to bring the controlled variable into the specified range.</p>`
    },
    {
      q: "A company develops a smart irrigation controller:<br>• Hardware development = $15,000<br>• Software development = $20,000<br>• Prototype testing = $5,000<br>• Manufacturing cost = $35 per unit<br>The company produces <b>4,000 units</b>.<br>a) Find the NRE, the manufacturing cost, the total cost and the effective cost per unit.<br>b) If production increases to <b>8,000 units</b>, what is the new effective cost per unit? Explain why it changed.",
      k: ["40,000|40000", "140,000|140000", "180,000|180000", "45", "40", "NRE"],
      answer: `
        <p><b>a)</b></p>
        <ul>
          <li>NRE = 15,000 + 20,000 + 5,000 = <b>$40,000</b></li>
          <li>Manufacturing cost = 4,000 × 35 = <b>$140,000</b></li>
          <li>Total cost = NRE + Manufacturing = 40,000 + 140,000 = <b>$180,000</b></li>
          <li>Effective cost per unit = 40,000 ÷ 4,000 + 35 = 10 + 35 = <b>$45 per unit</b></li>
        </ul>
        <p><b>b)</b> NRE per unit = 40,000 ÷ 8,000 = $5 → effective cost = 5 + 35 = <b>$40 per unit</b>.</p>
        <p><b>Why:</b> NRE is a one-time (non-recurring) cost, so it is divided over more units as production increases, while the manufacturing cost per unit stays constant ($35). Therefore the effective cost per unit decreases.</p>`
    },
    {
      q: "Explain the <b>embedded system design process</b> steps. Then state the <b>non-functional requirements</b> and fill in the requirements form of the <b>GPS moving map</b> module.",
      k: ["requirements", "specification", "architecture", "components", "integration", "performance", "cost", "size|weight", "power"],
      answer: `
        <p><b>Top-down design steps:</b> Requirements → Specification → Architecture → Component design (HW & SW) → System integration.</p>
        <ul>
          <li><b>Requirements:</b> gather what we are designing (functional & non-functional), then refine them into a specification.</li>
          <li><b>Specification:</b> more precise; the contract between the customer and the architects; must be verifiable.</li>
          <li><b>Architecture:</b> major HW (CPUs, peripherals) and SW (programs, data structures) components; evaluate HW vs SW trade-offs.</li>
          <li><b>Designing HW & SW components:</b> some ready-made, some modified from existing designs, others designed from scratch.</li>
          <li><b>System integration:</b> put components together; many bugs appear only here; test to each specification.</li>
        </ul>
        <p><b>Non-functional requirements:</b> Performance (soft metrics & hard deadlines), Cost (manufacturing + NRE), Physical size & weight, Power consumption (often in terms of battery life).</p>
        <table>
          <tr><th>Entry</th><th>GPS moving map</th></tr>
          <tr><td>Name</td><td>GPS moving map</td></tr>
          <tr><td>Purpose</td><td>Consumer-grade moving map for driving use</td></tr>
          <tr><td>Inputs</td><td>Power button, two control buttons</td></tr>
          <tr><td>Outputs</td><td>Back-lit LCD display 400 × 600</td></tr>
          <tr><td>Functions</td><td>5-receiver GPS system; three user-selectable resolutions; always displays current latitude & longitude</td></tr>
          <tr><td>Performance</td><td>Updates screen within 0.25 seconds upon movement</td></tr>
          <tr><td>Manufacturing cost</td><td>$30</td></tr>
          <tr><td>Power</td><td>100 mW</td></tr>
          <tr><td>Physical size & weight</td><td>No more than 2" × 6", 12 ounces</td></tr>
        </table>`
    },
    {
      q: "Draw / describe the <b>GPS moving map</b> block diagram and its hardware architecture. Explain the role of each component.",
      k: ["GPS receiver", "search engine", "renderer", "database", "user interface", "display", "frame buffer", "CPU", "memory", "panel I/O"],
      answer: `
        <p><b>Block diagram components:</b></p>
        <ul>
          <li><b>GPS receiver:</b> determines current location using satellite signals.</li>
          <li><b>Search engine:</b> finds relevant data from the map database based on the location.</li>
          <li><b>Renderer:</b> converts the data into a visual format (pixels) for display.</li>
          <li><b>Map database:</b> stores map and geographical data (roads, landmarks).</li>
          <li><b>User interface:</b> lets the user interact (entering destinations).</li>
          <li><b>Display:</b> shows the map and location.</li>
        </ul>
        <p><b>Hardware architecture:</b></p>
        <ul>
          <li><b>CPU:</b> manages all tasks — processes GPS data and controls the display.</li>
          <li><b>Frame buffer:</b> temporarily stores image data before it is displayed.</li>
          <li><b>Display:</b> shows the final output.</li>
          <li><b>GPS receiver:</b> receives satellite signals.</li>
          <li><b>Memory:</b> stores maps and other resources.</li>
          <li><b>Panel I/O:</b> manages I/O between the display panel and the user interface.</li>
        </ul>
        <p>(Software architecture adds: Position → Database search → Renderer → Pixels, plus User interface and a Timer to refresh periodically.)</p>`
    },
    {
      q: "Explain the <b>instruction life cycle</b> in detail. Mention the role of PC, CU, IR, Instruction Decoder and ALU, and where the result is stored. Use the 8-bit instruction <code>000 111 01</code> (000 = ADD) as an example.",
      k: ["fetch", "decode", "execute", "program counter|PC", "instruction register|IR", "control unit|CU", "decoder|ID", "ALU", "8", "general purpose|GPR|accumulator"],
      answer: `
        <ol>
          <li><b>Fetch:</b> The CPU references the <b>PC</b> for the address; the <b>CU</b> fetches the instruction from memory (outside the MP) into the <b>Instruction Register (IR)</b> inside the MP (because dealing with the bus is hard). Then the PC is incremented to point to the <b>next</b> instruction.</li>
          <li><b>Decode:</b> The <b>Instruction Decoder (ID)</b> inside the CU understands the instruction using the <b>Instruction Set</b> and the <b>Instruction Format</b>, then sends a signal to the ALU with the operation and operands.</li>
          <li><b>Execute:</b> The <b>ALU</b> performs the operation.</li>
        </ol>
        <p><b>Example:</b> <code>000 | 111 | 01</code> → op-code 000 = ADD, operand 1 = 111 = 7, operand 2 = 01 = 1 → ALU: 7 + 1 = <b>8</b>.</p>
        <p><b>Result storage:</b> In register files — in old processors the <b>Accumulator</b>; in new microprocessors any empty <b>general-purpose register</b>. Flags of the result are stored in the <b>PSW</b> (e.g. sign flag).</p>
        <p>To understand the instruction we need Hardware (Instruction Decoder) + Software (Compiler).</p>`
    },
    {
      q: "Compare <b>RISC</b> and <b>CISC</b> (number of instructions, compiler, instruction-decoder type, size, cost, performance, power, architecture). Why do embedded systems use RISC?",
      k: ["reduced", "complex", "compiler", "hard-wired|hard wired", "memory-mapped|memory mapped", "harvard", "von", "30", "fewer|less"],
      answer: `
        <table>
          <tr><th>Point</th><th>RISC</th><th>CISC</th></tr>
          <tr><td>No. of instructions</td><td>Understands fewer (30 – 40)</td><td>Understands many</td></tr>
          <tr><td>Compiler (SW)</td><td>Strong (converts × into many additions) → high SW cost</td><td>Simple → lower SW cost</td></tr>
          <tr><td>Instruction decoder</td><td>Hard-wired (logic gates) → fast</td><td>Memory-mapped (search in memory) → takes time</td></tr>
          <tr><td>Size</td><td>ID bigger, ALU small</td><td>ID smaller, ALU big</td></tr>
          <tr><td>HW cost</td><td>Low (fewer gates)</td><td>High</td></tr>
          <tr><td>Performance</td><td>Time in conversion</td><td>Time in search</td></tr>
          <tr><td>Power</td><td>ALU less, ID high</td><td>ALU high, ID less</td></tr>
          <tr><td>Architecture</td><td>Harvard</td><td>Harvard or Von-Neumann</td></tr>
        </table>
        <p>Overall both are comparable; the choice depends on what we need. A CISC single instruction can execute several low-level operations (load, arithmetic, store).</p>
        <p><b>Embedded systems use RISC</b> because they need a fewer number of instructions; a small, highly optimized instruction set allows higher speed. CISC is high performance like computers.</p>`
    },
    {
      q: "Explain the <b>register files</b>: types of registers, and the function of PC, SP, ACC, IR and PSW. Is the C <code>register</code> keyword always stored in a GPR?",
      k: ["general purpose|GPR", "special|SFR|SPR", "program counter|PC", "stack pointer|SP", "LIFO", "accumulator|ACC", "instruction register|IR", "PSW|status word", "flag"],
      answer: `
        <p><b>Two types:</b> General Purpose Registers (GPR) and Special Purpose / Special Function Registers (SPR / SFR).</p>
        <ul>
          <li><b>GPR:</b> data temporarily stored — e.g. ALU results until the CU stores them in data memory.</li>
          <li><b>PC:</b> holds the address of the next instruction.</li>
          <li><b>SP:</b> holds the address of the last data element added to the stack (top); stack is LIFO.</li>
          <li><b>ACC:</b> stores ALU results temporarily (unavailable nowadays).</li>
          <li><b>IR:</b> stores the instruction after it is fetched from memory.</li>
          <li><b>PSW:</b> set of flags, each a bit with a specific function — e.g. sign flag (0 = +ve, 1 = −ve) of the last ALU result. Note: instructions like JMP or INC may not use the ALU, so they may not affect flags.</li>
        </ul>
        <p><b>register keyword:</b> Not always. It asks to store the variable in a GPR (near the CPU for faster repeated access), but if no register is available the compiler stores it in memory.</p>`
    },
    {
      q: "Explain the <b>three buses</b> in a processor system and describe how the CPU writes the value <code>111</code> into memory location <code>3001</code>. Then state the three key characteristics of memory and why read time is less than write time.",
      k: ["address bus", "data bus", "control bus", "3001", "write", "capacity", "speed|access time", "organization", "clear"],
      answer: `
        <ul>
          <li><b>Address bus:</b> determines the location in memory to read from / write to.</li>
          <li><b>Data bus:</b> carries the contents read from or to be written into the location.</li>
          <li><b>Control bus:</b> manages information flow — read or write — and ensures it happens at the right time.</li>
        </ul>
        <p><b>Write example:</b> Address bus = 3001, Data bus = 111, Control bus = 1 (write) → the value 111 is stored in location 3001.</p>
        <p>A bus is a set of wires (e.g. 16 or 32); its size determines how much data is transferred at once (32-bit vs 64-bit PC).</p>
        <p><b>Memory key characteristics:</b> 1) <b>Capacity</b> — size, determined by the address lines. 2) <b>Speed / access time</b> — read or write. 3) <b>Organization</b> — e.g. four 4K chips connected to give 16K.</p>
        <p><b>Read vs write:</b> Read is just reading, while writing may have to clear the data in memory first and then write → write access time is bigger.</p>`
    },
    {
      q: "Compare <b>SRAM</b> and <b>DRAM</b> (construction, refresh, size, cost, performance, power). Explain the problem of the refresh circuit.",
      k: ["capacitor", "flip-flop|flipflop|transistor", "6", "refresh", "priority", "density", "cost", "faster", "power"],
      answer: `
        <p><b>DRAM:</b> based on capacitors (charge = 1, no charge = 0). Capacitors discharge over time (1 becomes 0) → needs a <b>refresh circuit (DRAM controller)</b> that periodically reads & writes back data. Both the CPU and the refresh circuit access memory, and the <b>refresh circuit has the highest priority</b> (otherwise the data is lost) → CPU is delayed → access time increases, speed decreases. Advantages: simple HW, low cost per bit, high density.</p>
        <p><b>SRAM:</b> based on transistors — each bit is a flip-flop of at least 6 transistors. No refresh needed → faster. Problem: high cost per bit, so ES use small SRAM.</p>
        <table>
          <tr><th>ES challenge</th><th>SRAM</th><th>DRAM</th></tr>
          <tr><td>Size</td><td>Low</td><td>High density</td></tr>
          <tr><td>Cost</td><td>High</td><td>Low</td></tr>
          <tr><td>Performance</td><td>Faster</td><td>Slower</td></tr>
          <tr><td>Power</td><td>Lower</td><td>Higher (refresh circuit + capacitors)</td></tr>
        </table>`
    },
    {
      q: "Explain how a <b>floating-gate MOSFET</b> stores a bit: describe its structure, the programming state, the erasing state, and why it is non-volatile.",
      k: ["control gate", "floating gate", "oxide|isolat", "high voltage", "drain", "electron|-ve", "logic 0|zero", "logic 1|one", "non-volatile|trapped"],
      answer: `
        <p><b>Structure:</b> P-region body, N+ source and drain, and two gates: the <b>control gate</b> (connected to external circuitry, applies voltage) and the <b>floating gate</b> (electrically isolated by oxide layers, stores charge, not connected to any circuit). It is called "floating" because it floats between two isolating materials.</p>
        <p><b>Programming state:</b> high voltage on the control gate creates an electric field; charges break through the first isolating region and reach the floating gate → it holds −ve charge (electrons) → <b>logic 0</b>.</p>
        <p><b>Non-volatile:</b> the electrons are trapped between the two isolating regions and remain even when power is disconnected.</p>
        <p><b>Erasing state:</b> high voltage is applied on the drain (+ve); the −ve charges in the floating gate break the isolator and are attracted to the drain (unlike poles attract) → floating gate has no electrons → <b>logic 1</b> (normal case).</p>
        <p>ROM is read-only to the processor; the code is written by a burner / flasher applying high voltage.</p>`
    },
    {
      q: "Compare the non-volatile and hybrid memory types: <b>Mask ROM, PROM, EPROM, EEPROM, Flash and NVRAM</b> (who programs it, how it is erased, access, endurance, cost).",
      k: ["mask", "factory", "fuse", "user", "ultraviolet|UV", "byte", "sector|block", "100,000|100000", "10,000|10000", "battery"],
      answer: `
        <table>
          <tr><th>Type</th><th>Key points</th></tr>
          <tr><td>Mask Programmable ROM</td><td>OTP, code burned by the <b>factory</b>, no way to fix bugs or delete the code, low cost — children games, BIOS chip.</td></tr>
          <tr><td>PROM</td><td>OTP, code installed by the <b>user</b>; group of fuses: burned = 0, not burned = 1.</td></tr>
          <tr><td>EPROM</td><td>Erasable & programmable many times (UV through a small window), keeps data ~10 years; disadvantage: radiation & noise can corrupt data.</td></tr>
          <tr><td>EEPROM (E²PROM)</td><td>Erased electrically, read/write, non-volatile, <b>byte access</b>, endurance <b>100,000</b> → high cost per bit, low density. Internal (bus) or external (communication protocols); MCUs may omit internal EEPROM to be cheaper.</td></tr>
          <tr><td>Flash</td><td>Erased electrically, read/write, non-volatile, <b>block (sector) access</b> 256 B – 16 KB → faster than EEPROM; endurance <b>10,000</b> → low cost, high density. Problem: erasing sector by sector, not byte by byte.</td></tr>
          <tr><td>NVRAM</td><td>SRAM + battery (or SRAM + EEPROM + small battery); read/write + non-volatile; faster than ROM; high cost per bit. On power loss important data moves from SRAM to EEPROM.</td></tr>
        </table>`
    },
    {
      q: "Explain <b>cache memory</b>: why it is needed, hit & miss, hit ratio, cache levels and cache coherence, and order the memory hierarchy by speed and size. Calculate the hit ratio if the CPU made <b>1,200</b> requests with <b>300</b> misses.",
      k: ["SRAM", "controller", "hit", "miss", "ratio", "75%|75", "L1|level 1", "L2|level 2", "coherence", "register"],
      answer: `
        <ul>
          <li>Cache = <b>SRAM + controller</b>, placed between the CPU and main memory; needed because the CPU is faster than RAM. No bus-set transfer is needed, so it is faster than RAM.</li>
          <li>When the CPU requests an address (e.g. 3001), the controller caches it and the next few addresses, since the CPU is expected to need them.</li>
          <li><b>Hit:</b> CPU finds the address in cache. <b>Miss:</b> not found → another set of addresses is cached.</li>
          <li><b>Hit ratio</b> = hits ÷ (hits + misses).</li>
          <li><b>Levels:</b> L1 inside each core (fastest), L2 outside the cores (slower than L1, faster than L3), L3 inside the MCU.</li>
          <li><b>Cache coherence:</b> caches of different cores may hold the same address; if core 1 edits a value, its cache controller must notify the controller of core 2's cache.</li>
        </ul>
        <p><b>Hierarchy (speed ↓, size ↑):</b> Register Files → Cache → Main memory (RAM) → Hard disk (secondary memory).</p>
        <p><b>Calculation:</b> hits = 1,200 − 300 = 900 → hit ratio = 900 ÷ 1,200 = <b>0.75 = 75%</b>.</p>`
    }
  ]
});
