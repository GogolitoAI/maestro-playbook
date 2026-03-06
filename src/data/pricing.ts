import type { PricingFlex, PricingUnlimited, PricingSouverain } from '@/lib/types';

export const pricingFlex: PricingFlex = {
  type: 'flex',
  setup: 2140,
  perUserPerMonth: {
    base: 23,
    notes: 28,
    shield: 30,
    shield_notes: 35,
  },
};

export const pricingUnlimited: PricingUnlimited = {
  type: 'unlimited',
  setup: 0,
  licensePerMonth: {
    base: 500,
    notes: 600,
    shield: 600,
    shield_notes: 700,
  },
  messageCost: '100\u20ac / 500 messages',
};

export const pricingSouverain: PricingSouverain = {
  type: 'souverain',
  licensePerMonth: {
    base: 500,
    notes: 600,
    shield: 600,
    shield_notes: 700,
  },
  messageCost: '100\u20ac / 500 messages',
  servers: [
    {
      name: 'Essentiel',
      cost: '~8 300\u20ac',
      maxUsers: '~80',
      description: 'Lenovo PGX GB10 — Budget maitrise',
    },
    {
      name: 'Standard',
      cost: '~15-30K\u20ac',
      maxUsers: '~200',
      description: 'RTX 6000 Blackwell — Marge pour LLM 70B',
    },
    {
      name: 'Intensif',
      cost: '~50-100K\u20ac+',
      maxUsers: '~500+',
      description: 'Dell AI Factory H200 — Full local, zero dependance',
    },
  ],
};
