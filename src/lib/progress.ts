"use client";

import type { Role } from "./types";

// Browser-stored progress + profile. Mirrors the Supabase tables (profiles, progress,
// quiz_results, certificates) so this can be swapped for real Supabase calls later
// without changing the component API.

const PROFILE_KEY = "fisco.profile.v1";
const PROGRESS_KEY = "fisco.progress.v1";
const QUIZ_KEY = "fisco.quizResults.v1";
const CERT_KEY = "fisco.certificates.v1";

export interface Profile {
  fullName: string;
  role: Role;
  siteTypes: string[];
  preferredLanguage: string;
  createdAt: string;
}

export type LessonStatus = "not_started" | "in_progress" | "completed";

export interface QuizResult {
  moduleSlug: string;
  score: number; // percent
  passed: boolean;
  takenAt: string;
}

export interface Certificate {
  moduleSlug: string;
  moduleTitle: string;
  certificateNo: string;
  issuedAt: string;
  fullName: string;
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  // Notify listeners in the same tab (storage event only fires cross-tab).
  window.dispatchEvent(new CustomEvent("fisco:store-change"));
}

// ---- Profile -------------------------------------------------------------

export function getProfile(): Profile | null {
  return read<Profile | null>(PROFILE_KEY, null);
}

export function saveProfile(profile: Profile): void {
  write(PROFILE_KEY, profile);
}

export function signOut(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(PROFILE_KEY);
  window.dispatchEvent(new CustomEvent("fisco:store-change"));
}

// ---- Lesson progress -----------------------------------------------------

type ProgressMap = Record<string, LessonStatus>;

export function getLessonStatus(lessonSlug: string): LessonStatus {
  const map = read<ProgressMap>(PROGRESS_KEY, {});
  return map[lessonSlug] ?? "not_started";
}

export function setLessonStatus(lessonSlug: string, status: LessonStatus): void {
  const map = read<ProgressMap>(PROGRESS_KEY, {});
  map[lessonSlug] = status;
  write(PROGRESS_KEY, map);
}

export function getAllLessonStatus(): ProgressMap {
  return read<ProgressMap>(PROGRESS_KEY, {});
}

// ---- Quiz results --------------------------------------------------------

export function getQuizResults(): QuizResult[] {
  return read<QuizResult[]>(QUIZ_KEY, []);
}

export function getBestQuizResult(moduleSlug: string): QuizResult | undefined {
  return getQuizResults()
    .filter((r) => r.moduleSlug === moduleSlug)
    .sort((a, b) => b.score - a.score)[0];
}

export function saveQuizResult(result: QuizResult): void {
  const results = getQuizResults();
  results.push(result);
  write(QUIZ_KEY, results);
}

export function isModulePassed(moduleSlug: string): boolean {
  return Boolean(getBestQuizResult(moduleSlug)?.passed);
}

// ---- Certificates --------------------------------------------------------

export function getCertificates(): Certificate[] {
  return read<Certificate[]>(CERT_KEY, []);
}

export function getCertificate(moduleSlug: string): Certificate | undefined {
  return getCertificates().find((c) => c.moduleSlug === moduleSlug);
}

export function issueCertificate(cert: Omit<Certificate, "certificateNo" | "issuedAt">): Certificate {
  const existing = getCertificate(cert.moduleSlug);
  if (existing) return existing;
  const issuedAt = new Date().toISOString();
  const certificateNo = `FISCO-${cert.moduleSlug.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8)}-${Date.now()
    .toString(36)
    .toUpperCase()}`;
  const full: Certificate = { ...cert, certificateNo, issuedAt };
  const certs = getCertificates();
  certs.push(full);
  write(CERT_KEY, certs);
  return full;
}
