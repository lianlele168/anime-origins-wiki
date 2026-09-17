'use client';
import { useState } from 'react';

interface RollResult {
  trait: string;
  rarity: string;
  color: string;
  multiplier: string;
}

const TRAITS = [
  { trait: "Monarch", rarity: "0.1%", color: "text-amber-400 border-amber-500/50 bg-amber-950/40", multiplier: "+150% Damage, +20% Range" },
  { trait: "Godly", rarity: "0.25%", color: "text-purple-400 border-purple-500/50 bg-purple-950/40", multiplier: "+100% Damage, +15% Speed" },
  { trait: "Celestial", rarity: "0.8%", color: "text-cyan-400 border-cyan-500/50 bg-cyan-950/40", multiplier: "+60% Damage, +10% Range" },
  { trait: "Prodigy", rarity: "2.5%", color: "text-emerald-400 border-emerald-500/50 bg-emerald-950/40", multiplier: "+35% EXP & Damage" },
  { trait: "Nimble", rarity: "8.0%", color: "text-blue-400 border-blue-500/50 bg-blue-950/40", multiplier: "+15% Attack Speed" },
  { trait: "Brawler", rarity: "35.0%", color: "text-slate-300 border-slate-700 bg-slate-900", multiplier: "+10% Base Damage" },
  { trait: "Common", rarity: "53.35%", color: "text-slate-500 border-slate-800 bg-slate-950", multiplier: "No Stat Buff" },
];

export default function TraitSimulatorClient() {
  const [history, setHistory] = useState<RollResult[]>([]);
  const [totalRolls, setTotalRolls] = useState(0);
  const [latest, setLatest] = useState<RollResult | null>(null);

  const getRandomTrait = (): RollResult => {
    const rand = Math.random() * 100;
    if (rand < 0.1) return TRAITS[0];
    if (rand < 0.35) return TRAITS[1];
    if (rand < 1.15) return TRAITS[2];
    if (rand < 3.65) return TRAITS[3];
    if (rand < 11.65) return TRAITS[4];
    if (rand < 46.65) return TRAITS[5];
    return TRAITS[6];
  };

  const handleRoll = (times: number) => {
    let newRolls: RollResult[] = [];
    let last: RollResult = TRAITS[6];
    for (let i = 0; i < times; i++) {
      last = getRandomTrait();
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
        <p className="text-slate-400 text-sm mt-1">Simulate rolling for Monarch, Godly, and Celestial traits with official drop rates.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-6">
        <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Total Rerolls: {totalRolls}</div>
        
        {latest ? (
          <div className={`p-6 rounded-xl border-2 max-w-md mx-auto space-y-2 transition-all transform scale-105 ${latest.color}`}>
            <div className="text-2xl font-black">{latest.trait}</div>
            <div className="text-xs font-mono">Chance: {latest.rarity}</div>
            <div className="text-sm font-semibold pt-1">{latest.multiplier}</div>
          </div>
        ) : (
          <div className="p-8 border-2 border-dashed border-slate-800 rounded-xl max-w-md mx-auto text-slate-500 text-sm">
            Click Reroll to test your luck!
          </div>
        )}

        <div className="flex justify-center space-x-4">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {history.map((item, idx) => (
            <div key={idx} className={`p-3 rounded-lg border text-sm font-semibold flex justify-between items-center ${item.color}`}>
              <span>{item.trait}</span>
              <span className="text-xs font-mono opacity-75">{item.rarity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
