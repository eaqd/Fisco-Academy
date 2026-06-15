// Labelled instructional SVG diagrams for richer, more detailed learning.
// Self-contained vector art (no external image hosting) — crisp on any screen,
// accessible (role="img" + aria-label + visible text labels), and print-friendly.

const C = {
  red: "#d92d20",
  blue: "#1570ef",
  green: "#039855",
  yellow: "#eab308",
  brand: "#0d6e54",
  ink: "#111827",
  muted: "#64748b",
  line: "#cbd5e1",
  paper: "#f8fafc",
};

function Figure({
  caption,
  label,
  children,
}: {
  caption: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="bg-slate-50 p-4">
        <svg
          viewBox="0 0 600 360"
          className="mx-auto h-auto w-full max-w-2xl"
          role="img"
          aria-label={label}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {children}
        </svg>
      </div>
      <figcaption className="border-t border-slate-200 px-4 py-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

/* ---- Colour coding: clean-to-dirty flow ---------------------------------- */
export function ColourFlowDiagram() {
  const zones = [
    { c: C.blue, name: "BLUE", use: "Offices, classrooms, corridors" },
    { c: C.green, name: "GREEN", use: "Kitchens, food prep" },
    { c: C.yellow, name: "YELLOW", use: "Basins, sinks, taps" },
    { c: C.red, name: "RED", use: "Toilets, urinals, floors" },
  ];
  return (
    <Figure
      label="The four cleaning colours arranged from cleanest (blue) to dirtiest (red), showing the golden rule: always work from clean to dirty."
      caption="The golden rule: always work from the cleanest area (blue) towards the dirtiest (red). Never move equipment between colours."
    >
      <text x="300" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill={C.ink}>
        Work from CLEANEST → DIRTIEST
      </text>
      {zones.map((z, i) => {
        const x = 30 + i * 142;
        return (
          <g key={z.name}>
            <rect x={x} y={60} width={120} height={120} rx={12} fill={z.c} />
            <text x={x + 60} y={128} textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">
              {z.name}
            </text>
            <foreignObject x={x} y={190} width={120} height={70}>
              <div style={{ fontSize: 11, color: C.muted, textAlign: "center", lineHeight: 1.3 }}>{z.use}</div>
            </foreignObject>
          </g>
        );
      })}
      {/* arrow */}
      <line x1={40} y1={300} x2={545} y2={300} stroke={C.brand} strokeWidth={4} markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0,0 L10,6 L0,12 Z" fill={C.brand} />
        </marker>
      </defs>
      <text x={40} y={330} fontSize="12" fill={C.brand} fontWeight="700">
        Clean
      </text>
      <text x={505} y={330} fontSize="12" fill={C.brand} fontWeight="700">
        Dirty
      </text>
    </Figure>
  );
}

/* ---- Microfibre: fold for 8 sides ---------------------------------------- */
export function MicrofibreFoldDiagram() {
  return (
    <Figure
      label="A microfibre cloth folded in half, then in half again, creating eight clean working surfaces."
      caption="Fold in half, then in half again = 8 clean working sides. Turn to a fresh side as each one soils."
    >
      <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill={C.ink}>
        One cloth = 8 clean working sides
      </text>
      {/* step 1: open */}
      <g>
        <rect x={40} y={70} width={120} height={120} rx={8} fill="#e0f2eb" stroke={C.brand} strokeWidth={2} />
        <text x={100} y={210} textAnchor="middle" fontSize="12" fill={C.muted}>
          1. Open cloth
        </text>
      </g>
      <text x={185} y={135} fontSize="26" fill={C.muted}>→</text>
      {/* step 2: fold half */}
      <g>
        <rect x={220} y={70} width={120} height={60} rx={8} fill="#bfe3d4" stroke={C.brand} strokeWidth={2} />
        <rect x={220} y={130} width={120} height={60} rx={8} fill="#e0f2eb" stroke={C.brand} strokeWidth={2} strokeDasharray="4 3" />
        <text x={280} y={210} textAnchor="middle" fontSize="12" fill={C.muted}>
          2. Fold in half
        </text>
      </g>
      <text x={365} y={135} fontSize="26" fill={C.muted}>→</text>
      {/* step 3: fold again -> quarter, label 8 */}
      <g>
        <rect x={400} y={70} width={120} height={120} rx={8} fill="#bfe3d4" stroke={C.brand} strokeWidth={2} />
        <line x1={460} y1={70} x2={460} y2={190} stroke={C.brand} strokeWidth={1.5} />
        <line x1={400} y1={130} x2={520} y2={130} stroke={C.brand} strokeWidth={1.5} />
        {[
          [430, 105],
          [490, 105],
          [430, 165],
          [490, 165],
        ].map(([cx, cy], i) => (
          <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="13" fontWeight="700" fill={C.brand}>
            {i + 1}
          </text>
        ))}
        <text x={460} y={210} textAnchor="middle" fontSize="12" fill={C.muted}>
          3. Fold again
        </text>
      </g>
      <text x="300" y={270} textAnchor="middle" fontSize="12" fill={C.ink}>
        4 numbered sides shown — flip the cloth over for sides 5–8.
      </text>
      <g>
        <rect x={150} y={290} width={140} height={44} rx={8} fill={C.paper} stroke={C.line} />
        <text x={220} y={312} textAnchor="middle" fontSize="12" fontWeight="700" fill={C.ink}>DRY = dusting</text>
        <text x={220} y={328} textAnchor="middle" fontSize="11" fill={C.muted}>(lifts dust)</text>
        <rect x={310} y={290} width={140} height={44} rx={8} fill={C.paper} stroke={C.line} />
        <text x={380} y={312} textAnchor="middle" fontSize="12" fontWeight="700" fill={C.ink}>DAMP = cleaning</text>
        <text x={380} y={328} textAnchor="middle" fontSize="11" fill={C.muted}>(polishing)</text>
      </g>
    </Figure>
  );
}

/* ---- Two-stage cleaning + dwell time ------------------------------------- */
export function TwoStageDiagram() {
  return (
    <Figure
      label="Two-stage cleaning: stage one clean with detergent to remove soil, stage two disinfect and keep the surface wet for the full dwell time."
      caption="Clean first to remove soil, then disinfect. Keep the surface visibly WET for the full dwell time (30s–10min)."
    >
      <g>
        <rect x={30} y={70} width={250} height={150} rx={12} fill="#e0f2eb" stroke={C.brand} strokeWidth={2} />
        <circle cx={70} cy={110} r={18} fill={C.brand} />
        <text x={70} y={116} textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">1</text>
        <text x={100} y={116} fontSize="16" fontWeight="800" fill={C.ink}>CLEAN</text>
        <text x={50} y={150} fontSize="12" fill={C.muted}>Remove visible soil with</text>
        <text x={50} y={170} fontSize="12" fill={C.muted}>detergent and water.</text>
        <text x={50} y={196} fontSize="11" fill={C.brand} fontWeight="700">Disinfectant can&apos;t reach</text>
        <text x={50} y={210} fontSize="11" fill={C.brand} fontWeight="700">germs hidden under dirt.</text>
      </g>
      <text x={300} y={150} fontSize="30" fill={C.muted}>→</text>
      <g>
        <rect x={330} y={70} width={250} height={150} rx={12} fill="#dbeafe" stroke={C.blue} strokeWidth={2} />
        <circle cx={370} cy={110} r={18} fill={C.blue} />
        <text x={370} y={116} textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">2</text>
        <text x={400} y={116} fontSize="16" fontWeight="800" fill={C.ink}>DISINFECT</text>
        <text x={350} y={150} fontSize="12" fill={C.muted}>Apply to the clean surface.</text>
        <text x={350} y={176} fontSize="12" fill={C.muted}>Keep it visibly WET for the</text>
        <text x={350} y={192} fontSize="12" fill={C.muted}>full contact time, then</text>
        <text x={350} y={208} fontSize="12" fill={C.muted}>let it air dry.</text>
      </g>
      {/* dwell timer */}
      <g>
        <rect x={170} y={250} width={260} height={80} rx={12} fill={C.paper} stroke={C.line} />
        <circle cx={210} cy={290} r={24} fill="none" stroke={C.yellow} strokeWidth={6} />
        <path d="M210 290 L210 272 M210 290 L224 290" stroke={C.ink} strokeWidth={3} strokeLinecap="round" />
        <text x={250} y={285} fontSize="14" fontWeight="700" fill={C.ink}>DWELL TIME</text>
        <text x={250} y={306} fontSize="12" fill={C.muted}>30 seconds to 10 minutes</text>
        <text x={250} y={322} fontSize="11" fill={C.red} fontWeight="700">Don&apos;t wipe off early!</text>
      </g>
    </Figure>
  );
}

/* ---- Floor care: S-pattern, work backwards ------------------------------- */
export function FloorSPatternDiagram() {
  return (
    <Figure
      label="A room floor mopped in an S-shaped figure-of-eight pattern, working backwards towards the door, with a wet floor sign."
      caption="Sweep first, then damp-mop in an 'S' pattern, working backwards out of the room so you never walk on the clean floor."
    >
      <rect x={60} y={50} width={420} height={250} rx={8} fill={C.paper} stroke={C.line} strokeWidth={2} />
      {/* door */}
      <rect x={250} y={300} width={70} height={12} fill={C.brand} />
      <text x={285} y={332} textAnchor="middle" fontSize="12" fill={C.brand} fontWeight="700">DOOR (exit)</text>
      {/* S path */}
      <path
        d="M110 90 H430 M430 90 Q450 130 430 150 H110 Q90 190 110 210 H430 Q450 250 430 270 H300"
        fill="none"
        stroke={C.blue}
        strokeWidth={5}
        strokeLinecap="round"
        markerEnd="url(#arrowB)"
      />
      <defs>
        <marker id="arrowB" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0,0 L10,6 L0,12 Z" fill={C.blue} />
        </marker>
      </defs>
      <text x={110} y={80} fontSize="12" fill={C.ink} fontWeight="700">Start at the back</text>
      {/* wet floor sign */}
      <g transform="translate(500,150)">
        <polygon points="0,60 30,60 22,0 8,0" fill={C.yellow} stroke="#a16207" />
        <text x={15} y={40} textAnchor="middle" fontSize="9" fontWeight="800" fill="#a16207">WET</text>
        <text x={15} y={84} textAnchor="middle" fontSize="10" fill={C.muted}>Sign out</text>
      </g>
    </Figure>
  );
}

/* ---- COSHH: SDS sections + CLP pictograms -------------------------------- */
export function SdsDiagram() {
  const key = [2, 7, 8, 11];
  return (
    <Figure
      label="A Safety Data Sheet has 16 sections; sections 2, 7, 8 and 11 are highlighted as most important, alongside GB CLP hazard pictograms."
      caption="An SDS has 16 sections. Most important for operatives: 2 (hazards), 7 (handling/storage), 8 (PPE), 11 (health effects)."
    >
      <text x="300" y="26" textAnchor="middle" fontSize="15" fontWeight="700" fill={C.ink}>
        Safety Data Sheet — 16 sections
      </text>
      {Array.from({ length: 16 }, (_, i) => {
        const n = i + 1;
        const col = i % 8;
        const row = Math.floor(i / 8);
        const x = 30 + col * 68;
        const y = 45 + row * 50;
        const hot = key.includes(n);
        return (
          <g key={n}>
            <rect x={x} y={y} width={58} height={40} rx={6} fill={hot ? C.brand : C.paper} stroke={hot ? C.brand : C.line} />
            <text x={x + 29} y={y + 25} textAnchor="middle" fontSize="14" fontWeight="700" fill={hot ? "#fff" : C.muted}>
              {n}
            </text>
          </g>
        );
      })}
      <text x="300" y={170} textAnchor="middle" fontSize="11" fill={C.brand} fontWeight="700">
        ■ Highlighted = read these first
      </text>
      <text x="300" y="205" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.ink}>
        GB CLP hazard pictograms
      </text>
      {[
        { x: 120, label: "Corrosive" },
        { x: 240, label: "Health hazard" },
        { x: 360, label: "Toxic" },
        { x: 480, label: "Irritant" },
      ].map((p) => (
        <g key={p.label} transform={`translate(${p.x},230)`}>
          <polygon points="40,0 80,40 40,80 0,40" fill="#fff" stroke={C.red} strokeWidth={4} />
          <text x={40} y={46} textAnchor="middle" fontSize="20">⚠</text>
          <text x={40} y={100} textAnchor="middle" fontSize="11" fill={C.muted}>{p.label}</text>
        </g>
      ))}
      <text x="300" y={350} textAnchor="middle" fontSize="11" fill={C.red} fontWeight="700">
        NEVER mix products — bleach + acid releases chlorine gas.
      </text>
    </Figure>
  );
}

/* ---- PPE order ----------------------------------------------------------- */
export function PpeDiagram() {
  const items = [
    { icon: "🧤", label: "Gloves", note: "Prevent dermatitis" },
    { icon: "🦺", label: "Apron", note: "Splash barrier" },
    { icon: "🥽", label: "Eye protection", note: "Against splashes" },
    { icon: "😷", label: "Mask", note: "If SDS requires" },
  ];
  return (
    <Figure
      label="Personal protective equipment for cleaning: gloves, apron, eye protection and a mask where required."
      caption="Put on the right PPE before you start: gloves and apron as a minimum; add eye protection and a mask where the SDS or risk assessment requires."
    >
      <text x="300" y="40" textAnchor="middle" fontSize="16" fontWeight="700" fill={C.ink}>
        Your PPE
      </text>
      {items.map((it, i) => {
        const x = 40 + i * 140;
        return (
          <g key={it.label}>
            <rect x={x} y={80} width={120} height={150} rx={12} fill={C.paper} stroke={C.line} />
            <text x={x + 60} y={150} textAnchor="middle" fontSize="44">
              {it.icon}
            </text>
            <text x={x + 60} y={195} textAnchor="middle" fontSize="14" fontWeight="700" fill={C.ink}>
              {it.label}
            </text>
            <text x={x + 60} y={216} textAnchor="middle" fontSize="11" fill={C.muted}>
              {it.note}
            </text>
          </g>
        );
      })}
      <text x="300" y={290} textAnchor="middle" fontSize="12" fill={C.brand} fontWeight="700">
        Remove PPE carefully, then ALWAYS wash your hands.
      </text>
    </Figure>
  );
}

/* ---- Bodily fluid spill steps -------------------------------------------- */
export function SpillStepsDiagram() {
  const steps = [
    "PPE on: gloves + apron",
    "Sign & isolate area",
    "Absorb with paper towels",
    "Clean with detergent",
    "Disinfect (NOT chlorine on urine)",
    "Double-bag waste, wash hands",
  ];
  return (
    <Figure
      label="Six numbered steps for cleaning a bodily-fluid spill safely, from putting on PPE to double-bagging waste and washing hands."
      caption="The spill-kit sequence. Remember: NaDCC / chlorine must NOT be used on urine."
    >
      {steps.map((s, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 30 + col * 295;
        const y = 50 + row * 95;
        return (
          <g key={i}>
            <rect x={x} y={y} width={275} height={75} rx={10} fill={C.paper} stroke={C.line} />
            <circle cx={x + 38} cy={y + 37} r={20} fill={i === 4 ? C.red : C.brand} />
            <text x={x + 38} y={y + 44} textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">
              {i + 1}
            </text>
            <foreignObject x={x + 68} y={y + 12} width={195} height={55}>
              <div style={{ fontSize: 13, color: C.ink, lineHeight: 1.25, display: "flex", height: "100%", alignItems: "center" }}>
                {s}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </Figure>
  );
}

/* ---- Systematic cleaning: top-to-bottom + clockwise ---------------------- */
export function SystematicRoomDiagram() {
  return (
    <Figure
      label="A room shown with arrows: clean top to bottom, and work clockwise around the room without backtracking."
      caption="Top-to-bottom (gravity) and clockwise around the room so dust falls onto un-cleaned areas and you never backtrack."
    >
      <rect x={70} y={50} width={400} height={250} rx={8} fill={C.paper} stroke={C.line} strokeWidth={2} />
      {/* top to bottom arrow */}
      <line x1={520} y1={60} x2={520} y2={290} stroke={C.brand} strokeWidth={4} markerEnd="url(#ttb)" />
      <text x={535} y={120} fontSize="12" fill={C.brand} fontWeight="700" transform="rotate(90 535 120)">
        TOP → BOTTOM
      </text>
      {/* clockwise path */}
      <path
        d="M120 90 H420 V260 H120 Z"
        fill="none"
        stroke={C.blue}
        strokeWidth={4}
        strokeDasharray="8 6"
        markerEnd="url(#cw)"
      />
      <defs>
        <marker id="ttb" markerWidth="12" markerHeight="12" refX="6" refY="9" orient="auto">
          <path d="M0,0 L12,0 L6,10 Z" fill={C.brand} />
        </marker>
        <marker id="cw" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0,0 L10,6 L0,12 Z" fill={C.blue} />
        </marker>
      </defs>
      <text x={270} y={80} textAnchor="middle" fontSize="12" fill={C.blue} fontWeight="700">
        Work clockwise — don&apos;t backtrack
      </text>
      <text x={270} y={185} textAnchor="middle" fontSize="13" fill={C.muted}>
        &ldquo;If it isn&apos;t dirty, don&apos;t clean it.&rdquo;
      </text>
    </Figure>
  );
}

/* ---- Hand hygiene moments ------------------------------------------------ */
export function HandwashDiagram() {
  const moments = ["After toileting help", "Before food handling", "After removing gloves", "After any spill"];
  return (
    <Figure
      label="Hand-washing technique with liquid soap, warm water and paper towels, and the key moments to wash hands."
      caption="Liquid soap + warm water + paper towels (no bar soap). Alcohol gel is not effective against norovirus."
    >
      <text x="300" y="36" textAnchor="middle" fontSize="16" fontWeight="700" fill={C.ink}>
        Wash hands — the key moments
      </text>
      <g transform="translate(250,55)">
        <circle cx={50} cy={50} r={48} fill="#dbeafe" stroke={C.blue} strokeWidth={2} />
        <text x={50} y={68} textAnchor="middle" fontSize="40">🧼</text>
      </g>
      {moments.map((m, i) => {
        const y = 190 + Math.floor(i / 2) * 70;
        const x = 60 + (i % 2) * 290;
        return (
          <g key={m}>
            <rect x={x} y={y} width={240} height={52} rx={10} fill={C.paper} stroke={C.line} />
            <circle cx={x + 26} cy={y + 26} r={14} fill={C.brand} />
            <text x={x + 26} y={y + 31} textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">✓</text>
            <text x={x + 50} y={y + 31} fontSize="13" fill={C.ink}>{m}</text>
          </g>
        );
      })}
    </Figure>
  );
}

/* ---- Nursery nappy-changing station -------------------------------------- */
export function NappyStationDiagram() {
  return (
    <Figure
      label="A labelled nappy-changing station showing the changing mat, gloves and apron, sealed nappy bin and handwash basin."
      caption="Clean and disinfect the mat between EVERY child. Gloves + apron each change; sealed bin emptied daily; wash hands before and after."
    >
      <rect x={40} y={120} width={260} height={120} rx={10} fill="#e0f2eb" stroke={C.brand} strokeWidth={2} />
      <text x={170} y={185} textAnchor="middle" fontSize="14" fontWeight="700" fill={C.brand}>Changing mat</text>
      <line x1={170} y1={120} x2={170} y2={90} stroke={C.muted} />
      <text x={170} y={80} textAnchor="middle" fontSize="11" fill={C.muted}>Disinfect between each child</text>

      <rect x={330} y={70} width={100} height={80} rx={10} fill={C.paper} stroke={C.line} />
      <text x={380} y={115} textAnchor="middle" fontSize="34">🧤</text>
      <text x={380} y={170} textAnchor="middle" fontSize="11" fill={C.muted}>Gloves + apron</text>

      <rect x={450} y={70} width={110} height={170} rx={10} fill={C.paper} stroke={C.line} />
      <rect x={478} y={95} width={54} height={70} rx={6} fill={C.green} />
      <text x={505} y={185} textAnchor="middle" fontSize="11" fill={C.muted}>Sealed nappy</text>
      <text x={505} y={200} textAnchor="middle" fontSize="11" fill={C.muted}>bin (daily)</text>

      <rect x={330} y={170} width={100} height={70} rx={10} fill={C.paper} stroke={C.line} />
      <text x={380} y={212} textAnchor="middle" fontSize="30">🚰</text>
      <text x={380} y={250} textAnchor="middle" fontSize="11" fill={C.muted}>Handwash basin</text>

      <text x="300" y={300} textAnchor="middle" fontSize="12" fill={C.brand} fontWeight="700">
        Wash hands BEFORE and AFTER every single change.
      </text>
    </Figure>
  );
}
