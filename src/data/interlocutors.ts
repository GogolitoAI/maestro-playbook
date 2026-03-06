import type { InterlocutorInfo } from '@/lib/types';

export const interlocutors: Record<string, InterlocutorInfo> = {
  technical: {
    id: 'technical',
    label: 'DSI / DPO / RSSI',
    accroche: 'Shadow AI + risque RGPD',
    language: 'Technique, conformite, architecture',
    topObjection: 'Copilot / securite / integration SI',
    convincer: 'Curseur souverainete, Shield, ZDR, SLA',
    analogy: 'Coffre chez soi vs coffre a la banque',
  },
  business: {
    id: 'business',
    label: 'DG / DGS / Dirigeant',
    accroche: 'Productivite + qualite de service',
    language: 'Business, delais, cout, impact',
    topObjection: 'Prix / ROI / adoption',
    convincer: "Cas d'usage concrets, bilan 3 mois",
    analogy: 'Cle USB vs serveur de fichiers',
  },
};
