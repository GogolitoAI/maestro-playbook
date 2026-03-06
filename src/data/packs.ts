import type { Pack } from '@/lib/types';

export const packs: Record<string, Pack> = {
  base: {
    id: 'base',
    name: 'Maestro',
    description: 'La plateforme IA complete',
    features: [
      'Instance dediee avec branding',
      'SSO / Active Directory',
      '+30 assistants transversaux',
      'Multi-modeles (ChatGPT, Claude, Gemini, Mistral)',
      'Consensus multi-IA',
      'Support 24h ouvrees',
    ],
  },
  notes: {
    id: 'notes',
    name: 'Maestro + Notes',
    description: 'Comptes-rendus de reunion automatises',
    features: [
      'Tout Maestro inclus',
      'CR de reunion automatises (presentiel)',
      'Visio en roadmap',
      'Export et partage instantanes',
    ],
  },
  shield: {
    id: 'shield',
    name: 'Maestro + Shield',
    description: 'Pseudonymisation des donnees sensibles',
    features: [
      'Tout Maestro inclus',
      'Pseudonymisation certifiee ANSSI',
      'SecNumCloud (FLEX/UNLIMITED) ou local (SOUVERAIN)',
      'Donnees filtrees avant envoi aux LLM',
    ],
  },
  shield_notes: {
    id: 'shield_notes',
    name: 'Maestro + Shield + Notes',
    description: 'Le pack complet',
    features: [
      'Tout Maestro inclus',
      'CR de reunion automatises',
      'Pseudonymisation certifiee ANSSI',
      'Protection maximale + productivite',
    ],
  },
};
