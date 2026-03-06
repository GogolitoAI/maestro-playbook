export type Sector = 'public' | 'prive';
export type UserRange = '10-30' | '30-100' | '100+';
export type DataSensitivity = 'conformes' | 'sensibles' | 'critiques';
export type InterlocutorType = 'technical' | 'business';
export type CurrentSolution = 'copilot' | 'chatgpt' | 'nothing' | 'other';
export type BudgetType = 'fixed' | 'variable';
export type PathId = '1.1' | '1.2' | '2.1' | '2.2' | '3.1' | '3.2';
export type PackLevel = 'base' | 'notes' | 'shield' | 'shield_notes';
export type TierType = 'flex' | 'unlimited' | 'souverain';

export interface QualificationAnswers {
  clientName: string;
  sector: Sector;
  userCount: UserRange;
  dataSensitivity: DataSensitivity;
  interlocutorType: InterlocutorType;
  currentSolution: CurrentSolution;
  budgetType: BudgetType;
  disconnectRequired: boolean;
}

export interface Argument {
  title: string;
  description: string;
}

export interface Objection {
  objection: string;
  response: string;
}

export interface UpsellStep {
  timing: string;
  target: string;
  trigger: string;
}

export interface PricingFlex {
  type: 'flex';
  setup: number;
  perUserPerMonth: Record<PackLevel, number>;
}

export interface PricingUnlimited {
  type: 'unlimited';
  setup: number;
  licensePerMonth: Record<PackLevel, number>;
  messageCost: string;
}

export interface PricingSouverain {
  type: 'souverain';
  licensePerMonth: Record<PackLevel, number>;
  messageCost: string;
  servers: {
    name: string;
    cost: string;
    maxUsers: string;
    description: string;
  }[];
}

export type PricingTier = PricingFlex | PricingUnlimited | PricingSouverain;

export interface SalesPath {
  id: PathId;
  name: string;
  tier: TierType;
  subtitle: string;
  pitch: string;
  arguments: Argument[];
  objections: Objection[];
  upsells: UpsellStep[];
}

export interface Pack {
  id: PackLevel;
  name: string;
  description: string;
  features: string[];
}

export interface CopilotComparisonRow {
  criterion: string;
  copilot: string;
  maestro: string;
}

export interface Recommendation {
  pathId: PathId;
  path: SalesPath;
  recommendedPack: PackLevel;
  pricingTier: PricingTier;
  arguments: Argument[];
  objections: Objection[];
  upsells: UpsellStep[];
  copilotComparison: CopilotComparisonRow[] | null;
  adaptedPitch: string;
}

export interface SectorInfo {
  id: Sector;
  label: string;
  pain: string;
  lever: string;
  argument: string;
  shieldArgument: string;
  notesArgument: string;
  analogy: string;
}

export interface InterlocutorInfo {
  id: InterlocutorType;
  label: string;
  accroche: string;
  language: string;
  topObjection: string;
  convincer: string;
  analogy: string;
}
