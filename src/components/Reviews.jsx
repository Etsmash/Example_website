import { useState } from 'react'

const ROW_A = [
  { text: 'Ella went from a 62 in her Year 11 Advanced exam to an 84 in trials. She actually explains the working to us now, which is new.', who: 'Parent of Year 12 student, Mathematics Advanced' },
  { text: 'My tutor never made me feel stupid for asking about something from Year 9. We just went back and fixed it.', who: 'Year 11 student, Extension 1' },
  { text: 'The written summary after each lesson is the thing I did not know I wanted. I can see exactly what was covered.', who: 'Parent of Year 10 student' },
  { text: 'Chemistry finally clicked in Module 6. My tutor rewrote the whole thing onto one page and it made sense.', who: 'Year 12 student, Chemistry' },
  { text: 'We tried a big centre first. Thirty kids, one tutor. This is not that, and the difference showed up in the report.', who: 'Parent of Year 12 student, Physics' },
  { text: 'Extension 2 proof used to be where I gave up. Now it is the section I start with.', who: 'Year 12 student, Extension 2' },
]

const ROW_B = [
  { text: 'Amber met us before the first lesson and asked about sleep and stress before she asked about marks. That told us a lot.', who: 'Parent of Year 11 student' },
  { text: 'Band 5 in Physics, up from a Band 3 in Year 11. I did not think that was possible in one year.', who: 'HSC graduate, 2025' },
  { text: 'Same tutor, same time, every week for two years. The consistency is most of it, honestly.', who: 'Parent of HSC graduate' },
  { text: 'They told us our son would be better off with a different tutor and organised it themselves. Nobody does that.', who: 'Parent of Year 9 student' },
  { text: 'I came in for Advanced and stayed for Extension 1 because someone finally told me I could do it.', who: 'Year 11 student' },
  { text: 'Online worked better for us than in person. Shared whiteboard, all the solutions saved, no driving.', who: 'Parent of Year 12 student, Chemistry' },
]

const STATS = [
  { value: '4.9', label: 'Average rating', bg: 'var(--color-accent-2-200)', color: 'var(--color-accent-2-800)' },
  { value: '86%', label: 'Stay a second year', bg: 'var(--color-accent-200)', color: 'var(--color-accent-700)' },
  { value: '140+', label: 'Families since 2018', bg: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-700)' },
]

function MarqueeRow({ items, animation, duration, altBg }) {
  const [paused, setPaused] = useState(false)
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}>
      <div
        style={{ display: 'flex', gap: 22, width: 'max-content', animation: `${animation} ${duration}s linear infinite`, animationPlayState: paused ? 'paused' : 'running' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.concat(items).map((r, i) => (
          <div className="card elev-sm" style={{ width: 340, flex: 'none', background: altBg }} key={i}>
            <p style={{ fontSize: '15.5px', lineHeight: 1.65, margin: 0 }}>{r.text}</p>
            <p className="card-meta" style={{ margin: '18px 0 0' }}>{r.who}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: 'clamp(48px, 7vw, 96px) 0', scrollMarginTop: 84 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 72px)' }}>
        <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>Reviews</span>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.1, margin: '0 0 20px -0.028em', maxWidth: '20ch' }}>What students and parents send us</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: '52ch', margin: 0, color: 'var(--color-neutral-700)' }}>A rolling feed of messages from families, unedited apart from surnames. Hover to hold a row still.</p>
      </div>

      <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <MarqueeRow items={ROW_A} animation="amber-stream-l" duration={46} />
        <MarqueeRow items={ROW_B} animation="amber-stream-r" duration={54} altBg="var(--color-accent-100)" />
      </div>

      <div style={{ maxWidth: 1200, margin: 'clamp(48px, 7vw, 88px) auto 0', padding: '0 clamp(20px, 5vw, 72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: s.bg, borderRadius: 'var(--radius-lg)', padding: 28 }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 38, lineHeight: 1.1, margin: 0, color: s.color }}>{s.value}</p>
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: '10px 0 0', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-neutral-700)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
