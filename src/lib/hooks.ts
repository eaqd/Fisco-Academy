"use client";

import { useEffect, useState } from "react";
import { foundationSlugs } from "@/data/content";
import type { Module } from "./types";
import {
  getProfile,
  isModulePassed,
  getAllLessonStatus,
  type Profile,
} from "./progress";

/** Re-renders the component whenever the local store changes (this tab or another). */
export function useStoreVersion(): number {
  const [version, setVersion] = useState(0);
  useEffect(() => {
    const bump = () => setVersion((v) => v + 1);
    window.addEventListener("fisco:store-change", bump);
    window.addEventListener("storage", bump);
    return () => {
      window.removeEventListener("fisco:store-change", bump);
      window.removeEventListener("storage", bump);
    };
  }, []);
  return version;
}

/** Returns the current profile, or null, and re-renders when it changes. Hydration-safe. */
export function useProfile(): { profile: Profile | null; ready: boolean } {
  useStoreVersion();
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    setProfile(getProfile());
    setReady(true);
  }, []);
  return { profile, ready };
}

/** True once all foundational module quizzes have been passed. */
export function foundationsComplete(): boolean {
  return foundationSlugs.every((slug) => isModulePassed(slug));
}

/** A site module is locked until all foundations are passed. */
export function isModuleLocked(module: Module): boolean {
  if (!module.requiresFoundations) return false;
  return !foundationsComplete();
}

/** Module-level progress: completed lessons / total, and whether the quiz is passed. */
export function moduleProgress(module: Module): {
  completed: number;
  total: number;
  percent: number;
  quizPassed: boolean;
} {
  const statuses = getAllLessonStatus();
  const total = module.lessons.length;
  const completed = module.lessons.filter((l) => statuses[l.slug] === "completed").length;
  const quizPassed = isModulePassed(module.slug);
  // The module is 100% only when lessons are done AND the quiz is passed.
  const lessonWeight = total > 0 ? (completed / total) * 80 : 0;
  const percent = Math.round(lessonWeight + (quizPassed ? 20 : 0));
  return { completed, total, percent, quizPassed };
}
