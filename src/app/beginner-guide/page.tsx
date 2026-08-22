export default function BeginnerGuidePage() {
  const tips = [
    { step: "1", title: "Pick Your Starter Unit", desc: "Choose a unit that fits your playstyle. Summoner types are best for beginners — high HP and AoE damage.", icon: "⚔️" },
    { step: "2", title: "Reroll for a Good Trait", desc: "Before playing seriously, reroll your trait. Aim for at least Prodigy (2.5% chance) to get +35% EXP & Damage bonus.", icon: "🎲" },
    { step: "3", title: "Join a Server & Co-op", desc: "Anime Origins is easier in a full server. More players = more boss damage dealt = faster XP farming runs.", icon: "👥" },
    { step: "4", title: "Complete the Daily Missions", desc: "Daily missions give the most Gems per hour. Always finish them before grinding story stages.", icon: "📋" },
    { step: "5", title: "Save Gems for Limited Units", desc: "Limited units (banners) have massively better base stats than standard pulls. Don't spend on standard rolls.", icon: "💎" },
    { step: "6", title: "Evolve Your Main Unit ASAP", desc: "Check the Evolution Guide — evolving a unit doubles their stats. You only need common materials from early stages.", icon: "⬆️" },
  ];

  const faqs = [
    { q: "What is the best starter unit in Anime Origins?", a: "Any S-tier unit from your starting roll. If none, reroll. Check our Tier List for current meta picks." },
    { q: "How do I get more Trait Reroll Coins?", a: "Daily missions, boss raids, and active redeem codes are your best sources. Use our Trait Simulator to plan rolls." },
    { q: "How do traits work?", a: "Traits give permanent stat multipliers. Monarch (+150% DMG) and Godly (+100% DMG) are the best. You can reroll traits with Reroll Coins." },
    { q: "Can I play Anime Origins on mobile?", a: "Yes — Roblox is available on iOS and Android. All game features work the same on mobile." },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Anime Origins Beginner Guide</h1>
        <p className="text-slate-400 text-sm mt-1">Everything you need to know to start strong in Anime Origins — units, traits, and daily routines.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-amber-400">🚀 6-Step Quick Start</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map(t => (
            <div key={t.step} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
              <div className="w-10 h-10 bg-amber-950 border border-amber-700/50 rounded-xl flex items-center justify-center text-amber-400 font-black text-lg flex-shrink-0">{t.step}</div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">{t.icon} {t.title}</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">❓ Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="font-semibold text-amber-300 text-sm">{faq.q}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
