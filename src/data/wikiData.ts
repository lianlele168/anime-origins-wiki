export interface AnimeUnit {
  id: string;
  name: string;
  anime: string;
  rarity: 'Secret' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare';
  damage: number;
  spa: number; // Seconds Per Attack
  range: number;
  element: 'Fire' | 'Water' | 'Lightning' | 'Dark' | 'Light';
  description: string;
}

export interface UnitTrait {
  id: string;
  name: string;
  rarityRate: string;
  damageBonus: string;
  rangeBonus: string;
  speedBonus: string;
  description: string;
}

export interface EvolutionRecipe {
  id: string;
  baseUnit: string;
  evolvedUnit: string;
  requiredMaterials: string[];
  goldCost: number;
}

export interface AnimeCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const ANIME_UNITS_DATA: AnimeUnit[] = [
  { id: 'shadow-monarch-sung', name: 'Shadow Monarch (Jinwoo)', anime: 'Solo Leveling', rarity: 'Secret', damage: 8500, spa: 4.2, range: 28, element: 'Dark', description: 'Summons an army of shadow soldiers with compounding lifesteal and global presence.' },
  { id: 'limitless-gojo', name: 'Six Eyes Sorcerer (Gojo)', anime: 'Jujutsu Kaisen', rarity: 'Mythic', damage: 7200, spa: 5.0, range: 35, element: 'Light', description: 'Infinity barrier blocks all boss stun effects while Hollow Purple vaporizes line waves.' },
  { id: 'sun-god-luffy', name: 'Sun Emperor (Gear 5)', anime: 'One Piece', rarity: 'Mythic', damage: 6800, spa: 3.8, range: 26, element: 'Fire', description: 'Toon force physics turns battlefield terrain into rubber, bouncing enemies backward.' },
  { id: 'demon-king-tanjiro', name: 'Sun Breathing Tanjiro', anime: 'Demon Slayer', rarity: 'Legendary', damage: 4500, spa: 2.8, range: 20, element: 'Fire', description: 'Consecutive Hinokami Kagura slashes inflict stacking burning status.' },
  { id: 'bankai-ichigo', name: 'True Bankai Ichigo', anime: 'Bleach', rarity: 'Legendary', damage: 4800, spa: 3.2, range: 24, element: 'Dark', description: 'Getsuga Jujisho cross blast tearing through armored shields.' },
  { id: 'reaper-naruto-sage', name: 'Six Paths Sage Naruto', anime: 'Naruto', rarity: 'Legendary', damage: 4600, spa: 3.5, range: 30, element: 'Lightning', description: 'Truth-Seeking Orbs provide full 360-degree area-of-effect suppression.' },
  { id: 'saiyan-ultra-goku', name: 'Ultra Instinct Goku', anime: 'Dragon Ball', rarity: 'Secret', damage: 9200, spa: 3.0, range: 25, element: 'Light', description: 'Autonomous dodging mechanic negates 40% of incoming boss line attacks.' },
  { id: 'sukuna-king-curses', name: 'King of Curses (Sukuna)', anime: 'Jujutsu Kaisen', rarity: 'Mythic', damage: 7600, spa: 4.5, range: 32, element: 'Dark', description: 'Malevolent Shrine domain dismantles all enemy types within range.' },
  { id: 'flame-hashira-rengoku', name: 'Flame Pillar Rengoku', anime: 'Demon Slayer', rarity: 'Epic', damage: 3200, spa: 3.0, range: 18, element: 'Fire', description: '9th Form Purgatory charges through mobs causing massive burn damage.' },
  { id: 'sasuke-rinnegan', name: 'Shadow Hokage Sasuke', anime: 'Naruto', rarity: 'Legendary', damage: 4700, spa: 3.4, range: 28, element: 'Lightning', description: 'Amenotejikara swaps high-threat bosses into kill-zone traps.' },
  { id: 'zoro-king-hell', name: 'King of Hell Zoro', anime: 'One Piece', rarity: 'Epic', damage: 3400, spa: 2.9, range: 22, element: 'Dark', description: 'Enma infused three-sword style with high crit rate.' },
  { id: 'zenitsu-godspeed', name: 'Thunder God Zenitsu', anime: 'Demon Slayer', rarity: 'Rare', damage: 1800, spa: 1.5, range: 16, element: 'Lightning', description: 'Lightning speed starter unit clearing early wave swarms.' }
];

export const UNIT_TRAITS_DATA: UnitTrait[] = [
  { id: 'trait-monarch', name: 'Monarch', rarityRate: '0.1%', damageBonus: '+150%', rangeBonus: '+20%', speedBonus: '0%', description: 'The absolute pinnacle offensive trait in Anime Origins.' },
  { id: 'trait-godly', name: 'Godly', rarityRate: '0.25%', damageBonus: '+100%', rangeBonus: '0%', speedBonus: '+15%', description: 'Tremendous all-around DPS multiplier.' },
  { id: 'trait-celestial', name: 'Celestial', rarityRate: '0.8%', damageBonus: '+60%', rangeBonus: '+10%', speedBonus: '0%', description: 'Extended range sniper trait for backline nukers.' },
  { id: 'trait-prodigy', name: 'Prodigy', rarityRate: '2.5%', damageBonus: '+35%', rangeBonus: '0%', speedBonus: '0%', description: 'Boosts unit level growth speed and baseline damage.' },
  { id: 'trait-nimble', name: 'Nimble', rarityRate: '8.0%', damageBonus: '0%', rangeBonus: '0%', speedBonus: '+15%', description: 'Reduces attack interval for faster status stacking.' },
  { id: 'trait-brawler', name: 'Brawler', rarityRate: '35.0%', damageBonus: '+10%', rangeBonus: '0%', speedBonus: '0%', description: 'Basic common offensive buff.' },
  { id: 'trait-sniper', name: 'Eagle Eye', rarityRate: '12.0%', damageBonus: '+5%', rangeBonus: '+18%', speedBonus: '0%', description: 'Extends attack perimeter.' },
  { id: 'trait-swift', name: 'Swiftstep', rarityRate: '20.0%', damageBonus: '0%', rangeBonus: '0%', speedBonus: '+8%', description: 'Moderate attack speed increase.' }
];

export const EVOLUTION_RECIPES_DATA: EvolutionRecipe[] = [
  { id: 'evo-jinwoo', baseUnit: 'Shadow Monarch (Base)', evolvedUnit: 'Shadow Monarch (Supreme)', requiredMaterials: ['10x Shadow Heart', '5x Dark Essences', '2x Monarch Orbs'], goldCost: 50000 },
  { id: 'evo-gojo', baseUnit: 'Six Eyes Sorcerer (Base)', evolvedUnit: 'Honored One (Gojo Awakened)', requiredMaterials: ['8x Infinity Orbs', '4x Prison Realm Shards'], goldCost: 45000 },
  { id: 'evo-luffy', baseUnit: 'Straw Hat (Gear 4)', evolvedUnit: 'Sun Emperor (Gear 5)', requiredMaterials: ['12x Sun Fruits', '6x Conqueror Haki Crests'], goldCost: 40000 },
  { id: 'evo-tanjiro', baseUnit: 'Water Breathing Tanjiro', evolvedUnit: 'Sun Breathing Tanjiro', requiredMaterials: ['15x Hinokami Embers', '5x Demon Blood Vials'], goldCost: 25000 },
  { id: 'evo-sukuna', baseUnit: 'Cursed Vessel (Yuji)', evolvedUnit: 'King of Curses (Sukuna)', requiredMaterials: ['20x Cursed Fingers', '1x Malevolent Relic'], goldCost: 60000 },
  { id: 'evo-ichigo', baseUnit: 'Shikai Ichigo', evolvedUnit: 'True Bankai Ichigo', requiredMaterials: ['10x Hollow Masks', '5x Quincy Crosses'], goldCost: 30000 },
  { id: 'evo-naruto', baseUnit: 'Sage Mode Naruto', evolvedUnit: 'Six Paths Sage Naruto', requiredMaterials: ['9x Tailed Beast Chakra', '3x Yin-Yang Orbs'], goldCost: 35000 },
  { id: 'evo-sasuke', baseUnit: 'Mangekyo Sasuke', evolvedUnit: 'Shadow Hokage Sasuke', requiredMaterials: ['8x Eternal Eye Shards', '4x Chidori Cores'], goldCost: 35000 }
];

export const ANIME_CODES_DATA: AnimeCode[] = [
  { id: 'code-origins2026', code: 'ORIGINS2026', reward: '500 Reroll Gems + 2x Monarch Trait Potions', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-monarch', code: 'SHADOWKING', reward: 'Free Epic Shadow Soldier + 25,000 Gold', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-subtoanime', code: 'SUB2ORIGINS', reward: '300 Gems + 10x Trait Dice', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-gojoupdate', code: 'HONOREDONE', reward: '5x Evolution Shards', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-gear5hype', code: 'WARRIOROFFREEDOM', reward: '1,000 Gems', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-release', code: 'RELEASE', reward: '250 Gems + 10,000 Gold', status: 'ACTIVE', dateAdded: '' }
];
