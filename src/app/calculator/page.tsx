import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Anime Origins Unit DPS & Trait Calculator ',
  description: 'Calculate Anime Origins trait value and reroll expectations — all 23 documented traits with real roll odds, stat packages, and expected reroll counts.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['anime origins trait calculator', 'anime origins reroll odds', 'anime origins trait tier list'],
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
