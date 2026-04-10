import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { grades, getGradeBySlug } from '@/lib/curriculum';
import Navbar from '@/components/Navbar';
import GradeProgressBar from '@/components/GradeProgressBar';

export async function generateStaticParams() {
  return grades.map(g => ({ grade: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }): Promise<Metadata> {
  const { grade: gradeSlug } = await params;
  const grade = getGradeBySlug(gradeSlug);
  if (!grade) return {};
  return {
    title: `${grade.label}數學 | 數學星球`,
    description: `${grade.label}完整數學課程，對應108課綱，趣味情境學習`,
  };
}

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade: gradeSlug } = await params;
  const grade = getGradeBySlug(gradeSlug);
  if (!grade || grade.units.length === 0) notFound();

  return (
    <main style={{ paddingTop: '68px' }}>
      <Navbar />

      {/* Header */}
      <section style={{
        background: 'var(--grad-hero)',
        padding: '4rem 2rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="blob blob-purple" style={{ width: 400, height: 400, top: -100, right: -50, opacity: 0.4 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ color: 'var(--color-text-3)', fontSize: '0.9rem' }}>← 返回首頁</Link>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '3rem' }}>{grade.emoji}</span>
            <div>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                {grade.label} 數學課程
              </h1>
              <p style={{ color: 'var(--color-text-2)', marginTop: '0.25rem' }}>
                共 {grade.units.length} 個單元 · 對應 108 課綱
              </p>
            </div>
          </div>

          {/* Progress (client component) */}
          <GradeProgressBar gradeSlug={grade.slug} totalUnits={grade.units.length} />
        </div>
      </section>

      {/* Units Grid */}
      <section className="section">
        <div className="container">
          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {grade.units.map((unit, i) => (
              <Link
                key={unit.id}
                href={`/grade/${grade.slug}/${unit.slug}`}
                className="glass-card anim-fade-up"
                style={{ padding: '2rem', display: 'block', position: 'relative', overflow: 'hidden' }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: `linear-gradient(90deg, ${unit.color}, transparent)`,
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{unit.emoji}</span>
                  <span className="badge" style={{
                    background: unit.color + '22',
                    border: `1px solid ${unit.color}44`,
                    color: unit.color,
                    fontSize: '0.72rem',
                  }}>
                    {unit.curriculumCode}
                  </span>
                </div>

                <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.4rem' }}>{unit.title}</h2>
                <p style={{ color: unit.color, fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {unit.scenarioTitle}
                </p>
                <p style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {unit.scenarioDesc}
                </p>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                    {unit.concepts.length} 概念
                  </span>
                  <span className="badge badge-mint" style={{ fontSize: '0.75rem' }}>
                    {unit.examples.length} 例題
                  </span>
                  <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                    {unit.quiz.length} 練習題
                  </span>
                </div>

                <div style={{ marginTop: '1.25rem', color: unit.color, fontSize: '0.9rem', fontWeight: 600 }}>
                  進入學習 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
