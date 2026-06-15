import type { Module } from "@/lib/types";

// FOUNDATIONAL MODULES — the LTP-equivalent core every operative completes first.
// Content grounded in BICSc/CPSS, UKHSA, COSHH 2002 and NHS National Standards 2025.

export const foundationModules: Module[] = [
  {
    slug: "colour-coding",
    title: "Colour Coding",
    description:
      "The UK 4-colour cleaning code (red/blue/green/yellow) and the golden rule: always clean from cleanest to dirtiest.",
    category: "foundational",
    icon: "🎨",
    estimatedMinutes: 15,
    orderIndex: 1,
    lessons: [
      {
        slug: "the-4-colour-code",
        title: "The 4-colour code",
        summary: "Name the four colours, match them to areas, and never move equipment between colours.",
        estimatedMinutes: 12,
        intro:
          "Colour coding stops germs being carried from a dirty area into a clean one. The UK system came from BICSc in the late 1990s and aligns with the NPSA National Colour Coding Scheme. Outside healthcare it is best practice, not a legal rule — but FISCO uses it on every site.",
        learningObjectives: [
          "Name the 4 cleaning colours and the areas each one is used for.",
          "Explain the golden rule: always work from the cleanest area to the dirtiest.",
          "Identify which equipment must be colour coded.",
        ],
        method: [
          "RED — high-risk: bathrooms, washrooms, showers, toilets, basins, urinals and bathroom floors.",
          "BLUE — general low-risk: offices, classrooms, corridors, reception and other general areas.",
          "GREEN — kitchens, catering and food-preparation areas.",
          "YELLOW — clinical areas and higher-risk washroom surfaces such as hand-wash basins, taps, sinks and mirrors outside the toilet.",
          "WHITE (optional) — site-specific or one-off specialist use; striped cloths extend the range.",
          "Colour code all cloths (reusable and disposable), mops, buckets, aprons, gloves and brushware. Disinfectants and bleach do not need coding.",
          "Apply the golden rule: always clean from the cleanest area towards the dirtiest so you never spread contamination.",
        ],
        dos: [
          "Store each colour separately and return equipment clean and dry.",
          "Use yellow for hand-wash basins and sinks; red for toilets and urinals.",
          "Match the colour to the area every single time, even when you are in a hurry.",
        ],
        donts: [
          "Never use a toilet (red) cloth anywhere else.",
          "Never carry equipment from one colour zone into another.",
          "Don't mix coloured cloths together in storage or the wash.",
        ],
        safetyNotes: [
          "Colour coding protects you, your colleagues and everyone who uses the building from infection.",
          "In a viral outbreak, yellow becomes more prominent for higher-risk surfaces.",
        ],
        videos: [
          {
            youtubeId: "",
            title: "BICSc colour-coding reference (web)",
            source: "BICSc — bics.org.uk/colour-coding/",
            note: "Authoritative definition of the red/blue/green/yellow system. (Step-by-step skill demos are paywalled on the BICSc Virtual Training Suite.)",
          },
        ],
        references: [
          "BICSc colour-coding scheme (the live UK reference)",
          "NPSA National Colour Coding Scheme 2007 (withdrawn but still industry-referenced)",
          "UKHSA — colour coding is 'good practice' though not legally required",
        ],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "Which colour is used for toilets, urinals and bathroom floors?",
          options: ["Blue", "Green", "Red", "Yellow"],
          correctIndex: 2,
          explanation: "RED is for high-risk washroom areas: toilets, urinals, showers and bathroom floors.",
        },
        {
          question: "You need to clean a staff kitchen and food-prep counter. Which colour?",
          options: ["Green", "Red", "Yellow", "White"],
          correctIndex: 0,
          explanation: "GREEN is reserved for kitchens, catering and food-preparation areas.",
        },
        {
          question: "Which colour is correct for offices, classrooms and corridors?",
          options: ["Red", "Yellow", "Blue", "Green"],
          correctIndex: 2,
          explanation: "BLUE covers general low-risk areas such as offices, classrooms and corridors.",
        },
        {
          question: "A hand-wash basin and taps just outside the toilets should be cleaned with which colour?",
          options: ["Red", "Yellow", "Green", "Blue"],
          correctIndex: 1,
          explanation: "YELLOW is used for clinical areas and higher-risk washroom surfaces such as basins, taps and sinks.",
        },
        {
          question: "What is the golden rule of colour-coded cleaning?",
          options: [
            "Always clean from dirtiest to cleanest",
            "Always clean from cleanest to dirtiest",
            "Clean the floor first, always",
            "Use one cloth for the whole room to save time",
          ],
          correctIndex: 1,
          explanation: "Always work from the cleanest area to the dirtiest so you never carry germs into a clean space.",
        },
        {
          question: "Which item does NOT need to be colour coded?",
          options: ["Mops", "Cloths", "Buckets", "Bleach / disinfectant"],
          correctIndex: 3,
          explanation: "Cloths, mops, buckets, aprons, gloves and brushware are coded. Disinfectants and bleach do not need coding.",
        },
      ],
    },
  },

  {
    slug: "coshh-chemicals",
    title: "COSHH & Chemicals",
    description:
      "Read a Safety Data Sheet, dilute safely, choose the right PPE, and the chemical types you'll use every day.",
    category: "foundational",
    icon: "⚗️",
    estimatedMinutes: 25,
    orderIndex: 2,
    lessons: [
      {
        slug: "reading-an-sds-and-dilution",
        title: "COSHH: safe use, SDS and dilution",
        summary: "Use chemicals safely under COSHH 2002 — read the label and SDS, dilute exactly, and never mix products.",
        estimatedMinutes: 15,
        intro:
          "The Control of Substances Hazardous to Health Regulations 2002 (COSHH) require your employer to assess and control the risks from hazardous substances. Cleaning products are the second highest cause of occupational asthma, and 'wet work' causes over a quarter of all work-related dermatitis — so this matters for your health every shift.",
        learningObjectives: [
          "Find and use the key sections of a Safety Data Sheet (SDS).",
          "Dilute chemicals exactly as the SDS states, using a dosing system.",
          "Choose the correct PPE and store chemicals safely.",
          "Understand why you must never mix cleaning products.",
        ],
        method: [
          "Before using any chemical, read the label (GB CLP hazard symbols) and the Safety Data Sheet.",
          "An SDS has 16 sections. The most important for you are: 2 (hazards), 7 (handling/storage), 8 (exposure controls/PPE) and 11 (health effects).",
          "Remember: an SDS is NOT a risk assessment, but it informs one. Your supervisor's COSHH risk assessment tells you how to work safely.",
          "Dilute exactly as the SDS states — use a dosing/dilution system. Too much chemical risks fumes and burns; too little fails to clean.",
          "Put on the right PPE: gloves (prevent dermatitis), apron (splash barrier), eye protection, and a mask where the SDS or risk assessment requires it.",
          "Use clean, dry decanting tools; keep running water nearby; ventilate the area.",
          "Store correctly: good ventilation, spill trays, locked cabinets, and always in the original or a correctly labelled container.",
        ],
        dos: [
          "Read the label and SDS before first use of any product.",
          "Dilute to the exact ratio with a measured dosing system.",
          "Wear gloves and apron as a minimum; add eye protection and a mask when required.",
        ],
        donts: [
          "NEVER mix products — bleach + acid releases chlorine gas; bleach + some disinfectants creates toxic vapour.",
          "Never decant chemicals into unlabelled bottles.",
          "Never guess a dilution or 'add a bit extra' to clean faster.",
        ],
        safetyNotes: [
          "Cleaning products are the second highest cause of occupational asthma (HSE).",
          "Frequent exposure to soaps/cleaners plus wet work causes over a quarter of all work-related contact dermatitis.",
          "If you feel dizzy, breathless or your skin reacts, stop, ventilate, and report it.",
        ],
        videos: [
          {
            youtubeId: "",
            title: "Supplier COSHH & safe dilution training",
            source: "Use your chemical supplier's official COSHH video for the products on your site.",
          },
        ],
        references: [
          "COSHH 2002 (as amended) — Reg 6 (risk assessment), Reg 7 (control)",
          "GB CLP hazard classification and labelling",
          "HSE — occupational asthma and dermatitis data",
        ],
      },
      {
        slug: "chemical-types",
        title: "Chemical types",
        summary: "Match the right chemical to the job: neutral detergent, degreaser, descaler, glass cleaner, disinfectant, sanitiser.",
        estimatedMinutes: 8,
        intro:
          "Using the right chemical for the surface gets a better result, is safer, and saves product. Here are the everyday types you'll meet on FISCO sites.",
        learningObjectives: [
          "Name the common chemical types and what each is for.",
          "Pick the correct chemical for a given cleaning task.",
        ],
        method: [
          "Neutral detergent (pH ~7) — everyday floors and surfaces.",
          "Degreaser (alkaline) — kitchens and grease.",
          "Descaler (acidic) — limescale on taps, toilets and washrooms.",
          "Glass cleaner — mirrors and glass, for a streak-free finish.",
          "Disinfectant — kills germs after cleaning (check the EN test and dwell time).",
          "Sanitiser — reduces germs to a safe level; often a combined clean-and-sanitise for food-contact surfaces and touch points.",
        ],
        dos: [
          "Match the chemical to the surface and the soil type.",
          "Check the EN test number and dwell time on disinfectants.",
        ],
        donts: [
          "Don't use an acidic descaler on surfaces it can damage.",
          "Don't use a disinfectant on a soiled surface — clean first.",
        ],
        safetyNotes: ["Acids and alkalis can burn skin and eyes — always wear the PPE the SDS requires."],
        videos: [],
        references: ["COSHH 2002", "Manufacturer product data sheets"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "Which SDS sections are most critical for a cleaning operative?",
          options: [
            "1, 3, 5 and 9",
            "2 (hazards), 7 (handling/storage), 8 (PPE) and 11 (health effects)",
            "Only section 16",
            "4, 6, 10 and 12",
          ],
          correctIndex: 1,
          explanation: "Sections 2, 7, 8 and 11 tell you the hazards, how to store/handle, what PPE to wear and the health effects.",
        },
        {
          question: "True or false: a Safety Data Sheet is the same as a COSHH risk assessment.",
          options: ["True", "False"],
          correctIndex: 1,
          explanation: "False. An SDS informs the risk assessment but is not one. Your supervisor's risk assessment tells you how to work safely.",
        },
        {
          question: "What happens if you mix bleach with an acidic product?",
          options: [
            "It cleans faster and is fine",
            "It releases dangerous chlorine gas",
            "Nothing, they cancel out",
            "It makes a stronger descaler",
          ],
          correctIndex: 1,
          explanation: "Bleach + acid releases toxic chlorine gas. Never mix cleaning products.",
        },
        {
          question: "You over-dilute a chemical (use too little product). What is the main problem?",
          options: [
            "It is more dangerous to breathe",
            "It will not clean or disinfect properly",
            "It costs more money only",
            "There is no problem",
          ],
          correctIndex: 1,
          explanation: "Too little product fails to clean; too much risks fumes and burns. Always dilute to the exact ratio.",
        },
        {
          question: "Which chemical is best for limescale on taps and toilets?",
          options: ["Neutral detergent", "Degreaser (alkaline)", "Descaler (acidic)", "Glass cleaner"],
          correctIndex: 2,
          explanation: "Descaler is acidic and dissolves limescale on taps, toilets and washroom surfaces.",
        },
        {
          question: "Why is PPE such as gloves important when cleaning?",
          options: [
            "It looks professional",
            "It prevents dermatitis and protects skin from chemicals",
            "It is only needed for bleach",
            "It is optional best practice",
          ],
          correctIndex: 1,
          explanation: "Gloves prevent contact dermatitis; aprons, eye protection and masks protect against splashes and fumes as the SDS requires.",
        },
        {
          question: "Where should concentrated chemicals be stored?",
          options: [
            "In any spare bottle near the sink",
            "In a locked, ventilated cabinet, correctly labelled",
            "On an open shelf in the toilet",
            "In the kitchen with the food",
          ],
          correctIndex: 1,
          explanation: "Store chemicals in locked, ventilated cabinets with spill trays, always correctly labelled.",
        },
      ],
    },
  },

  {
    slug: "cleaning-vs-disinfecting",
    title: "Cleaning vs Disinfecting",
    description: "Two-stage cleaning and dwell time: clean first to remove soil, then disinfect and keep the surface wet.",
    category: "foundational",
    icon: "🧽",
    estimatedMinutes: 12,
    orderIndex: 3,
    lessons: [
      {
        slug: "two-stage-cleaning-dwell-time",
        title: "Two-stage cleaning & dwell time",
        summary: "Clean first, then disinfect — and keep the surface visibly wet for the full contact time.",
        estimatedMinutes: 10,
        intro:
          "Cleaning and disinfecting are different jobs. Cleaning physically removes dirt and germs with detergent. Disinfecting uses chemicals to kill germs. Sanitising reduces germs to a safe level. For day-to-day cleaning, UKHSA confirms that detergent and water removes most microbes that cause infection.",
        learningObjectives: [
          "Explain the difference between cleaning, disinfecting and sanitising.",
          "Carry out two-stage cleaning in the right order.",
          "Observe the correct dwell (contact) time for a disinfectant.",
        ],
        method: [
          "Stage 1 — CLEAN: remove visible soil with detergent and water. Disinfectant cannot penetrate dirt, so this step must come first.",
          "Stage 2 — DISINFECT: apply the disinfectant to the now-clean surface.",
          "Check the label for the dwell (contact) time — typically 30 seconds to 10 minutes.",
          "Keep the surface visibly WET for the whole contact time. Do not wipe it dry early.",
          "Let it air dry where the label says so.",
          "For viruses, check the product is tested to EN 14476 (virucidal) and follow its stated contact time (e.g. 1 minute for norovirus).",
        ],
        dos: [
          "Always clean before you disinfect.",
          "Read and follow the dwell time on the label.",
          "Use detergent and water for routine day-to-day cleaning.",
        ],
        donts: [
          "Don't disinfect over visible dirt — it won't work.",
          "Don't wipe the disinfectant off before the contact time is finished.",
        ],
        safetyNotes: ["A surface that dries too quickly may need a second application to stay wet for the full contact time."],
        videos: [],
        references: [
          "UKHSA — 'Cleaning with detergent and water is adequate for day-to-day cleaning'",
          "EN 14476 virucidal efficacy test",
        ],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "In two-stage cleaning, which comes first?",
          options: ["Disinfect", "Clean", "It doesn't matter", "Rinse"],
          correctIndex: 1,
          explanation: "Always clean first to remove soil. Disinfectant cannot penetrate dirt.",
        },
        {
          question: "What is 'dwell time' (contact time)?",
          options: [
            "How long you spend in a room",
            "The time a disinfectant must stay visibly wet on the surface to work",
            "How long the chemical lasts in the bottle",
            "The time before you can re-enter the building",
          ],
          correctIndex: 1,
          explanation: "Dwell time is how long the disinfectant must stay visibly wet on the surface to kill germs — typically 30s to 10 minutes.",
        },
        {
          question: "Why can't you just disinfect a dirty surface?",
          options: [
            "It wastes chemical only",
            "Disinfectant cannot penetrate dirt and soil",
            "It is against the law",
            "You can — it works fine",
          ],
          correctIndex: 1,
          explanation: "Disinfectant cannot penetrate soil, so the germs underneath survive. Clean first, then disinfect.",
        },
        {
          question: "For day-to-day cleaning, what does UKHSA say is adequate?",
          options: [
            "Strong bleach everywhere",
            "Detergent and water",
            "Disinfectant only, no cleaning",
            "Hot water alone",
          ],
          correctIndex: 1,
          explanation: "UKHSA: detergent and water is adequate for day-to-day cleaning as it removes most microbes that cause infection.",
        },
        {
          question: "You apply disinfectant and it says 1 minute contact time. What should you do?",
          options: [
            "Wipe it off straight away",
            "Leave the surface visibly wet for the full minute, then let it air dry",
            "Leave it for an hour to be safe",
            "Add more dirt first",
          ],
          correctIndex: 1,
          explanation: "Keep the surface visibly wet for the full stated contact time, then air dry where the label says so.",
        },
      ],
    },
  },

  {
    slug: "microfibre-floor-care",
    title: "Microfibre & Floor Care",
    description: "Microfibre cloth technique (fold for 8 sides), mopping in an 'S' pattern, and floor-care basics.",
    category: "foundational",
    icon: "🧹",
    estimatedMinutes: 20,
    orderIndex: 4,
    lessons: [
      {
        slug: "microfibre-technique",
        title: "Microfibre technique",
        summary: "Fold the cloth twice for 8 clean sides, use damp for cleaning and dry for dusting, and launder it correctly.",
        estimatedMinutes: 10,
        intro:
          "Microfibre fibres are around 200 times thinner than a human hair. This creates a huge surface area that traps dirt and holds up to about 7 times its weight in liquid. When dry, an electrostatic charge lifts dust. Used correctly, one cloth gives you eight clean working surfaces.",
        learningObjectives: [
          "Fold a microfibre cloth to get 8 clean working sides.",
          "Choose dry vs damp use correctly.",
          "Launder microfibre to keep it effective.",
        ],
        method: [
          "Fold the cloth in half, then in half again — this gives 8 clean surfaces that fit your palm.",
          "Turn to a fresh side as each one soils. This prevents cross-contamination and makes the cloth last longer.",
          "Use the cloth DRY for dusting (the electrostatic charge lifts dust).",
          "Use it DAMP for cleaning and polishing.",
          "Launder correctly: most professional microfibre withstands 300–500 wash cycles.",
          "For infection-control sanitation, use a hot wash that holds the cloth above ~60–71°C (60°C is the practical minimum; 71°C held for 3 minutes gives thermal disinfection).",
          "Wash the four colour types separately.",
        ],
        dos: [
          "Fold twice for 8 sides and turn to a fresh side as each soils.",
          "Dry the cloth fully before storing to prevent mould.",
          "Follow the specific product care label for wash temperature.",
        ],
        donts: [
          "Never use fabric softener — it clogs the fibres and reduces absorbency.",
          "Don't use chlorine bleach on poorer-quality microfibre.",
          "Don't exceed the manufacturer's maximum temperature (some state ~90–95°C max).",
        ],
        safetyNotes: ["Damp cloths left bunched up grow bacteria and mould — always dry and store them properly."],
        videos: [],
        references: [
          "BICSc microfibre technique",
          "Manufacturer care labels (laundering temperatures vary 60°C–95°C)",
        ],
      },
      {
        slug: "floor-care-basics",
        title: "Floor care basics",
        summary: "Sweep before you mop, mop in an 'S' pattern working backwards, and match the pad and chemical to the floor.",
        estimatedMinutes: 10,
        intro:
          "Good floor care keeps buildings safe and looking professional. The method changes with the floor type, but the core rules are the same: remove grit first, then clean, and never over-wet a floor that water can damage.",
        learningObjectives: [
          "Clean hard floors in the correct order.",
          "Use the right method for carpets and large areas.",
          "Match the chemical and pad to the floor type.",
        ],
        method: [
          "Hard floors (vinyl/safety flooring, tile): sweep or dust-mop first to remove grit.",
          "Then damp mop with a neutral detergent in an 'S' / figure-of-eight pattern, working backwards out of the room.",
          "Use the two-bucket method (one clean, one dirty) or change the water as soon as it gets dirty.",
          "Buffing/polishing is for sealed hard floors; scrubber-dryers suit large areas like offices, sports halls and corridors.",
          "Carpet: vacuum regularly with a beater-bar/HEPA vacuum; periodically deep clean with hot-water extraction.",
          "Always match the chemical and pad to the floor type, and never over-wet wood or laminate.",
        ],
        dos: [
          "Always sweep or dust-mop before damp mopping.",
          "Put out wet-floor signs whenever the floor is wet.",
          "Work backwards so you never walk on the floor you just cleaned.",
        ],
        donts: [
          "Don't mop over grit — it scratches the floor and spreads dirt.",
          "Don't over-wet wood or laminate floors.",
          "Don't use the wrong pad or chemical for the floor type.",
        ],
        safetyNotes: ["Wet floors are a major slip hazard — always sign them and warn people nearby."],
        videos: [
          {
            youtubeId: "",
            title: "Kärcher Academy — scrubber-dryer operation",
            source: "Kärcher Professional UK Academy (official OEM demos).",
          },
          {
            youtubeId: "",
            title: "i-team i-mop — setup and use",
            source: "i-team Global (official OEM, B Corp).",
          },
          {
            youtubeId: "",
            title: "Prochem — carpet & hard-floor maintenance",
            source: "Prochem Europe (UK carpet/floor cleaning academy).",
          },
        ],
        references: ["BICSc floor-care methodology", "Manufacturer equipment guides (Kärcher, i-team, Prochem)"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "How do you get 8 clean working surfaces from one microfibre cloth?",
          options: [
            "Cut it into 8 pieces",
            "Fold it in half, then in half again",
            "Use both hands",
            "Roll it into a ball",
          ],
          correctIndex: 1,
          explanation: "Fold in half then in half again = 8 clean sides. Turn to a fresh side as each one soils.",
        },
        {
          question: "When should a microfibre cloth be used DRY?",
          options: ["For mopping floors", "For dusting", "For disinfecting", "Never"],
          correctIndex: 1,
          explanation: "Dry microfibre carries an electrostatic charge that lifts dust — ideal for dusting. Use it damp for cleaning.",
        },
        {
          question: "Why must you never use fabric softener on microfibre?",
          options: [
            "It smells bad",
            "It clogs the fibres and reduces absorbency",
            "It is too expensive",
            "It is fine to use",
          ],
          correctIndex: 1,
          explanation: "Fabric softener clogs the fibres and reduces how much liquid the cloth can hold.",
        },
        {
          question: "What must you do to a hard floor before damp mopping?",
          options: [
            "Polish it",
            "Sweep or dust-mop to remove grit",
            "Soak it in water",
            "Vacuum it with hot-water extraction",
          ],
          correctIndex: 1,
          explanation: "Remove grit first by sweeping or dust-mopping, otherwise you scratch the floor and spread dirt.",
        },
        {
          question: "Which pattern should you use when damp mopping a hard floor?",
          options: ["Straight lines forwards", "Random circles", "An 'S' / figure-of-eight, working backwards", "Side to side only"],
          correctIndex: 2,
          explanation: "Mop in an 'S' / figure-of-eight pattern working backwards so you don't walk on the clean floor.",
        },
        {
          question: "What is the practical minimum wash temperature for infection-control microfibre laundering?",
          options: ["30°C", "40°C", "Around 60°C", "100°C"],
          correctIndex: 2,
          explanation: "60°C is widely cited as the practical minimum; 71°C held for 3 minutes gives thermal disinfection. Always check the product care label.",
        },
      ],
    },
  },

  {
    slug: "health-safety-equipment",
    title: "Health & Safety & Equipment Care",
    description: "Wet-floor signs, manual handling, lone working, electrical/PAT safety, and looking after your equipment.",
    category: "foundational",
    icon: "🦺",
    estimatedMinutes: 18,
    orderIndex: 5,
    lessons: [
      {
        slug: "health-and-safety",
        title: "Health & safety on site",
        summary: "Work safely: signage, manual handling, lone working and electrical safety.",
        estimatedMinutes: 10,
        intro:
          "Cleaning is physical work, often out of hours and sometimes alone. These basics keep you and the people around you safe, and meet the Health and Safety at Work Act 1974.",
        learningObjectives: [
          "Use wet-floor signs and safe manual-handling technique.",
          "Follow lone-working procedures.",
          "Check equipment is electrically safe before use.",
        ],
        method: [
          "Put out wet-floor signs whenever floors are wet, and remove them once dry.",
          "Manual handling: bend your knees, keep your back straight, don't twist, and split heavy loads.",
          "Lone working: follow check-in procedures, keep a charged mobile, and know the out-of-hours contacts.",
          "Electrical safety: only use PAT-tested equipment, check leads for damage, avoid trailing cables, and never use a damaged plug.",
          "Store chemicals securely and report any defects or hazards straight away.",
        ],
        dos: [
          "Sign every wet floor and warn people nearby.",
          "Check leads, plugs and cables before plugging in.",
          "Report defects, damage and near-misses promptly.",
        ],
        donts: [
          "Don't lift beyond your safe limit — split the load or get help.",
          "Don't use equipment with damaged cables or plugs.",
          "Don't leave trailing cables across walkways.",
        ],
        safetyNotes: [
          "Slips, trips and falls are among the most common cleaning injuries — signage and tidy cables prevent most of them.",
          "If you work alone, make sure someone knows where you are and when you'll finish.",
        ],
        videos: [],
        references: ["Health and Safety at Work Act 1974", "PAT testing / electrical safety guidance"],
      },
      {
        slug: "equipment-care",
        title: "Equipment care",
        summary: "Maintain vacuums, scrubber-dryers and microfibre so they work well and last.",
        estimatedMinutes: 8,
        intro:
          "Well-maintained equipment cleans better, is safer and lasts longer. A few minutes of care at the end of each shift saves problems later.",
        learningObjectives: [
          "Carry out basic daily maintenance on vacuums and scrubber-dryers.",
          "Store equipment correctly to prevent damage and mould.",
        ],
        method: [
          "Vacuums: empty bags/bins, check or replace filters, clear hair from the brush-bar, and inspect the cord.",
          "Scrubber-dryers: rinse the tanks, clean the squeegee blades, charge the batteries, and check the brushes/pads.",
          "Microfibre: launder correctly, dry fully before storing to prevent mould, and replace worn items.",
          "Store all equipment clean, dry and colour-segregated.",
        ],
        dos: [
          "Empty and rinse tanks/bins after every use.",
          "Charge batteries ready for the next shift.",
          "Dry everything fully before storage.",
        ],
        donts: [
          "Don't store wet microfibre bunched up — it grows mould.",
          "Don't ignore a blocked filter or full bag — it strains the motor.",
        ],
        safetyNotes: ["Report any equipment fault and take the item out of use until it is repaired."],
        videos: [],
        references: ["Manufacturer maintenance guides"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "When should you put out a wet-floor sign?",
          options: ["Only in toilets", "Whenever the floor is wet", "Only if asked", "Never, it slows you down"],
          correctIndex: 1,
          explanation: "Always sign wet floors and remove the sign once the floor is dry to prevent slips.",
        },
        {
          question: "What is the correct manual-handling technique for a heavy load?",
          options: [
            "Bend your back and twist to the side",
            "Bend your knees, keep your back straight, don't twist, split heavy loads",
            "Lift quickly with straight legs",
            "Drag it along the floor",
          ],
          correctIndex: 1,
          explanation: "Bend the knees, keep the back straight, avoid twisting and split heavy loads or get help.",
        },
        {
          question: "Before using an electrical machine you should:",
          options: [
            "Check it is PAT-tested and inspect leads and plug for damage",
            "Just plug it in and go",
            "Test it by touching the metal parts",
            "Only check it once a year",
          ],
          correctIndex: 0,
          explanation: "Only use PAT-tested equipment and check leads, cables and plugs for damage before each use.",
        },
        {
          question: "What basic maintenance does a vacuum need?",
          options: [
            "Nothing, ever",
            "Empty the bag/bin, check filters, clear the brush-bar, inspect the cord",
            "Only replace it when it stops",
            "Wash it in water",
          ],
          correctIndex: 1,
          explanation: "Empty bags/bins, check or change filters, clear hair from the brush-bar and inspect the cord.",
        },
        {
          question: "Why must microfibre be dried fully before storage?",
          options: ["To save space", "To prevent mould growth", "It is not necessary", "To keep it warm"],
          correctIndex: 1,
          explanation: "Storing damp microfibre lets mould and bacteria grow. Dry it fully first.",
        },
      ],
    },
  },

  {
    slug: "hand-hygiene",
    title: "Hand Hygiene & Cross-Contamination",
    description: "The single most important control: liquid soap, warm water and paper towels — plus stopping cross-contamination.",
    category: "foundational",
    icon: "🧼",
    estimatedMinutes: 12,
    orderIndex: 6,
    lessons: [
      {
        slug: "hand-hygiene-cross-contamination",
        title: "Hand hygiene & cross-contamination",
        summary: "Wash hands properly at the right moments and stop germs travelling between zones.",
        estimatedMinutes: 10,
        intro:
          "Hand hygiene is the single most important way to stop the spread of infection. Combined with colour coding and clean-to-dirty working, it protects you and everyone in the building.",
        learningObjectives: [
          "Wash your hands correctly with liquid soap, warm water and paper towels.",
          "Know the key moments to wash your hands.",
          "Prevent cross-contamination between cleaning zones.",
        ],
        method: [
          "Use liquid soap, warm water and paper towels — never bar soap.",
          "Wash thoroughly, covering all surfaces of the hands, then dry with a paper towel.",
          "Wash after helping with toileting, before handling food, after removing gloves, and after dealing with any spill.",
          "Use alcohol gel only when hands are not visibly dirty — and remember it is NOT effective against norovirus.",
          "Prevent cross-contamination: follow colour coding, work clean-to-dirty, change cloths and water frequently, and never take equipment between zones.",
        ],
        dos: [
          "Wash hands at every key moment, even if you wore gloves.",
          "Change cloths and water frequently.",
          "Dry hands with paper towels.",
        ],
        donts: [
          "Don't rely on alcohol gel against norovirus — wash with soap and water.",
          "Don't move cloths, mops or buckets between colour zones.",
          "Don't use bar soap.",
        ],
        safetyNotes: ["Removing gloves does not replace handwashing — always wash after taking gloves off."],
        videos: [
          {
            youtubeId: "aGJNspLRdrc",
            title: "How to wash your hands | NHS",
            source: "NHS (official).",
            note: "Verify this link is live before relying on it.",
          },
          {
            youtubeId: "-boVsHgDDOc",
            title: "Handwashing & drying technique",
            source: "NHS Scotland (official) — nurse-led liquid-soap + paper-towel technique.",
          },
        ],
        references: ["UKHSA / NHS hand-hygiene guidance", "e-Bug hand-hygiene resources"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "What is the single most important control for stopping the spread of infection?",
          options: ["Mopping floors", "Hand hygiene", "Air freshener", "Wearing a uniform"],
          correctIndex: 1,
          explanation: "Hand hygiene is the single most important way to stop infection spreading.",
        },
        {
          question: "Which should you use to wash your hands?",
          options: ["Bar soap and cold water", "Liquid soap, warm water and paper towels", "Alcohol gel only", "Water only"],
          correctIndex: 1,
          explanation: "Use liquid soap, warm water and paper towels — not bar soap.",
        },
        {
          question: "Is alcohol gel effective against norovirus?",
          options: ["Yes, fully", "No — wash with soap and water", "Only if hands are dirty", "Only on floors"],
          correctIndex: 1,
          explanation: "Alcohol gel is NOT effective against norovirus. Wash with soap and water; use gel only when hands are not visibly dirty.",
        },
        {
          question: "You have just removed your gloves. What should you do?",
          options: ["Nothing, gloves keep hands clean", "Wash your hands", "Put on the same gloves again", "Use air freshener"],
          correctIndex: 1,
          explanation: "Always wash your hands after removing gloves — taking gloves off does not replace handwashing.",
        },
        {
          question: "How do you prevent cross-contamination between zones?",
          options: [
            "Use one cloth everywhere to save time",
            "Follow colour coding, work clean-to-dirty, change cloths/water, never move equipment between zones",
            "Clean dirtiest areas first",
            "Mix all the buckets together",
          ],
          correctIndex: 1,
          explanation: "Follow colour coding, work clean-to-dirty, change cloths and water frequently, and never move equipment between zones.",
        },
      ],
    },
  },

  {
    slug: "bodily-fluid-spills",
    title: "Bodily Fluid Spills",
    description: "Safely clean up blood, vomit and urine using a spill kit, PPE and two-stage cleaning.",
    category: "foundational",
    icon: "🧯",
    estimatedMinutes: 12,
    orderIndex: 7,
    lessons: [
      {
        slug: "bodily-fluid-spills",
        title: "Bodily fluid spills",
        summary: "Use a spill kit and the correct steps to clean blood, vomit and urine safely.",
        estimatedMinutes: 10,
        intro:
          "Spills of blood, vomit and urine carry infection risk. Always treat them as potentially infectious and take standard precautions for any break in skin or fluid spill. Have a spill kit ready on every site.",
        learningObjectives: [
          "Use a spill kit to deal with blood, vomit and urine.",
          "Apply the correct PPE and two-stage cleaning.",
          "Know which disinfectant must NOT be used on urine.",
        ],
        method: [
          "Put on PPE: gloves and apron (and a fluid-resistant mask/eye protection where the risk assessment requires).",
          "Put out a wet-floor sign and keep others away from the area.",
          "Use the spill kit: absorb the fluid with disposable paper towels/cloths and dispose of them immediately and safely.",
          "Clean the area with detergent (Stage 1).",
          "Disinfect the area (Stage 2) — but NOT with NaDCC/chlorine on urine.",
          "Double-bag the waste and dispose of it correctly.",
          "Remove PPE, then wash your hands thoroughly.",
        ],
        dos: [
          "Use a dedicated spill kit and disposable materials.",
          "Clean first, then disinfect.",
          "Dispose of waste immediately and double-bag it.",
        ],
        donts: [
          "NEVER use NaDCC (sodium dichloroisocyanurate / chlorine) on urine.",
          "Don't reuse cloths used on a spill.",
          "Don't skip handwashing after removing PPE.",
        ],
        safetyNotes: [
          "Per UKHSA, some agents such as NaDCC (a form of chlorine) cannot be used on urine.",
          "Take standard precautions for any break in skin or fluid spill — treat all spills as potentially infectious.",
        ],
        videos: [
          {
            youtubeId: "FJQ-8REiXUM",
            title: "Body fluid spill (urine/vomit) clean-up procedure",
            source: "GV Health (UK infection-prevention manufacturer) — most UK-aligned spill video found.",
          },
        ],
        references: [
          "UKHSA — spill kits for blood, vomit and urine; NaDCC not on urine",
          "Standard infection-control precautions",
        ],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "What should you use to deal with a blood, vomit or urine spill?",
          options: ["A normal mop and bucket", "A spill kit with PPE and disposable materials", "Just water", "Air freshener"],
          correctIndex: 1,
          explanation: "Use a dedicated spill kit, the right PPE and disposable paper towels/cloths.",
        },
        {
          question: "Which disinfectant must NOT be used on urine?",
          options: ["Neutral detergent", "NaDCC / chlorine", "Soap", "Glass cleaner"],
          correctIndex: 1,
          explanation: "Per UKHSA, NaDCC (a form of chlorine) cannot be used on urine.",
        },
        {
          question: "What is the correct order when cleaning a spill?",
          options: [
            "Disinfect, then clean",
            "Absorb the fluid, clean with detergent, then disinfect",
            "Just disinfect",
            "Mop it across the floor",
          ],
          correctIndex: 1,
          explanation: "Absorb the fluid with disposable materials, clean with detergent (Stage 1), then disinfect (Stage 2).",
        },
        {
          question: "How should spill waste be disposed of?",
          options: ["Left in the open bin", "Double-bagged and disposed of correctly and immediately", "Flushed down the toilet", "Reused after washing"],
          correctIndex: 1,
          explanation: "Dispose of waste immediately, double-bagged, and dispose of cloths/towels safely.",
        },
        {
          question: "What must you do after removing your PPE?",
          options: ["Have a break", "Wash your hands thoroughly", "Put the gloves back on", "Nothing"],
          correctIndex: 1,
          explanation: "Always wash your hands thoroughly after removing PPE.",
        },
      ],
    },
  },

  {
    slug: "speed-systematic-cleaning",
    title: "Speed & Systematic Cleaning",
    description: "Work top-to-bottom, clean-to-dirty and systematically around a room to clean faster with no backtracking.",
    category: "foundational",
    icon: "⚡",
    estimatedMinutes: 10,
    orderIndex: 8,
    lessons: [
      {
        slug: "speed-systematic-cleaning",
        title: "Speed & systematic cleaning",
        summary: "Use professional principles to clean a room quickly, thoroughly and in the right order.",
        estimatedMinutes: 8,
        intro:
          "Professional cleaners are fast because they are systematic, not because they rush. A consistent method means you never miss a spot and never go back over clean areas.",
        learningObjectives: [
          "Apply the core principles: top-to-bottom, clean-to-dirty, systematic.",
          "Understand zone cleaning vs team cleaning.",
        ],
        method: [
          "Top-to-bottom: clean high before low so gravity carries dust and drips onto surfaces you haven't done yet.",
          "Clean-to-dirty: start with the cleanest surfaces and finish with the dirtiest.",
          "Work systematically clockwise / left-to-right around the room so you never backtrack.",
          "'If it isn't dirty, don't clean it' — focus effort where it's needed.",
          "Carry your tools in an apron or caddy so everything is to hand (a key 'Speed Cleaning' rule).",
          "Zone cleaning = each cleaner owns an area. Team cleaning = specialists (e.g. a restroom person) move through the building — better consistency and speed on large sites like schools.",
        ],
        dos: [
          "Always start high and work down.",
          "Move around the room in one direction.",
          "Keep your tools with you to avoid wasted trips.",
        ],
        donts: [
          "Don't clean low areas before high ones.",
          "Don't backtrack over areas you've finished.",
          "Don't re-clean things that aren't dirty.",
        ],
        safetyNotes: ["Working systematically also means you spot hazards (spills, damage) as you go."],
        videos: [],
        references: ["Jeff Campbell 'Speed Cleaning' 13 rules", "BICSc systematic cleaning principles"],
      },
    ],
    quiz: {
      passMark: 80,
      questions: [
        {
          question: "Why do professionals clean top-to-bottom?",
          options: [
            "It looks neater",
            "Gravity carries dust and drips down onto surfaces not yet cleaned",
            "It is faster to reach high places",
            "There is no real reason",
          ],
          correctIndex: 1,
          explanation: "Cleaning high before low means dust and drips fall onto areas you'll clean afterwards, not ones you've finished.",
        },
        {
          question: "What does working 'clean-to-dirty' mean?",
          options: [
            "Start with the dirtiest area",
            "Start with the cleanest surfaces and finish with the dirtiest",
            "Clean only dirty areas",
            "Clean everything twice",
          ],
          correctIndex: 1,
          explanation: "Start with the cleanest surfaces and end with the dirtiest so you don't spread contamination.",
        },
        {
          question: "Why move clockwise / in one direction around a room?",
          options: ["To avoid backtracking and missing spots", "It is the law", "To use more chemical", "No reason"],
          correctIndex: 0,
          explanation: "Working systematically in one direction means you never backtrack and never miss a surface.",
        },
        {
          question: "What is 'team cleaning'?",
          options: [
            "Everyone cleans the same room together",
            "Specialists (e.g. a restroom person) move through the building",
            "Cleaning only as a hobby",
            "One person does everything alone",
          ],
          correctIndex: 1,
          explanation: "Team cleaning uses specialists who move through the building, improving consistency and speed on large sites.",
        },
        {
          question: "Why carry your tools in an apron or caddy?",
          options: ["To look professional", "So everything is to hand and you avoid wasted trips", "It is required by law", "To carry more chemical"],
          correctIndex: 1,
          explanation: "Keeping tools to hand avoids wasted trips — a core 'Speed Cleaning' principle.",
        },
      ],
    },
  },
];
