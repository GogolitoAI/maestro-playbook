'use client';

import { motion } from 'framer-motion';
import { Euro, Info } from 'lucide-react';
import type { Recommendation } from '@/lib/types';
import { calculatePricing, getDefaultUserCount, getDefaultMessages } from '@/lib/pricing-calculator';

interface PricingTableProps {
  recommendation: Recommendation;
  userRange: string;
}

export function PricingTable({ recommendation, userRange }: PricingTableProps) {
  const userCount = getDefaultUserCount(userRange);
  const messages = getDefaultMessages(userRange);
  const pricing = calculatePricing(
    recommendation.pricingTier,
    recommendation.recommendedPack,
    userCount,
    messages,
  );

  const rows = [
    { label: 'Setup', value: pricing.setup },
    { label: 'Recurrent', value: pricing.monthlyRecurring },
    { label: 'Cout par user', value: pricing.perUserMonth },
    { label: 'Annee 1', value: pricing.yearOne, highlight: true },
    { label: 'Annee 2+', value: pricing.yearTwoPlus },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="bg-card rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="p-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Euro className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Tarification</h3>
            <p className="text-sm text-muted-foreground">Estimation pour ~{userCount} utilisateurs</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border/40">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-6 py-4 ${row.highlight ? 'bg-primary/5' : ''}`}
          >
            <span className={`text-sm ${row.highlight ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
              {row.label}
            </span>
            <span className={`font-semibold ${row.highlight ? 'text-lg text-primary' : 'text-foreground'}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {pricing.details.length > 0 && (
        <div className="px-6 py-4 bg-muted/30 border-t border-border/40">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <ul className="text-xs text-muted-foreground space-y-1">
              {pricing.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}
