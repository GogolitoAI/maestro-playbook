'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { packs } from '@/data/packs';
import type { Recommendation } from '@/lib/types';

interface RecommendationCardProps {
  recommendation: Recommendation;
  clientName: string;
}

const tierConfig = {
  flex: { gradient: 'gradient-flex', glow: 'shadow-glow-flex', label: 'FLEX', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  unlimited: { gradient: 'gradient-unlimited', glow: 'shadow-glow-unlimited', label: 'UNLIMITED', color: 'text-blue-700 bg-blue-50 border-blue-200' },
  souverain: { gradient: 'gradient-souverain', glow: 'shadow-glow-souverain', label: 'SOUVERAIN', color: 'text-violet-700 bg-violet-50 border-violet-200' },
};

export function RecommendationCard({ recommendation, clientName }: RecommendationCardProps) {
  const { path, recommendedPack } = recommendation;
  const tier = tierConfig[path.tier];
  const pack = packs[recommendedPack];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative overflow-hidden rounded-3xl ${tier.glow}`}
    >
      <div className={`${tier.gradient} p-8 sm:p-10 text-white`}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-white/70 text-sm font-medium mb-1">{clientName}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {path.name}
            </h2>
            <p className="text-white/80 mt-1 text-base">{path.subtitle}</p>
          </div>
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-7 h-7" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/20 hover:bg-white/25 backdrop-blur-sm">
            Parcours {path.id}
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/20 hover:bg-white/25 backdrop-blur-sm">
            {pack.name}
          </Badge>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="w-4 h-4 text-white/70" />
            <span className="text-sm font-medium text-white/70">Le pitch</span>
          </div>
          <p className="text-white/90 text-[15px] leading-relaxed">
            {recommendation.adaptedPitch}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
