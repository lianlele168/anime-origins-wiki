export default function EvolutionGuidePage() {
  const recipes = [
    { unit: "Cursed Lover", evolved: "Cursed Overlord", mats: ["Cursed Core x3", "Shadow Shard x5", "Demon Essence x1"], statBoost: "+110% DMG, +80% HP", tier: "S+" },
    { unit: "Madaro", evolved: "Madaro Unleashed", mats: ["Flame Crystal x5", "Ember Core x2", "Phoenix Feather x1"], statBoost: "+95% DMG, +60% SPD", tier: "S" },
    { unit: "Storm Blade", evolved: "Tempest Edge", mats: ["Wind Stone x4", "Thunder Gem x3"], statBoost: "+70% DMG, +40% ATK SPD", tier: "A" },
    { unit: "Iron Guard", evolved: "Titan Guard", mats: ["Steel Plate x6", "Mana Crystal x2"], statBoost: "+50% HP, +90% DEF", tier: "A" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Evolution Guide</h1>
        <p className="text-slate-400 text-sm mt-1">All unit evolution recipes, material farming locations, and stat boost comparisons.</p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 text-sm text-amber-200">
        💡 <strong>Tip:</strong> Evolving a unit resets their level to 1 but doubles base stats. Always evolve your main DPS unit before tackling Stage 20+.
      </div>

      <div className="space-y-4">
        {recipes.map((r, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-sm">{r.unit}</span>
                <span className="mx-2 text-slate-600">→</span>
                <span className="text-white font-bold text-lg">{r.evolved}</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-700/50">{r.tier} Tier</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Materials Required</div>
                <div className="space-y-1.5">
                  {r.mats.map((m, j) => (
                    <div key={j} className="text-xs bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-300 flex items-center gap-2">
                      <span className="text-amber-400">◆</span> {m}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Stat Boost After Evolution</div>
                <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-3 text-emerald-300 text-sm font-semibold">
                  {r.statBoost}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
