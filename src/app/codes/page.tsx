import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Origins Codes (September 2026) — Active Rewards & Gems',
  description: 'Full list of active working Anime Origins redeem codes for September 2026. Claim free Gems, Trait Rerolls, and Stat Prisms.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['anime origins codes', 'anime origins codes september 2026', 'anime origins reroll codes'],
};

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Codes (September 2026)</h1>
        <p className="text-slate-400 text-sm mt-1">Tested and verified active redeem codes for Anime Origins.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
              <th className="p-4">Code</th>
              <th className="p-4">Reward</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">100K!</td>
              <td className="p-4 text-slate-300">1,000 Gems, 25 Trait Rerolls, 10 Stat Prisms</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">ChallengesFixed</td>
              <td className="p-4 text-slate-300">Gems, Trait Rerolls, Remnants</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">GAMESPEED</td>
              <td className="p-4 text-slate-300">750 Gems, 10 Trait Rerolls, 5 Stat Prisms</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">TYKaito!</td>
              <td className="p-4 text-slate-300">1,000 Gems, 25 Trait Rerolls</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">THANKYOU!</td>
              <td className="p-4 text-slate-300">10 Trait Rerolls, 10 Perfect Stat Prisms</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">AO</td>
              <td className="p-4 text-slate-300">25 Rerolls</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
            <tr className="border-b border-slate-800 hover:bg-slate-900/50">
              <td className="p-4 font-mono font-bold text-cyan-400">Release!</td>
              <td className="p-4 text-slate-300">1,750 Gems</td>
              <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
}
