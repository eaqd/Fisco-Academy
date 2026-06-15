// Green DO / red DON'T / amber SAFETY callout panels used on lesson pages.

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="text-[15px] leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DoPanel({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="rounded-xl border-2 border-green-200 bg-green-50 p-4">
      <h3 className="mb-2 flex items-center gap-2 text-green-800">
        <span aria-hidden>✅</span> DO
      </h3>
      <div className="text-green-900">
        <List items={items} />
      </div>
    </section>
  );
}

export function DontPanel({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="rounded-xl border-2 border-red-200 bg-red-50 p-4">
      <h3 className="mb-2 flex items-center gap-2 text-red-800">
        <span aria-hidden>⛔</span> DON&apos;T
      </h3>
      <div className="text-red-900">
        <List items={items} />
      </div>
    </section>
  );
}

export function SafetyPanel({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
      <h3 className="mb-2 flex items-center gap-2 text-amber-800">
        <span aria-hidden>⚠️</span> SAFETY
      </h3>
      <div className="text-amber-900">
        <List items={items} />
      </div>
    </section>
  );
}

export function ObjectivesBox({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="rounded-xl border-l-4 border-brand bg-brand-light/60 p-4">
      <h3 className="mb-2 text-brand-dark">Learning objectives</h3>
      <p className="mb-2 text-sm text-brand-dark/80">By the end of this lesson you will be able to:</p>
      <ul className="list-disc space-y-1 pl-5 text-[15px] text-ink">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
