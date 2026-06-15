const SWATCHES = [
  { name: "Red", hex: "#d92d20", use: "Toilets, washrooms, urinals, bathroom floors" },
  { name: "Blue", hex: "#1570ef", use: "General areas: offices, classrooms, corridors" },
  { name: "Green", hex: "#039855", use: "Kitchens, catering and food prep" },
  { name: "Yellow", hex: "#eab308", use: "Clinical / washroom basins, sinks, taps" },
];

/** Visual red/blue/green/yellow reference used in colour-coding lessons. */
export function ColourSwatches() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {SWATCHES.map((s) => (
        <div key={s.name} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
          <span
            className="h-12 w-12 shrink-0 rounded-lg border border-black/10"
            style={{ backgroundColor: s.hex }}
            aria-hidden
          />
          <div>
            <p className="font-bold text-ink">{s.name}</p>
            <p className="text-sm text-muted">{s.use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
