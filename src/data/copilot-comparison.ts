import type { CopilotComparisonRow } from '@/lib/types';

export const copilotComparison: CopilotComparisonRow[] = [
  {
    criterion: 'Modeles',
    copilot: '1 seul (GPT) — enfermement',
    maestro: 'Multi-modeles (le meilleur selon la tache)',
  },
  {
    criterion: 'Donnees',
    copilot: 'Azure US, Cloud Act',
    maestro: 'Pseudonymisation SecNumCloud (ANSSI)',
  },
  {
    criterion: 'Produit',
    copilot: 'Assistant bureautique',
    maestro: 'Orchestrateur IA connecte aux metiers',
  },
  {
    criterion: 'Prix',
    copilot: '30\u20ac/user EN PLUS de M365',
    maestro: '23-30\u20ac/user tout inclus',
  },
  {
    criterion: 'Souverainete',
    copilot: 'Aucune option on-premise',
    maestro: 'Option SOUVERAIN 100% local',
  },
  {
    criterion: 'Deconnectable',
    copilot: 'Non',
    maestro: 'Oui (SOUVERAIN)',
  },
];
