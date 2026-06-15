import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

// Dyslexia-friendly, highly readable font.
const sans = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-loaded",
});

export const metadata: Metadata = {
  title: {
    default: "FISCO Academy — Cleaning Staff Training",
    template: "%s · FISCO Academy",
  },
  description:
    "Internal staff training portal for FISCO Cleaning Services. Learn professional cleaning of offices, schools and nurseries to UK standards (BICSc, UKHSA, COSHH, EYFS).",
  applicationName: "FISCO Academy",
};

export const viewport: Viewport = {
  themeColor: "#0d6e54",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a
          href="#main"
          className="no-print sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
