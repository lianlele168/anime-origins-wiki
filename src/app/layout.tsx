import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://animeorigins.robloxwikihub.com"),
  title: "Anime Origins Wiki — 2026 Codes, Trait Simulator & Tier List",
  description: "The ultimate Anime Origins Roblox guide — Unit Tier List, Active Redeem Codes, Trait Reroll Simulator, and Evolution Recipes.",
  keywords: ["Anime Origins", "Anime Origins codes", "Anime Origins wiki", "Anime Origins tier list", "Roblox"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Anime Origins Wiki",
    description: "The ultimate Anime Origins Roblox guide — Unit Tier List, Active Redeem Codes, Trait Reroll Simulator.",
    url: "https://animeorigins.robloxwikihub.com",
    siteName: "Anime Origins Wiki",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300">
              Anime Origins Wiki
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/codes" className="hover:text-amber-400">Codes</a>
              <a href="/calculator" className="hover:text-amber-400">Calculator</a>
              <a href="/tier-list" className="hover:text-amber-400">Tier List</a>
              <a href="/trait-simulator" className="hover:text-amber-400">🎲 Trait Sim</a>
              <a href="/evolution-guide" className="hover:text-amber-400">⬆️ Evolution</a>
              <a href="/beginner-guide" className="hover:text-amber-400">📖 Guide</a>
              <a href="https://robloxwikihub.com" className="text-xs text-slate-400 hover:text-slate-200 bg-slate-800 px-3 py-1.5 rounded-full">Roblox Wiki Hub</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
          <p>© 2026 Anime Origins Wiki — Part of <a href="https://robloxwikihub.com" className="underline hover:text-slate-400">Roblox Wiki Hub Network</a>. Unofficial guide.</p>
        </footer>
      </body>
    </html>
  );
}
