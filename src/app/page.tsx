export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-slate-900 to-cyan-950 border border-cyan-800/40 rounded-2xl p-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Anime Origins Wiki (August 2026)
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
          The ultimate Anime Origins Roblox guide — Unit Tier List, Active Redeem Codes, Trait Reroll Simulator, and Evolution Recipes.
        </p>
        <div className="flex justify-center space-x-4 pt-2">
          <a href="/codes" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20">
            🎁 Get Active Codes
          </a>
          <a href="/tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition border border-slate-700">
            🏆 View Tier List
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-cyan-400">🔥 Latest Verified Codes</h2>
          <p className="text-xs text-slate-400">Updated daily with active rewards.</p>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm font-mono flex items-center justify-between">
            <span>100K!</span>
            <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">Active</span>
          </div>
          <a href="/codes" className="inline-block text-xs text-cyan-400 hover:underline pt-2">View all active codes →</a>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-purple-400">⚡ August 2026 Meta Guide</h2>
          <p className="text-xs text-slate-400">Discover top meta rankings and strategies.</p>
          <p className="text-sm text-slate-300">
            Stay ahead of the competition with verified data, stats, and calculators.
          </p>
          <a href="/tier-list" className="inline-block text-xs text-purple-400 hover:underline pt-2">Check meta tier list →</a>
        </div>
      </section>
    </div>
  );
}
