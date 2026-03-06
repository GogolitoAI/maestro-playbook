import type {
  QualificationAnswers,
  PathId,
  PackLevel,
  Recommendation,
  PricingTier,
} from './types';
import { salesPaths } from '@/data/paths';
import { pricingFlex, pricingUnlimited, pricingSouverain } from '@/data/pricing';
import { copilotComparison } from '@/data/copilot-comparison';

export function determinePath(answers: QualificationAnswers): PathId {
  const { userCount, dataSensitivity, disconnectRequired } = answers;
  const isSmall = userCount === '10-30';

  if (disconnectRequired || dataSensitivity === 'critiques') {
    return isSmall ? '3.1' : '3.2';
  }

  if (dataSensitivity === 'sensibles') {
    return isSmall ? '1.2' : '2.2';
  }

  return isSmall ? '1.1' : '2.1';
}

export function recommendPack(answers: QualificationAnswers): PackLevel {
  const { dataSensitivity, sector } = answers;

  if (dataSensitivity === 'critiques') return 'shield_notes';
  if (dataSensitivity === 'sensibles') return 'shield';
  if (sector === 'public' || sector === 'healthcare') return 'notes';
  return 'base';
}

export function getPricingTier(pathId: PathId): PricingTier {
  if (pathId === '1.1' || pathId === '1.2') return pricingFlex;
  if (pathId === '2.1' || pathId === '2.2') return pricingUnlimited;
  return pricingSouverain;
}

export function generateRecommendation(answers: QualificationAnswers): Recommendation {
  const pathId = determinePath(answers);
  const path = salesPaths[pathId];
  const pack = recommendPack(answers);
  const pricingTier = getPricingTier(pathId);

  return {
    pathId,
    path,
    recommendedPack: pack,
    pricingTier,
    arguments: path.arguments,
    objections: path.objections,
    upsells: path.upsells,
    copilotComparison: answers.currentSolution === 'copilot' ? copilotComparison : null,
    adaptedPitch: path.pitch,
  };
}
