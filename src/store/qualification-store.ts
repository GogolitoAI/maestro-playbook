'use client';

import { create } from 'zustand';
import type { QualificationAnswers, Recommendation } from '@/lib/types';
import { generateRecommendation } from '@/lib/qualification-engine';

interface QualificationState {
  currentStep: number;
  answers: Partial<QualificationAnswers>;
  recommendation: Recommendation | null;
  setAnswer: (key: string, value: string | boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  computeRecommendation: () => void;
  reset: () => void;
}

export const useQualificationStore = create<QualificationState>((set, get) => ({
  currentStep: 0,
  answers: {},
  recommendation: null,

  setAnswer: (key, value) => {
    set((state) => ({
      answers: { ...state.answers, [key]: value },
    }));
  },

  nextStep: () => {
    set((state) => ({ currentStep: state.currentStep + 1 }));
  },

  prevStep: () => {
    set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) }));
  },

  goToStep: (step) => {
    set({ currentStep: step });
  },

  computeRecommendation: () => {
    const { answers } = get();
    const fullAnswers = answers as QualificationAnswers;
    const recommendation = generateRecommendation(fullAnswers);
    set({ recommendation });
  },

  reset: () => {
    set({ currentStep: 0, answers: {}, recommendation: null });
  },
}));
