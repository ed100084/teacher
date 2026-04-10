'use client';
import { useGradeProgress } from '@/lib/progress';

export default function GradeProgressBar({ gradeSlug, totalUnits }: { gradeSlug: string; totalUnits: number }) {
  const { completedUnits, percent, mounted } = useGradeProgress(gradeSlug, totalUnits);
  if (!mounted) return null;

  return (
    <div style={{ marginTop: '2rem', maxWidth: 480 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-text-2)', fontSize: '0.9rem' }}>
        <span>學習進度</span>
        <span>{completedUnits} / {totalUnits} 單元完成</span>
      </div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
      {percent === 100 && (
        <p style={{ marginTop: '0.75rem', color: 'var(--color-mint-l)', fontWeight: 600, fontSize: '0.9rem' }}>
          🎉 恭喜完成所有單元！妳真的很厲害！
        </p>
      )}
    </div>
  );
}
