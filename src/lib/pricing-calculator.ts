import type { PackLevel, PricingTier } from './types';

export interface PricingExample {
  setup: string;
  monthlyRecurring: string;
  yearOne: string;
  yearTwoPlus: string;
  perUserMonth: string;
  details: string[];
}

export function calculatePricing(
  pricingTier: PricingTier,
  pack: PackLevel,
  userCount: number,
  messagesPerMonth: number = 0,
): PricingExample {
  if (pricingTier.type === 'flex') {
    const pricePerUser = pricingTier.perUserPerMonth[pack];
    const monthly = userCount * pricePerUser;
    const yearOne = pricingTier.setup + monthly * 12;
    const yearTwo = monthly * 12;

    return {
      setup: `${pricingTier.setup.toLocaleString('fr-FR')}\u20ac HT`,
      monthlyRecurring: `${monthly.toLocaleString('fr-FR')}\u20ac/mois`,
      yearOne: `${yearOne.toLocaleString('fr-FR')}\u20ac`,
      yearTwoPlus: `${yearTwo.toLocaleString('fr-FR')}\u20ac/an`,
      perUserMonth: `${pricePerUser}\u20ac/user/mois`,
      details: [
        `${userCount} users x ${pricePerUser}\u20ac = ${monthly}\u20ac/mois`,
        `Setup one-shot : ${pricingTier.setup.toLocaleString('fr-FR')}\u20ac HT`,
        `Min. 10 users`,
      ],
    };
  }

  if (pricingTier.type === 'unlimited') {
    const license = pricingTier.licensePerMonth[pack];
    const msgPacks = Math.ceil(messagesPerMonth / 500);
    const msgCost = msgPacks * 100;
    const monthly = license + msgCost;
    const annual = monthly * 12;
    const perUser = userCount > 0 ? Math.round((monthly / userCount) * 100) / 100 : 0;

    return {
      setup: 'Offert',
      monthlyRecurring: `${monthly.toLocaleString('fr-FR')}\u20ac/mois`,
      yearOne: `~${annual.toLocaleString('fr-FR')}\u20ac`,
      yearTwoPlus: `~${annual.toLocaleString('fr-FR')}\u20ac/an`,
      perUserMonth: `~${perUser}\u20ac/user/mois`,
      details: [
        `Licence : ${license}\u20ac/mois`,
        `Messages : ${msgPacks > 0 ? `${msgPacks} x 100\u20ac = ${msgCost}\u20ac/mois` : 'selon usage'}`,
        `Users illimites — setup offert`,
        `${userCount} users = ${perUser}\u20ac/tete`,
      ],
    };
  }

  // souverain
  const license = pricingTier.licensePerMonth[pack];
  const msgPacks = Math.ceil(messagesPerMonth / 500);
  const msgCost = msgPacks * 100;
  const monthly = license + msgCost;
  const annual = monthly * 12;

  return {
    setup: 'Serveur on-premise (voir paliers)',
    monthlyRecurring: `${monthly.toLocaleString('fr-FR')}\u20ac/mois`,
    yearOne: `Serveur + ~${annual.toLocaleString('fr-FR')}\u20ac licence`,
    yearTwoPlus: `~${annual.toLocaleString('fr-FR')}\u20ac/an`,
    perUserMonth: 'Licence fixe, users illimites',
    details: [
      `Licence : ${license}\u20ac/mois + messages`,
      ...pricingTier.servers.map(s => `${s.name} : ${s.cost} (${s.maxUsers} users) — ${s.description}`),
      'Location 36 mois possible',
    ],
  };
}

export function getDefaultUserCount(userRange: string): number {
  switch (userRange) {
    case '10-30': return 15;
    case '30-100': return 50;
    case '100+': return 150;
    default: return 30;
  }
}

export function getDefaultMessages(userRange: string): number {
  const users = getDefaultUserCount(userRange);
  return users * 50;
}
