import React from 'react';
import type { Metadata } from 'next';
import TraitSimulatorClient from './TraitSimulatorClient';

export const metadata: Metadata = {
  title: 'Anime Origins Trait Reroll Simulator ',
  description: 'Simulate trait rerolls in Anime Origins with real documented odds — from Fury I (26%) to Overseer (4.1%) and Ascendant (19%). Includes the full 23-trait table.',
  alternates: {
    canonical: '/trait-simulator',
  },
  keywords: ['anime origins trait simulator', 'anime origins trait reroll', 'anime origins overseer odds', 'anime origins ascendant trait'],
};

export default function TraitSimulatorPage() {
  return <TraitSimulatorClient />;
}
