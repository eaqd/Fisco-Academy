import type { Category, Lesson, Module } from "@/lib/types";
import { foundationModules } from "./foundations";
import { siteModules } from "./sites";

// Single source of truth for all training content.
// When the Supabase backend is wired up, this same shape is seeded into Postgres.
export const modules: Module[] = [...foundationModules, ...siteModules];

export { foundationModules, siteModules };

export const foundationCount = foundationModules.length;

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByCategory(category: Category): Module[] {
  return modules
    .filter((m) => m.category === category)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}

export interface LessonLocation {
  module: Module;
  lesson: Lesson;
}

export function getLesson(slug: string): LessonLocation | undefined {
  for (const mod of modules) {
    const lesson = mod.lessons.find((l) => l.slug === slug);
    if (lesson) return { module: mod, lesson };
  }
  return undefined;
}

/** Flat list of every lesson with its parent module, in learning order. */
export function allLessons(): LessonLocation[] {
  const result: LessonLocation[] = [];
  for (const mod of [...modules].sort((a, b) => {
    const order: Category[] = ["foundational", "offices", "schools", "nurseries"];
    const c = order.indexOf(a.category) - order.indexOf(b.category);
    return c !== 0 ? c : a.orderIndex - b.orderIndex;
  })) {
    for (const lesson of mod.lessons) {
      result.push({ module: mod, lesson });
    }
  }
  return result;
}

export const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);
export const totalModules = modules.length;

/** Slugs of the foundational modules — these must all be passed to unlock site modules. */
export const foundationSlugs = foundationModules.map((m) => m.slug);
