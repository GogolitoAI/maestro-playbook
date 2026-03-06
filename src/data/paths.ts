import type { SalesPath } from '@/lib/types';

export const salesPaths: Record<string, SalesPath> = {
  '1.1': {
    id: '1.1',
    name: 'FLEX',
    tier: 'flex',
    subtitle: 'PME 10-30 users, donnees conformes',
    pitch: "Vos equipes utilisent deja l'IA dans leur coin — ChatGPT gratuit, Copilot perso. Maestro, c'est la meme puissance (ChatGPT, Claude, Gemini, Mistral) dans un cadre maitrise : heberge en France, Zero Data Retention, avec vos propres assistants metiers. A 23\u20ac par personne, c'est moins cher qu'un ChatGPT Plus et 10 fois plus securise.",
    arguments: [
      {
        title: 'Shadow AI',
        description: "70% de vos collaborateurs utilisent deja l'IA. 60% sans vous le dire.",
      },
      {
        title: 'Ratio 1:4',
        description: "230\u20ac/mois pour 10 personnes = 12% du cout d'un ETP pour 53% de sa production.",
      },
      {
        title: 'Multi-modeles',
        description: 'Pas enferme chez un seul fournisseur. Le meilleur modele selon la tache.',
      },
    ],
    objections: [
      {
        objection: 'Trop cher',
        response: "4 900\u20ac Y1. Des Y2 \u2192 230\u20ac/mois. Amorti en quelques semaines.",
      },
      {
        objection: 'On a Copilot',
        response: "Copilot = 30\u20ac EN PLUS de M365, 1 modele, Cloud Act. Maestro a 23\u20ac = moins cher, plus de modeles.",
      },
      {
        objection: "10 users mini, on en a besoin que de 5",
        response: "Meme a 5 actifs \u2192 46\u20ac/tete < ChatGPT Plus. Bilan a 3 mois.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: '+ Notes (28\u20ac)', trigger: 'Votre dernier CR a pris combien de temps ?' },
      { timing: 'M+3', target: '+ Shield (30\u20ac)', trigger: 'Pour 7\u20ac de plus, donnees pseudonymisees' },
      { timing: 'M+6', target: 'UNLIMITED', trigger: 'Adoption > 30 users \u2192 economie' },
    ],
  },
  '1.2': {
    id: '1.2',
    name: 'FLEX + Shield',
    tier: 'flex',
    subtitle: 'Petite collectivite, PME sensible (sante, juridique, finance)',
    pitch: "Vous manipulez des donnees sensibles — administres, patients, contrats. Maestro + Shield, c'est la pseudonymisation certifiee ANSSI avant chaque envoi. A 30\u20ac par agent, meme prix que Copilot — mais avec la securite en plus.",
    arguments: [
      {
        title: "Responsabilite",
        description: "Donnees d'administres dans ChatGPT = responsabilite penale de l'elu.",
      },
      {
        title: 'VS Copilot',
        description: "Meme prix, multi-modeles + SecNumCloud. Copilot n'a rien de tout ca.",
      },
      {
        title: 'Chirurgie, pas amputation',
        description: "On enleve le nom du dossier, le medecin diagnostique quand meme.",
      },
    ],
    objections: [
      {
        objection: "SecNumCloud c'est quoi ?",
        response: "Certification ANSSI. Pseudo sur infra qualifiee par l'Etat AVANT envoi. Echange DPO recommande.",
      },
      {
        objection: 'On a Copilot',
        response: "Meme prix. Copilot = Azure US, Cloud Act, pas de pseudo. Le DPO ne peut pas valider.",
      },
      {
        objection: 'Setup 2 140\u20ac pour tester',
        response: "Instance dediee + SSO + immersion terrain. Setup en 2x possible.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: '+ Notes (35\u20ac)', trigger: 'Full combo. CR de conseil municipal en 15 min.' },
      { timing: 'M+3', target: 'Assistants metiers', trigger: 'Assistant urbanisme branche sur le PLU' },
      { timing: 'M+6', target: 'UNLIMITED + Shield', trigger: 'Adoption > 30 users' },
      { timing: 'M+12', target: 'SOUVERAIN', trigger: 'Rien ne sort, meme pas pseudonymise' },
    ],
  },
  '2.1': {
    id: '2.1',
    name: 'UNLIMITED',
    tier: 'unlimited',
    subtitle: 'PME ou collectivite 30+ users, donnees conformes',
    pitch: "Plus de 30 utilisateurs ? Maestro Unlimited : forfait fixe, users illimites. Plus vous embarquez de monde, moins ca coute par tete. Setup offert. Vous ajoutez 20 personnes demain sans avenant.",
    arguments: [
      {
        title: 'Economie',
        description: "30 x 23\u20ac = 690\u20ac en FLEX. Unlimited = 500\u20ac. Vous economisez 190\u20ac/mois des J1.",
      },
      {
        title: 'Users illimites',
        description: "Pas de compteur, pas d'avenant. Tout le monde embarque.",
      },
      {
        title: 'Setup offert',
        description: "Zero frais d'entree.",
      },
    ],
    objections: [
      {
        objection: 'Pourquoi pas rester en FLEX ?',
        response: "A 30 users = plus cher en FLEX. Chaque ajout = +23\u20ac. En Unlimited, c'est flat.",
      },
      {
        objection: 'Messages, ca peut exploser',
        response: "100\u20ac/500 msg. ~50 msg/user/mois. Forfait prepaye possible.",
      },
      {
        objection: 'On a Copilot',
        response: "Copilot 40 users = 1 200\u20ac/mois. Unlimited = 500\u20ac + msg. Moins cher, plus de modeles.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: '+ Notes (+100\u20ac)', trigger: "CR automatises pour toute l'orga." },
      { timing: 'M+3', target: '+ Shield (+100\u20ac)', trigger: "600\u20ac au lieu de 500\u20ac, donnees pseudonymisees" },
      { timing: 'M+6', target: 'RAG + Assistants', trigger: "On connecte l'IA a vos procedures" },
      { timing: 'M+12', target: 'SOUVERAIN', trigger: 'Infra locale' },
    ],
  },
  '2.2': {
    id: '2.2',
    name: 'UNLIMITED + Shield',
    tier: 'unlimited',
    subtitle: 'Grosse collectivite, ETI sensible, metropole, hopital',
    pitch: "30, 50, 100 agents avec des donnees sensibles — administres, patients, marches publics. Unlimited + Shield : licence orga, users illimites, setup offert, pseudonymisation SecNumCloud ANSSI avant chaque envoi.",
    arguments: [
      {
        title: "Responsabilite de l'elu",
        description: "ChatGPT gratuit + donnees d'administres = risque juridique reel.",
      },
      {
        title: 'SecNumCloud = case ANSSI',
        description: "En marche public, ca ferme le debat avec le DPO.",
      },
      {
        title: '22\u20ac/tete a 50 users',
        description: "Moins cher que Copilot par tete, avec la pseudo en plus.",
      },
    ],
    objections: [
      {
        objection: 'Budget primitif, pas de variable',
        response: "Forfait annuel prepaye. Pack de messages pour l'exercice.",
      },
      {
        objection: 'Marche public',
        response: "Reel IT : 21 ans, 70M\u20ac, ISO 27001, ANSSI. Devis detaille fourni.",
      },
      {
        objection: 'Pourquoi pas SOUVERAIN ?',
        response: "Meme licence. Le surcout c'est le serveur (~8 300\u20ac). Sensible \u2260 critique.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: '+ Notes (700\u20ac/mois total)', trigger: 'CR de conseil municipal en 15 min.' },
      { timing: 'M+3', target: 'Assistants metiers + RAG', trigger: 'Assistant urbanisme sur le PLU' },
      { timing: 'M+12', target: 'SOUVERAIN', trigger: 'Meme licence, on ajoute le serveur' },
    ],
  },
  '3.1': {
    id: '3.1',
    name: 'SOUVERAIN Essentiel',
    tier: 'souverain',
    subtitle: 'Petite structure, donnees critiques (cabinet medical, defense, juridique)',
    pitch: "Vos donnees ne doivent pas sortir. Point. Maestro Souverain : LLM local, pseudonymisation locale, deconnectable d'Internet. Si vous coupez le cable, ca tourne toujours.",
    arguments: [
      {
        title: 'Rien ne sort',
        description: "Pseudonymisation en local. Aucun cloud, meme francais.",
      },
      {
        title: 'Deconnectable',
        description: "Coupez Internet, l'IA tourne toujours.",
      },
      {
        title: 'Users illimites',
        description: "5 ou 50 personnes, la licence ne bouge pas.",
      },
    ],
    objections: [
      {
        objection: "C'est 4x FLEX",
        response: "La licence est la meme (500-700\u20ac). Le surcout c'est le serveur : ~8 300\u20ac one-shot. Coffre chez soi vs coffre a la banque.",
      },
      {
        objection: 'Serveur = maintenance',
        response: "MCO inclus. Support 4h. Mises a jour sans interruption. On gere.",
      },
      {
        objection: "On n'est que 15",
        response: "Palier Essentiel concu pour les petites structures. ~80 users max.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: 'Full combo Shield+Notes', trigger: 'Donnees critiques = le standard' },
      { timing: 'M+3', target: 'RAG docs confidentiels', trigger: "L'IA interroge vos dossiers — en local" },
      { timing: 'M+12', target: 'Upgrade Standard', trigger: 'LLM 70B, plus de puissance' },
    ],
  },
  '3.2': {
    id: '3.2',
    name: 'SOUVERAIN Standard / Intensif',
    tier: 'souverain',
    subtitle: 'Grosse structure, donnees critiques (hopital, metropole, defense, industrie)',
    pitch: "50, 100, 200+ personnes. Donnees critiques. Serveur dedie dans vos locaux, LLM local, deconnectable. Le palier Intensif permet du full local sans aucune API externe.",
    arguments: [
      {
        title: 'Zero dependance',
        description: "Le palier Intensif tourne 100% en local. Pas d'API, pas d'Internet.",
      },
      {
        title: 'Preparer le futur',
        description: "Aujourd'hui pseudo locale. Demain LLM 70B conversationnel en local.",
      },
      {
        title: 'Reel IT derriere',
        description: "21 ans, 70M\u20ac, Dell AI Factory Member. Pas une startup qui disparait.",
      },
    ],
    objections: [
      {
        objection: '50-100K\u20ac de serveur',
        response: "Location 36 mois. Immobilisation, pas fonctionnement. A 200 users = 20\u20ac/mois/tete amorti sur 3 ans.",
      },
      {
        objection: 'On veut un POC',
        response: "Demarrez en FLEX+Shield (5 740\u20ac Y1). Validez la valeur. Basculez en SOUVERAIN apres.",
      },
      {
        objection: 'Integration SI',
        response: "SSO/AD, API REST. Point technique avec le DSI avant signature.",
      },
    ],
    upsells: [
      { timing: 'Signature', target: 'Full combo', trigger: 'Donnees critiques a cette echelle = le standard' },
      { timing: 'M+3', target: 'RAG multi-bases', trigger: 'Chaque service sa base, acces cloisonne' },
      { timing: 'M+6', target: 'Assistants metiers', trigger: 'Un assistant par service' },
      { timing: 'M+12', target: 'Upgrade Intensif', trigger: 'Full local, zero API externe' },
    ],
  },
};
