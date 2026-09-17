'use client';
import { useState } from 'react';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';

export default function HomeClient() {
  const [copied, setCopied] = useState('');

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950 border border-amber-800/30 rounded-3xl p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-48 bg-amber-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-orange-500/10 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-700/50 text-amber-300 text-xs font-semibold">
          ⚡ Freshly Updated
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Anime Origins <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Wiki</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Your go-to guide for Anime Origins — Redeem Codes, Unit Tier List, Trait Reroll Simulator & Evolution Recipes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="/codes" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-7 py-3 rounded-xl transition shadow-lg shadow-amber-500/25">
            🎁 Active Codes
          </a>
          <a href="/tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3 rounded-xl transition border border-slate-700">
            🏆 Tier List
          </a>
          <a href="/trait-simulator" className="bg-amber-900/50 hover:bg-amber-900/80 text-amber-300 font-bold px-7 py-3 rounded-xl transition border border-amber-700/50">
            🎲 Trait Simulator
          </a>
        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <AuthorCard />

      {/* VISUAL GAMEPLAY SHOWCASE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-cyan-900/60 bg-cyan-950/40 p-4">
          <Image
            src="/images/origins-header.webp"
            alt="Anime Origins Official Roblox Icon"
            width={512}
            height={512}
            className="rounded-xl object-cover w-full h-56 border border-cyan-800/40"
            priority
          />
          <p className="text-xs text-cyan-300 mt-2.5 text-center font-medium">
            Figure 1: Official Anime Origins Icon.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-cyan-900/60 bg-cyan-950/40 p-4">
          <Image
            src="/images/origins-gameplay.webp"
            alt="Anime Origins Battle Arena Gameplay"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-56 border border-cyan-800/40"
          />
          <p className="text-xs text-cyan-300 mt-2.5 text-center font-medium">
            Figure 2: Active Combat Arena with High-Tier Anime Unit Placement.
          </p>
        </div>
      </div>

      {/* Tool Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a href="/codes" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎁</div>
          <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Redeem Codes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">All working codes for free Gems, Coins, and Trait Rerolls. Verified & updated regularly.</p>
          <span className="text-xs text-amber-400 font-semibold">View codes →</span>
        </a>

        <a href="/tier-list" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-orange-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🏆</div>
          <h2 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Unit Tier List</h2>
          <p className="text-xs text-slate-400 leading-relaxed">S-tier to F-tier rankings for every unit. Find the strongest characters for each mode.</p>
          <span className="text-xs text-orange-400 font-semibold">View tier list →</span>
        </a>

        <a href="/trait-simulator" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-yellow-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎲</div>
          <h2 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">Trait Reroll Simulator</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Test your luck! Simulate rolling for Monarch (0.1%), Godly (0.25%), and Celestial (0.8%) traits.</p>
          <span className="text-xs text-yellow-400 font-semibold">Try simulator →</span>
        </a>
      </section>

      {/* Latest Code Preview */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">🔥 Latest Active Code</h2>
          <a href="/codes" className="text-xs text-amber-400 hover:underline">See all codes →</a>
        </div>
        <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-4">
          <div>
            <span className="font-mono text-white text-lg font-bold">100K!</span>
            <span className="ml-3 text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">✓ Active</span>
          </div>
          <button
            onClick={() => copy('100K!')}
            className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg transition"
          >
            {copied === '100K!' ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-xs text-slate-500">Rewards: Gems + Trait Reroll Coins</p>
      </section>
    </div>
  );
}
