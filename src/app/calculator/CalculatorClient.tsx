"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { ANIME_UNITS_DATA, UNIT_TRAITS_DATA } from "@/data/wikiData";
import { Calculator, Sparkles, Swords, Zap } from "lucide-react";

export default function CalculatorClient() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [selectedTraitIdx, setSelectedTraitIdx] = useState(0);
  const [unitLevel, setUnitLevel] = useState(50);

  const unit = ANIME_UNITS_DATA[selectedUnitIdx] || ANIME_UNITS_DATA[0];
  const trait = UNIT_TRAITS_DATA[selectedTraitIdx] || UNIT_TRAITS_DATA[0];

  const traitMult = trait.damageBonus.includes("+150%")
    ? 2.5
    : trait.damageBonus.includes("+100%")
    ? 2.0
    : trait.damageBonus.includes("+60%")
    ? 1.6
    : trait.damageBonus.includes("+35%")
    ? 1.35
    : trait.damageBonus.includes("+10%")
    ? 1.1
    : 1.0;

  const levelMult = 1 + (unitLevel - 1) * 0.02; // +2% per level
  const totalDamage = Math.round(unit.damage * levelMult * traitMult);
  const dps = Math.round(totalDamage / unit.spa);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best trait to roll for in Anime Origins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monarch (0.1% chance) is the undisputed top trait, providing +150% damage and +20% attack range.",
        },
      },
      {
        "@type": "Question",
        name: "How does unit level affect total damage in Anime Origins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each unit level increases base damage by approximately 2% compounding, reaching up to 3x base stats at Level 100 max cap.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Anime Origins Unit DPS & Trait Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="border-b border-cyan-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Interactive Theorycrafter
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Unit DPS & Trait Synergy Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Simulate unit scaling, level caps, and trait multipliers to find the highest DPS setups for Raids and Infinite Mode.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Swords className="w-4 h-4 text-cyan-400" /> 1. Select Anime Champion
            </h2>
            <select
              value={selectedUnitIdx}
              onChange={(e) => setSelectedUnitIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-cyan-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {ANIME_UNITS_DATA.map((u, idx) => (
                <option key={u.id} value={idx}>
                  {u.name} ({u.rarity} - {u.anime})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Base DMG: <strong className="text-emerald-400">{unit.damage}</strong></span>
              <span>SPA: <strong className="text-cyan-300">{unit.spa}s</strong></span>
              <span>Element: <strong className="text-amber-300">{unit.element}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> 2. Rolled Trait
            </h2>
            <select
              value={selectedTraitIdx}
              onChange={(e) => setSelectedTraitIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-cyan-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {UNIT_TRAITS_DATA.map((t, idx) => (
                <option key={t.id} value={idx}>
                  {t.name} ({t.damageBonus} DMG, Rate: {t.rarityRate})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400">
              Trait Effect: <strong className="text-indigo-300">{trait.description}</strong>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-white">3. Champion Level</span>
              <span className="font-mono text-cyan-400 font-bold">Level {unitLevel}</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={unitLevel}
              onChange={(e) => setUnitLevel(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-950 cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Visuals */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400">
              Total Calculated Combat Power
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-white font-mono">{dps.toLocaleString()}</span>
              <span className="text-sm font-sans font-medium text-slate-400">DPS</span>
            </div>
            <div className="pt-3 border-t border-cyan-900/60 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Single Hit Strike Damage:</span>
                <span className="font-bold text-yellow-300 font-mono">{totalDamage.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Combined Multiplier:</span>
                <span className="font-bold text-cyan-300">{(traitMult * levelMult).toFixed(2)}x</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-cyan-900/60 bg-cyan-950/30 p-2">
              <Image
                src="/images/origins-header.webp"
                alt="Anime Origins Official Game Icon"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-cyan-300 text-center mt-1.5 font-medium">Official Game Icon</p>
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
      </div>
    </div>
  );
}
