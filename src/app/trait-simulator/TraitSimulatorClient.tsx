'use client';
import { useState } from 'react';
import { UNIT_TRAITS_DATA } from '@/data/wikiData';

interface RollResult {
  trait: string;
  rarity: string;
  chance: string;
  color: string;
  multiplier: string;
}

const RARITY_COLORS: Record<string, string> = {
  Secret: "text-amber-400 border-amber-500/50 bg-amber-950/40",
  Mythic: "text-fuchsia-400 border-fuchsia-500/50 bg-fuchsia-950/40",
  Legendary: "text-cyan-400 border-cyan-500/50 bg-cyan-950/40",
  Epic: "text-emerald-400 border-emerald-500/50 bg-emerald-950/40",
  Rare: "text-slate-300 border-slate-600/50 bg-slate-900",
};

function parseChance(chance: string): number {
  const m = chance.match(/([\d.]+)\s*%/);
  return m ? parseFloat(m[1]) : 0;
}

function describeTrait(t: (typeof UNIT_TRAITS_DATA)[number]): string {
  const parts: string[] = [];
  if (t.damageBonus !== '0%') parts.push(`${t.damageBonus} DMG`);
  if (t.rangeBonus !== '0%') parts.push(`${t.rangeBonus} RNG`);
  if (t.cooldownBonus !== '0%') parts.push(`${t.cooldownBonus} CD`);
  if (t.extra !== '—') parts.push(t.extra);
  return parts.join(', ') || 'No stat buff';
}

// Real roll pool from Beebom's documented trait table. Immortal is listed at
// 100% as a Secret-tier trait (its own unlock rule: 1 per team, placement 1),
// so it is presented here but not part of the standard weighted reroll pool.
const ROLL_POOL = UNIT_TRAITS_DATA.filter(t => t.rarity !== 'Secret');
const TOTAL_WEIGHT = ROLL_POOL.reduce((sum, t) => sum + parseChance(t.chance), 0);

function rollOnce(): RollResult {
  let roll = Math.random() * TOTAL_WEIGHT;
  for (const t of ROLL_POOL) {
    roll -= parseChance(t.chance);
    if (roll <= 0) {
      return {
        trait: t.name,
        rarity: t.rarity,
        chance: t.chance,
        color: RARITY_COLORS[t.rarity] || RARITY_COLORS.Rare,
        multiplier: describeTrait(t),
      };
    }
  }
  const last = ROLL_POOL[ROLL_POOL.length - 1];
  return {
    trait: last.name,
    rarity: last.rarity,
    chance: last.chance,
    color: RARITY_COLORS[last.rarity],
    multiplier: describeTrait(last),
  };
}

const IMMORTAL = UNIT_TRAITS_DATA.find(t => t.rarity === 'Secret');

export default function TraitSimulatorClient() {
  const [history, setHistory] = useState<RollResult[]>([]);
  const [totalRolls, setTotalRolls] = useState(0);
  const [latest, setLatest] = useState<RollResult | null>(null);

  const handleRoll = (times: number) => {
    let last: RollResult = rollOnce();
    const newRolls: RollResult[] = [];
    for (let i = 0; i < times; i++) {
      last = rollOnce();
      newRolls.unshift(last);
    }
    setTotalRolls(prev => prev + times);
    setLatest(last);
    setHistory(prev => [...newRolls, ...prev].slice(0, 30));
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Trait Reroll Simulator</h1>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Simulate rerolls with the real documented odds — the most common rolls are Fury I / Reach I /
          Haste I at 26%, while Mythic traits like Overseer sit at 4.1%. Each unit holds 2 traits but
          only 1 is active.
        </p>
      </div>

      {IMMORTAL && (
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 text-xs text-amber-200 leading-relaxed">
          ℹ️ <strong>Immortal</strong> ({IMMORTAL.chance}, {IMMORTAL.rarity}) is the documented Secret trait —
          it is hard-capped at placement 1 and 1 per team, so it is shown for reference and excluded from this
          weighted simulation pool. Everything else uses the documented percentages.
        </div>
      )}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-6">
        <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Total Rerolls: {totalRolls}</div>

        {latest ? (
          <div className={`p-6 rounded-xl border-2 max-w-md mx-auto space-y-2 transition-all transform scale-105 ${latest.color}`}>
            <div className="text-2xl font-black">{latest.trait}</div>
            <div className="text-xs font-mono">Chance: {latest.chance} • {latest.rarity}</div>
            <div className="text-sm font-semibold pt-1">{latest.multiplier}</div>
          </div>
        ) : (
          <div className="p-8 border-2 border-dashed border-slate-800 rounded-xl max-w-md mx-auto text-slate-500 text-sm">
            Click Reroll to test your luck!
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleRoll(1)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
          >
            🎲 Roll 1x
          </button>
          <button
            onClick={() => handleRoll(10)}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-purple-600/20"
          >
            ⚡ Roll 10x
          </button>
          <button
            onClick={() => { setHistory([]); setTotalRolls(0); setLatest(null); }}
            className="bg-slate-800 hover:bg-slate-700 text-slate-400 font-semibold px-4 py-3 rounded-xl transition"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white">Recent Roll History</h2>
        {history.length === 0 ? (
          <div className="bg-slate-900/60 border border-dashed border-slate-800 rounded-xl p-6 text-center text-slate-500 text-sm">
            No rolls yet — hit Roll 1x or Roll 10x to start a history.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {history.map((item, idx) => (
              <div key={idx} className={`p-3 rounded-lg border text-sm font-semibold flex justify-between items-center ${item.color}`}>
                <span>{item.trait}</span>
                <span className="text-xs font-mono opacity-75">{item.chance}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-xs text-slate-400 leading-relaxed">
        <p className="font-semibold text-slate-300 mb-1">Trait tier quick reference (Beebom)</p>
        <p>S+ = Immortal / Ascendant / Overseer • S = Rupture / Stride / Decay • A = Ace / Head Hunter / Fury III / Haste III.
        Rerolls are earned by playing, missions and codes, and are spent at the Areas → Trait Reroll NPC.</p>
      </div>
    </div>
  );
}
