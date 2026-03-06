'use client';

import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { StepRenderer } from './StepRenderer';
import { useQualificationStore } from '@/store/qualification-store';
import { questions } from '@/data/questions';

export function WizardShell() {
  const router = useRouter();
  const { currentStep, answers, setAnswer, nextStep, prevStep, computeRecommendation } =
    useQualificationStore();
  const [direction, setDirection] = useState(1);
  const totalSteps = questions.length;
  const isNavigating = useRef(false);

  const handleAnswer = useCallback(
    (key: string, value: string | boolean) => {
      if (isNavigating.current) return;
      setAnswer(key, value);

      const isLastStep = currentStep === totalSteps - 1;
      if (isLastStep) {
        isNavigating.current = true;
        // Small delay so the user sees the selection
        setTimeout(() => {
          computeRecommendation();
          router.push('/result');
          isNavigating.current = false;
        }, 400);
      } else {
        setDirection(1);
        // Small delay for visual feedback on select steps
        const question = questions[currentStep];
        if (question.type === 'select') {
          isNavigating.current = true;
          setTimeout(() => {
            nextStep();
            isNavigating.current = false;
          }, 250);
        } else {
          nextStep();
        }
      }
    },
    [currentStep, totalSteps, setAnswer, nextStep, computeRecommendation, router],
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      prevStep();
    }
  }, [currentStep, prevStep]);

  return (
    <div className="min-h-[calc(100dvh-4rem)] flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-4 pt-6 pb-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <div className="w-full max-w-2xl">
          <StepRenderer
            step={currentStep}
            answers={answers as Record<string, string | boolean>}
            onAnswer={handleAnswer}
            direction={direction}
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-4 pb-6">
        {currentStep > 0 && (
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Retour
          </Button>
        )}
      </div>
    </div>
  );
}
