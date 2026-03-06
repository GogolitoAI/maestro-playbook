'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import type { UpsellStep } from '@/lib/types';

interface UpsellTimelineProps {
  upsells: UpsellStep[];
}

export function UpsellTimeline({ upsells }: UpsellTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="bg-card rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="p-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Roadmap Upsell</h3>
            <p className="text-sm text-muted-foreground">Faire monter le client dans la matrice</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-border/60" />

          <div className="space-y-6">
            {upsells.map((upsell, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative flex gap-4"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full gradient-primary" />
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                      {upsell.timing}
                    </span>
                    <span className="font-semibold text-[15px]">{upsell.target}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    &ldquo;{upsell.trigger}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
