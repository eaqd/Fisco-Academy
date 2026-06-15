// PART B — credible learning sources (verify all links live before launch; re-check termly).

export interface SourceLink {
  label: string;
  url: string;
  note: string;
}

export interface SourceGroup {
  heading: string;
  blurb: string;
  links: SourceLink[];
}

export const sourceGroups: SourceGroup[] = [
  {
    heading: "Official institutional / government",
    blurb: "Strongest credibility — UK standards bodies and the NHS.",
    links: [
      {
        label: "BICSc — British Institute of Cleaning Science",
        url: "https://www.youtube.com/@BICSc",
        note: "Webinars and industry updates. NOTE: genuine step-by-step skill demos are paywalled on the BICSc Virtual Training Suite (training.bics.org.uk), not free on YouTube.",
      },
      {
        label: "BICSc colour-coding reference",
        url: "https://www.bics.org.uk/colour-coding/",
        note: "The authoritative definition of the red/blue/green/yellow system.",
      },
      {
        label: "How to wash your hands | NHS",
        url: "https://www.youtube.com/watch?v=aGJNspLRdrc",
        note: "Official NHS handwashing technique. Verify the link is live (it hit a temporary rate-limit during research).",
      },
      {
        label: "NHS Scotland — handwashing & drying technique",
        url: "https://www.youtube.com/watch?v=-boVsHgDDOc",
        note: "Nurse-led liquid-soap + paper-towel technique. Official NHS body.",
      },
      {
        label: "UK Health Security Agency (UKHSA) & e-Bug",
        url: "https://www.e-bug.eu/",
        note: "Government infection-prevention and hand-hygiene resources (KS2/KS3).",
      },
    ],
  },
  {
    heading: "Manufacturer training (reputable, UK-relevant)",
    blurb: "Official OEM demonstrations for equipment used on FISCO sites.",
    links: [
      {
        label: "Kärcher Academy / Kärcher Professional UK",
        url: "https://www.kaercher.com/uk/",
        note: "Scrubber-dryer operation guides and Academy training videos. Global market-leading professional equipment maker.",
      },
      {
        label: "i-team Global / i-mop",
        url: "https://www.youtube.com/@iteamGlobal",
        note: "Flat-mop/scrubber setup and use. Official OEM, B Corp.",
      },
      {
        label: "Prochem Europe",
        url: "https://www.prochem.co.uk/",
        note: "Carpet, upholstery and hard-floor maintenance. Leading UK carpet/floor cleaning academy.",
      },
    ],
  },
  {
    heading: "Technique demonstrations (review before adopting)",
    blurb: "Independent sources — useful, but check terminology and UK alignment first.",
    links: [
      {
        label: "How To Clean Commercial Washroom — essential training",
        url: "https://www.youtube.com/watch?v=FKfgTOglnbo",
        note: "UK-oriented step-by-step washroom training.",
      },
      {
        label: "GV Health — body fluid spill clean-up",
        url: "https://www.youtube.com/watch?v=FJQ-8REiXUM",
        note: "UK infection-prevention manufacturer demonstrating spill-pack use. Most UK-aligned spill video found.",
      },
    ],
  },
  {
    heading: "Industry bodies / context",
    blurb: "Methodology and institutional reference.",
    links: [
      {
        label: "British Cleaning Council",
        url: "https://www.britishcleaningcouncil.org/",
        note: "Institutional / methodology reference.",
      },
    ],
  },
];

export const sourcingCaveat =
  "BICSc's genuine technique-demonstration videos are paywalled on its Virtual Training Suite — the free YouTube channel is webinars/promo only. The strongest free institutional videos are from NHS/UKHSA, Kärcher, i-team and Prochem. Verify every link is live before launch and re-check at least termly.";
