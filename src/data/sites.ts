import type { Module } from "@/lib/types";

// SITE-SPECIFIC MODULES — unlock only after all foundational modules are passed
// (LTP-equivalent gating). Content grounded in UKHSA, EYFS 2025 and DfE guidance.

export const siteModules: Module[] = [
  {
    slug: "offices",
    title: "Cleaning Offices",
    description:
      "Touch points, breakout kitchens, washrooms, meeting rooms, waste/recycling and out-of-hours security.",
    category: "offices",
    icon: "🏢",
    estimatedMinutes: 22,
    orderIndex: 1,
    requiresFoundations: true,
    lessons: [
      {
        slug: "office-areas-and-touchpoints",
        title: "Office areas & touch points",
        summary: "Clean the high-yield touch points and the main office areas with the right colours.",
        estimatedMinutes: 12,
        intro:
          "Offices are general low-risk (blue) areas, but they have high-touch points and shared facilities that need focus. Touch-point cleaning is the highest-yield way to interrupt the spread of germs.",
        learningObjectives: [
          "Identify and disinfect high-frequency touch points daily.",
          "Apply the right colour code to each office area.",
          "Respect confidentiality and the 'clean desk' approach.",
        ],
        method: [
          "Disinfect high-frequency touch points daily or more: door handles, push plates, light switches, taps, toilet flushes, handrails, lift buttons, shared keyboards/phones, and vending/printer buttons.",
          "Desks and offices (blue): dust and wipe surfaces, but respect a 'clean desk' policy — don't move papers or personal items.",
          "Breakout/kitchen areas (green): clean and sanitise food-contact surfaces, sinks and appliances.",
          "Washrooms (red, with yellow for basins/surfaces): follow the washroom method.",
          "Meeting rooms: clear cups, wipe tables and touch points, reset the room.",
          "Waste: segregate general waste and recycling correctly per the site's scheme.",
        ],
        dos: [
          "Prioritise touch points every visit.",
          "Use green in kitchens, red/yellow in washrooms, blue for general areas.",
          "Keep client information confidential.",
        ],
        donts: [
          "Don't move or read documents on desks.",
          "Don't use the same cloth in the kitchen and the washroom.",
          "Don't mix recycling and general waste.",
        ],
        safetyNotes: ["Be careful around electrical equipment and trailing cables under desks."],
        videos: [],
        references: ["UKHSA touch-point guidance", "BICSc colour coding"],
      },
      {
        slug: "office-out-of-hours-security",
        title: "Out-of-hours etiquette & security",
        summary: "Work professionally and securely when the office is empty.",
        estimatedMinutes: 10,
        intro:
          "Much office cleaning happens out of hours. You are often a keyholder or working in an empty, alarmed building, so security and professionalism matter as much as the cleaning itself.",
        learningObjectives: [
          "Follow out-of-hours etiquette for lights, security and lock-up.",
          "Handle keys and alarm codes responsibly.",
          "Maintain confidentiality and lone-working safety.",
        ],
        method: [
          "On arrival: disarm the alarm correctly and sign in per the site procedure.",
          "While working: only access the areas you are authorised to clean.",
          "On leaving: switch off lights, check windows/doors, lock up and set the alarm.",
          "Keys and alarm codes: keep them secure and never share them.",
          "Follow lone-working procedures — keep a charged phone and know your check-in/out-of-hours contacts.",
        ],
        dos: [
          "Set and unset alarms correctly and report any faults.",
          "Lock up fully and turn off lights on leaving.",
          "Keep keys and codes confidential and secure.",
        ],
        donts: [
          "Don't prop open secure doors.",
          "Don't share alarm codes or keys.",
          "Don't enter areas you are not authorised to clean.",
        ],
        safetyNotes: ["If you find a security problem (forced door, intruder), follow the emergency procedure and do not put yourself at risk."],
        videos: [],
        references: ["Site security and keyholding procedures", "Lone-working guidance"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "Which surfaces are the highest priority in an office because they interrupt the spread of germs?",
          options: ["Window ledges", "High-frequency touch points (handles, switches, lift buttons)", "Ceilings", "Carpets"],
          correctIndex: 1,
          explanation: "High-frequency touch points are the highest-yield surfaces for stopping transmission and need daily-or-more disinfection.",
        },
        {
          question: "What colour code is correct for an office breakout kitchen?",
          options: ["Red", "Yellow", "Green", "Blue"],
          correctIndex: 2,
          explanation: "Kitchens and food-prep areas use GREEN.",
        },
        {
          question: "You see documents left on a desk. What should you do?",
          options: ["Read them", "Tidy them into a pile", "Leave them — don't move or read them", "Bin them"],
          correctIndex: 2,
          explanation: "Respect the clean-desk approach and confidentiality — don't move or read documents.",
        },
        {
          question: "When leaving an office out of hours, you should:",
          options: [
            "Leave lights on and the door propped",
            "Switch off lights, lock up, and set the alarm",
            "Leave the alarm off for the next person",
            "Share the alarm code with colleagues",
          ],
          correctIndex: 1,
          explanation: "Switch off lights, lock up fully and set the alarm. Keep keys and codes secure.",
        },
        {
          question: "Which colours are used in an office washroom?",
          options: ["Green only", "Blue only", "Red (with yellow for basins/surfaces)", "White only"],
          correctIndex: 2,
          explanation: "Washrooms use RED, with YELLOW for basins and higher-risk surfaces.",
        },
        {
          question: "How should you treat keys and alarm codes?",
          options: ["Share them freely", "Keep them secure and never share them", "Write them on the door", "Leave them in the lock"],
          correctIndex: 1,
          explanation: "Keys and alarm codes must be kept secure and never shared.",
        },
      ],
    },
  },

  {
    slug: "schools",
    title: "Cleaning Schools",
    description:
      "Classrooms, toilets, corridors, dining halls, science labs, sports halls, term-time vs holidays — and safeguarding.",
    category: "schools",
    icon: "🏫",
    estimatedMinutes: 24,
    orderIndex: 2,
    requiresFoundations: true,
    lessons: [
      {
        slug: "schools-areas-and-frequencies",
        title: "School areas & cleaning frequencies",
        summary: "Clean classrooms, toilets, dining halls, labs and sports halls at the right frequency.",
        estimatedMinutes: 12,
        intro:
          "There is no single mandatory DfE cleaning-frequency standard for schools — DfE points to UKHSA infection guidance. The frequencies below are best-practice syntheses of UKHSA guidance and industry checklists and should be treated as indicative for the site.",
        learningObjectives: [
          "Apply best-practice cleaning frequencies for each school area.",
          "Prioritise touch points and toilets.",
          "Plan term-time routine cleaning vs holiday deep cleans.",
        ],
        method: [
          "High-touch points and toilets: clean at least daily; high-use toilets twice daily or between breaks.",
          "Classrooms: daily surface clean, empty bins, and floor care; focus on shared touch points.",
          "Corridors: regular floor care and touch points (handrails, push plates, door handles).",
          "Dining halls: clean and sanitise around meal times (green for food-contact areas).",
          "Science labs: extra care with spills and COSHH — follow lab rules and never assume a spill is harmless.",
          "Sports/PE halls: use a scrubber-dryer for the large floor area; clean per use and risk.",
          "Term-time = routine cleaning; holidays = deep cleans (strip/reseal floors, deep restroom cleans).",
        ],
        dos: [
          "Clean toilets and touch points at least daily.",
          "Use green in dining/food areas and red/yellow in toilets.",
          "Plan deep cleans for holidays.",
        ],
        donts: [
          "Don't leave high-use toilets to once a day if they need twice.",
          "Don't ignore COSHH care in science labs.",
          "Don't move equipment between colour zones.",
        ],
        safetyNotes: ["Science labs may contain hazardous substances — treat unknown spills with caution and report them."],
        videos: [],
        references: [
          "UKHSA — 'Health protection in children and young people settings'",
          "DfE 'buying cleaning services' procurement guidance and school toilet provision regulations",
        ],
      },
      {
        slug: "schools-safeguarding",
        title: "Safeguarding around children",
        summary: "Work safely and appropriately around children: DBS awareness and the school's safeguarding policy.",
        estimatedMinutes: 10,
        intro:
          "Cleaners in schools work in a setting full of children and young people. Safeguarding is everyone's responsibility — you must understand and follow the school's safeguarding policy.",
        learningObjectives: [
          "Understand DBS awareness and why it matters.",
          "Follow the setting's safeguarding policy.",
          "Know the basic rule: never be alone with a child where avoidable.",
        ],
        method: [
          "Be DBS-aware: cleaners working around children may need a DBS check and must follow safeguarding rules.",
          "Follow the school's safeguarding policy at all times.",
          "Never put yourself in a position of being alone with a child where it can be avoided.",
          "Plan working hours around the school day (before/after school) so most cleaning happens when children are not present.",
          "If you have any safeguarding concern, report it immediately to the school's designated safeguarding lead per the policy.",
        ],
        dos: [
          "Read and follow the safeguarding policy.",
          "Report any concern straight away.",
          "Keep professional boundaries at all times.",
        ],
        donts: [
          "Don't be alone with a child where it can be avoided.",
          "Don't ignore a safeguarding concern.",
          "Don't start without the required DBS clearance where it is needed.",
        ],
        safetyNotes: ["Safeguarding protects children and protects you — when in doubt, follow the policy and report."],
        videos: [],
        references: ["School safeguarding policy", "DBS awareness", "Keeping Children Safe in Education (statutory guidance)"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "How often should high-use school toilets be cleaned?",
          options: ["Once a week", "Twice daily or between breaks", "Once a term", "Only in holidays"],
          correctIndex: 1,
          explanation: "High-touch points and toilets should be cleaned at least daily; high-use toilets twice daily or between breaks.",
        },
        {
          question: "Is there a single mandatory DfE cleaning-frequency standard for schools?",
          options: ["Yes, set by law", "No — DfE points to UKHSA infection guidance; frequencies are best practice", "Yes, weekly", "Yes, monthly"],
          correctIndex: 1,
          explanation: "There is no single mandatory DfE frequency spec; DfE points to UKHSA guidance and the frequencies are best-practice syntheses.",
        },
        {
          question: "What should you use for the large floor area of a sports hall?",
          options: ["A single cloth", "A scrubber-dryer", "Only a broom", "Hot-water extraction"],
          correctIndex: 1,
          explanation: "Large hard-floor areas like sports halls are best cleaned with a scrubber-dryer.",
        },
        {
          question: "When do schools usually have deep cleans (strip/reseal floors, deep restroom cleans)?",
          options: ["Every day", "During holidays", "Never", "Only when inspected"],
          correctIndex: 1,
          explanation: "Term-time is routine cleaning; holidays are used for deep cleans such as stripping and resealing floors.",
        },
        {
          question: "What is the basic safeguarding rule about being with children?",
          options: [
            "Spend as much time as possible with them",
            "Never be alone with a child where it can be avoided, and follow the safeguarding policy",
            "Ignore it, it's the teachers' job",
            "Only matters during lessons",
          ],
          correctIndex: 1,
          explanation: "Never be alone with a child where avoidable, and always follow the setting's safeguarding policy.",
        },
        {
          question: "You have a safeguarding concern. What should you do?",
          options: ["Keep it to yourself", "Report it immediately to the designated safeguarding lead per the policy", "Wait a week", "Tell a parent only"],
          correctIndex: 1,
          explanation: "Report any safeguarding concern immediately to the school's designated safeguarding lead, following the policy.",
        },
      ],
    },
  },

  {
    slug: "nurseries",
    title: "Cleaning Nurseries",
    description:
      "Extra-stringent hygiene: toy washing, cots/sleep mats, nappy-changing stations, child-safe chemicals and food-prep.",
    category: "nurseries",
    icon: "🧸",
    estimatedMinutes: 26,
    orderIndex: 3,
    requiresFoundations: true,
    lessons: [
      {
        slug: "nursery-hygiene-toys",
        title: "Nursery hygiene & toy care",
        summary: "Meet extra-stringent hygiene standards for floors, toys, cots and sleep mats where children crawl and play.",
        estimatedMinutes: 13,
        intro:
          "Nurseries need extra-stringent hygiene because young children crawl, play on the floor and put things in their mouths. Follow UKHSA 'Health protection in children and young people settings' and EYFS 2025. Choose child-safe, low-fragrance chemicals and always follow the correct dwell-then-rinse.",
        learningObjectives: [
          "Clean floors and play areas to a child-safe standard.",
          "Wash and rotate toys correctly.",
          "Clean cots and sleep mats between uses.",
        ],
        method: [
          "Use child-safe, low-fragrance chemicals; follow the correct dwell time, then rinse so no residue is left.",
          "Floors where children crawl/play: clean thoroughly, rinse fully, and leave no slip residue.",
          "Toy washing and rotation: have enough toys to rotate; wash/disinfect on a schedule.",
          "Soft or porous toys should be wiped, not soaked.",
          "Cots and sleep mats: clean and disinfect between each use.",
          "Sandpits: cover when not in use; rake and refresh.",
          "Sensory rooms: clean gently to protect the equipment; be allergen-aware.",
          "Ensure toys carry BS/BSI/CE marks and store cleaned equipment separately from used equipment.",
        ],
        dos: [
          "Choose child-safe, low-fragrance chemicals and rinse off residue.",
          "Wipe soft toys; soak only what is safe to soak.",
          "Store clean equipment separately from used equipment.",
        ],
        donts: [
          "Don't leave chemical residue on floors or toys children touch.",
          "Don't soak soft/porous toys.",
          "Don't use strong-fragrance or harsh chemicals around young children.",
        ],
        safetyNotes: [
          "Toy hygiene reduces viral load (2015 Copenhagen nursery study) but is good practice, not a guaranteed illness-reducer.",
          "Be allergen-aware and check what chemicals are approved for the setting.",
        ],
        videos: [],
        references: [
          "UKHSA — 'Health protection in children and young people settings'",
          "EYFS 2025 statutory framework",
          "Ibfelt et al. 2015 (toy hygiene evidence)",
        ],
      },
      {
        slug: "nursery-nappy-and-food",
        title: "Nappy areas & food-prep",
        summary: "Clean nappy-changing stations between each child and keep food-prep areas to FSA standards.",
        estimatedMinutes: 12,
        intro:
          "Nappy-changing and food-prep are the highest-risk activities in a nursery. EYFS 2025 requires safe, hygienic nappy/toileting facilities and added emphasis on balancing children's privacy with safeguarding during intimate care.",
        learningObjectives: [
          "Clean and disinfect nappy-changing stations between each child.",
          "Keep food-prep areas to green-zone / FSA standards.",
          "Manage waste from nappy areas safely.",
        ],
        method: [
          "Nappy-changing station: clean and disinfect the changing mat/surface between each child.",
          "Staff wear disposable gloves and an apron for each change and dispose of them immediately.",
          "Soiled nappies go into sealed, designated bins, emptied at least daily.",
          "Handwashing happens before and after every change.",
          "Food-prep areas: use GREEN colour coding and follow FSA food-safety standards — clean and sanitise food-contact surfaces.",
          "Inspect toileting/nappy areas regularly to ensure they are visibly clean, with handwash and waste facilities available.",
        ],
        dos: [
          "Disinfect the changing surface between every child.",
          "Empty sealed nappy bins at least daily.",
          "Use green and FSA standards in food-prep areas.",
        ],
        donts: [
          "Don't reuse a changing surface without cleaning between children.",
          "Don't let nappy bins overflow or leave them unsealed.",
          "Don't use food-prep (green) equipment anywhere else.",
        ],
        safetyNotes: [
          "EYFS 2025 emphasises balancing children's privacy with safeguarding during intimate care — follow the setting's intimate-care policy.",
          "Wear PPE per the risk assessment and wash hands before and after every nappy change.",
        ],
        videos: [],
        references: [
          "EYFS 2025 (intimate-care/hygiene policy emphasis)",
          "UKHSA children and young people settings guidance",
          "FSA food-safety standards",
        ],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "How often should a nappy-changing surface be cleaned and disinfected?",
          options: ["Once a day", "Between each child", "Once a week", "Only when visibly dirty"],
          correctIndex: 1,
          explanation: "Clean and disinfect the changing mat/surface between every single child.",
        },
        {
          question: "How should soft or porous toys be cleaned?",
          options: ["Soaked in disinfectant", "Wiped, not soaked", "Put in the dishwasher", "Left uncleaned"],
          correctIndex: 1,
          explanation: "Soft or porous toys should be wiped, not soaked.",
        },
        {
          question: "What kind of chemicals should be used around young children?",
          options: [
            "The strongest available",
            "Child-safe, low-fragrance chemicals, with correct dwell then rinse",
            "Any kitchen chemical",
            "Neat bleach",
          ],
          correctIndex: 1,
          explanation: "Use child-safe, low-fragrance chemicals, follow the dwell time, then rinse so no residue remains.",
        },
        {
          question: "What colour code do nursery food-prep areas use?",
          options: ["Red", "Blue", "Green", "Yellow"],
          correctIndex: 2,
          explanation: "Food-prep areas use GREEN and follow FSA food-safety standards.",
        },
        {
          question: "What does the toy-cleaning evidence (2015 Copenhagen study) actually show?",
          options: [
            "It guarantees fewer sick days",
            "It reduces detectable viral load but had no measurable effect on sickness absence",
            "It makes no difference at all",
            "It increases illness",
          ],
          correctIndex: 1,
          explanation: "The study showed reduced viral load but no measurable drop in sickness absence — present toy hygiene as good practice, not a guaranteed illness-reducer.",
        },
        {
          question: "How should soiled nappies be disposed of?",
          options: [
            "In the general classroom bin",
            "In sealed, designated bins emptied at least daily",
            "Left on the changing table",
            "Flushed",
          ],
          correctIndex: 1,
          explanation: "Soiled nappies go in sealed, designated bins emptied at least daily.",
        },
        {
          question: "What does EYFS 2025 add emphasis on during intimate care?",
          options: [
            "Speed only",
            "Balancing children's privacy with safeguarding",
            "Using stronger chemicals",
            "Reducing handwashing",
          ],
          correctIndex: 1,
          explanation: "EYFS 2025 added emphasis on balancing children's privacy with safeguarding during intimate care, and reviewing policies and training staff.",
        },
      ],
    },
  },
];
