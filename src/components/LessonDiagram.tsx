import {
  ColourFlowDiagram,
  FloorSPatternDiagram,
  HandwashDiagram,
  MicrofibreFoldDiagram,
  NappyStationDiagram,
  PpeDiagram,
  SdsDiagram,
  SpillStepsDiagram,
  SystematicRoomDiagram,
  TwoStageDiagram,
} from "./Diagrams";

// Maps a lesson slug to its labelled instructional diagram(s).
const REGISTRY: Record<string, React.FC[]> = {
  "the-4-colour-code": [ColourFlowDiagram],
  "reading-an-sds-and-dilution": [SdsDiagram, PpeDiagram],
  "two-stage-cleaning-dwell-time": [TwoStageDiagram],
  "microfibre-technique": [MicrofibreFoldDiagram],
  "floor-care-basics": [FloorSPatternDiagram],
  "hand-hygiene-cross-contamination": [HandwashDiagram],
  "bodily-fluid-spills": [SpillStepsDiagram, PpeDiagram],
  "speed-systematic-cleaning": [SystematicRoomDiagram],
  "nursery-nappy-and-food": [NappyStationDiagram],
};

export function LessonDiagram({ slug }: { slug: string }) {
  const diagrams = REGISTRY[slug];
  if (!diagrams) return null;
  return (
    <section className="space-y-4">
      <h2>🖼️ Visual guide</h2>
      {diagrams.map((D, i) => (
        <D key={i} />
      ))}
    </section>
  );
}
