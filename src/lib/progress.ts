'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mathplanet_progress';

interface UnitProgress {
  quizScores: number[];    // scores per attempt
  completed: boolean;
  lastAttempt?: number;    // timestamp
}

interface GradeProgress {
  [unitSlug: string]: UnitProgress;
}

interface Progress {
  [gradeSlug: string]: GradeProgress;
}

function load(): Progress {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function save(progress: Progress) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useProgress(gradeSlug: string, unitSlug: string) {
  const [progress, setProgress] = useState<Progress>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(load());
    setMounted(true);
  }, []);

  const unitProgress: UnitProgress = progress[gradeSlug]?.[unitSlug] ?? {
    quizScores: [],
    completed: false,
  };

  const recordScore = (score: number, total: number) => {
    const updated: Progress = {
      ...progress,
      [gradeSlug]: {
        ...progress[gradeSlug],
        [unitSlug]: {
          quizScores: [...(progress[gradeSlug]?.[unitSlug]?.quizScores ?? []), score],
          completed: score === total,
          lastAttempt: Date.now(),
        },
      },
    };
    setProgress(updated);
    save(updated);
  };

  const bestScore = unitProgress.quizScores.length
    ? Math.max(...unitProgress.quizScores)
    : null;

  return { unitProgress, bestScore, recordScore, mounted };
}

export function useGradeProgress(gradeSlug: string, totalUnits: number) {
  const [progress, setProgress] = useState<Progress>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProgress(load());
    setMounted(true);
  }, []);

  const gradeProgress = progress[gradeSlug] ?? {};
  const completedUnits = Object.values(gradeProgress).filter(u => u.completed).length;
  const percent = totalUnits ? Math.round((completedUnits / totalUnits) * 100) : 0;

  return { completedUnits, percent, mounted };
}
