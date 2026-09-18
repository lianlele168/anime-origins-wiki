import React from 'react';
import type { Metadata } from 'next';
import TraitSimulatorClient from './TraitSimulatorClient';

export const metadata: Metadata = {
  title: 'Anime Origins Trait Reroll Simulator ',
  description: 'Simulate trait rerolls in Anime Origins. Test your luck for Monarch (+150% DMG) and Godly (+100% DMG) traits with exact roll odds.',
  alternates: {
    canonical: '/trait-simulator',
  },
  keywords: ['anime origins trait simulator', 'anime origins trait reroll', 'monarch trait odds anime origins'],
};

export default function TraitSimulatorPage() {
  return <TraitSimulatorClient />;
}
