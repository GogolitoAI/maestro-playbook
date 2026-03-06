import type { SectorInfo } from '@/lib/types';

export const sectors: Record<string, SectorInfo> = {
  public: {
    id: 'public',
    label: 'Collectivite / Secteur public',
    pain: "Conformite RGPD, responsabilite penale de l'elu, lourdeur administrative",
    lever: 'Budget primitif, marche public',
    argument: "Shadow AI = risque juridique. Qualite du service public (permis \u00f72)",
    shieldArgument: 'SecNumCloud, coche la case ANSSI',
    notesArgument: 'CM, commissions \u2192 CR en 15 min',
    analogy: "Vous n'equiperiez pas votre mairie en cles USB",
  },
  prive: {
    id: 'prive',
    label: 'PME / ETI / Prive',
    pain: 'Competitivite, cout par tache, temps perdu',
    lever: 'Decision rapide du DG, rentabilite',
    argument: "Ratio 1:4 : 230\u20ac/mois pour 53% d'un ETP",
    shieldArgument: 'Donnees clients anonymisees',
    notesArgument: 'CODIR, reunions client \u2192 CR immediat',
    analogy: "Un expert 24h/24 qui ne repete rien",
  },
};
