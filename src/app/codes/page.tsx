import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Origins Codes — Active Rewards & Gems',
  description: 'Multi-source verified Anime Origins redeem codes. Claim free Gems, Trait Rerolls, and Stat Prisms.',
  alternates: {
    canonical: '/codes',
  },
  keywords: ['anime origins codes', 'anime origins reroll codes'],
};

const ACTIVE_CODES = [
  { code: '100K!', reward: '25 Trait Rerolls, 1,000 Gems, 10 Perfect Stat Prisms, 10 Stat Prisms' },
  { code: 'HappyPatch!', reward: '25 Trait Rerolls, 1,000 Gems, 10 Perfect Stat Prisms, 10 Stat Prisms (some outlets list smaller values — test in game)' },
  { code: 'ChallengesFixed', reward: '10 Trait Rerolls, 750 Gems, 10 Azure Remnant, 5 Violet Remnant, 2 Radiant Remnant, 1 Prismatic Remnant' },
];

const EXPIRED_CODES = [
  { code: 'GAMESPEED', reward: '10 Trait Rerolls and 10 Perfect Stat Prisms' },
  { code: 'TYKaito!', reward: '25 Trait Rerolls, 5 Stat Prisms, 1,000 Gems' },
  { code: 'THANKYOU!', reward: 'Expired — reward not documented by the publisher' },
];

export default function CodesPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Codes</h1>
        <p className="text-slate-400 text-sm mt-1">Redeem codes cross-checked against multiple code trackers. Note that codes with exclamation marks (like 100K!) must be entered with the exclamation mark included.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-emerald-400 font-mono uppercase">Active Codes ({ACTIVE_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold">
              <th className="p-4">Code</th>
              <th className="p-4">Reward</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {ACTIVE_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-cyan-400">{item.code}</td>
                <td className="p-4 text-slate-300">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full font-semibold">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800">
          <h2 className="text-sm font-bold text-slate-400 font-mono uppercase">Expired Codes ({EXPIRED_CODES.length})</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <tbody>
            {EXPIRED_CODES.map((item) => (
              <tr key={item.code} className="border-b border-slate-800 hover:bg-slate-900/50">
                <td className="p-4 font-mono font-bold text-slate-500 line-through">{item.code}</td>
                <td className="p-4 text-slate-500">{item.reward}</td>
                <td className="p-4"><span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full font-semibold">Expired</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
