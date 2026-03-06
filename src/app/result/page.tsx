'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { RotateCcw, Download, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQualificationStore } from '@/store/qualification-store';
import { RecommendationCard } from '@/components/result/RecommendationCard';
import { PricingTable } from '@/components/result/PricingTable';
import { ArgumentsPanel } from '@/components/result/ArgumentsPanel';
import { ObjectionsPanel } from '@/components/result/ObjectionsPanel';
import { UpsellTimeline } from '@/components/result/UpsellTimeline';
import { CopilotComparison } from '@/components/result/CopilotComparison';
import { sectors } from '@/data/sectors';
import { interlocutors } from '@/data/interlocutors';
import { useState } from 'react';

export default function ResultPage() {
  const router = useRouter();
  const { recommendation, answers, reset } = useQualificationStore();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!recommendation) {
      router.push('/qualification');
    }
  }, [recommendation, router]);

  if (!recommendation) return null;

  const clientName = (answers.clientName as string) || 'Client';
  const sectorInfo = answers.sector ? sectors[answers.sector as string] : null;
  const interlocutorInfo = answers.interlocutorType ? interlocutors[answers.interlocutorType as string] : null;

  const handleCopy = async () => {
    const text = [
      `Recommandation pour ${clientName}`,
      `Parcours: ${recommendation.path.name} (${recommendation.pathId})`,
      `Pack: ${recommendation.recommendedPack}`,
      '',
      'Arguments:',
      ...recommendation.arguments.map((a, i) => `${i + 1}. ${a.title}: ${a.description}`),
      '',
      'Pitch:',
      recommendation.adaptedPitch,
    ].join('\n');

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewQualification = () => {
    reset();
    router.push('/qualification');
  };

  return (
    <div className="min-h-[calc(100dvh-4rem)] pb-12">
      <div className="max-w-3xl mx-auto px-4 pt-6 space-y-6">
        {/* Recommendation hero */}
        <RecommendationCard recommendation={recommendation} clientName={clientName} />

        {/* Context badges */}
        {(sectorInfo || interlocutorInfo) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 text-sm"
          >
            {sectorInfo && (
              <div className="px-4 py-2 rounded-xl bg-card border border-border/60">
                <span className="text-muted-foreground">Secteur : </span>
                <span className="font-medium">{sectorInfo.label}</span>
              </div>
            )}
            {interlocutorInfo && (
              <div className="px-4 py-2 rounded-xl bg-card border border-border/60">
                <span className="text-muted-foreground">Interlocuteur : </span>
                <span className="font-medium">{interlocutorInfo.label}</span>
              </div>
            )}
            {interlocutorInfo && (
              <div className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/15 text-primary">
                <span className="font-medium">Accroche : </span>
                {interlocutorInfo.accroche}
              </div>
            )}
          </motion.div>
        )}

        {/* Pricing */}
        <PricingTable
          recommendation={recommendation}
          userRange={(answers.userCount as string) || '10-30'}
        />

        {/* Arguments */}
        <ArgumentsPanel arguments_={recommendation.arguments} />

        {/* Sector-specific tips */}
        {sectorInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-card rounded-2xl border border-border/60 p-6"
          >
            <h3 className="font-semibold text-lg mb-4">Adaptation secteur : {sectorInfo.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-xl bg-accent/40">
                <span className="text-muted-foreground block mb-1">La douleur</span>
                <span className="font-medium">{sectorInfo.pain}</span>
              </div>
              <div className="p-3 rounded-xl bg-accent/40">
                <span className="text-muted-foreground block mb-1">Le levier</span>
                <span className="font-medium">{sectorInfo.lever}</span>
              </div>
              <div className="p-3 rounded-xl bg-accent/40">
                <span className="text-muted-foreground block mb-1">Argument Shield</span>
                <span className="font-medium">{sectorInfo.shieldArgument}</span>
              </div>
              <div className="p-3 rounded-xl bg-accent/40">
                <span className="text-muted-foreground block mb-1">Argument Notes</span>
                <span className="font-medium">{sectorInfo.notesArgument}</span>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10 text-sm">
              <span className="text-muted-foreground">Analogie : </span>
              <span className="font-medium text-primary">&ldquo;{sectorInfo.analogy}&rdquo;</span>
            </div>
          </motion.div>
        )}

        {/* Copilot comparison (conditional) */}
        {recommendation.copilotComparison && (
          <CopilotComparison rows={recommendation.copilotComparison} />
        )}

        {/* Objections */}
        <ObjectionsPanel objections={recommendation.objections} />

        {/* Upsell timeline */}
        <UpsellTimeline upsells={recommendation.upsells} />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 pt-4"
        >
          <Button
            onClick={handleNewQualification}
            variant="outline"
            className="h-12 rounded-xl flex-1 font-medium"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Nouvelle qualification
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="h-12 rounded-xl flex-1 font-medium"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" />
                Copie !
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copier le resume
              </>
            )}
          </Button>
          <Button
            className="h-12 rounded-xl flex-1 gradient-primary text-white font-medium shadow-lg shadow-primary/20"
            asChild
          >
            <a href="/maestro-guide.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Guide complet PDF
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
