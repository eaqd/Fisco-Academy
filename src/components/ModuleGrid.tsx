import type { Module } from "@/lib/types";
import { ModuleCard } from "./ModuleCard";

export function ModuleGrid({ modules }: { modules: Module[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => (
        <ModuleCard key={m.slug} module={m} />
      ))}
    </div>
  );
}
