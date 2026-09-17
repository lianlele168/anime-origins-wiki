import React from 'react';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Anime Origins Wiki — 2026 Codes, Trait Simulator & Tier List (September 2026)',
  description: 'The ultimate Anime Origins Roblox guide — Unit Tier List, Active Redeem Codes, Trait Reroll Simulator, and Evolution Recipes for September 2026.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
