'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface OptionCardProps {
  label: string;
  description: string;
  icon: string;
  selected?: boolean;
  onClick: () => void;
  index: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getIcon(name: string): React.ComponentType<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (LucideIcons as any)[name] || LucideIcons.Circle;
}

export function OptionCard({ label, description, icon, selected, onClick, index }: OptionCardProps) {
  const Icon = getIcon(icon);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className={`
        group relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-200
        ${selected
          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
          : 'border-border/60 bg-card hover:border-primary/40 hover:bg-accent/50 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className={`
          shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors
          ${selected
            ? 'gradient-primary text-white shadow-md'
            : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
          }
        `}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className={`font-semibold text-[15px] leading-tight ${selected ? 'text-primary' : 'text-foreground'}`}>
            {label}
          </p>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {selected && (
        <motion.div
          layoutId="selected-indicator"
          className="absolute top-3 right-3 w-5 h-5 rounded-full gradient-primary flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <LucideIcons.Check className="w-3 h-3 text-white" />
        </motion.div>
      )}
    </motion.button>
  );
}
