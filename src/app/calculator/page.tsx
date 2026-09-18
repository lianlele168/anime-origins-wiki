import React from 'react';
import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Anime Origins Unit DPS & Trait Calculator ',
  description: 'Calculate unit damage, speed per attack (SPA), level progression, and trait multipliers in Anime Origins.',
  alternates: {
    canonical: '/calculator',
  },
  keywords: ['anime origins dps calculator', 'anime origins unit damage', 'anime origins monarch trait stats'],
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
