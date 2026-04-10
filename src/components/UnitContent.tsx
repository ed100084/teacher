'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { Unit } from '@/lib/curriculum';
import { useProgress } from '@/lib/progress';

// ─── KaTeX Renderer ───────────────────────────────────────
function KaTeXFormula({ formula }: { formula: string }) {
  let html = '';
  try {
    html = katex.renderToString(formula, { throwOnError: false, displayMode: true });
  } catch {
    html = formula;
  }
  return (
    <div style={{
      background: 'rgba(124,92,191,0.08)',
      border: '1px solid rgba(124,92,191,0.2)',
      borderRadius: 'var(--radius-md)',
      padding: '1.25rem',
      margin: '1rem 0',
      textAlign: 'center',
      overflowX: 'auto',
    }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// ─── Tab Component ─────────────────────────────────────────
type Tab = 'concepts' | 'examples' | 'practice' | 'scientist';

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: 'concepts',  label: '概念學習', emoji: '📖' },
  { id: 'examples',  label: '例題演練', emoji: '✏️' },
  { id: 'practice',  label: '互動練習', emoji: '🎯' },
  { id: 'scientist', label: '女科學家', emoji: '👩‍🔬' },
];

// ─── Quiz Component ────────────────────────────────────────
function QuizSection({ unit, gradeSlug }: { unit: Unit; gradeSlug: string }) {
  const { recordScore } = useProgress(gradeSlug, unit.slug);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const fillRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleChoice = (qId: string, option: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleFill = (qId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const submit = () => {
    let correct = 0;
    for (const q of unit.quiz) {
      const ans = answers[q.id]?.trim();
      if (ans?.toLowerCase() === String(q.answer).toLowerCase()) correct++;
    }
    setScore(correct);
    setSubmitted(true);
    recordScore(correct, unit.quiz.length);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const allAnswered = unit.quiz.every(q => answers[q.id]?.trim());

  return (
    <div>
      <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>🎯 互動練習</h2>
      <p style={{ color: 'var(--color-text-2)', marginBottom: '2rem', fontSize: '0.95rem' }}>
        共 {unit.quiz.length} 題，做完後按「查看結果」
      </p>

      {unit.quiz.map((q, i) => {
        const userAns = answers[q.id] ?? '';
        const isCorrect = submitted && userAns.trim().toLowerCase() === String(q.answer).toLowerCase();
        const isWrong   = submitted && !isCorrect;

        return (
          <div key={q.id} className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <span style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'var(--grad-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '0.9rem', flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <p style={{ fontWeight: 600, lineHeight: 1.6 }}>{q.question}</p>
            </div>

            {/* Choice */}
            {q.type === 'choice' && q.options && (
              <div>
                {q.options.map(opt => {
                  let cls = 'quiz-option';
                  if (submitted) {
                    if (opt === q.answer) cls += ' correct';
                    else if (opt === userAns) cls += ' incorrect';
                  } else if (opt === userAns) {
                    cls += ' selected';
                  }
                  return (
                    <button
                      key={opt}
                      className={cls}
                      onClick={() => handleChoice(q.id, opt)}
                      disabled={submitted}
                      style={{
                        ...(opt === userAns && !submitted ? { borderColor: 'var(--color-primary-l)', background: 'var(--color-surface-2)' } : {}),
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Fill */}
            {q.type === 'fill' && (
              <div>
                {q.hint && (
                  <p style={{ color: 'var(--color-text-3)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                    💡 提示：{q.hint}
                  </p>
                )}
                <input
                  ref={el => { fillRefs.current[q.id] = el; }}
                  type="text"
                  className={`fill-input ${submitted ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                  value={userAns}
                  onChange={e => handleFill(q.id, e.target.value)}
                  disabled={submitted}
                  placeholder="在這裡輸入答案"
                />
              </div>
            )}

            {/* Feedback */}
            {submitted && (
              <div className={isCorrect ? 'feedback-correct' : 'feedback-incorrect'} style={{ marginTop: '1rem' }}>
                {isCorrect ? '✅ 答對了！' : `❌ 正確答案：${q.answer}`}
                <span style={{ display: 'block', fontWeight: 400, color: 'var(--color-text-2)', marginTop: '0.25rem', fontSize: '0.875rem' }}>
                  {q.explanation}
                </span>
              </div>
            )}
          </div>
        );
      })}

      {/* Submit / Result */}
      {!submitted ? (
        <button
          className="btn btn-primary"
          style={{ fontSize: '1rem', padding: '14px 36px', opacity: allAnswered ? 1 : 0.5 }}
          onClick={submit}
          disabled={!allAnswered}
        >
          查看結果 →
        </button>
      ) : (
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', marginTop: '1rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
            {score === unit.quiz.length ? '🏆' : score! >= unit.quiz.length / 2 ? '⭐' : '💪'}
          </div>
          <h3 style={{ fontWeight: 900, fontSize: '1.6rem', marginBottom: '0.25rem' }}>
            {score} / {unit.quiz.length} 題答對
          </h3>
          <p style={{ color: 'var(--color-text-2)', marginBottom: '1.5rem' }}>
            {score === unit.quiz.length
              ? '完美！妳全部都答對了，超級厲害！'
              : score! >= unit.quiz.length / 2
              ? '很棒！繼續複習幾個概念就更完美了！'
              : '沒關係，再回去看看概念，然後重新挑戰！'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-ghost" onClick={reset}>🔄 重新練習</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main UnitContent ─────────────────────────────────────
export default function UnitContent({ unit, gradeSlug }: { unit: Unit; gradeSlug: string }) {
  const [tab, setTab] = useState<Tab>('concepts');
  const [openExample, setOpenExample] = useState<string | null>(null);

  return (
    <section className="section">
      <div className="container">
        {/* Tab Bar */}
        <div style={{
          display: 'flex', gap: '0.5rem', marginBottom: '2.5rem',
          background: 'var(--color-surface)', borderRadius: 'var(--radius-full)',
          padding: '6px', overflowX: 'auto',
        }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="btn"
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                background: tab === t.id ? 'var(--grad-primary)' : 'transparent',
                color: tab === t.id ? 'white' : 'var(--color-text-2)',
                whiteSpace: 'nowrap',
                flex: 1,
              }}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </div>

        {/* ── Concepts Tab ── */}
        {tab === 'concepts' && (
          <div className="anim-fade">
            <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>📖 概念學習</h2>
            <p style={{ color: 'var(--color-text-2)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              了解核心概念，紮穩基礎再往下走
            </p>
            <div className="stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {unit.concepts.map((c, i) => (
                <div key={i} className="glass-card anim-fade-up" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'var(--grad-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: '1rem', flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 800, marginBottom: '0.75rem', fontSize: '1.1rem' }}>{c.title}</h3>
                      <p style={{ color: 'var(--color-text-2)', lineHeight: 1.8 }}>{c.body}</p>
                      {c.formula && <KaTeXFormula formula={c.formula} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: '2rem' }}
              onClick={() => setTab('examples')}
            >
              看看例題 →
            </button>
          </div>
        )}

        {/* ── Examples Tab ── */}
        {tab === 'examples' && (
          <div className="anim-fade">
            <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>✏️ 例題演練</h2>
            <p style={{ color: 'var(--color-text-2)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              點擊例題，看完整解題步驟
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {unit.examples.map((ex, i) => (
                <div key={ex.id}>
                  <button
                    onClick={() => setOpenExample(openExample === ex.id ? null : ex.id)}
                    className="glass-card"
                    style={{
                      width: '100%', textAlign: 'left', padding: '1.5rem',
                      background: openExample === ex.id ? 'rgba(124,92,191,0.1)' : undefined,
                      borderColor: openExample === ex.id ? 'rgba(124,92,191,0.3)' : undefined,
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ color: 'var(--color-accent-l)', fontWeight: 700, marginRight: '0.5rem' }}>例題 {i + 1}</span>
                        <span style={{ fontWeight: 600 }}>{ex.title}</span>
                      </div>
                      <span style={{ color: 'var(--color-text-3)', transition: 'transform 0.2s', transform: openExample === ex.id ? 'rotate(180deg)' : 'none' }}>▼</span>
                    </div>
                    <p style={{ marginTop: '0.75rem', color: 'var(--color-text-2)', lineHeight: 1.6 }}>{ex.problem}</p>
                  </button>

                  {openExample === ex.id && (
                    <div className="anim-fade-up" style={{
                      background: 'var(--color-surface)',
                      border: '1px solid rgba(124,92,191,0.2)',
                      borderTop: 'none',
                      borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                      padding: '1.5rem 2rem',
                    }}>
                      <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary-l)' }}>解題步驟：</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {ex.steps.map((step, si) => (
                          <div key={si} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <span style={{
                              background: 'var(--grad-mint)',
                              color: '#0a0820',
                              width: 26, height: 26, borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontWeight: 800, fontSize: '0.8rem', flexShrink: 0,
                              marginTop: '2px',
                            }}>
                              {si + 1}
                            </span>
                            <div>
                              <span style={{ color: 'var(--color-text-3)', fontSize: '0.82rem' }}>{step.label}</span>
                              <p style={{ fontWeight: 500 }}>{step.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{
                        padding: '1rem 1.25rem',
                        background: 'rgba(62,207,178,0.1)',
                        borderLeft: '3px solid var(--color-mint)',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 700,
                        color: 'var(--color-mint-l)',
                      }}>
                        ✅ 答案：{ex.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="btn btn-accent"
              style={{ marginTop: '2rem' }}
              onClick={() => setTab('practice')}
            >
              開始練習 →
            </button>
          </div>
        )}

        {/* ── Practice Tab ── */}
        {tab === 'practice' && (
          <div className="anim-fade">
            <QuizSection unit={unit} gradeSlug={gradeSlug} />
          </div>
        )}

        {/* ── Scientist Tab ── */}
        {tab === 'scientist' && (
          <div className="anim-fade">
            <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '2rem' }}>👩‍🔬 本單元女性科學家</h2>
            <div className="glass-card" style={{ padding: '2.5rem', background: 'var(--grad-card)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{
                  width: 90, height: 90, borderRadius: '50%',
                  background: 'var(--grad-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.8rem', flexShrink: 0,
                  boxShadow: 'var(--shadow-glow-primary)',
                }}>
                  👩‍🔬
                </div>
                <div>
                  <h3 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '0.25rem' }}>{unit.scientist.name}</h3>
                  <p className="font-en" style={{ color: 'var(--color-text-3)', marginBottom: '0.5rem' }}>
                    {unit.scientist.nameEn} · {unit.scientist.years}
                  </p>
                  <span className="badge badge-accent">{unit.scientist.field}</span>
                </div>
              </div>
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--color-primary-l)',
              }}>
                <p style={{ color: 'var(--color-text-2)', lineHeight: 1.9, fontSize: '1rem' }}>
                  {unit.scientist.bio}
                </p>
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                background: 'rgba(245,182,65,0.08)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--color-accent)',
              }}>
                <p style={{ color: 'var(--color-accent-l)', fontWeight: 600 }}>
                  💫 她能做到，妳也可以！
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div style={{
          marginTop: '3rem', paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
        }}>
          <Link href={`/grade/${gradeSlug}`} className="btn btn-ghost">
            ← 回到單元列表
          </Link>
          <Link href="/" className="btn btn-ghost">
            🏠 回到首頁
          </Link>
        </div>
      </div>
    </section>
  );
}
