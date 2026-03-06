'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/data/questions';
import { OptionCard } from './OptionCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface StepRendererProps {
  step: number;
  answers: Record<string, string | boolean>;
  onAnswer: (key: string, value: string | boolean) => void;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function StepRenderer({ step, answers, onAnswer, direction }: StepRendererProps) {
  const question = questions[step];
  const [textValue, setTextValue] = useState((answers[question.id] as string) || '');

  if (!question) return null;

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={step}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full"
      >
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {question.title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-2 text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {question.subtitle}
          </motion.p>
        </div>

        {question.type === 'text' ? (
          <motion.div
            className="max-w-md mx-auto space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && textValue.trim()) {
                  onAnswer(question.id, textValue.trim());
                }
              }}
              placeholder="Ex: Mairie de Lyon, Groupe Dupont..."
              autoFocus
              className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-border/60 bg-card focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-muted-foreground/50"
            />
            <Button
              onClick={() => {
                if (textValue.trim()) {
                  onAnswer(question.id, textValue.trim());
                }
              }}
              disabled={!textValue.trim()}
              className="w-full h-12 rounded-xl gradient-primary text-white font-medium text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow disabled:opacity-40"
            >
              Continuer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        ) : (
          <div className={`grid gap-3 ${
            (question.options?.length ?? 0) <= 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto'
              : (question.options?.length ?? 0) <= 3
                ? 'grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto'
                : 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
          }`}>
            {question.options?.map((option, index) => (
              <OptionCard
                key={option.value}
                label={option.label}
                description={option.description}
                icon={option.icon}
                selected={answers[question.id] === option.value || answers[question.id] === (option.value === 'true')}
                onClick={() => {
                  const val = question.id === 'disconnectRequired'
                    ? option.value === 'true'
                    : option.value;
                  onAnswer(question.id, val);
                }}
                index={index}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
