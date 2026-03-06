export interface QuestionOption {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface QuestionDef {
  id: string;
  title: string;
  subtitle: string;
  type: 'text' | 'select';
  options?: QuestionOption[];
}

export const questions: QuestionDef[] = [
  {
    id: 'clientName',
    title: 'Quel est le nom du client ?',
    subtitle: "Nom de l'organisation ou de l'entreprise",
    type: 'text',
  },
  {
    id: 'sector',
    title: 'Quel est le secteur ?',
    subtitle: "Type d'organisation du client",
    type: 'select',
    options: [
      { value: 'public', label: 'Collectivite / Public', description: 'Mairie, metropole, region, departement', icon: 'Landmark' },
      { value: 'pme_eti', label: 'PME / ETI', description: 'Entreprise privee de 10 a 5000 salaries', icon: 'Building2' },
      { value: 'healthcare', label: 'Sante', description: 'Hopital, clinique, cabinet medical', icon: 'Heart' },
      { value: 'defense_legal', label: 'Defense / Juridique', description: 'Defense, cabinet juridique, industrie sensible', icon: 'Shield' },
    ],
  },
  {
    id: 'userCount',
    title: "Combien d'utilisateurs ?",
    subtitle: "Nombre de personnes qui utiliseront Maestro AI",
    type: 'select',
    options: [
      { value: '10-30', label: '10 a 30', description: 'Petite equipe ou PME', icon: 'Users' },
      { value: '30-100', label: '30 a 100', description: 'Organisation moyenne', icon: 'UsersRound' },
      { value: '100+', label: '100+', description: 'Grande organisation', icon: 'Building' },
    ],
  },
  {
    id: 'dataSensitivity',
    title: 'Quelle sensibilite des donnees ?',
    subtitle: 'Niveau de confidentialite requis',
    type: 'select',
    options: [
      { value: 'conformes', label: 'Conformes', description: 'Donnees standard, pas de contrainte particuliere', icon: 'FileCheck' },
      { value: 'sensibles', label: 'Sensibles', description: 'Donnees personnelles, RGPD, marches publics', icon: 'AlertTriangle' },
      { value: 'critiques', label: 'Critiques', description: 'Donnees qui ne doivent JAMAIS sortir', icon: 'ShieldAlert' },
    ],
  },
  {
    id: 'interlocutorType',
    title: "Profil de l'interlocuteur ?",
    subtitle: 'Adapte le discours et les arguments',
    type: 'select',
    options: [
      { value: 'technical', label: 'Technique', description: 'DSI, DPO, RSSI — focus securite et conformite', icon: 'Cpu' },
      { value: 'business', label: 'Direction / Metier', description: 'DG, DGS, dirigeant — focus ROI et productivite', icon: 'TrendingUp' },
    ],
  },
  {
    id: 'currentSolution',
    title: 'Solution IA actuelle ?',
    subtitle: "Ce que le client utilise aujourd'hui",
    type: 'select',
    options: [
      { value: 'copilot', label: 'Microsoft Copilot', description: 'Copilot M365 ou Copilot Studio', icon: 'BrainCircuit' },
      { value: 'chatgpt', label: 'ChatGPT', description: 'ChatGPT gratuit ou Plus', icon: 'MessageSquare' },
      { value: 'nothing', label: 'Rien', description: "Pas d'outil IA en place", icon: 'CircleOff' },
      { value: 'other', label: 'Autre', description: 'Autre solution IA', icon: 'MoreHorizontal' },
    ],
  },
  {
    id: 'budgetType',
    title: 'Type de budget ?',
    subtitle: "Mode de fonctionnement budgetaire du client",
    type: 'select',
    options: [
      { value: 'fixed', label: 'Budget fixe', description: 'Budget primitif, marche public, enveloppe annuelle', icon: 'Wallet' },
      { value: 'variable', label: 'Budget variable', description: 'Flexible, decision rapide possible', icon: 'ArrowUpDown' },
    ],
  },
  {
    id: 'disconnectRequired',
    title: 'Besoin de deconnexion Internet ?',
    subtitle: "L'IA doit-elle fonctionner sans connexion ?",
    type: 'select',
    options: [
      { value: 'true', label: 'Oui', description: "L'IA doit tourner meme sans Internet", icon: 'WifiOff' },
      { value: 'false', label: 'Non', description: 'Connexion Internet disponible', icon: 'Wifi' },
    ],
  },
];
