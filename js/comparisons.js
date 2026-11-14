/* =========================================================
   Embedded Systems — Comprehensive Course Comparisons
   Lectures 1 – 10 Summary & Quick Reference
   ========================================================= */
window.COURSE_COMPARISONS = {
  title: "Course Comparisons & High-Yield Summary",
  subtitle: "Every core comparison and trade-off across Lectures 1 – 10 in concise, exam-focused tables.",
  categories: [
    "All",
    "Systems & Architecture",
    "Peripherals & Classification",
    "Design & Economics",
    "Processor & Execution",
    "Memory & Storage",
    "Cache & Hierarchy"
  ],
  items: [
    /* ---------------- 1. Systems & Architecture ---------------- */
    {
      id: "gp-vs-es",
      category: "Systems & Architecture",
      title: "General-Purpose Systems vs. Embedded (Specific-Purpose) Systems",
      summary: "General-purpose systems share one set of resources across many unpredictable user apps; embedded systems dedicate hardware, software, and mechanical parts to one predefined task.",
      examTip: "Exam rule: Microwave/washing machine = Embedded (dedicated hardware + firmware for one task). Laptop/PC = General-purpose (multitude of apps using identical resources).",
      headers: ["Criterion", "General-Purpose System (PC / Laptop)", "Embedded System (Microwave / Toy)"],
      rows: [
        ["Core Purpose", "Multi-purpose; runs diverse user applications", "Single dedicated function (specific-purpose)"],
        ["Resource Model", "Many apps share the same CPU, RAM, & OS", "Hardware & firmware tailored exclusively for the task"],
        ["Operating System", "Heavy desktop OS (Windows, macOS, Linux)", "No OS (bare-metal) or lightweight RTOS"],
        ["Design Focus", "Maximum raw performance and flexibility", "Strict constraints: cost, power, physical size, real-time deadlines"],
        ["User Modifications", "User installs, updates, and deletes software", "Firmware is fixed or updated only via manufacturer flash"]
      ]
    },
    {
      id: "sb-vs-soc",
      category: "Systems & Architecture",
      title: "System Board (SB) vs. System on Chip (SoC)",
      summary: "System Board integrates multiple discrete chips on a PCB (flexible for prototyping); SoC integrates CPU, memory, and peripherals onto a single silicon die (compact, cheap for mass production).",
      examTip: "Prototyping / low volume (10 units) → System Board (configurable). Mass production (1,000,000 units) → SoC (minimal size, lowest unit cost, lowest power).",
      headers: ["Criterion", "System Board (SB)", "System on Chip (SoC)"],
      rows: [
        ["Physical Integration", "Multiple ICs wired on a Printed Circuit Board (PCB)", "All core computing units fabricated on a single silicon die"],
        ["Configurability", "Highly configurable & editable during design", "Fixed silicon architecture; cannot rewire components"],
        ["Size & Weight", "Larger PCB footprint, higher weight", "Extremely tiny, minimal footprint"],
        ["Power Consumption", "Higher (signals drive external PCB traces)", "Significantly lower (internal on-chip connections)"],
        ["Cost Structure", "Lower NRE (ready chips); higher per-unit production cost", "High NRE (silicon mask design); very low unit cost at volume"],
        ["Best Use Case", "Initial prototypes, lab development, low-volume runs", "High-volume mass production (smartphones, IoT, smart toys)"]
      ]
    },
    {
      id: "mp-vs-mc",
      category: "Systems & Architecture",
      title: "Microprocessor (µP) vs. Microcontroller (µC)",
      summary: "A microprocessor is a pure CPU requiring external memory and peripherals via buses; a microcontroller integrates CPU, RAM, ROM, timers, and I/O pins all inside one chip.",
      examTip: "Embedded systems prefer microcontrollers because on-chip integration reduces cost, PCB size, and power consumption.",
      headers: ["Criterion", "Microprocessor (µP — e.g. Intel Core, ARM Cortex-A)", "Microcontroller (µC — e.g. ATmega328P, PIC, STM32)"],
      rows: [
        ["Chip Contents", "CPU only (ALU, CU, Registers); no on-chip RAM/ROM", "CPU + RAM + Flash/ROM + I/O ports + Timers + ADC on one chip"],
        ["External Bus Dependency", "Heavy; all instructions & data travel on external PCB buses", "Minimal; most transfers happen over high-speed internal buses"],
        ["Circuit Complexity", "High external PCB complexity, glue logic, and power stages", "Minimal external circuitry (often needs only power + crystal)"],
        ["Speed & Computational Power", "High clock frequencies (GHz range); complex superscalar pipelines", "Moderate clock frequencies (MHz range, 8–100 MHz typical)"],
        ["Cost & Size", "Expensive chip + expensive supporting board", "Very inexpensive ($1–$5), compact single-chip solution"],
        ["Target Domain", "Laptops, servers, high-end multimedia processing", "Embedded control, sensors, home appliances, automotive ECUs"]
      ]
    },
    {
      id: "harvard-vs-vonneumann",
      category: "Systems & Architecture",
      title: "Harvard Architecture vs. Von-Neumann Architecture",
      summary: "Von-Neumann uses one shared bus set and memory space for code and data (bottleneck); Harvard uses separate memory spaces and buses allowing simultaneous instruction fetch and data access.",
      examTip: "RISC processors predominantly employ Harvard architecture to eliminate the Von-Neumann bottleneck and achieve single-cycle execution.",
      headers: ["Criterion", "Von-Neumann Architecture", "Harvard Architecture"],
      rows: [
        ["Buses & Paths", "Single shared address and data bus for code and data", "Separate address & data buses for instruction memory and data memory"],
        ["Memory Space", "Unified memory (instructions and data share addresses)", "Physically separate instruction memory and data memory"],
        ["Execution Speed", "Slower: CPU cannot fetch next instruction while reading data (bottleneck)", "Faster: can fetch next instruction while accessing data simultaneously"],
        ["Hardware Complexity", "Simpler motherboard and silicon layout (fewer pins)", "More complex silicon routing and higher pin count"],
        ["Typical Processor", "Standard desktop CPUs (x86/CISC)", "Digital Signal Processors (DSPs), PIC, AVR, ARM Cortex-M (RISC)"]
      ]
    },
    {
      id: "risc-vs-cisc",
      category: "Systems & Architecture",
      title: "RISC vs. CISC",
      summary: "RISC uses fewer, simple instructions with hard-wired decoding for fast execution but needs a strong compiler; CISC uses many complex instructions with memory-mapped decoding to simplify code.",
      examTip: "Why Embedded Systems use RISC: small, highly optimized instruction set, hard-wired fast decoding, lower silicon hardware cost, lower power, and Harvard support.",
      headers: ["Criterion", "RISC (Reduced Instruction Set)", "CISC (Complex Instruction Set)"],
      rows: [
        ["Number of Instructions", "Fewer (approx. 30 – 40 simple instructions)", "Many (hundreds of variable-length complex instructions)"],
        ["Instruction Decoder", "Hard-wired (logic gates) → extremely fast decoding", "Memory-mapped (microcode table search in ROM) → slower"],
        ["Multiplication (a × b)", "Not directly in hardware; strong compiler generates repeated additions", "Single hardware instruction executes load, multiply, and store"],
        ["Compiler Burden", "High (complex software/compiler needed to decompose operations)", "Low (simple compiler; hardware does heavy lifting)"],
        ["Silicon / Hardware Cost", "Low (fewer gates, small ALU footprint)", "High (larger ALU, extensive microcode storage)"],
        ["Hardware Power", "Lower total silicon power consumption", "Higher power draw due to complex decoding and large ALU"],
        ["Bus Architecture", "Strictly Harvard architecture", "Can be Von-Neumann or Harvard"],
        ["Execution Philosophy", "Single-cycle execution of uniform-length instructions", "Multi-cycle execution of variable-length instructions"]
      ]
    },

    /* ---------------- 2. Peripherals & Classification ---------------- */
    {
      id: "sensor-vs-actuator",
      category: "Peripherals & Classification",
      title: "Sensors vs. Actuators",
      summary: "Sensors are input transducers converting real-world physical phenomena into electrical signals; actuators are output transducers converting electrical signals into physical physical actions.",
      examTip: "Always check port direction: Sensor = Input port to CPU. Actuator = Output port from CPU. (e.g. Thermistor = sensor, Fan motor / Heater = actuator).",
      headers: ["Criterion", "Sensor (Input Transducer)", "Actuator (Output Transducer)"],
      rows: [
        ["Direction of Energy", "Physical phenomenon → Electrical signal", "Electrical signal → Physical motion / action"],
        ["System Port", "Connected to Input Port / ADC", "Connected to Output Port / DAC / Drivers / Relays"],
        ["Role in System", "Monitors environmental states (temperature, light, pressure)", "Executes commands (moves a valve, starts a motor, heats)"],
        ["Common Examples", "Thermocouple, LDR, accelerometer, soil moisture probe, PIR", "DC motor, servo, solenoid valve, buzzer, heating element, relay"]
      ]
    },
    {
      id: "monitoring-vs-control",
      category: "Peripherals & Classification",
      title: "Monitoring Systems vs. Control Systems",
      summary: "Monitoring systems observe and display states using sensors only; control systems observe via sensors AND actively adjust the system using actuators.",
      examTip: "ECG machine or digital multimeter = Monitoring (no actuators to alter the patient/circuit). Air conditioner or smart irrigation = Control (sensors + actuators).",
      headers: ["Criterion", "Monitoring System", "Control System"],
      rows: [
        ["Key Hardware Components", "Sensors + Processing Unit + Display/Storage", "Sensors + Processing Unit + Actuators"],
        ["Feedback Loop", "Open-loop observation (measures without intervention)", "Closed-loop feedback (measures, compares, intervenes)"],
        ["Action on Environment", "Cannot alter or impose changes on the monitored variable", "Directly drives actuators to keep variables within set thresholds"],
        ["Typical Examples", "ECG machine, digital voltmeter, weather station, logic analyzer", "AC thermostat, automotive cruise control, smart irrigation system"]
      ]
    },
    {
      id: "event-vs-time-triggered",
      category: "Peripherals & Classification",
      title: "Event-Triggered vs. Time-Triggered Systems",
      summary: "Event-triggered systems react immediately when an external event occurs (interrupt-driven); time-triggered systems sample and execute tasks at deterministic periodic clock ticks.",
      examTip: "Smart irrigation opening when soil is dry = Event-triggered. Smart irrigation watering every day at 6:00 AM = Time-triggered.",
      headers: ["Criterion", "Event-Triggered System", "Time-Triggered System"],
      rows: [
        ["Activation Mechanism", "Asynchronous external signal / sensor interrupt", "Synchronous periodic clock interrupt / hardware timer"],
        ["Responsiveness", "Instantaneous response upon stimulus arrival", "Response delayed until next scheduled sampling window"],
        ["Predictability", "Harder to predict worst-case timing under event storms", "Extremely deterministic, repeatable, and easily verified"],
        ["Ideal Use Cases", "Burglary alarm, airbag deployment, push-button interfaces", "Flight control loops, periodic industrial telemetry, digital filtering"]
      ]
    },
    {
      id: "soft-vs-hard-realtime",
      category: "Peripherals & Classification",
      title: "Soft Real-Time vs. Hard Real-Time Systems",
      summary: "In hard real-time systems, missing a deadline is total system failure with catastrophic results; in soft real-time systems, missing a deadline merely degrades service quality.",
      examTip: "ABS brakes, pacemaker, fly-by-wire = Hard real-time. Video player dropping a frame, network audio streaming = Soft real-time.",
      headers: ["Criterion", "Soft Real-Time System", "Hard Real-Time System"],
      rows: [
        ["Deadline Consequence", "Quality of Service (QoS) drops; output still somewhat useful", "Catastrophic failure; fatal hazard or severe financial loss"],
        ["Timing Tolerance", "Statistical guarantees acceptable (average response time)", "Strict deterministic guarantees; zero tolerance for missed deadlines"],
        ["Failure Definition", "Tolerable delay / degraded experience", "Complete operational crash / mission failure"],
        ["Typical Examples", "Media streaming, digital camera UI, gaming consoles", "Automotive airbag, pacemaker, anti-lock braking system (ABS), avionics"]
      ]
    },
    {
      id: "es-scales",
      category: "Peripherals & Classification",
      title: "Classification by Scale: Small vs. Medium vs. Large Scale",
      summary: "Embedded systems scale from simple 8/16-bit bare-metal designs to high-performance multicore/DSP systems running full real-time operating systems.",
      examTip: "Electronic toy = Small-scale. Industrial vending machine with OS = Medium-scale. Avionics / radar processing = Large-scale.",
      headers: ["Criterion", "Small-Scale Embedded", "Medium-Scale Embedded", "Large-Scale Embedded"],
      rows: [
        ["Processor Architecture", "8-bit or 16-bit microcontroller", "16-bit or 32-bit microcontroller / DSP", "32-bit, 64-bit, multicore, or FPGA/ASIC"],
        ["Operating System", "Usually bare-metal (no OS / simple loop)", "RTOS or embedded OS with task scheduler", "Complex hard RTOS or tailored embedded Linux"],
        ["Hardware & Firmware", "Very simple, limited code memory (<64 KB)", "Moderate complexity, integrated communications", "Highly complex hardware, large memory, distributed nodes"],
        ["Performance & Cost", "Low performance, ultra-low cost ($)", "Balanced performance, medium cost ($$)", "Mission-critical performance, high cost ($$$)"],
        ["Typical Examples", "Electronic toy, TV remote control, digital clock", "Washing machine controller, industrial vending machine", "Flight avionics, MRI scanners, autonomous driving radar"]
      ]
    },

    /* ---------------- 3. Design & Economics ---------------- */
    {
      id: "req-vs-spec",
      category: "Design & Economics",
      title: "Requirements vs. Specifications",
      summary: "Requirements express the user/customer expectations informally; specifications translate requirements into precise, unambiguous, verifiable engineering contracts.",
      examTip: "The specification is the legal and technical contract between the customer and the architects. It must be verifiable against tests.",
      headers: ["Criterion", "Requirements", "Specifications"],
      rows: [
        ["Originator", "Customer, client, marketing team, or end user", "System architects and design engineers"],
        ["Format & Tone", "High-level, informal, user-friendly language", "Precise, mathematical, technical, and verifiable language"],
        ["Role in Process", "First step of top-down embedded design flow", "Second step; refines requirements into an engineering blueprint"],
        ["Binding Contract?", "Informal description of desired functionality", "The official verifiable contract between customer and developers"],
        ["Example Statement", "'The moving map should feel fast when driving'", "'Screen updates within 0.25 seconds upon movement at 400×600 resolution'"]
      ]
    },
    {
      id: "functional-vs-nonfunctional",
      category: "Design & Economics",
      title: "Functional vs. Non-Functional Requirements",
      summary: "Functional requirements describe what the system does (inputs, outputs, features); non-functional requirements describe performance constraints (speed, cost, power, size).",
      examTip: "4 Core Non-Functional constraints in Embedded: 1) Performance/Deadlines, 2) Cost (NRE + unit cost), 3) Physical size & weight, 4) Power consumption.",
      headers: ["Criterion", "Functional Requirements", "Non-Functional Requirements (Challenges)"],
      rows: [
        ["Core Question", "'What should the system do?'", "'How well and under what constraints must it operate?'"],
        ["Scope", "Inputs, outputs, user interface, operational logic, algorithms", "Performance (deadlines), manufacturing cost, power/battery, dimensions/weight"],
        ["Verification", "Tested via functional input/output test vectors", "Measured via benchmarks, power analyzers, calipers, budget audits"],
        ["Smart Door Lock Example", "Read keypad digits, drive motor to unlock bolt, sound buzzer", "Unlock within 1.0s, manufacturing cost ≤ $50, 4×AA batteries for 1 year"]
      ]
    },
    {
      id: "nre-vs-unit-cost",
      category: "Design & Economics",
      title: "NRE (Non-Recurring Engineering) vs. Unit Manufacturing Cost",
      summary: "NRE is paid once during R&D regardless of quantity produced; manufacturing cost is paid for every single unit. Effective cost per unit decreases as volume increases.",
      examTip: "Effective Cost per Unit = (NRE / Volume) + Unit_Manufacturing_Cost. Break-even volume: NRE_A + (N × Unit_A) = NRE_B + (N × Unit_B).",
      headers: ["Criterion", "NRE Cost (Non-Recurring Engineering)", "Unit Manufacturing Cost (Recurring)"],
      rows: [
        ["Nature of Cost", "One-time upfront investment (R&D, software, tooling, prototyping)", "Recurring expense incurred for every single unit manufactured"],
        ["Dependence on Volume", "Fixed constant total; does NOT increase when more units are made", "Scales linearly with the total number of units produced"],
        ["Cost per Unit Impact", "NRE ÷ Volume → Drops dramatically as production volume rises", "Remains constant per unit (unless volume discounts apply)"],
        ["Volume Strategy", "Low volume (100s): choose low NRE even if unit cost is higher", "High volume (millions): spend high NRE upfront to save $1 on unit cost"]
      ]
    },

    /* ---------------- 4. Processor & Execution ---------------- */
    {
      id: "gpr-vs-sfr",
      category: "Processor & Execution",
      title: "General Purpose Registers (GPR) vs. Special Function Registers (SFR/SPR)",
      summary: "GPRs temporarily hold arbitrary application variables and intermediate ALU outputs; SFRs control and reflect the internal hardware states of the CPU and peripherals.",
      examTip: "PC, SP, IR, ACC, PSW are Special Function Registers. Declaring `register int x;` requests a GPR, but falls back to RAM if registers are full.",
      headers: ["Criterion", "General Purpose Registers (GPR)", "Special Function / Purpose Registers (SFR / SPR)"],
      rows: [
        ["Function", "Temporary scratchpad storage for program data & ALU results", "Controls processor operations and reports hardware state flags"],
        ["Dedicated Meaning", "No fixed hardware function (programmer assigns freely)", "Each register/bit has a strict hardware-wired dedicated meaning"],
        ["Key Examples", "R0, R1, ..., R15, Accumulator (in older architectures)", "PC (Program Counter), SP (Stack Pointer), IR (Instruction Reg), PSW"],
        ["Access in Assembly", "Directly used in arithmetic instructions (e.g. `ADD R1, R2`)", "Manipulated by hardware or control instructions (`JMP`, `CALL`)"],
        ["C Language Link", "Hinted by `register` keyword (stored in GPR if free, else RAM)", "Mapped to hardware addresses for peripheral control"]
      ]
    },
    {
      id: "cpu-subsystems",
      category: "Processor & Execution",
      title: "Processor Subsystems: ALU vs. CU vs. Register Files",
      summary: "The Control Unit directs instruction flow and decoding; the ALU performs actual math and logic; Register Files provide ultra-fast internal storage.",
      examTip: "The CU fetches instructions from external memory into IR via buses because the CPU cannot operate comfortably across external buses continuously.",
      headers: ["Subsystem", "Primary Responsibility", "Key Internal Components", "Interaction in Instruction Cycle"],
      rows: [
        ["Control Unit (CU)", "Supervises and coordinates all operations; fetches and decodes instructions", "Instruction Decoder (ID), Timing & Control Logic", "Fetches instruction into IR, decodes op-code, pulses ALU and buses"],
        ["Arithmetic Logic Unit (ALU)", "Executes mathematical calculations and logical evaluations", "Adders, multipliers, bitwise logic gates, comparator", "Receives decoded operands, performs operation, generates status flags"],
        ["Register Files (RF)", "Provides fastest on-chip temporary storage directly beside ALU/CU", "Program Counter, Stack Pointer, Instruction Register, PSW, GPRs", "Supplies next address (PC), stores fetched op (IR), holds ALU result"]
      ]
    },
    {
      id: "read-vs-write-time",
      category: "Processor & Execution",
      title: "Memory Read Access Time vs. Write Access Time",
      summary: "Memory read time is strictly less than write time because writing requires clearing/erasing existing charge before driving and settling new voltage levels.",
      examTip: "Why is Read Access Time < Write Access Time? Reading only senses charge without state modification. Writing often requires a clear/erase pre-cycle + charge stabilization.",
      headers: ["Criterion", "Read Access Time", "Write Access Time"],
      rows: [
        ["Physical Process", "Sense amplifiers detect existing charge/voltage states", "Old charge must be cleared/discharged, then new voltage is applied"],
        ["Destructive?", "Non-destructive in static memories", "Must actively overwrite previous memory bit states"],
        ["Speed Comparison", "Faster (shorter access time)", "Slower (longer access time due to erase/charge setup time)"],
        ["Bus Action", "Address bus + Control bus (Read) → Data bus drives CPU", "Address bus + Data bus + Control bus (Write) → Memory latches data"]
      ]
    },

    /* ---------------- 5. Memory & Storage ---------------- */
    {
      id: "sram-vs-dram",
      category: "Memory & Storage",
      title: "SRAM vs. DRAM",
      summary: "SRAM uses transistor flip-flops (fast, no refresh, low power, expensive); DRAM uses capacitors (dense, cheap, slow, requires periodic refresh with top priority).",
      examTip: "The DRAM refresh circuit has higher priority than the CPU to prevent charge loss, which stalls the CPU and increases DRAM access latency.",
      headers: ["Criterion", "Static RAM (SRAM)", "Dynamic RAM (DRAM)"],
      rows: [
        ["Storage Mechanism", "Flip-flop circuit composed of 6 transistors (6T)", "Tiny capacitor paired with 1 access transistor (1T-1C)"],
        ["Refresh Required?", "NO refresh required as long as power is applied", "YES; capacitors leak charge (1 becomes 0), needing periodic refresh"],
        ["Speed & Latency", "Very fast access time (~1 – 10 ns)", "Slower access time (~50 – 80 ns)"],
        ["Refresh Priority Conflict", "None (CPU accesses without waiting)", "Refresh controller has higher priority than CPU → stalls CPU accesses"],
        ["Density & Silicon Area", "Low density (6 transistors take large silicon footprint)", "High density (1 capacitor per bit enables massive gigabit chips)"],
        ["Cost per Bit", "High cost per bit (used in small amounts)", "Very low cost per bit (used for bulk system RAM)"],
        ["Power Consumption", "Lower power (consumes power mainly when switching)", "Higher power (continuous recharge cycles draw steady current)"],
        ["Embedded Systems Role", "CPU L1/L2 Cache, internal fast microcontroller RAM", "External main memory in complex high-end 32/64-bit boards"]
      ]
    },
    {
      id: "rom-types-matrix",
      category: "Memory & Storage",
      title: "Non-Volatile Memory Comparison Matrix (Mask ROM to NVRAM)",
      summary: "Comparison of ROM types across programming mechanism, erasure method, access granularity, endurance cycles, and relative cost.",
      examTip: "Flash erases in blocks/sectors with 10k endurance (low cost, high density). EEPROM erases byte-by-byte with 100k endurance (high cost, lower density).",
      headers: ["Memory Type", "Programmed By", "Erasure Method", "Access Granularity", "Write Endurance", "Key Pros & Cons"],
      rows: [
        ["Mask ROM", "Factory during IC fabrication", "Impossible (OTP)", "Random byte read", "Read-only (0 writes)", "Lowest unit cost at millions; zero ability to fix software bugs"],
        ["PROM", "User/developer with burner", "Impossible (blown fuses, OTP)", "Random byte read", "One-time write only", "Cheap custom programming; irreversible if bug occurs"],
        ["EPROM", "User with high-voltage burner", "Ultraviolet (UV) light via quartz window", "Byte read / chip erase", "~1,000 cycles (lasts ~10 yrs)", "Reusable, but must be removed from PCB to erase in UV chamber"],
        ["EEPROM", "Electrically inside circuit", "Electrically byte-by-byte", "Byte read & write", "~100,000 cycles", "Fine byte control; high cost per bit and lower density"],
        ["Flash Memory", "Electrically inside circuit", "Electrically block / sector", "Byte read / Sector erase (256B–16KB)", "~10,000 cycles", "Low cost per bit, high density, fast block read; cannot erase single bytes"],
        ["NVRAM", "Normal CPU bus write", "Normal RAM overwrite", "Byte read & write", "Unlimited SRAM writes", "SRAM speed + battery/EEPROM backup; highest cost per bit"]
      ]
    },
    {
      id: "floating-gate-0-vs-1",
      category: "Memory & Storage",
      title: "Floating-Gate MOSFET: Programmed State (0) vs. Erased State (1)",
      summary: "In floating-gate memory cells (Flash/EEPROM), trapped electrons in the isolated floating gate represent logic 0; an empty floating gate represents erased logic 1.",
      examTip: "Erased state = No electrons in floating gate = Logic 1. Programmed state = Electrons injected into floating gate = Logic 0.",
      headers: ["Criterion", "Programmed State (Logic 0)", "Erased State (Logic 1 — Normal Default)"],
      rows: [
        ["Charge in Floating Gate", "Trapped negative charges (electrons)", "No trapped electrons (neutral / depleted)"],
        ["How State is Achieved", "High voltage on Control Gate pulls electrons through oxide into floating gate", "High positive voltage on Drain pulls electrons out of floating gate"],
        ["Physical Mechanism", "Fowler-Nordheim tunneling or hot-electron injection", "Electron extraction across thin oxide layer"],
        ["Non-Volatility Principle", "Electrons remain physically trapped between oxide insulators without power", "Remains in baseline uncharged conductive state without power"],
        ["CPU Sensing", "Higher threshold voltage ($V_{th}$) shifts transistor conduction curve", "Lower threshold voltage allows normal channel conduction"]
      ]
    },

    /* ---------------- 6. Cache & Hierarchy ---------------- */
    {
      id: "cache-hit-vs-miss",
      category: "Cache & Hierarchy",
      title: "Cache Hit vs. Cache Miss",
      summary: "A cache hit occurs when requested data is already present in ultra-fast SRAM cache; a cache miss forces the controller to retrieve a contiguous block from slow DRAM.",
      examTip: "Hit Ratio = Hits / (Hits + Misses). Programs with high sequential access (spatial locality) achieve higher hit ratios than programs jumping randomly.",
      headers: ["Criterion", "Cache Hit", "Cache Miss"],
      rows: [
        ["Definition", "CPU requests a memory address and finds it in cache SRAM", "CPU requests a memory address that is NOT currently in cache"],
        ["Penalty / Latency", "Zero bus penalty; data served in 1 clock cycle (~ns)", "Miss penalty: CPU stalled while block is fetched from DRAM"],
        ["Controller Action", "Immediately routes word to CPU register", "Fetches block (target address + next few words) into cache"],
        ["Hit Ratio Impact", "Increases hit ratio ($Hits / Total\\ Requests$)", "Decreases hit ratio; increases Average Memory Access Time (AMAT)"],
        ["Program Behavior Cause", "Sequential code execution, loops, repeated local variables", "Long branching jumps, large random lookups, cold starts"]
      ]
    },
    {
      id: "cache-levels",
      category: "Cache & Hierarchy",
      title: "Cache Levels: L1 vs. L2 vs. L3 & Cache Coherence",
      summary: "L1 is smallest and fastest inside each CPU core; L2 and L3 provide larger buffers further out. Cache coherence ensures multi-core caches don't hold conflicting values.",
      examTip: "Cache Coherence: If Core 1 modifies a variable in its private L1 cache, its controller must notify Core 2's cache to invalidate or update the old copy.",
      headers: ["Level", "Location", "Speed", "Typical Size", "Shared vs. Private"],
      rows: [
        ["L1 Cache", "Directly inside each CPU core silicon", "Fastest (~1 – 2 clock cycles)", "16 KB – 64 KB", "Private to each core (often split: L1 Instruction + L1 Data)"],
        ["L2 Cache", "Outside core logic or shared between core pair", "Intermediate (~5 – 10 cycles)", "256 KB – 1 MB", "Can be private per core or shared between twin cores"],
        ["L3 Cache", "On MCU/processor die, shared by all cores", "Slower than L1/L2 (~20 – 40 cycles)", "2 MB – 32 MB", "Shared across all cores on the microcontroller/chip"]
      ]
    },
    {
      id: "memory-hierarchy",
      category: "Cache & Hierarchy",
      title: "The Embedded Memory Hierarchy (Speed vs. Size vs. Cost)",
      summary: "Memory is organized into a pyramid: internal registers are fastest and smallest; cache bridges the speed gap to DRAM; secondary storage is slowest and largest.",
      examTip: "Why are Registers faster than Cache, and Cache faster than RAM? Registers live inside the CPU pipeline with no bus delay. Cache is SRAM directly beside the core. RAM requires traversing external system buses.",
      headers: ["Hierarchy Level", "Technology", "Relative Speed", "Relative Capacity", "Relative Cost per Bit"],
      rows: [
        ["1. CPU Registers (Top)", "Flip-flops inside CPU core", "Fastest (< 1 ns)", "Smallest (bytes to ~few hundred bytes)", "Highest (consumes critical core silicon)"],
        ["2. Cache Memory", "High-speed SRAM + controller", "Very Fast (1 – 5 ns)", "Small (kilobytes to few megabytes)", "High cost per bit"],
        ["3. Main Memory (RAM)", "DRAM / SDRAM", "Moderate (50 – 80 ns)", "Medium (megabytes to gigabytes)", "Low cost per bit"],
        ["4. Flash / Secondary Storage", "NAND Flash / EEPROM / HDD", "Slowest (µs to ms)", "Largest (gigabytes to terabytes)", "Lowest cost per bit"]
      ]
    }
  ]
};
