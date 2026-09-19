import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-cyan-900/60 bg-cyan-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-cyan-500/20">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">Hlele</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Editor
              </span>
            </div>
            <p className="text-xs text-cyan-300">
              AI-assisted research, human-reviewed
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-cyan-300">
          <div className="flex items-center gap-1 bg-cyan-900/50 px-2.5 py-1 rounded-lg border border-cyan-800/40">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Updated: </span>
          </div>
          <div className="flex items-center gap-1 bg-cyan-900/50 px-2.5 py-1 rounded-lg border border-cyan-800/40">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Verified for UPD1 update (Sep 2026)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-cyan-400/80 mt-3 pt-3 border-t border-cyan-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> All data is cross-verified from multiple sources — last verified 2026-09-19. Unverified values are explicitly labeled instead of guessed.
      </p>
    </div>
  );
}
