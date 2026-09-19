"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { UNIT_TRAITS_DATA } from "@/data/wikiData";
import { Calculator, Sparkles, Dices, TrendingUp } from "lucide-react";

const RARITY_COLORS: Record<string, string> = {
  Secret: "text-amber-300 border-amber-500/50 bg-amber-950/40",
  Mythic: "text-fuchsia-300 border-fuchsia-500/50 bg-fuchsia-950/40",
  Legendary: "text-cyan-300 border-cyan-500/50 bg-cyan-950/40",
  Epic: "text-emerald-300 border-emerald-500/50 bg-emerald-950/40",
  Rare: "text-slate-300 border-slate-600/50 bg-slate-900",
};

function parseChance(chance: string): number {
  const m = chance.match(/([\d.]+)\s*%/);
  return m ? parseFloat(m[1]) : 0;
}

export default function CalculatorClient() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const trait = UNIT_TRAITS_DATA[selectedIdx] || UNIT_TRAITS_DATA[0];

  const pct = (s: string) => {
    const m = s.match(/-?([\d.]+)\s*%/);
    return m ? parseFloat(m[1]) : 0;
  };

  const dmg = pct(trait.damageBonus);
  const cd = pct(trait.cooldownBonus); // positive value = reduction
  const range = pct(trait.rangeBonus);

  // Real math from documented trait numbers:
  // throughput index = damage multiplier / remaining cooldown fraction
  const dmgMult = 1 + dmg / 100;
  const cdMult = cd > 0 ? 1 - cd / 100 : 1 + Math.abs(cd) / 100;
  const throughput = dmgMult / cdMult;

  const chanceNum = parseChance(trait.chance);
  const expectedRolls = chanceNum > 0 ? Math.ceil(100 / chanceNum) : 0;

  const topTraits = UNIT_TRAITS_DATA.filter(t => t.traitTier);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best trait in Anime Origins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per Beebom's trait tier list, the S+ traits are Immortal (Secret), Ascendant (19%, +35% boss damage) and Overseer (4.1%, +20% damage with 30% true damage on every attack).",
        },
      },
      {
        "@type": "Question",
        name: "How many rerolls does a Mythic trait take in Anime Origins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On documented drop rates, Overseer (4.1%) takes about 25 rerolls on average, Rupture (12.5%) about 8, and Ascendant (19%) about 6. Each unit holds 2 traits but only 1 is active.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Anime Origins Trait Reroll Expectation Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="border-b border-cyan-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Trait Reroll Planner
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Trait Reroll &amp; Odds Calculator</h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          All 23 documented traits with their real roll odds from Beebom&apos;s trait table. Compare stat
          packages and see the expected number of rerolls before a trait lands. Rerolls happen at the
          Areas → Trait Reroll NPC.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> 1. Pick a Trait
            </h2>
            <select
              value={selectedIdx}
              onChange={(e) => setSelectedIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-cyan-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {UNIT_TRAITS_DATA.map((t, idx) => (
                <option key={t.id} value={idx}>
                  {t.name} — {t.chance} ({t.rarity})
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-400 leading-relaxed">{trait.description}</p>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> 2. Stat Package (documented)
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 flex justify-between"><span className="text-slate-400">Damage</span><strong className="text-emerald-400">{trait.damageBonus}</strong></div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 flex justify-between"><span className="text-slate-400">Range</span><strong className="text-cyan-300">{trait.rangeBonus}</strong></div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 flex justify-between"><span className="text-slate-400">Cooldown</span><strong className="text-indigo-300">{trait.cooldownBonus}</strong></div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 flex justify-between"><span className="text-slate-400">Rarity</span><strong className="text-fuchsia-300">{trait.rarity}</strong></div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs flex justify-between"><span className="text-slate-400">Special</span><strong className="text-amber-300 text-right">{trait.extra}</strong></div>
            <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs flex justify-between">
              <span className="text-slate-400">Throughput index (DMG × attack rate)</span>
              <strong className="text-emerald-300">{throughput.toFixed(2)}x</strong>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Dices className="w-4 h-4" /> Expected Rerolls Until This Trait Lands
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">{expectedRolls > 0 ? expectedRolls : "—"}</span>
              <span className="text-sm text-slate-400">rerolls (average)</span>
            </div>
            <div className="pt-3 border-t border-cyan-900/60 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between"><span>Roll chance</span><span className="font-bold text-yellow-300 font-mono">{trait.chance}</span></div>
              <div className="flex justify-between"><span>Beebom trait tier</span><span className="font-bold text-cyan-300">{trait.traitTier ?? "unranked"}</span></div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Math: expected value = 1 ÷ roll chance, rounded up. Actual results vary — this is a planning
              estimate, not a guarantee.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-cyan-900/60 bg-cyan-950/30 p-2">
            <Image
              src="/images/origins-gameplay.webp"
              alt="Anime Origins Combat Gameplay"
              width={768}
              height={432}
              className="rounded-lg object-cover w-full h-36"
            />
            <p className="text-[11px] text-cyan-300 text-center mt-1.5 font-medium">Anime Battle Arena</p>
          </div>
        </div>
      </div>

      {/* Ranked comparison table */}
      <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
        <h2 className="text-base font-bold text-white">Ranked Traits — Expected Rerolls (S+ / S / A tier)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[540px]">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800">
                <th className="py-2 pr-3">Trait</th>
                <th className="py-2 pr-3">Tier</th>
                <th className="py-2 pr-3">Chance</th>
                <th className="py-2 pr-3">Avg. Rerolls</th>
                <th className="py-2">Key Effect</th>
              </tr>
            </thead>
            <tbody>
              {topTraits.map(t => {
                const c = parseChance(t.chance);
                return (
                  <tr key={t.id} className="border-b border-slate-800/60">
                    <td className="py-2 pr-3 font-semibold text-white whitespace-nowrap">{t.name}</td>
                    <td className="py-2 pr-3"><span className={`px-2 py-0.5 rounded-full border ${RARITY_COLORS[t.rarity]}`}>{t.traitTier}</span></td>
                    <td className="py-2 pr-3 text-slate-300">{t.chance}</td>
                    <td className="py-2 pr-3 font-mono text-cyan-300">{c > 0 ? Math.ceil(100 / c) : "—"}</td>
                    <td className="py-2 text-slate-400">{t.extra === "—" ? `${t.damageBonus} DMG, ${t.rangeBonus} RNG, ${t.cooldownBonus} CD` : t.extra}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
