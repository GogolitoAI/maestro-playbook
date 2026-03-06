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
  pme_eti: {
    id: 'pme_eti',
    label: 'PME / ETI',
    pain: 'Competitivite, cout par tache, temps perdu',
    lever: 'Decision rapide du DG, rentabilite',
    argument: "Ratio 1:4 : 230\u20ac/mois pour 53% d'un ETP",
    shieldArgument: 'Donnees clients anonymisees',
    notesArgument: 'CODIR, reunions client \u2192 CR immediat',
    analogy: "Un expert 24h/24 qui ne repete rien",
  },
  healthcare: {
    id: 'healthcare',
    label: 'Sante',
    pain: 'Protection donnees patients, responsabilite medicale',
    lever: 'Obligation reglementaire, reduction du risque',
    argument: "Pseudonymisation permet le diagnostic sans nom du patient",
    shieldArgument: 'Donnees de sante pseudonymisees avant tout envoi',
    notesArgument: 'CR de consultation, staffs medicaux automatises',
    analogy: "Chirurgie, pas amputation : on retire le nom, pas le diagnostic",
  },
  defense_legal: {
    id: 'defense_legal',
    label: 'Defense / Juridique',
    pain: 'Donnees qui ne doivent jamais sortir',
    lever: 'Exigence reglementaire et contractuelle',
    argument: "100% deconnectable, zero dependance externe",
    shieldArgument: 'Pseudonymisation locale, aucun transit cloud',
    notesArgument: 'CR de reunions strategiques en local',
    analogy: "Coffre chez soi vs coffre a la banque",
  },
};
