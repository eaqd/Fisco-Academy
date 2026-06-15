"use client";

import { useState } from "react";
import { saveProfile } from "@/lib/progress";
import type { Role } from "@/lib/types";
import { Logo } from "./Logo";

const SITE_TYPES = ["Offices", "Schools", "Nurseries"];
const LANGUAGES = ["English", "Polish", "Romanian", "Portuguese", "Spanish", "Other"];

/**
 * Lightweight local sign-in. Stores a profile in the browser so progress is personal.
 * Swap this for Supabase Auth (email magic-link + password) when the backend is wired up.
 */
export function SignInForm() {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<Role>("operative");
  const [siteTypes, setSiteTypes] = useState<string[]>([]);
  const [language, setLanguage] = useState("English");

  function toggleSite(site: string) {
    setSiteTypes((prev) => (prev.includes(site) ? prev.filter((s) => s !== site) : [...prev, site]));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName.trim()) return;
    saveProfile({
      fullName: fullName.trim(),
      role,
      siteTypes,
      preferredLanguage: language,
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md p-6 sm:p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-4">Welcome to FISCO Academy</h1>
          <p className="mt-2 text-muted">
            Your training portal for cleaning offices, schools and nurseries to UK standards. Sign in to track your
            progress.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block font-semibold">
              Your full name
            </label>
            <input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus-visible:ring-2"
              placeholder="e.g. Maria Silva"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-1 block font-semibold">
              Your role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus-visible:ring-2"
            >
              <option value="operative">Cleaning operative</option>
              <option value="supervisor">Supervisor</option>
              <option value="admin">Admin / manager</option>
            </select>
          </div>

          <fieldset>
            <legend className="mb-1 font-semibold">Which sites do you clean? (optional)</legend>
            <div className="flex flex-wrap gap-2">
              {SITE_TYPES.map((site) => (
                <button
                  type="button"
                  key={site}
                  onClick={() => toggleSite(site)}
                  aria-pressed={siteTypes.includes(site)}
                  className={`pill border ${
                    siteTypes.includes(site)
                      ? "border-brand bg-brand text-white"
                      : "border-slate-300 bg-white text-ink"
                  }`}
                >
                  {site}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="lang" className="mb-1 block font-semibold">
              Preferred language
            </label>
            <select
              id="lang"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus-visible:ring-2"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-primary w-full">
            Start learning
          </button>
          <p className="text-center text-xs text-muted">
            Your progress is saved on this device. No password needed for this demo build.
          </p>
        </form>
      </div>
    </div>
  );
}
