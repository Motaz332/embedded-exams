/* =========================================================
   EXAM 2 — Embedded Systems (Lectures 1 – 10)
   Understanding + remembering: scenario / application questions
   50 MCQ · 20 True/False · Essay
   q = question, o = options, a = index of correct option, e = explanation
   ========================================================= */
window.EXAMS = window.EXAMS || [];
window.EXAMS.push({
  id: "exam2",
  title: "Exam 2",
  nav: "Exam Two",
  subtitle: "Embedded Systems — Understanding & application exam: scenarios, reasoning and problem solving (Lectures 1 – 10)",

  /* ===================== MCQ (50) ===================== */
  mcq: [
    {
      q: "A digital camera contains a processor, memory and a display. What makes it an <b>embedded system</b> rather than a general-purpose computer?",
      o: [
        "It is designed to perform one specific function using dedicated hardware and firmware",
        "It contains a processor, memory and I/O",
        "It can install and run many different applications",
        "It is connected to the internet"
      ], a: 0,
      e: "Having a processor, memory and I/O only makes it a computing system. What makes it embedded is that it is designed for a specific job (taking photos)."
    },
    {
      q: "A student says: “My laptop is an embedded system because it has a processor, memory and I/O.” Why is this statement wrong?",
      o: [
        "Processor, memory and I/O define any computing system; a laptop is general-purpose, running many applications on the same resources",
        "Because a laptop has no processor",
        "Because embedded systems never contain memory",
        "Because a laptop has no I/O devices"
      ], a: 0,
      e: "Every computing system has processor + memory + I/O. The laptop is general-purpose (many apps sharing the same CPU/RAM), while an ES is specific-purpose."
    },
    {
      q: "In a refrigerator viewed as an embedded system, the compressor motor, the door and the shelves belong to which component?",
      o: ["Mechanical components", "Software", "Firmware", "Electronic circuitry (hardware)"], a: 0,
      e: "Like the washing machine example: the physical internals (motor, chassis, etc.) are the mechanical components."
    },
    {
      q: "A smoke detector senses smoke and then sounds a loud siren. In this system, the siren is:",
      o: ["An actuator — it converts electrical signals into a physical event (sound)", "A sensor — it converts sound into electrical signals", "The processor", "The memory"], a: 0,
      e: "The smoke sensor converts a physical event into an electrical signal (input); the siren takes the system output and acts on the environment → actuator."
    },
    {
      q: "A game console needs to render 3D scenes smoothly. Which processor will the CPU hand these operations to, and why?",
      o: [
        "The GPU, because it understands graphics-related instructions and assists the primary processor",
        "The DSP, because it is the master processor",
        "The ALU, because it is a secondary processor",
        "No other unit — the CPU must do everything alone"
      ], a: 0,
      e: "When the primary MP wants to do graphics operations, it passes them to the GPU (secondary processor)."
    },
    {
      q: "A smart speaker must perform heavy Fourier-transform calculations on audio while the CPU handles the rest of the system. The best design choice is:",
      o: [
        "Add a DSP as a secondary processor to decrease the load on the CPU",
        "Add a second CPU as another primary processor",
        "Add more ROM to the system",
        "Replace the ALU with a GPU"
      ], a: 0,
      e: "DSP deals with complex computations like the Fourier transform, decreasing the load on the primary processor. A system has only one CPU."
    },
    {
      q: "A cheap toy plays a sound when a button is pressed. It has no OS and nothing in it is time-critical. It is best classified as:",
      o: ["Small-scale embedded system", "Medium-scale embedded system", "Large-scale embedded system", "Mission-critical system"], a: 0,
      e: "Small-scale: simple application needs, performance not time-critical, low performance & low cost (electronic toy)."
    },
    {
      q: "A home weather station records the temperature every hour and stores it so the user can see graphs later. Its main purpose is:",
      o: ["Data collection / storage / representation", "Control", "Data communication", "Application-specific user interface"], a: 0,
      e: "It acquires data from the external world and stores it for analysis and meaningful representation (graphs)."
    },
    {
      q: "A smart thermostat reads the room temperature and switches a heater ON/OFF to keep the room at 22 °C. Its purpose is:",
      o: [
        "Control — it has a sensor (input) and an actuator (output) to keep the variable in a specified range",
        "Monitoring — it only displays the temperature",
        "Data communication",
        "Data (signal) processing"
      ], a: 0,
      e: "Control systems impose control over variables based on input changes and contain both sensors and actuators."
    },
    {
      q: "A hearing aid removes background noise from speech in real time. Which purpose of embedded systems does this mainly represent?",
      o: ["Data (signal) processing", "Monitoring", "Data collection / storage", "Data communication"], a: 0,
      e: "Signal-processing systems (speech coding, audio codecs) are computationally intensive and employ DSPs."
    },
    {
      q: "An ATM has a special keypad and screen designed only for banking customers. Which purpose does this feature represent?",
      o: ["Application-specific user interface", "Monitoring", "Control", "Data (signal) processing"], a: 0,
      e: "Application-specific UI (rather than a general standard UI) aimed at a specific target group of users."
    },
    {
      q: "A video set-top box occasionally drops one frame and the viewer barely notices. Regarding deterministic behavior, this is a:",
      o: ["Soft real-time system", "Hard real-time system", "Time-triggered system only", "Non-embedded system"], a: 0,
      e: "In soft real-time systems missing a deadline is not critical and can be tolerated to a certain degree."
    },
    {
      q: "A simple traffic light changes its color every fixed 30 seconds regardless of the number of cars. It is:",
      o: ["Time-triggered — activities follow a statically computed schedule", "Event-triggered — activities depend on events", "Hard real-time", "Soft real-time"], a: 0,
      e: "Fixed, pre-computed time slots → time-triggered and predictable."
    },
    {
      q: "An elevator only starts moving when someone presses a call button. Based on triggering, it is:",
      o: ["Event-triggered", "Time-triggered", "Fourth generation", "Small-scale"], a: 0,
      e: "Activities are dynamic and depend on the occurrence of events (button presses)."
    },
    {
      q: "A car's airbag controller must inflate the airbag within milliseconds of a crash; being late could cost lives. This is best described as:",
      o: ["A hard real-time system", "A soft real-time system", "A system with no deadline", "A data-communication system"], a: 0,
      e: "Missing the deadline has catastrophic consequences (loss of life) → hard real-time."
    },
    {
      q: "During the prototype phase, engineers want to try different memory chips and change connections easily. Which approach should they use?",
      o: ["System Board (SB) — it is configurable during design", "System on Chip (SoC) — it is configurable", "Mask ROM", "A single IC with no external pins"], a: 0,
      e: "SB can be edited during the design phase; SoC is not configurable."
    },
    {
      q: "A final mass-produced wearable must be as small, cheap and power-efficient as possible without losing performance. The engineers should choose:",
      o: ["System on Chip (SoC)", "System Board (SB) on a breadboard", "Vacuum-tube based processor", "Separate chips connected with long wires"], a: 0,
      e: "SoC: smaller, less expensive, less power, same performance as SB."
    },
    {
      q: "Why would it be WRONG to classify a modern smartphone as a first-generation embedded system?",
      o: [
        "Smartphones are built around SoCs and multicore processors, which define the fourth generation",
        "Smartphones use 4-bit microcontrollers",
        "Smartphones have no processor",
        "First-generation systems were built around SoCs"
      ], a: 0,
      e: "1st gen = 8-bit MP / 4-bit MCU (telephone keypads); 4th gen = SoC, reconfigurable & multicore processors (smart phones)."
    },
    {
      q: "A designer needs a device that stores its own program internally, needs few extra chips, and must save battery. Which device fits best?",
      o: ["Microcontroller", "Microprocessor with external memory", "Vacuum tube", "Hard disk"], a: 0,
      e: "A microcontroller is independent (memory & I/O on chip), executes stored instructions and includes many power-saving features."
    },
    {
      q: "The customer requires: “The device must show current latitude and longitude, and update the screen within 0.25 s after movement.” How are these two requirements classified?",
      o: [
        "The first is functional; the second is a non-functional (performance) requirement",
        "Both are functional requirements",
        "Both are non-functional requirements",
        "The first is non-functional; the second is functional"
      ], a: 0,
      e: "Showing lat/long describes what the system does (function). Updating within 0.25 s is a performance constraint (non-functional)."
    },
    {
      q: "One product will sell for $10 and another for $100. What does this tell the designer?",
      o: [
        "Cost has a substantial influence on architecture — the two will likely have very different internal structures",
        "Both products must use the same components",
        "Cost does not affect the design",
        "The $10 product must have more features"
      ], a: 0,
      e: "Manufacturing cost (mainly hardware components) strongly shapes the architecture."
    },
    {
      q: "A customer for a fitness tracker cannot say how many milliwatts it may use. How should the power requirement be captured?",
      o: [
        "In terms of battery life, e.g. “must run one week on one charge”",
        "Leave it out of the requirements",
        "Always assume it will be plugged into the wall",
        "Ask the customer to calculate the exact wattage"
      ], a: 0,
      e: "Power can be specified in terms of battery life; the customer is unlikely to describe the allowable wattage."
    },
    {
      q: "Which decision increases the NRE cost but NOT the manufacturing cost per unit?",
      o: [
        "Hiring extra firmware engineers to redesign the software",
        "Using a more expensive microcontroller in every unit",
        "Adding a bigger display to every unit",
        "Paying more for assembling each unit"
      ], a: 0,
      e: "NRE = one-time design costs (personnel, firmware, PCB design, prototypes). The other options change the cost of every unit."
    },
    {
      q: "Why must the specification be written precisely and clearly?",
      o: [
        "Because it is the contract between customer and architects and must be verifiable against the requirements",
        "Because it replaces the source code",
        "Because it is only read by the factory",
        "Because it is written after the system is finished"
      ], a: 0,
      e: "The specification must accurately reflect the customer's requirements so someone can verify the design meets them."
    },
    {
      q: "In the GPS moving-map software, the map on screen refreshes periodically even when the user does nothing. Which component triggers this?",
      o: ["Timer", "Renderer", "Database search", "User interface"], a: 0,
      e: "The Timer tracks time intervals, used to update the map / refresh data periodically."
    },
    {
      q: "In the GPS moving map, the position is known and the map data was found, but nothing appears on the screen. Which component most likely failed?",
      o: ["The Renderer — it converts map data into pixels", "The GPS receiver", "The Map database", "The Search engine"], a: 0,
      e: "Position and data are available, so the failing step is converting data into a visual (pixels) → Renderer."
    },
    {
      q: "Why is it recommended to integrate and test components as early as possible?",
      o: [
        "Because many bugs appear only when components are put together, so early integration uncovers them quickly",
        "Because components never have bugs individually",
        "Because the specification is written after integration",
        "Because integration reduces manufacturing cost per unit"
      ], a: 0,
      e: "System integration: many bugs appear only at this stage; test as much functionality as early as possible."
    },
    {
      q: "The CPU fetches an instruction located at address 100 (sequential code). Immediately after the fetch, the PC contains:",
      o: ["101", "100", "99", "0"], a: 0,
      e: "After fetching, the CPU increases the PC by 1 so it points to the next instruction, not the current one."
    },
    {
      q: "The instruction at address 200 is <code>JMP 500</code>. After it executes, which is true?",
      o: [
        "PC = 500 and no ALU operation was performed",
        "PC = 201 and the ALU added 300",
        "PC = 500 and the ALU computed 200 + 300",
        "PC = 200 because JMP does not change the PC"
      ], a: 0,
      e: "Jump instructions change the PC to the new address and perform no arithmetic/logic computation → no ALU."
    },
    {
      q: "Code written in assembly for Microprocessor 1 (where 000 = ADD) is moved to Microprocessor 2 (where 111 = ADD). What happens and what is the lesson?",
      o: [
        "The assembly must be rewritten because machine languages differ — that's why C is preferred",
        "It runs unchanged because all processors share the same machine language",
        "It runs faster on Microprocessor 2",
        "Only the PC needs to be changed"
      ], a: 0,
      e: "Each microprocessor has its own machine language, so assembly varies between processors; C is more portable and, with modern compilers, speed is no longer a big advantage of assembly."
    },
    {
      q: "Microprocessor 1 understands only + and −. A program contains <code>y = a * 4</code>. What happens?",
      o: [
        "The compiler converts the multiplication into several add operations",
        "The program cannot run on this processor",
        "The ALU learns multiplication automatically",
        "The instruction decoder skips the instruction"
      ], a: 0,
      e: "If the processor doesn't understand *, the compiler (software) converts it into many additions (e.g. a + a + a + a). This is why RISC needs a strong compiler."
    },
    {
      q: "A programmer writes <code>register int i;</code> for a loop counter, but the compiler has no free register. What is the result?",
      o: [
        "The program still works; i is stored in memory, so there is no speed gain",
        "Compilation fails with an error",
        "The variable is stored in ROM",
        "The variable is stored in the Program Counter"
      ], a: 0,
      e: "register is only a request; if no GPR is available, the variable is stored in memory and dealt with there."
    },
    {
      q: "After <code>x++</code> executes (x is in memory), the sign flag in the PSW does NOT reflect x. Why?",
      o: [
        "x++ becomes an INC instruction that may be executed without the ALU, so the flags aren't updated",
        "The PSW only stores the PC value",
        "INC always clears every flag",
        "The sign flag only works for multiplication"
      ], a: 0,
      e: "PSW flags hold the result of the last ALU instruction. INC on a memory variable may not involve the ALU (specialized hardware)."
    },
    {
      q: "A processor uses a 3-bit op-code field. What is the maximum number of different operations it can encode?",
      o: ["8", "3", "6", "16"], a: 0,
      e: "3 bits → 2³ = 8 different op-codes (000 to 111)."
    },
    {
      q: "A processor with a hard-wired instruction decoder must now support 20 new instructions. What is the main consequence?",
      o: [
        "More logic gates must be added, so the hardware becomes more expensive",
        "Decoding becomes slower because it searches memory",
        "Nothing changes; hard-wired decoders support unlimited instructions",
        "The compiler becomes simpler and the hardware cheaper"
      ], a: 0,
      e: "Hard-wired = set of logic gates; supporting more instructions means adding gates, which is expensive since it's hardware."
    },
    {
      q: "An 8-bit architecture must add two 16-bit numbers. How is this handled?",
      o: [
        "Slicing — the bits are divided into more than one 8-bit operation",
        "It is impossible on an 8-bit processor",
        "The memory location automatically becomes 16-bit",
        "The data bus is doubled at run time"
      ], a: 0,
      e: "In 8-bit architecture each operand is max 8 bits, so larger operands are sliced into multiple operations."
    },
    {
      q: "A company will produce millions of identical toys whose code will never change and wants the lowest cost. Which ROM fits best?",
      o: ["Mask programmable ROM", "EEPROM", "NVRAM", "EPROM"], a: 0,
      e: "Mask ROM: code burned once by the factory, low cost, no way to change — used in children's games."
    },
    {
      q: "A hobbyist wants to program a chip himself, only once, and never change it. Which memory fits?",
      o: ["PROM", "Mask ROM", "Flash", "DRAM"], a: 0,
      e: "PROM is OTP and the code is installed by the user (fuses burned = 0, not burned = 1). Mask ROM is programmed by the factory."
    },
    {
      q: "A device stores calibration values that change one byte at a time, many times over years. The best memory is:",
      o: [
        "EEPROM — byte access and high endurance (~100,000 cycles)",
        "Flash — because it erases byte by byte",
        "Mask ROM — because it can be rewritten",
        "SRAM — because it keeps data without power"
      ], a: 0,
      e: "EEPROM can update each location alone (byte access) with 100,000 endurance. Flash erases sector by sector."
    },
    {
      q: "A data logger must keep its latest readings when power suddenly fails, but also needs fast RAM-like reading and writing. The best choice is:",
      o: ["NVRAM (SRAM + battery / EEPROM)", "DRAM", "Mask ROM", "PROM"], a: 0,
      e: "NVRAM has RAM advantages (read/write, fast) plus ROM advantage (non-volatile) — faster than ROM."
    },
    {
      q: "A device using EPROM will work near strong radiation sources. What risk exists and how is it handled?",
      o: [
        "Radiation can flip stored bits (0 ↔ 1); the chip's window should be covered/protected",
        "Radiation makes EPROM volatile, so a battery is added",
        "Radiation increases the endurance of EPROM",
        "There is no risk because EPROM is non-volatile"
      ], a: 0,
      e: "EPROM data can be corrupted by radiation and noise; it should be covered in places that contain noise or radiation."
    },
    {
      q: "For a small battery-powered sensor, the designer chooses a small SRAM instead of DRAM for working memory, even though SRAM costs more per bit. Why?",
      o: [
        "SRAM needs no refresh circuit, so it is faster and consumes less power",
        "SRAM has higher density and lower cost",
        "SRAM is non-volatile",
        "DRAM cannot store data at all"
      ], a: 0,
      e: "SRAM: faster, lower power (no refresh). DRAM: needs refresh circuit + capacitors consume power. ES use small SRAM because it is expensive."
    },
    {
      q: "You need to change only ONE byte inside a Flash memory. Why does it take more time than in EEPROM?",
      o: [
        "Flash must erase a whole sector (block) — it cannot erase byte by byte",
        "Flash is volatile and must be reloaded",
        "Flash requires ultraviolet light to erase",
        "Flash has higher endurance"
      ], a: 0,
      e: "Flash problem: erasing is sector by sector (256 B – 16 KB), not byte by byte."
    },
    {
      q: "In a floating-gate memory cell, a high voltage is applied to the drain and the trapped electrons leave the floating gate. The cell now reads:",
      o: ["Logic 1 — erased state", "Logic 0 — programmed state", "Logic 0 — erased state", "Logic 1 — programmed state"], a: 0,
      e: "Electrons are attracted to the +ve drain and released → no electrons in floating gate → erased state → 1."
    },
    {
      q: "A program reads an array sequentially (addresses 3001, 3002, 3003, …). Why does it usually get a high cache hit ratio?",
      o: [
        "When 3001 is requested, the cache also brings the next few addresses, so the following requests are hits",
        "Because RAM becomes faster than the cache",
        "Because sequential addresses skip the cache",
        "Because the PC stores the array"
      ], a: 0,
      e: "The cache controller fetches the requested address and the next few addresses, expecting the CPU to need them."
    },
    {
      q: "Core 1 updates variable X in its L1 cache. Core 2 then reads X from its own L1 cache and gets the OLD value. Which mechanism is missing?",
      o: ["Cache coherence", "Refresh circuit", "Memory organization", "Slicing"], a: 0,
      e: "Cache coherence: the controller of the cache that changed the value must notify the other cache's controller."
    },
    {
      q: "A memory has 16 address lines and each location stores 1 byte. What is its capacity?",
      o: ["64 KB (2¹⁶ locations)", "16 bytes", "16 KB", "32 KB"], a: 0,
      e: "Address lines determine memory size: 2¹⁶ = 65,536 locations × 1 byte = 64 KB."
    },
    {
      q: "A product has NRE = $40,000 and manufacturing cost = $10 per unit. If production rises from 1,000 to 4,000 units, by how much does the effective cost per unit drop?",
      o: ["$30", "$10", "$40", "$0 — it stays the same"], a: 0,
      e: "1,000 units: 40 + 10 = $50. 4,000 units: 10 + 10 = $20. Drop = $30, because NRE is spread over more units."
    },
    {
      q: "A cache receives 1,000 requests with 800 hits. After optimization, the hit ratio for the same 1,000 requests becomes 90%. How many misses were eliminated?",
      o: ["100", "200", "90", "10"], a: 0,
      e: "Before: 200 misses (80%). After: 90% → 900 hits → 100 misses. Eliminated = 200 − 100 = 100."
    },
    {
      q: "Option A: NRE $5,000 and $50 per unit. Option B: NRE $45,000 and $10 per unit. At what production volume do both options have the same total cost?",
      o: ["1,000 units", "500 units", "4,000 units", "900 units"], a: 0,
      e: "5,000 + 50n = 45,000 + 10n → 40n = 40,000 → n = 1,000. Above 1,000 units, option B becomes cheaper."
    }
  ],

  /* ===================== TRUE / FALSE (20) ===================== */
  tf: [
    { q: "A washing machine can be used to browse the internet simply because it contains a processor.", a: false,
      e: "An ES is designed for one specific task; containing a processor doesn't make it general-purpose." },
    { q: "Because embedded systems have constraints in power, cost, speed and size, improving one of them may affect the others, so designers must balance them.", a: true,
      e: "These are the ES challenges — e.g. RISC vs CISC and SRAM vs DRAM show the trade-offs between size, cost, performance and power." },
    { q: "Replacing a System Board with an SoC in the final product reduces size and power without reducing performance.", a: true,
      e: "SB vs SoC: SoC is smaller, cheaper, less power, same performance." },
    { q: "When the CPU passes a graphics task to the GPU, the GPU becomes the primary processor of the system.", a: false,
      e: "The GPU only assists; the CPU remains the primary (master) processor. Only one CPU per system." },
    { q: "A system that has sensors but no actuators cannot impose control over the variables it measures.", a: true,
      e: "That is a monitoring system. Control needs actuators on the output port." },
    { q: "An ECG machine is considered a control system because it uses sensors.", a: false,
      e: "ECG only monitors (determines the state of variables); it cannot impose control." },
    { q: "Writing code in C is more portable across different microprocessors than writing it in assembly.", a: true,
      e: "Assembly / machine language varies between microprocessors; the C compiler handles conversion." },
    { q: "If the compiler has to convert a multiplication into repeated additions, the processor is most likely RISC.", a: true,
      e: "RISC understands fewer instructions and needs a strong compiler." },
    { q: "While an instruction is being executed, the Program Counter points to that same instruction.", a: false,
      e: "After fetch, the PC is incremented — it points to the NEXT instruction." },
    { q: "Declaring a variable with the register keyword makes the program fail if no register is free.", a: false,
      e: "The program still works — the variable is simply stored in memory." },
    { q: "An 8-bit processor can never add two 16-bit numbers.", a: false,
      e: "It can, using slicing — dividing the bits into more than one operation." },
    { q: "A higher NRE always results in a higher cost per unit, no matter how many units are produced.", a: false,
      e: "NRE is spread over the number of units; with large production, a higher-NRE design with lower per-unit cost can be cheaper." },
    { q: "If a product's code will never change and millions of units will be produced, Mask ROM is a cost-effective choice.", a: true,
      e: "Mask ROM is burned once by the factory at low cost." },
    { q: "Flash is preferred over EEPROM for storing large programs because it is cheaper per bit and allows high density.", a: true,
      e: "Flash endurance is lower (10,000) → lower cost per bit → high density." },
    { q: "Disconnecting power from a system erases the data stored in its NVRAM.", a: false,
      e: "NVRAM is non-volatile (battery / data moved to EEPROM)." },
    { q: "Because the DRAM refresh circuit has higher priority than the CPU, the CPU may have to wait to access memory.", a: true,
      e: "This is why DRAM increases access time and is slower than SRAM." },
    { q: "In a floating-gate MOSFET, a cell whose floating gate has no trapped electrons reads as logic 0.", a: false,
      e: "No electrons = erased state = logic 1. Electrons trapped = programmed = logic 0." },
    { q: "A program that jumps randomly to far memory addresses usually gets a lower cache hit ratio than one that accesses sequential addresses.", a: true,
      e: "The cache brings the requested address plus the next few; random far accesses don't benefit from that → more misses." },
    { q: "Without cache coherence, two cores may work with different values of the same variable.", a: true,
      e: "Each core's cache may hold an outdated copy unless the controllers notify each other." },
    { q: "Increasing the number of address lines in the address bus increases the memory capacity that can be addressed.", a: true,
      e: "Address lines determine memory size (each extra line doubles the number of locations)." }
  ],

  /* ===================== ESSAY ===================== */
  essay: [
    {
      q: "<b>Case study — Smart irrigation system:</b> A farm uses a system that measures soil moisture and automatically opens a water valve when the soil is dry. Identify its hardware, software and mechanical components, its sensors and actuators, its purpose, and classify it based on triggering. Explain your reasoning.",
      k: ["sensor", "actuator|valve", "hardware", "software|firmware", "mechanical", "control", "event"],
      answer: `
        <ul>
          <li><b>Hardware:</b> moisture sensor, electronic circuitry / microcontroller board, display or buttons (if any).</li>
          <li><b>Software (firmware):</b> code on the microcontroller that reads the moisture value, compares it with a threshold and decides when to open/close the valve.</li>
          <li><b>Mechanical:</b> valve body, pipes, pump, chassis/enclosure.</li>
          <li><b>Sensor:</b> soil-moisture sensor — converts a physical quantity into an electrical signal.</li>
          <li><b>Actuator:</b> the motorized valve / pump — converts electrical signals into a physical action (water flow).</li>
          <li><b>Purpose:</b> <b>Control</b> — it imposes control over a variable (soil moisture) using both sensors (input port) and actuators (output port). It may also do data collection if it logs readings.</li>
          <li><b>Triggering:</b> <b>Event-triggered</b> — the valve opens when the event "soil is dry" occurs. (If it watered at fixed times every day regardless of moisture, it would be time-triggered.)</li>
        </ul>`
    },
    {
      q: "Explain why a laptop is a <b>general-purpose</b> system while a microwave is an <b>embedded system</b>. Why must embedded systems face constraints (challenges)? Give an example of a trade-off between two of these challenges.",
      k: ["general", "specific", "same resources|resources", "power", "cost", "size", "speed|performance", "trade"],
      answer: `
        <p><b>Laptop:</b> we can install many applications, each doing a different function, but all of them use the same resources (same CPU, RAM, hardware) → general purpose.</p>
        <p><b>Microwave:</b> designed for a single specific task (heating food) with dedicated hardware, software and mechanical parts → embedded / specific purpose.</p>
        <p><b>Why constraints:</b> because the ES serves a single purpose and is often mass-produced, small, and sometimes battery powered, it must respect limits in <b>power, cost, speed/time and size</b>.</p>
        <p><b>Trade-off examples:</b></p>
        <ul>
          <li><b>SRAM vs DRAM:</b> SRAM is faster and lower power but expensive (cost ↑); DRAM is cheap and dense but slower and consumes more power.</li>
          <li><b>SB vs SoC:</b> SB is configurable but larger, more expensive and power hungry; SoC is small and cheap but not configurable.</li>
          <li><b>RISC vs CISC:</b> RISC has cheaper decoding hardware but needs a stronger (costlier) compiler.</li>
        </ul>`
    },
    {
      q: "<b>Design decision:</b> Company X builds (a) a cheap children's toy produced in 1,000,000 units whose code will never change, and (b) an industrial prototype of only 10 units whose design and code will change many times. For each, choose: System Board or SoC, and the type of memory to store the code. Justify your choices.",
      k: ["SoC", "system board|SB", "mask", "configurab", "flash|EEPROM|EPROM", "cost", "change|erase"],
      answer: `
        <p><b>(a) Toy — 1,000,000 units, fixed code:</b></p>
        <ul>
          <li><b>SoC</b>: smaller, less expensive, less power, same performance — ideal for mass production.</li>
          <li><b>Mask programmable ROM</b>: code burned once by the factory with low cost; since the code never changes, the inability to fix/erase is acceptable.</li>
          <li>The large NRE of preparing the design is divided over a million units, so the effective cost per unit stays low.</li>
        </ul>
        <p><b>(b) Industrial prototype — 10 units, changing design:</b></p>
        <ul>
          <li><b>System Board</b>: configurable/editable during the design phase, so components and connections can be changed.</li>
          <li><b>Re-programmable memory</b> such as <b>Flash</b> (or EEPROM/EPROM): can be erased and rewritten many times as the code changes. Mask ROM/PROM would be wrong because they are OTP.</li>
          <li>Higher size/power/cost per unit doesn't matter much for only 10 units.</li>
        </ul>`
    },
    {
      q: "Fill in a <b>requirements form</b> for a <b>smart door lock</b> (Name, Purpose, Inputs, Outputs, Functions, Performance, Manufacturing cost, Power, Physical size & weight). Then classify each entry as functional or non-functional.",
      k: ["name", "purpose", "input", "output", "function", "performance", "cost", "power", "size|weight"],
      answer: `
        <p><i>(Sample answer — your values may differ, but every entry must be filled reasonably.)</i></p>
        <table>
          <tr><th>Entry</th><th>Smart door lock</th><th>Type</th></tr>
          <tr><td>Name</td><td>SmartLock S1</td><td>—</td></tr>
          <tr><td>Purpose</td><td>Lock/unlock a home door using a PIN code or a phone</td><td>—</td></tr>
          <tr><td>Inputs</td><td>Keypad, Bluetooth signal from phone, door-position sensor</td><td>Functional</td></tr>
          <tr><td>Outputs</td><td>Motor that moves the bolt, LED, buzzer</td><td>Functional</td></tr>
          <tr><td>Functions</td><td>Verify PIN; unlock for 5 s then re-lock; alarm after 3 wrong attempts; log entries</td><td>Functional</td></tr>
          <tr><td>Performance</td><td>Unlock within 1 second after correct PIN</td><td>Non-functional</td></tr>
          <tr><td>Manufacturing cost</td><td>$50 per unit</td><td>Non-functional</td></tr>
          <tr><td>Power</td><td>4 AA batteries lasting 1 year (battery powered)</td><td>Non-functional</td></tr>
          <tr><td>Physical size & weight</td><td>No more than 15 × 7 × 4 cm, 500 g</td><td>Non-functional</td></tr>
        </table>
        <p>The purpose should be 1–2 lines; performance requirements must be identified early because they are measured during implementation.</p>`
    },
    {
      q: "<b>Cost decision:</b> Option A: NRE = $20,000 and $30 per unit. Option B: NRE = $60,000 and $10 per unit.<br>a) Which option is cheaper for 1,500 units? b) Which is cheaper for 3,000 units? c) Find the break-even volume and explain the role of NRE in your answer.",
      k: ["65,000|65000", "75,000|75000", "110,000|110000", "90,000|90000", "2,000|2000", "NRE"],
      answer: `
        <p><b>a) 1,500 units:</b> A = 20,000 + 1,500 × 30 = <b>$65,000</b>; B = 60,000 + 1,500 × 10 = <b>$75,000</b> → <b>A is cheaper</b>.</p>
        <p><b>b) 3,000 units:</b> A = 20,000 + 90,000 = <b>$110,000</b>; B = 60,000 + 30,000 = <b>$90,000</b> → <b>B is cheaper</b>.</p>
        <p><b>c) Break-even:</b> 20,000 + 30n = 60,000 + 10n → 20n = 40,000 → <b>n = 2,000 units</b>.</p>
        <p><b>Explanation:</b> NRE is paid once, regardless of volume, while manufacturing cost is paid for every unit. For small volumes the low-NRE option wins; for large volumes the high NRE of option B is spread over many units and its lower per-unit cost makes it cheaper.</p>`
    },
    {
      q: "<b>Trace the execution:</b> 8-bit format = 3-bit op-code | 3-bit operand 1 | 2-bit operand 2, where 000 = ADD and 001 = SUB.<br>Address 100: <code>001 001 11</code><br>Address 101: <code>JMP 200</code><br>For each instruction, state the value of the PC after fetch, what the decoder/ALU do, the result, the sign flag, and the final PC.",
      k: ["101", "102", "200", "SUB|subtract", "-2|−2", "sign", "1", "no ALU|without ALU|not use"],
      answer: `
        <p><b>Instruction 1 (address 100):</b></p>
        <ul>
          <li>Fetch: CU copies the instruction into IR; PC becomes <b>101</b>.</li>
          <li>Decode: op-code 001 = SUB; operand 1 = 001 = 1; operand 2 = 11 = 3.</li>
          <li>Execute: ALU computes 1 − 3 = <b>−2</b>; result stored in an empty GPR (accumulator in old processors).</li>
          <li>PSW sign flag = <b>1</b> (negative result).</li>
        </ul>
        <p><b>Instruction 2 (address 101):</b></p>
        <ul>
          <li>Fetch: IR ← JMP 200; PC becomes <b>102</b>.</li>
          <li>Decode: jump instruction.</li>
          <li>Execute: PC is changed to <b>200</b>. <b>No ALU</b> operation (no computation), so the sign flag stays <b>1</b> from the previous SUB.</li>
        </ul>
        <p><b>Final PC = 200</b> → the next instruction fetched is the one at address 200.</p>`
    },
    {
      q: "Explain how a multiplication instruction (<code>a × b</code>) is handled on a RISC processor compared with a CISC processor. Discuss the effect on the compiler, the instruction decoder type, cost and speed. Then explain why embedded systems prefer RISC.",
      k: ["RISC", "CISC", "additions|add", "compiler", "hard-wired|hard wired", "memory-mapped|memory mapped", "cost", "fewer|less"],
      answer: `
        <ul>
          <li><b>RISC:</b> may not understand × directly (understands fewer instructions, 30–40). The <b>strong compiler</b> converts it into many add operations. Decoder is <b>hard-wired</b> (logic gates) → fast decoding, cheap hardware (few gates), but higher software (compiler) cost. Time is spent in conversion.</li>
          <li><b>CISC:</b> understands × directly (many instructions, one instruction may do several low-level operations). Needs only a <b>simple compiler</b>. Decoder is <b>memory-mapped</b> (searches for the instruction in memory) → takes time in search, hardware cost is higher.</li>
        </ul>
        <p><b>Why ES use RISC:</b> embedded systems need a fewer number of instructions; a small, highly optimized instruction set runs at higher speed and keeps the hardware simpler (RISC uses Harvard architecture). CISC suits high-performance general computers.</p>`
    },
    {
      q: "<b>Memory selection:</b> Choose the most suitable memory for each need and justify:<br>(a) firmware updated occasionally, (b) calibration constants that change byte by byte, (c) small fast working memory in a battery device, (d) data that must survive sudden power loss and be written quickly, (e) a large, cheap working memory where speed is less important.",
      k: ["flash", "EEPROM", "SRAM", "NVRAM", "DRAM", "sector|block", "byte", "refresh", "battery"],
      answer: `
        <table>
          <tr><th>Need</th><th>Memory</th><th>Reason</th></tr>
          <tr><td>(a) Firmware updates</td><td><b>Flash</b></td><td>Non-volatile, electrically erasable, block access, low cost per bit & high density — good for large programs updated occasionally.</td></tr>
          <tr><td>(b) Byte-wise constants</td><td><b>EEPROM</b></td><td>Byte access (update one location alone), endurance 100,000 cycles.</td></tr>
          <tr><td>(c) Fast small working memory</td><td><b>SRAM</b></td><td>Fastest RAM, no refresh circuit, lower power; expensive, so use a small size.</td></tr>
          <tr><td>(d) Survive power loss + fast writes</td><td><b>NVRAM</b></td><td>SRAM + battery (or + EEPROM): read/write like RAM and non-volatile; faster than ROM.</td></tr>
          <tr><td>(e) Large cheap memory</td><td><b>DRAM</b></td><td>Simple hardware, low cost per bit, high density; slower due to the refresh circuit.</td></tr>
        </table>`
    },
    {
      q: "Explain WHY DRAM is cheaper but slower than SRAM, and WHY a ROM cell keeps its data without power while DRAM does not. Relate your answer to the physical components of each memory.",
      k: ["capacitor", "leak|discharge", "refresh", "priority", "transistor|flip-flop", "floating gate", "trapped", "oxide|isolat"],
      answer: `
        <ul>
          <li><b>DRAM</b> stores a bit as charge in a <b>capacitor</b> — simple hardware → low cost per bit & high density. But the capacitor discharges over time (1 becomes 0), so a <b>refresh circuit</b> must periodically read & rewrite the data. The refresh circuit has <b>higher priority</b> than the CPU, so the CPU waits → slower. And since a capacitor needs power to keep/refresh its charge, data is lost when power is removed (volatile).</li>
          <li><b>SRAM</b> stores a bit in a flip-flop of at least 6 transistors → no refresh, faster, lower power, but high cost per bit.</li>
          <li><b>ROM (floating-gate MOSFET)</b>: the bit is stored as electrons trapped in a <b>floating gate</b> surrounded by insulating oxide layers. Since the gate is electrically isolated, the charge cannot escape when power is removed → <b>non-volatile</b>. It is changed only by applying high voltage (by a burner/flasher), which is why the processor cannot write to it during normal operation.</li>
        </ul>`
    },
    {
      q: "<b>Cache scenario:</b> When a miss happens, the cache brings the requested address and the next 3 addresses (block of 4). The CPU requests: 3001, 3002, 3003, 3004, 5000, 5001, 3002, 5002. Assume the cache keeps everything it loads.<br>a) Mark each request as hit or miss and compute the hit ratio. b) If this were a dual-core processor and core 1 changed the value at 3002, what problem could occur in core 2 and how is it solved?",
      k: ["miss", "hit", "6", "2", "75%|75", "coherence", "controller", "notify"],
      answer: `
        <table>
          <tr><th>Request</th><th>Result</th><th>Cache loads</th></tr>
          <tr><td>3001</td><td>Miss</td><td>3001 – 3004</td></tr>
          <tr><td>3002</td><td>Hit</td><td>—</td></tr>
          <tr><td>3003</td><td>Hit</td><td>—</td></tr>
          <tr><td>3004</td><td>Hit</td><td>—</td></tr>
          <tr><td>5000</td><td>Miss</td><td>5000 – 5003</td></tr>
          <tr><td>5001</td><td>Hit</td><td>—</td></tr>
          <tr><td>3002</td><td>Hit</td><td>—</td></tr>
          <tr><td>5002</td><td>Hit</td><td>—</td></tr>
        </table>
        <p><b>a)</b> Hits = 6, Misses = 2 → Hit ratio = 6 ÷ 8 = <b>75%</b>. Fetching the next addresses is what turned the sequential requests into hits.</p>
        <p><b>b)</b> Core 2's L1 cache may still hold the <b>old value</b> of 3002, so the two cores would work with different values. Solution: <b>cache coherence</b> — the controller of core 1's cache, after changing the value, must notify the controller of core 2's cache with the edit.</p>`
    },
    {
      q: "Explain the role of each part of the processor (ALU, CU, Register Files) and the bus set during reading an instruction from memory. Why are register files the fastest memory, and why is the cache faster than main memory?",
      k: ["ALU", "control unit|CU", "register", "address bus", "data bus", "control bus", "no bus|without bus|don't need bus|bus", "cache"],
      answer: `
        <ul>
          <li><b>CU:</b> fetches the instruction from memory into the IR and decodes it (Instruction Decoder).</li>
          <li><b>ALU:</b> executes arithmetic and logic operations.</li>
          <li><b>Register Files:</b> PC gives the address of the next instruction; IR holds the fetched instruction; GPRs hold temporary results; PSW holds flags; SP points to the top of the stack.</li>
          <li><b>Bus set during the read:</b> the address (from PC) is placed on the <b>address bus</b>, the <b>control bus</b> signals a read, and the instruction comes back on the <b>data bus</b>.</li>
        </ul>
        <p><b>Register files are fastest</b> because they are inside the CPU — no bus is needed to access them.</p>
        <p><b>Cache is faster than RAM</b> because it is SRAM placed between the CPU and main memory (L1 even inside the core), so data doesn't travel over the bus set to RAM; it also anticipates the next addresses.</p>
        <p>Hierarchy: Register Files → Cache → RAM → HDD (speed decreases, size increases).</p>`
    }
  ]
});
