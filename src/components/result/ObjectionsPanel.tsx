'use client';

import { motion } from 'framer-motion';
import { ShieldQuestion } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Objection } from '@/lib/types';

interface ObjectionsPanelProps {
  objections: Objection[];
}

export function ObjectionsPanel({ objections }: ObjectionsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.4 }}
      className="bg-card rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="p-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
            <ShieldQuestion className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Objections & Reponses</h3>
            <p className="text-sm text-muted-foreground">Anticipez les objections du client</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Accordion type="single" collapsible className="space-y-2">
          {objections.map((obj, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/40 rounded-xl px-4 data-[state=open]:bg-accent/30"
            >
              <AccordionTrigger className="text-[15px] font-medium hover:no-underline py-4">
                &ldquo;{obj.objection}&rdquo;
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                <div className="pl-3 border-l-2 border-primary/30">
                  {obj.response}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
