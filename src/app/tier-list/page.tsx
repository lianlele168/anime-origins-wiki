import type { Metadata } from 'next';
import { ANIME_UNITS_DATA, type UnitTier } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Origins Unit Tier List — SS to D Rankings (2026)',
  description: 'Source-verified Anime Origins tier list: all 37 units ranked SS to D — Madaro (Edo Tensei), Cursed Lover, Valcrad, Bon, Goju, Goki, Bluma and more, with roles and key mechanics.',
  alternates: {
    canonical: '/tier-list',
  },
  keywords: ['anime origins tier list', 'best units anime origins', 'anime origins madaro', 'anime origins goki', 'anime origins goju'],
};

const TIER_STYLES: Record<UnitTier, { label: string; badge: string; blurb: string }> = {
  'SS': { label: 'SS Tier', badge: 'bg-red-500/20 text-red-400 border-red-500/40', blurb: 'Define the current meta. Pull these first.' },
  'S+': { label: 'S+ Tier', badge: 'bg-orange-500/20 text-orange-400 border-orange-500/40', blurb: 'Near-meta power — top supports, nukes and controllers.' },
  'S': { label: 'S Tier', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/40', blurb: 'Strong picks that clear all core content comfortably.' },
  'A': { label: 'A Tier', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40', blurb: 'Reliable workhorses, including the best economy and boss-killer options.' },
  'B': { label: 'B Tier', badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40', blurb: 'Situational fillers and budget options while you build up.' },
  'C': { label: 'C Tier', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40', blurb: 'Transitional only — replace as soon as you can.' },
  'D': { label: 'D Tier', badge: 'bg-slate-700/40 text-slate-400 border-slate-600/40', blurb: 'Low-rarity pool. Save your Gems instead of investing.' },
};

const TIER_ORDER: UnitTier[] = ['SS', 'S+', 'S', 'A', 'B', 'C', 'D'];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best units in Anime Origins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per Beebom\'s August 2026 tier list, the SS tier is Madaro (Edo Tensei), Cursed Lover (Pure Love) and Valcrad (Unleashed). Pro Game Guides\' UPD1 update lists the same three at the top. Note that Goki (Super 3) and Goju (Honored One) are two different units — Goki is the Goku-parody boss killer in A tier, while Goju is the Gojo-parody controller in S+.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you summon units in Anime Origins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Units are obtained by summoning with Gems. Beebom recommends saving up Gems before summoning rather than spending them piecemeal, because low-rarity pulls land in D tier.',
      },
    },
  ],
};

export default function TierListPage() {
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Unit Tier List</h1>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          All 37 units ranked from SS to D, using the in-game parody names (Goki, Goju, Madaro, Bluma...).
          Rankings follow Beebom&apos;s August 2026 tier list cross-checked with Pro Game Guides&apos; UPD1 update,
          IGN and Destructoid. Numeric base stats are not published by any source, so we list roles and confirmed
          mechanics instead of inventing numbers.
        </p>
        <p className="text-amber-400/90 text-xs mt-2">
          ⚠️ Heads-up: <strong>Goki</strong> (Goku parody, A tier boss killer) and <strong>Goju</strong> (Gojo parody,
          S+ controller) are two different units with different spellings.
        </p>
      </div>

      {TIER_ORDER.map(tier => {
        const units = ANIME_UNITS_DATA.filter(u => u.tier === tier);
        const style = TIER_STYLES[tier];
        return (
          <div key={tier} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className={`${style.badge} border text-lg font-black px-3 py-1 rounded-lg`}>{style.label}</span>
              <h2 className="text-sm font-semibold text-slate-300">{style.blurb}</h2>
              <span className="ml-auto text-xs text-slate-500">{units.length} unit{units.length > 1 ? 's' : ''}</span>
            </div>
            <div className="grid gap-3">
              {units.map(u => (
                <div key={u.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-white font-bold">{u.name}</span>
                    <span className="text-[11px] text-cyan-300 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded-full">{u.role}</span>
                    {u.position !== 'not documented' && (
                      <span className="text-[11px] text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2 py-0.5 rounded-full">{u.position}</span>
                    )}
                    {u.rarity !== 'not documented' && (
                      <span className="text-[11px] text-fuchsia-300 bg-fuchsia-950/70 border border-fuchsia-800/50 px-2 py-0.5 rounded-full">{u.rarity}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{u.description}</p>
                  <p className="text-[11px] text-slate-600">Parodies: {u.prototype}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-xs text-slate-400 space-y-2">
        <p className="font-semibold text-slate-300">How we verify</p>
        <p>
          Tier placements and mechanics come from Beebom&apos;s Anime Origins tier list (August 2026), Pro Game Guides&apos;
          UPD1 tier list (September 2026), IGN&apos;s B-tier roster and Destructoid&apos;s role classification. Everything a
          source did not document (banner rates, per-unit numeric stats, evolution materials) is marked
          &quot;not documented&quot; instead of guessed. Last cross-check: 2026-09-19.
        </p>
      </div>
    </div>
  );
}
