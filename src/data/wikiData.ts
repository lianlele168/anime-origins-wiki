// ============================================================================
// Anime Origins — Real, source-verified data (forensic rebuild 2026-09-19)
// Sources: Beebom tier list / traits / codes (Aug 2026), Pro Game Guides UPD1
// tier list (Sep 2026), IGN B-tier list, Destructoid role classifications.
// Unit names are the ACTUAL in-game parody names (Goki, Goju, Madaro, etc.).
// Anything a source did not document is explicitly marked "not documented".
// Verified codes table (cross-checked) is intentionally untouched.
// ============================================================================

export type UnitTier = 'SS' | 'S+' | 'S' | 'A' | 'B' | 'C' | 'D';

export interface AnimeUnit {
  id: string;
  name: string; // In-game parody name, e.g. 'Goki (Super 3)'
  prototype: string; // Original anime character it parodies (background reference only — in-game name is always the parody name)
  tier: UnitTier;
  role: string; // DPS / Support / Economy / Boss killer, per published tier lists
  position: string; // Ground / Hill / Hybrid; 'not documented' when no source states it
  rarity: string; // Only filled when a source states it, otherwise 'not documented'
  description: string;
}

export interface UnitTrait {
  id: string;
  name: string;
  chance: string; // Roll probability as documented by Beebom's trait table
  rarity: 'Secret' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare';
  traitTier?: 'S+' | 'S' | 'A'; // Beebom trait tier list placements
  damageBonus: string;
  rangeBonus: string;
  cooldownBonus: string;
  extra: string; // Crit / income / EXP / special passive effects
  description: string;
}

export interface EvolutionForm {
  id: string;
  unit: string;
  advancedForm: string;
  documented: string; // What sources actually confirm about this form
  materials: string; // Evolution materials/steps are NOT documented by any source yet
}

export interface AnimeCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

// ---------------------------------------------------------------------------
// UNITS — 26 ranked units from Beebom's Aug 2026 tier list (SS→C), 10 extra
// B-tier units from IGN's ranking, plus the aggregate D tier. 37 entries.
// Numeric base stats (damage/SPA/range per unit) are NOT documented by any
// source and are deliberately omitted instead of invented.
// ---------------------------------------------------------------------------

export const ANIME_UNITS_DATA: AnimeUnit[] = [
  // ---- SS Tier ----
  { id: 'madaro-edo-tensei', name: 'Madaro (Edo Tensei)', prototype: 'Madara Uchiha (Naruto)', tier: 'SS', role: 'Meta DPS', position: 'Ground', rarity: 'not documented', description: 'Current meta DPS benchmark: massive-area attacks with the 500% damage Heaven Splitter, extra strikes outside his range, CC resistance and self-stun immunity.' },
  { id: 'cursed-lover-pure-love', name: 'Cursed Lover (Pure Love)', prototype: 'Not confirmed', tier: 'SS', role: 'Meta DPS', position: 'not documented', rarity: 'not documented', description: 'Can copy and store up to 4 active abilities, then fire them back with the Love Beam for 300% total damage.' },
  { id: 'valcrad-unleashed', name: 'Valcrad (Unleashed)', prototype: 'Not confirmed', tier: 'SS', role: 'Scaling DPS', position: 'not documented', rarity: 'not documented', description: 'Grows as the match progresses: gains crit, range, bonus damage against bleeding enemies, summons and stronger Restriction levels. Coffin Trap can stun a boss for 7 seconds.' },

  // ---- S+ Tier ----
  { id: 'bon-purgatory', name: 'Bon (Purgatory)', prototype: 'Not confirmed', tier: 'S+', role: 'Support', position: 'not documented', rarity: 'not documented', description: 'One of the best meta supports: his food buffs grant damage, cooldown and range bonuses, and kills drop extra cash.' },
  { id: 'starku-primordial', name: 'Starku (Primordial)', prototype: 'Not confirmed', tier: 'S+', role: 'Burst Nuke', position: 'not documented', rarity: 'Mythic', description: 'Mythic burst nuke with heavy one-shot damage spikes.' },
  { id: 'igritto-commander', name: 'Igritto (Commander Starku)', prototype: 'Not confirmed', tier: 'S+', role: 'Support / Buffer', position: 'not documented', rarity: 'not documented', description: 'Sustained combat buffs via the Oppressing passive; skills add damage and cooldown bonuses to allies.' },
  { id: 'goju-honored-one', name: 'Goju (Honored One)', prototype: 'Satoru Gojo (Jujutsu Kaisen)', tier: 'S+', role: 'DPS / Control', position: 'not documented', rarity: 'not documented', description: 'Can nullify attacks targeting himself, slows enemies, and brings Time Stop crowd control.' },
  { id: 'tango-star-of-festivals', name: 'Tango (Star of Festivals)', prototype: 'Not confirmed', tier: 'S+', role: 'Ground DPS', position: 'Ground', rarity: 'not documented', description: 'Reliable Ground unit with steady output for any lineup.' },

  // ---- S Tier ----
  { id: 'noroto-linked', name: 'Noroto (Linked)', prototype: 'Naruto Uzumaki (Naruto)', tier: 'S', role: 'DPS / Transform', position: 'not documented', rarity: 'not documented', description: 'Nine Tails\' Cloak transformation raises damage, lowers cooldown and extends range; every 3rd attack adds an AoE burst.' },
  { id: 'tojei-sorcerer-killer', name: 'Tojei (Sorcerer Killer)', prototype: 'Toji Fushiguro (Jujutsu Kaisen)', tier: 'S', role: 'Boss Killer', position: 'not documented', rarity: 'not documented', description: 'Neutral attribute with strong boss damage — but he cannot receive buffs, so build teams around it.' },
  { id: 'vegita-super', name: 'Vegita (Super)', prototype: 'Vegeta (Dragon Ball)', tier: 'S', role: 'Hill DPS', position: 'Hill', rarity: 'not documented', description: 'Hill unit that can be placed multiple times and hits harder when a Goku-type unit (e.g. Goki) is on the field.' },
  { id: 'aneko-queen', name: 'Aneko (Queen)', prototype: 'Not confirmed', tier: 'S', role: 'Full AoE DPS', position: 'not documented', rarity: 'not documented', description: 'Full AoE attacker whose damage climbs the lower enemy HP gets — excellent finisher.' },
  { id: 'shinaru-butterfly-dance', name: 'Shinaru (Butterfly Dance)', prototype: 'Shinobu Kocho (Demon Slayer)', tier: 'S', role: 'Support', position: 'not documented', rarity: 'not documented', description: 'Meta support pick for endgame team compositions.' },
  { id: 'yoto-calamity', name: 'Yoto (Calamity)', prototype: 'Not confirmed', tier: 'S', role: 'Sustained DPS', position: 'not documented', rarity: 'not documented', description: 'Steady long-fight damage output across extended waves.' },

  // ---- A Tier ----
  { id: 'itsugo-dangai', name: 'Itsugo (Dangai)', prototype: 'Ichigo Kurosaki (Bleach)', tier: 'A', role: 'DPS', position: 'not documented', rarity: 'not documented', description: 'High base damage that grows the farther enemies walk along the path — strongest on long maps.' },
  { id: 'zeldo-piety', name: 'Zeldo (Piety)', prototype: 'Zeldris (The Seven Deadly Sins)', tier: 'A', role: 'Scaling DPS', position: 'not documented', rarity: 'not documented', description: 'Self-increasing damage over the course of a match; pairs especially well with Meliodas-type units (Melio).' },
  { id: 'konpatchi-unleashed', name: 'Konpatchi (Unleashed)', prototype: 'Not confirmed', tier: 'A', role: 'Executioner DPS', position: 'not documented', rarity: 'not documented', description: 'Deals extra damage to weakened (low-HP) enemies — a clean-up specialist.' },
  { id: 'gyutari-upper-moon', name: 'Gyutari (Upper Moon)', prototype: 'Gyutaro (Demon Slayer)', tier: 'A', role: 'AoE / DoT', position: 'not documented', rarity: 'not documented', description: 'Full AoE with poison and Blood Cut explosions — one of the best mob-clearing units.' },
  { id: 'goki-super-3', name: 'Goki (Super 3)', prototype: 'Goku (Dragon Ball)', tier: 'A', role: 'Boss Killer', position: 'not documented', rarity: 'not documented', description: 'Top-tier boss killer: Fighting Spirit stacks add damage and crit the longer he fights. Do not confuse with Goju — they are two different units.' },
  { id: 'bluma-data-analyst', name: 'Bluma (Data Analyst)', prototype: 'Bulma (Dragon Ball)', tier: 'A', role: 'Economy / Farm', position: 'not documented', rarity: 'not documented', description: 'One of the best economy units: Training Data eventually grants +30% Income — the backbone of Infinite Mode farming.' },

  // ---- B Tier (Beebom) ----
  { id: 'melio-assault', name: 'Melio (Assault)', prototype: 'Meliodas (The Seven Deadly Sins)', tier: 'B', role: 'Control DPS', position: 'not documented', rarity: 'not documented', description: 'Seven Deadly Sins damage loop: petrify, burn, slow and amplify — but the effects cannot be controlled.' },
  { id: 'oxi-mage', name: 'Oxi (Mage)', prototype: 'Not confirmed', tier: 'B', role: 'Fill-in Support', position: 'not documented', rarity: 'not documented', description: 'Serviceable filler support while you build toward higher tiers.' },
  { id: 'mykie-toman', name: 'Mykie (Toman)', prototype: 'Mikey (Tokyo Revengers)', tier: 'B', role: 'Captain Buffer', position: 'not documented', rarity: 'not documented', description: 'In the captain slot can stack a +10% damage buff — but the conditions are strict.' },
  { id: 'itsoda', name: 'Itsoda', prototype: 'Not confirmed', tier: 'B', role: 'Hill DPS / Anti-Air', position: 'Hill', rarity: 'Legendary', description: 'The best Legendary unit: Hill placement and the ability to hit flying enemies.' },
  { id: 'leorio', name: 'Leorio', prototype: 'Leorio Paradinight (Hunter x Hunter)', tier: 'B', role: 'Economy', position: 'not documented', rarity: 'not documented', description: 'Economy expert: upgrading him inside his range refunds part of the cost.' },

  // ---- B Tier (IGN list additions) ----
  { id: 'choto', name: 'Choto', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'hido', name: 'Hido', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'itaki', name: 'Itaki', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'kengako', name: 'Kengako', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'kingo', name: 'Kingo', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'neli', name: 'Neli', prototype: 'Nelliel (Bleach)', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'rose', name: 'Rose', prototype: 'Rose (Bleach)', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'semanu', name: 'Semanu', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'toki', name: 'Toki', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },
  { id: 'tranko', name: 'Tranko', prototype: 'Not confirmed', tier: 'B', role: 'not documented', position: 'not documented', rarity: 'not documented', description: 'Listed in IGN\'s B tier; specific kit not documented by sources yet.' },

  // ---- C Tier ----
  { id: 'sosuke-eternal', name: 'Sosuke (Eternal)', prototype: 'Sosuke Aizen (Bleach)', tier: 'C', role: 'Transition Ground DPS', position: 'Ground', rarity: 'not documented', description: 'Transitional Ground unit — fine for early story, replace as soon as you pull A tier or better.' },

  // ---- D Tier (aggregate) ----
  { id: 'low-rarity-pool', name: 'All remaining low-rarity units', prototype: '—', tier: 'D', role: 'Placeholder', position: 'not documented', rarity: 'not documented', description: 'Everything below C tier. If your pulls land here, stop spending and save Gems for the next summoning session.' },
];

// ---------------------------------------------------------------------------
// TRAITS — the real 23-trait table from Beebom (with documented roll odds).
// Monarch / Godly do NOT exist in Anime Origins and have been removed.
// Rerolls come from playing, missions and codes; each unit can hold 2 traits
// but only 1 is active. Reroll NPC: right-side menu → Areas → Trait Reroll.
// ---------------------------------------------------------------------------

export const UNIT_TRAITS_DATA: UnitTrait[] = [
  { id: 'trait-immortal', name: 'Immortal', chance: '100% (Secret)', rarity: 'Secret', traitTier: 'S+', damageBonus: '+200%', rangeBonus: '+20%', cooldownBonus: '-15%', extra: '+25% Income; placement limit 1; restores base power at 0 stock; touch kills non-boss enemies (once per run after Wave 10); 1 per team', description: 'The secret apex trait — enormous stats plus an execute aura, but hard-locked to one placement and one per team.' },
  { id: 'trait-overseer', name: 'Overseer', chance: '4.1%', rarity: 'Mythic', traitTier: 'S+', damageBonus: '+20%', rangeBonus: '+10%', cooldownBonus: '-5%', extra: 'Attacks add 30% True Damage', description: 'Top Mythic pick: solid stats plus a flat true-damage rider on every attack.' },
  { id: 'trait-ascendant', name: 'Ascendant', chance: '19%', rarity: 'Mythic', traitTier: 'S+', damageBonus: '+10%', rangeBonus: '+10%', cooldownBonus: '0%', extra: '+35% Boss Damage', description: 'The go-to boss-hunting Mythic trait thanks to its +35% boss damage multiplier.' },
  { id: 'trait-rupture', name: 'Rupture', chance: '12.5%', rarity: 'Mythic', traitTier: 'S', damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '0%', extra: '+30% Crit Rate, +35% Crit Damage', description: 'Pure crit package — best on units that already have high base crit or crit-scaling kits.' },
  { id: 'trait-stride', name: 'Stride', chance: '14.5%', rarity: 'Mythic', traitTier: 'S', damageBonus: '-10%', rangeBonus: '+5%', cooldownBonus: '-10%', extra: 'Attacks stack Tempo: -2% cooldown per stack (max -20%), +10% range at max stacks; resets after 5s without attacking', description: 'A tempo-stacking trait for relentless attackers — strong uptime, but punishes units that pause.' },
  { id: 'trait-decay', name: 'Decay', chance: '16.5%', rarity: 'Mythic', traitTier: 'S', damageBonus: '0%', rangeBonus: '+10%', cooldownBonus: '-10%', extra: '+40% DoT damage', description: 'The poison/burn/bleed trait — amplifies damage-over-time effects by 40%.' },
  { id: 'trait-joker', name: 'Joker', chance: '11.4%', rarity: 'Mythic', traitTier: undefined, damageBonus: '+5%', rangeBonus: '+5%', cooldownBonus: '-5%', extra: 'Every wave all stats re-roll randomly between 0% and 25% (does not carry over)', description: 'A gambling trait: each wave your stats fluctuate wildly — fun, unreliable, occasionally spectacular.' },
  { id: 'trait-hustler', name: 'Hustler', chance: '22%', rarity: 'Mythic', traitTier: undefined, damageBonus: '0%', rangeBonus: '+15%', cooldownBonus: '0%', extra: '+30% Income', description: 'Mythic economy trait — the income pick for farming lineups.' },
  { id: 'trait-ace', name: 'Ace', chance: '20%', rarity: 'Legendary', traitTier: 'A', damageBonus: '+10%', rangeBonus: '+10%', cooldownBonus: '-5%', extra: '—', description: 'The best all-rounder below Mythic: small bonuses to everything that matters.' },
  { id: 'trait-head-hunter', name: 'Head Hunter', chance: '25%', rarity: 'Epic', traitTier: 'A', damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '0%', extra: '+20% Crit Rate, +25% Crit Damage', description: 'Epic-tier crit trait — a budget Rupture for early crit builds.' },
  { id: 'trait-fury-3', name: 'Fury III', chance: '25%', rarity: 'Epic', traitTier: 'A', damageBonus: '+15%', rangeBonus: '0%', cooldownBonus: '0%', extra: '—', description: 'Straight +15% damage — the default answer for DPS units in the Epic bracket.' },
  { id: 'trait-haste-3', name: 'Haste III', chance: '25%', rarity: 'Epic', traitTier: 'A', damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '-12.5%', extra: '—', description: '-12.5% cooldown — the attack-speed answer for status-stacking units.' },
  { id: 'trait-reach-3', name: 'Reach III', chance: '25%', rarity: 'Epic', traitTier: undefined, damageBonus: '0%', rangeBonus: '+15%', cooldownBonus: '0%', extra: '—', description: '+15% range for units that keep missing the path.' },
  { id: 'trait-hawkeye', name: 'Hawkeye', chance: '25%', rarity: 'Legendary', traitTier: undefined, damageBonus: '0%', rangeBonus: '+30%', cooldownBonus: '0%', extra: '—', description: 'A huge +30% range — the sniper trait of the Legendary bracket.' },
  { id: 'trait-scholar', name: 'Scholar', chance: '25%', rarity: 'Legendary', traitTier: undefined, damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '0%', extra: '+50% EXP', description: 'Leveling trait: +50% EXP gain for grinding new units fast.' },
  { id: 'trait-nimble', name: 'Nimble', chance: '18.5%', rarity: 'Legendary', traitTier: undefined, damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '-20%', extra: '—', description: 'A massive -20% cooldown — the fastest attack interval boost in the Legendary bracket.' },
  { id: 'trait-looting', name: 'Looting', chance: '11.5%', rarity: 'Legendary', traitTier: undefined, damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '0%', extra: '+20% Income', description: 'Legendary economy trait for early income scaling.' },
  { id: 'trait-fury-2', name: 'Fury II', chance: '7.33%', rarity: 'Rare', traitTier: undefined, damageBonus: '+10%', rangeBonus: '0%', cooldownBonus: '0%', extra: '—', description: '+10% damage at Rare rarity — a fine placeholder until Epic+' },
  { id: 'trait-reach-2', name: 'Reach II', chance: '7.34%', rarity: 'Rare', traitTier: undefined, damageBonus: '0%', rangeBonus: '+10%', cooldownBonus: '0%', extra: '—', description: '+10% range placeholder at Rare rarity.' },
  { id: 'trait-haste-2', name: 'Haste II', chance: '7.33%', rarity: 'Rare', traitTier: undefined, damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '-7.5%', extra: '—', description: '-7.5% cooldown placeholder at Rare rarity.' },
  { id: 'trait-fury-1', name: 'Fury I', chance: '26%', rarity: 'Rare', traitTier: undefined, damageBonus: '+5%', rangeBonus: '0%', cooldownBonus: '0%', extra: '—', description: 'The most common roll: +5% damage. Reroll it when you can.' },
  { id: 'trait-reach-1', name: 'Reach I', chance: '26%', rarity: 'Rare', traitTier: undefined, damageBonus: '0%', rangeBonus: '+5%', cooldownBonus: '0%', extra: '—', description: 'The most common roll: +5% range. Reroll it when you can.' },
  { id: 'trait-haste-1', name: 'Haste I', chance: '26%', rarity: 'Rare', traitTier: undefined, damageBonus: '0%', rangeBonus: '0%', cooldownBonus: '-5%', extra: '—', description: 'The most common roll: -5% cooldown. Reroll it when you can.' },
];

// ---------------------------------------------------------------------------
// EVOLUTION / AWAKENED FORMS — only what sources confirm. Specific evolution
// materials and step-by-step recipes are NOT documented by any source yet,
// so none are invented here. (Former fabricated recipes removed.)
// ---------------------------------------------------------------------------

export const EVOLUTION_FORMS_DATA: EvolutionForm[] = [
  { id: 'evo-valcrad', unit: 'Valcrad', advancedForm: 'Valcrad (Unleashed)', documented: 'Confirmed SS-tier advanced form; sources describe "Restriction levels" that unlock progressively as the match goes on (crit, range, anti-bleed damage, summons).', materials: 'not documented' },
  { id: 'evo-madaro', unit: 'Madaro', advancedForm: 'Madaro (Edo Tensei)', documented: 'Confirmed SS-tier advanced form with the 500% Heaven Splitter attack, off-range strikes, CC resistance and stun immunity.', materials: 'not documented' },
  { id: 'evo-konpatchi', unit: 'Konpatchi', advancedForm: 'Konpatchi (Unleashed)', documented: 'Confirmed "Unleashed" awakened form, ranked A tier; deals bonus damage to weakened enemies.', materials: 'not documented' },
  { id: 'evo-igritto', unit: 'Starku', advancedForm: 'Igritto (Commander Starku)', documented: 'Commander-tier variant of Starku listed separately in S+; grants sustained Oppressing combat buffs to the team.', materials: 'not documented' },
];

// ---------------------------------------------------------------------------
// CODES — verified cross-source table. DO NOT TOUCH (already fact-checked).
// ---------------------------------------------------------------------------

export const ANIME_CODES_DATA: AnimeCode[] = [
  { id: 'code-100k', code: '100K!', reward: '25 Trait Rerolls, 1,000 Gems, 10 Perfect Stat Prisms, 10 Stat Prisms', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-happypatch', code: 'HappyPatch!', reward: '25 Trait Rerolls, 1,000 Gems, 10 Perfect Stat Prisms, 10 Stat Prisms (some outlets list smaller values — test in game)', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-challenges', code: 'ChallengesFixed', reward: '10 Trait Rerolls, 750 Gems, 10 Azure Remnant, 5 Violet Remnant, 2 Radiant Remnant, 1 Prismatic Remnant', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-thankyou', code: 'THANKYOU!', reward: 'Expired — reward not documented by the publisher', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-tykaito', code: 'TYKaito!', reward: '25 Trait Rerolls, 5 Stat Prisms, 1,000 Gems', status: 'EXPIRED', dateAdded: '' },
  { id: 'code-gamespeed', code: 'GAMESPEED', reward: '10 Trait Rerolls and 10 Perfect Stat Prisms', status: 'EXPIRED', dateAdded: '' },
];
