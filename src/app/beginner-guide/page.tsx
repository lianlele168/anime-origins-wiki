import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Origins Beginner Guide & Progression Tips',
  description: 'Verified Anime Origins starter guide: save Gems before summoning, reroll traits at the Areas NPC, use Bluma for Infinite Mode income, and redeem codes at Level 10.',
  alternates: {
    canonical: '/beginner-guide',
  },
  keywords: ['anime origins beginner guide', 'anime origins tips', 'anime origins trait reroll guide'],
};

const tips = [
  { step: "1", title: "Save Gems Before Summoning", desc: "Units come from Gem summoning. Beebom's core advice: bank your Gems and spend them in focused sessions — scattered pulls land you D-tier low-rarity units fast.", icon: "💎" },
  { step: "2", title: "Reroll Traits at the Areas NPC", desc: "Open the right-side menu → Areas → Trait Reroll and walk to the NPC. Each unit can hold 2 traits but only 1 is active. Rerolls come from playing, missions and codes.", icon: "🎲" },
  { step: "3", title: "Know Which Traits to Keep", desc: "Beebom's trait tier list: S+ = Immortal / Ascendant / Overseer, S = Rupture / Stride / Decay, A = Ace / Head Hunter / Fury III / Haste III. Common Rare rolls like Fury I (+5%) should be rerolled.", icon: "✨" },
  { step: "4", title: "Redeem Codes at Level 10", desc: "Codes unlock at Level 10 via the Codes button (right-side menu) and are case-sensitive — 100K! needs the exclamation mark. Codes drop Trait Rerolls, Gems and Stat Prisms.", icon: "🎁" },
  { step: "5", title: "Build an Economy Core for Infinite Mode", desc: "Bluma (Data Analyst) reaches +30% Income with Training Data and Leorio refunds part of his upgrade cost — the backbone of Infinite Mode farming lineups.", icon: "📈" },
  { step: "6", title: "Respect Placement Limits", desc: "Powerful setups have placement caps (for example a unit with the Immortal trait is limited to 1 placement and 1 per team). Diversify your lineup instead of stacking copies.", icon: "⬆️" },
];

const faqs = [
  { q: "What is the best unit in Anime Origins?", a: "Beebom's August 2026 tier list puts Madaro (Edo Tensei), Cursed Lover (Pure Love) and Valcrad (Unleashed) in SS tier. Careful with the spellings: Goki (Goku parody, A-tier boss killer) and Goju (Gojo parody, S+ controller) are two different units." },
  { q: "How do traits work in Anime Origins?", a: "Traits are stat modifiers gained through Trait Rerolls. Each unit stores 2 traits but only 1 is active at a time. The strongest are Immortal (Secret), Ascendant and Overseer (S+ tier), followed by Rupture, Stride and Decay. There is no 'Monarch' or 'Godly' trait in this game — those belong to other Roblox anime games." },
  { q: "How do I get more Trait Rerolls?", a: "Playing the game, completing missions, and redeeming codes (100K! gives 25 Trait Rerolls). Codes require Level 10 and are case-sensitive." },
  { q: "Can I play Anime Origins on mobile?", a: "Yes — Roblox is available on iOS and Android. All game features work the same on mobile." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BeginnerGuidePage() {
  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Beginner Guide</h1>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">Everything you need to start strong in Anime Origins — Gems, traits, codes and economy. Every tip below is verified against Beebom&apos;s August 2026 guides (checked 2026-09-19).</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-amber-400">🚀 6-Step Quick Start</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map(t => (
            <div key={t.step} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
              <div className="w-10 h-10 bg-amber-950 border border-amber-700/50 rounded-xl flex items-center justify-center text-amber-400 font-black text-lg flex-shrink-0">{t.step}</div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">{t.icon} {t.title}</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">⚔️ Who to Actually Use Early On</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-sm text-slate-300 space-y-2 leading-relaxed">
          <p><strong className="text-white">Sosuke (Eternal)</strong> is the standard C-tier transition Ground unit — fine for the story, replace it the moment you pull better.</p>
          <p><strong className="text-white">Itsoda</strong> (best Legendary) is a Hill unit that can hit flying enemies, and <strong className="text-white">Gyutari (Upper Moon)</strong> clears mobs with full AoE plus poison and Blood Cut explosions.</p>
          <p>For bosses, <strong className="text-white">Goki (Super 3)</strong> stacks Fighting Spirit for damage and crit — one of the best boss killers even at A tier.</p>
          <p>For money, <strong className="text-white">Bluma (Data Analyst)</strong> eventually grants +30% Income — the core of Infinite Mode farming.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">❓ Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="font-semibold text-amber-300 text-sm">{faq.q}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
