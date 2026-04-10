import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { grades, getUnitBySlug, getGradeBySlug } from '@/lib/curriculum';
import Navbar from '@/components/Navbar';
import UnitContent from '@/components/UnitContent';

export async function generateStaticParams() {
  const params: { grade: string; unit: string }[] = [];
  for (const grade of grades) {
    for (const unit of grade.units) {
      params.push({ grade: grade.slug, unit: unit.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string; unit: string }> }): Promise<Metadata> {
  const { grade: gradeSlug, unit: unitSlug } = await params;
  const unit = getUnitBySlug(gradeSlug, unitSlug);
  if (!unit) return {};
  return {
    title: `${unit.title} | 數學星球`,
    description: `${unit.scenarioDesc}`,
  };
}

export default async function UnitPage({ params }: { params: Promise<{ grade: string; unit: string }> }) {
  const { grade: gradeSlug, unit: unitSlug } = await params;
  const unit = getUnitBySlug(gradeSlug, unitSlug);
  const grade = getGradeBySlug(gradeSlug);
  if (!unit || !grade) notFound();

  return (
    <main style={{ paddingTop: '68px' }}>
      <Navbar />

      {/* Unit Header */}
      <section style={{
        background: 'var(--grad-hero)',
        padding: '3.5rem 2rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="blob blob-purple" style={{ width: 350, height: 350, top: -80, right: -50, opacity: 0.35 }} />
        <div className="blob blob-mint" style={{ width: 250, height: 250, bottom: -50, left: 100, opacity: 0.2 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--color-text-3)', fontSize: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'inherit' }}>首頁</Link>
            <span>/</span>
            <Link href={`/grade/${grade.slug}`} style={{ color: 'inherit' }}>{grade.label}</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-2)' }}>{unit.title}</span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              width: 80, height: 80,
              borderRadius: 'var(--radius-lg)',
              background: unit.color + '22',
              border: `2px solid ${unit.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
            }}>
              {unit.emoji}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="badge" style={{
                  background: unit.color + '22',
                  border: `1px solid ${unit.color}44`,
                  color: unit.color,
                }}>
                  {unit.curriculumCode}
                </span>
                <span className="badge badge-primary">{grade.label}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
                {unit.title}
              </h1>
              <p style={{ color: unit.color, fontWeight: 600, marginTop: '0.25rem' }}>
                {unit.emoji} {unit.scenarioTitle}
              </p>
            </div>
          </div>

          {/* Scenario Intro */}
          <div style={{
            marginTop: '2rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(255,255,255,0.05)',
            border: `1px solid ${unit.color}33`,
            borderRadius: 'var(--radius-md)',
            borderLeft: `3px solid ${unit.color}`,
            maxWidth: 620,
          }}>
            <p style={{ color: 'var(--color-text-2)', lineHeight: 1.7 }}>
              🎭 <strong style={{ color: 'var(--color-text)' }}>情境：</strong>{unit.scenarioDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Content (client) */}
      <UnitContent unit={unit} gradeSlug={gradeSlug} />
    </main>
  );
}
