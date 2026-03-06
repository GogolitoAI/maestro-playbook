'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Brain, Zap, Target, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Target,
    title: 'Qualification intelligente',
    description: '8 questions pour identifier le parcours ideal',
  },
  {
    icon: Zap,
    title: 'Arguments adaptes',
    description: 'Discours ajuste selon le secteur et le profil',
  },
  {
    icon: Shield,
    title: 'Objections preparees',
    description: 'Reponses pretes pour chaque contre-argument',
  },
  {
    icon: Brain,
    title: 'Upsell planifie',
    description: 'Roadmap de montee en gamme a chaque etape',
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-4rem)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Playbook Commercial Maestro AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Qualifiez, argumentez,{' '}
              <span className="text-gradient">closez.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mt-5 leading-relaxed max-w-xl mx-auto">
              L&apos;outil terrain pour vos commerciaux. En quelques clics, obtenez l&apos;offre
              adaptee, les arguments de vente et la strategie d&apos;upsell.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Link href="/qualification">
                <Button
                  size="lg"
                  className="h-13 px-8 rounded-xl gradient-primary text-white font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Demarrer la qualification
                  <ArrowRight className="w-4.5 h-4.5 ml-2" />
                </Button>
              </Link>
              <Link href="/MAESTRO_AI_GUIDE_DE_VENTE.md" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 rounded-xl font-medium text-base"
                >
                  <FileText className="w-4.5 h-4.5 mr-2" />
                  Guide complet
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              className="group bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-[15px] mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-border/60 bg-card">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '6', label: 'Parcours de vente' },
              { value: '4', label: 'Packs disponibles' },
              { value: '70%', label: 'Shadow AI en entreprise' },
              { value: '21 ans', label: "Reel IT d'experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
