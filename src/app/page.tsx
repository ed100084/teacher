import Link from 'next/link';
import { grades } from '@/lib/curriculum';
import Navbar from '@/components/Navbar';

const scientists = [
  { name: '居里夫人', nameEn: 'Marie Curie', years: '1867–1934', field: '物理、化學', emoji: '⚗️', bio: '首位獲得諾貝爾獎的女性，也是唯一同時獲得物理和化學諾貝爾獎的人。她發現了釙和鐳兩種元素，開創了放射性研究領域。' },
  { name: '艾美 · 諾特', nameEn: 'Emmy Noether', years: '1882–1935', field: '抽象代數', emoji: '∞', bio: '被愛因斯坦稱為史上最重要的女數學家。她在抽象代數的革命性研究影響至今，諾特定理連結了物理對稱與守恆律。' },
  { name: '凱薩琳 · 強森', nameEn: 'Katherine Johnson', years: '1918–2020', field: '數學、航太', emoji: '🚀', bio: 'NASA 傳奇計算師，阿波羅登月計畫的幕後英雄。她的精確軌道計算讓人類第一次安全踏上月球，是《隱藏人物》電影主角。' },
  { name: '南丁格爾', nameEn: 'Florence Nightingale', years: '1820–1910', field: '統計學', emoji: '📊', bio: '護理學之母，也是統計學先驅。她發明玫瑰圖視覺化數據，用數字改變了英國軍事醫療制度，救了無數生命。' },
];

export default function Home() {
  return (
    <main style={{ paddingTop: '68px' }}>
      <Navbar />

      {/* ─── Hero ─── */}
      <section style={{
        background: 'var(--grad-hero)',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div className="blob blob-purple" style={{ width: 500, height: 500, top: -100, right: -100 }} />
        <div className="blob blob-mint"   style={{ width: 350, height: 350, bottom: 50, left: -80 }} />
        <div className="blob blob-accent" style={{ width: 250, height: 250, top: '40%', left: '40%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
          <div style={{ maxWidth: 680 }}>
            <div className="badge badge-primary anim-fade-up" style={{ marginBottom: '1.5rem' }}>
              ✦ 對應台灣 108 課綱
            </div>
            <h1 className="anim-fade-up" style={{
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              animationDelay: '0.1s',
            }}>
              數學<span className="text-gradient-accent">不可怕</span>，<br />
              它是你的<span className="text-gradient-primary">超能力</span>
            </h1>
            <p className="anim-fade-up" style={{
              fontSize: '1.2rem',
              color: 'var(--color-text-2)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: 520,
              animationDelay: '0.2s',
            }}>
              專為小六到國三女生設計的互動數學平台。<br />
              每個單元用真實情境包裝，讓你在玩遊戲中學會數學！
            </p>
            <div className="anim-fade-up" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animationDelay: '0.3s' }}>
              <Link href="#grades" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                🌟 開始學習
              </Link>
              <Link href="#scientists" className="btn btn-ghost">
                👩‍🔬 認識女科學家
              </Link>
            </div>

            {/* Stats */}
            <div className="anim-fade-up" style={{
              display: 'flex', gap: '2.5rem', marginTop: '3.5rem', animationDelay: '0.4s',
            }}>
              {[
                { num: '4', label: '年級' },
                { num: '24+', label: '學習單元' },
                { num: '108', label: '課綱對應' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-en" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-accent-l)' }}>{s.num}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-3)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Math Symbols */}
          <div style={{ position: 'absolute', right: '5%', top: '15%', fontSize: '8rem', opacity: 0.06, fontFamily: 'var(--font-en)', fontWeight: 900, userSelect: 'none', lineHeight: 1 }}>
            π<br/>∑<br/>∞<br/>√
          </div>
        </div>
      </section>

      {/* ─── Grade Selection ─── */}
      <section id="grades" className="section">
        <div className="container">
          <p className="badge badge-accent" style={{ marginBottom: '1rem' }}>選擇年級</p>
          <h2 className="section-title">從哪裡開始？</h2>
          <p className="section-subtitle">每個年級有完整的單元課程，跟著情境一步步學，沒有壓力</p>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {grades.map(grade => (
              <Link
                key={grade.id}
                href={grade.units.length > 0 ? `/grade/${grade.slug}` : '#grades'}
                className="glass-card anim-fade-up"
                style={{
                  padding: '2rem',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: grade.units.length === 0 ? 0.5 : 1,
                  cursor: grade.units.length === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                  background: `linear-gradient(90deg, ${grade.color}, transparent)`,
                }} />
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{grade.emoji}</div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 14px',
                  background: grade.color + '22',
                  border: `1px solid ${grade.color}55`,
                  borderRadius: 'var(--radius-full)',
                  color: grade.color,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.75rem',
                }}>
                  {grade.label}
                </div>
                <p style={{ color: 'var(--color-text-2)', fontSize: '0.9rem' }}>
                  {grade.units.length > 0
                    ? `${grade.units.length} 個學習單元，完整內容`
                    : '即將推出 · 敬請期待'}
                </p>
                {grade.units.length > 0 && (
                  <div style={{ marginTop: '1.5rem', color: grade.color, fontSize: '0.9rem', fontWeight: 600 }}>
                    開始學習 →
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section" style={{ background: 'var(--color-bg-2)' }}>
        <div className="container">
          <p className="badge badge-mint" style={{ marginBottom: '1rem' }}>學習特色</p>
          <h2 className="section-title">為什麼選擇數學星球？</h2>
          <p className="section-subtitle">我們相信每個人都有學好數學的潛力</p>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🎭', title: '情境學習', desc: '每個單元用真實生活故事包裝：食譜、設計、運動…讓數學有意義！' },
              { icon: '✍️', title: '互動練習', desc: '選擇題＋填空題，即時回饋讓你知道哪裡要加強，而不是只給分數。' },
              { icon: '📈', title: '追蹤進度', desc: '自動記錄每個單元的學習狀況，看見自己的成長，成就感加倍！' },
              { icon: '👩‍🔬', title: '女科學家', desc: '每單元介紹一位在該領域發光的女性科學家，讓你知道妳也做得到！' },
              { icon: '🎨', title: '美美的介面', desc: '好看的網站讓人想多待一下，我們用心設計每個畫面的細節。' },
              { icon: '📱', title: '手機友善', desc: '電腦、平板、手機都可以學，隨時隨地都是數學教室！' },
            ].map(f => (
              <div key={f.title} className="glass-card anim-fade-up" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Scientists Wall ─── */}
      <section id="scientists" className="section">
        <div className="container">
          <p className="badge badge-primary" style={{ marginBottom: '1rem' }}>女性科學家名人錄</p>
          <h2 className="section-title">她們改變了世界</h2>
          <p className="section-subtitle">數學和科學從來不只屬於男生，來認識這些改變歷史的女性！</p>

          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {scientists.map(s => (
              <div key={s.nameEn} className="glass-card anim-fade-up" style={{ padding: '2rem', background: 'var(--grad-card)' }}>
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '50%',
                  background: 'var(--grad-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                }}>
                  {s.emoji}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.2rem' }}>{s.name}</h3>
                <p className="font-en" style={{ color: 'var(--color-text-3)', fontSize: '0.82rem', marginBottom: '0.3rem' }}>{s.nameEn} · {s.years}</p>
                <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>{s.field}</span>
                <p style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About / CTA ─── */}
      <section id="about" className="section" style={{
        background: 'linear-gradient(135deg, rgba(124,92,191,0.1), rgba(62,207,178,0.05))',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
          <h2 className="section-title">每一步都值得慶祝</h2>
          <p style={{ color: 'var(--color-text-2)', maxWidth: 540, margin: '0 auto 2rem', lineHeight: 1.8 }}>
            數學星球相信：學習不是比賽，而是探索。<br />
            不管妳現在的程度如何，只要開始，就是進步的開始。
          </p>
          <Link href="#grades" className="btn btn-accent" style={{ fontSize: '1.05rem', padding: '14px 36px' }}>
            🚀 立刻開始探索
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        color: 'var(--color-text-3)',
        fontSize: '0.85rem',
      }}>
        <p>✦ 數學星球 · 對應台灣 108 課綱 · 專為女生設計</p>
        <p style={{ marginTop: '0.5rem' }}>目前開放：小六 | 國一、二、三即將推出</p>
      </footer>
    </main>
  );
}
