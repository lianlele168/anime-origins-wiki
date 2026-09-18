import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anime Origins Unit Tier List — Meta Rankings',
  description: 'Complete Anime Origins unit tier list ranking top meta DPS, debuffers, and raid supports from S+ to B tier.',
  alternates: {
    canonical: '/tier-list',
  },
  keywords: ['anime origins tier list', 'best units anime origins', 'anime origins meta tier'],
};

export default function TierListPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Meta Tier List</h1>
        <p className="text-slate-400 text-sm mt-1">Official community meta rankings and tier ratings for .</p>
      </div>

      <div className="grid gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-red-500/20 text-red-400 border border-red-500/40 text-lg font-black px-3 py-1 rounded-lg">S+ Tier</span>
            <h2 className="text-xl font-bold text-white">God Meta</h2>
          </div>
          <p className="text-slate-300 text-sm">
            Top tier options providing maximum performance, stats, and win rate.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-lg font-black px-3 py-1 rounded-lg">S Tier</span>
            <h2 className="text-xl font-bold text-white">Strong Meta</h2>
          </div>
          <p className="text-slate-300 text-sm">
            Excellent choices with high overall utility and strong combo potential.
          </p>
        </div>
      </div>
    </div>
  );
}
