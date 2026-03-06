'use client';

import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';
import type { CopilotComparisonRow } from '@/lib/types';

interface CopilotComparisonProps {
  rows: CopilotComparisonRow[];
}

export function CopilotComparison({ rows }: CopilotComparisonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="bg-card rounded-2xl border border-border/60 overflow-hidden"
    >
      <div className="p-6 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <Swords className="w-5 h-5 text-violet-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Maestro vs Copilot</h3>
            <p className="text-sm text-muted-foreground">Comparaison point par point</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left px-6 py-3 font-medium text-muted-foreground"></th>
              <th className="text-left px-6 py-3 font-medium text-muted-foreground">Copilot</th>
              <th className="text-left px-6 py-3 font-semibold text-primary">Maestro</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-accent/30 transition-colors">
                <td className="px-6 py-3.5 font-medium">{row.criterion}</td>
                <td className="px-6 py-3.5 text-muted-foreground">{row.copilot}</td>
                <td className="px-6 py-3.5 font-medium text-primary">{row.maestro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
