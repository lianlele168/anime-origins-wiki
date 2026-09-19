import type { Metadata } from 'next';
import { EVOLUTION_FORMS_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Anime Origins Evolution & Awakened Forms Guide',
  description: 'All confirmed Anime Origins advanced forms — Valcrad (Unleashed), Madaro (Edo Tensei), Konpatchi (Unleashed) and Igritto (Commander Starku) — with documented mechanics. Evolution materials are not yet documented by sources.',
  alternates: {
    canonical: '/evolution-guide',
  },
  keywords: ['anime origins evolution guide', 'anime origins awakened forms', 'anime origins valcrad unleashed', 'anime origins madaro edo tensei'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you evolve units in Anime Origins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anime Origins units have advanced/awakened form names such as Valcrad (Unleashed), Konpatchi (Unleashed) and Madaro (Edo Tensei), and Valcrad has Restriction levels that unlock progressively. However, no major source (Beebom, Pro Game Guides, IGN, Destructoid) has documented the exact evolution materials or steps yet, so we will not publish a recipe until it is verified.',
      },
    },
  ],
};

export default function EvolutionGuidePage() {
  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Evolution &amp; Awakened Forms</h1>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl">
          Anime Origins units have advanced and awakened forms (for example Madaro (Edo Tensei) or
          Konpatchi (Unleashed)). This page lists only what published sources actually confirm.
        </p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4 text-sm text-amber-200">
        ⚠️ <strong>Honesty notice:</strong> the specific evolution materials, gold costs and step-by-step
        recipes are <strong>not documented</strong> by any major source yet (checked 2026-09-19). Any site
        listing exact material counts is guessing. We will add recipes here as soon as they are verified.
      </div>

      <div className="space-y-4">
        {EVOLUTION_FORMS_DATA.map(f => (
          <div key={f.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-slate-400 text-sm">{f.unit}</span>
                <span className="mx-2 text-slate-600">→</span>
                <span className="text-white font-bold text-lg">{f.advancedForm}</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-600/50">Materials: {f.materials}</span>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">What sources confirm</div>
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-3 text-emerald-200 text-sm leading-relaxed">
                {f.documented}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-xs text-slate-400 leading-relaxed">
        <p className="font-semibold text-slate-300 mb-1">Mechanics around advanced forms that ARE confirmed</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Valcrad (Unleashed) grows through &quot;Restriction levels&quot; during a match — gaining crit, range, bonus damage against bleeding enemies and summons.</li>
          <li>Madaro (Edo Tensei) is the SS-tier awakened state with the 500% Heaven Splitter attack and CC resistance.</li>
          <li>Placement limits apply to powerful forms — for example the Immortal trait hard-caps its unit at 1 placement.</li>
          <li>Units have placement slots, upgrade costs and stock mechanics (Leorio refunds part of his upgrade cost).</li>
        </ul>
      </div>
    </div>
  );
}
