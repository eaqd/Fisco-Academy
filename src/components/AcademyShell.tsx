"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { SignInForm } from "./SignInForm";
import { useProfile } from "@/lib/hooks";
import { signOut } from "@/lib/progress";

const NAV = [
  { href: "/academy", label: "Home", icon: "🏠" },
  { href: "/academy/foundations", label: "Foundations", icon: "🎓" },
  { href: "/academy/offices", label: "Offices", icon: "🏢" },
  { href: "/academy/schools", label: "Schools", icon: "🏫" },
  { href: "/academy/nurseries", label: "Nurseries", icon: "🧸" },
  { href: "/academy/progress", label: "Progress", icon: "📊" },
];

// Bottom mobile bar shows the most-used destinations.
const MOBILE_NAV = [
  { href: "/academy", label: "Home", icon: "🏠" },
  { href: "/academy/foundations", label: "Learn", icon: "🎓" },
  { href: "/academy/search", label: "Search", icon: "🔍" },
  { href: "/academy/progress", label: "Progress", icon: "📊" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/academy") return pathname === "/academy";
  return pathname.startsWith(href);
}

export function AcademyShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { profile, ready } = useProfile();

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted" aria-busy>
        Loading…
      </div>
    );
  }

  if (!profile) {
    return <SignInForm />;
  }

  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      {/* Top nav */}
      <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-semibold no-underline transition ${
                  isActive(pathname, item.href)
                    ? "bg-brand-light text-brand-dark"
                    : "text-ink hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/academy/search"
              aria-label="Search"
              className="hidden rounded-lg p-2 text-lg hover:bg-slate-100 sm:inline-flex"
            >
              🔍
            </Link>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold leading-tight">{profile.fullName}</p>
              <p className="text-xs capitalize text-muted">{profile.role}</p>
            </div>
            <button onClick={() => signOut()} className="text-sm font-semibold text-brand hover:underline">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="container-page py-6 sm:py-10">
        {children}
      </main>

      <footer className="no-print border-t border-slate-200 bg-white">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
          <p>© FISCO Cleaning Services — internal staff training.</p>
          <nav aria-label="Footer" className="flex gap-4">
            <Link href="/academy/sources" className="font-semibold text-brand">
              Learning sources
            </Link>
            <Link href="/academy/progress" className="font-semibold text-brand">
              My certificates
            </Link>
            {(profile.role === "admin" || profile.role === "supervisor") && (
              <Link href="/academy/admin" className="font-semibold text-brand">
                Admin
              </Link>
            )}
          </nav>
        </div>
      </footer>

      {/* Bottom mobile nav */}
      <nav
        aria-label="Mobile"
        className="no-print fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white sm:hidden"
      >
        {MOBILE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className={`flex flex-col items-center gap-0.5 py-2 text-xs font-medium no-underline ${
              isActive(pathname, item.href) ? "text-brand" : "text-muted"
            }`}
          >
            <span className="text-xl" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
