'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import type { Argument } from '@/lib/types';

interface ArgumentsPanelProps {
  arguments_: Argument[];
}

export function ArgumentsPanel({ arguments_ }: ArgumentsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.4 }}
      className="bg-card rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="p-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Les 3 arguments cles</h3>
            <p className="text-sm text-muted-foreground">A utiliser dans cet ordre</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {arguments_.map((arg, index) => (
          <motion.div
            key={arg.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex gap-4 p-4 rounded-xl bg-accent/40 hover:bg-accent/60 transition-colors"
          >
            <div className="shrink-0 w-8 h-8 rounded-lg gradient-primary text-white flex items-center justify-center font-bold text-sm shadow-sm">
              {index + 1}
            </div>
            <div>
              <p className="font-semibold text-[15px]">{arg.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                {arg.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
