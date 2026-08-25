import FlowerField from './FlowerField'
import ImageSlot from './ImageSlot'

const STATS = [
  { value: '1:1', label: 'Always, never a group', bg: 'var(--color-accent-100)', color: 'var(--color-accent-700)' },
  { value: '7–12', label: 'Year levels taught', bg: 'var(--color-accent-2-100)', color: 'var(--color-accent-2-700)' },
  { value: '100%', label: 'Online, anywhere', bg: 'var(--color-accent-2-200)', color: 'var(--color-accent-2-800)' },
  { value: '60/90', label: 'Minute sessions', bg: 'var(--color-accent-200)', color: 'var(--color-accent-700)' },
]

const SUBJECT_CARDS = [
  {
    kicker: 'HSC · Year 11–12',
    title: 'Mathematics',
    body: 'Advanced, Extension 1 and Extension 2 — proof, mechanics, complex numbers and the exam technique that turns working into marks.',
    tags: [{ label: 'Advanced', cls: 'tag-accent' }, { label: 'Extension 1', cls: 'tag-accent' }, { label: 'Extension 2', cls: 'tag-accent' }],
  },
  {
    kicker: 'HSC · Year 11–12',
    title: 'Sciences',
    body: 'Chemistry, Physics and Biology, with the modules, calculations and long-response scaffolds each syllabus actually rewards.',
    tags: [{ label: 'Chemistry', cls: 'tag-accent-2' }, { label: 'Physics', cls: 'tag-accent-2' }, { label: 'Biology', cls: 'tag-accent-2' }],
  },
  {
    kicker: 'Year 7–10',
    title: 'Junior maths & science',
    body: 'Filling the gaps before they matter, and getting students ready to choose Advanced and Extension with confidence.',
    tags: [{ label: 'Maths 7–10', cls: 'tag-neutral' }, { label: 'Science 7–10', cls: 'tag-neutral' }, { label: 'Selective prep', cls: 'tag-outline' }],
  },
]

const STEPS = [
  { n: 1, bg: 'var(--color-accent-200)', color: 'var(--color-accent-700)', title: 'A conversation first', body: "We ask what's been marked, what's been guessed, and what the target is. Then we match the tutor to the student, not the timetable." },
  { n: 2, bg: 'var(--color-accent-2-200)', color: 'var(--color-accent-2-800)', title: 'A free trial lesson', body: "One full hour, no charge and no commitment. If the fit isn't right, we'll say so and suggest someone else." },
  { n: 3, bg: 'var(--color-accent-100)', color: 'var(--color-accent-700)', title: 'Weekly, with notes', body: 'Same tutor, same hour each week, plus a short written summary after every session so parents know exactly what was covered.' },
]

const RATES = [
  { kicker: 'Year 7–10', price: '$60', bg: undefined, body: 'Maths and science, gap-filling and selective prep.' },
  { kicker: 'Year 11–12 · Advanced', price: '$75', bg: 'var(--color-accent-100)', body: 'Mathematics Advanced, Biology, and Year 11 sciences.' },
  { kicker: 'HSC · Extension & sciences', price: '$85', bg: 'var(--color-accent-2-100)', body: 'Extension 1 and 2, Chemistry and Physics.' },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 0, scrollMarginTop: 84 }}>
      <FlowerField />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 72px)' }}>

        <div style={{ padding: 'clamp(56px, 9vw, 132px) 0 clamp(40px, 6vw, 84px)', position: 'relative' }}>
          <div style={{ position: 'absolute', right: 0, top: -180, width: 380, height: 380, borderRadius: '50%', background: 'var(--color-accent-2-200)', zIndex: -1 }} />
          <h1 style={{ fontSize: 'clamp(40px, 5.6vw, 74px)', lineHeight: 1.08, margin: '0 0 0 -0.028em', maxWidth: '20ch' }}>
            <span style={{ display: 'block' }}>One tutor.</span>
            <span style={{ display: 'block' }}>One student.</span>
            <span style={{ display: 'block', color: 'var(--color-accent-700)' }}>One hour that counts.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, maxWidth: '56ch', margin: '32px 0 0' }}>
            Amber Tutoring works one-to-one and entirely online with HSC candidates and Year 7–11 students, across Mathematics Advanced, Extension 1 and 2, and the sciences. No group classes, no generic worksheets — each hour is planned around the marks the student in front of us is chasing.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="#enquire">Book a free trial lesson</a>
            <a className="btn btn-ghost" href="#tutors">Meet the tutors</a>
          </div>
        </div>

        <div style={{ padding: 'clamp(32px, 5vw, 64px) 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 'var(--space-4)' }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ background: s.bg, borderRadius: 'var(--radius-lg)', padding: 28 }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 40, lineHeight: 1.1, margin: 0, color: s.color }}>{s.value}</p>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: '10px 0 0', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-neutral-700)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 'clamp(48px, 7vw, 96px) 0' }}>
          <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>What we teach</span>
          <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.12, margin: '0 0 40px -0.028em', maxWidth: '24ch' }}>Senior maths and science, taught by people who sat the same papers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {SUBJECT_CARDS.map((c) => (
              <div className="card" key={c.title}>
                <p className="card-kicker">{c.kicker}</p>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-body">{c.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 18 }}>
                  {c.tags.map((t) => (
                    <span className={`tag ${t.cls}`} key={t.label}>{t.label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 'clamp(40px, 6vw, 88px) 0' }}>
          <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>How it works</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-8)', marginTop: 24 }}>
            {STEPS.map((s) => (
              <div key={s.n}>
                <div style={{ width: 68, height: 68, borderRadius: '50%', background: s.bg, display: 'grid', placeContent: 'center', fontFamily: 'var(--font-heading)', fontSize: 28, color: s.color }}>{s.n}</div>
                <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: '20px 0 10px' }}>{s.title}</h3>
                <p style={{ fontSize: '15.5px', lineHeight: 1.65, margin: 0, color: 'var(--color-neutral-700)', maxWidth: '34ch' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 'clamp(40px, 6vw, 88px) 0' }}>
          <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>Rates</span>
          <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.18, margin: '0 0 32px -0.028em', maxWidth: '26ch' }}>One hourly rate per course. No sign-up fee, no term contracts.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
            {RATES.map((r) => (
              <div className="card elev-sm" style={{ background: r.bg }} key={r.kicker}>
                <p className="card-kicker">{r.kicker}</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 44, lineHeight: 1.05, margin: '12px 0 0' }}>
                  {r.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--color-neutral-700)' }}> /hour</span>
                </p>
                <p className="card-body" style={{ marginTop: 14 }}>{r.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: '24px 0 0', color: 'var(--color-neutral-700)' }}>First lesson free. 90-minute sessions billed at 1.5×.</p>
        </div>

        <div className="stack-md" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 6fr) minmax(0, 5fr)', gap: '28px clamp(24px, 5vw, 88px)', alignItems: 'center', padding: 'clamp(40px, 6vw, 88px) 0' }}>
          <div>
            <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>How we meet</span>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 34px)', lineHeight: 1.2, margin: '0 0 18px -0.028em' }}>Online, on a shared whiteboard</h2>
            <p style={{ fontSize: '15.5px', lineHeight: 1.65, margin: 0, color: 'var(--color-neutral-700)', maxWidth: '46ch' }}>
              Every session runs online — no driving, and no lost hour either side of the lesson. Each worked solution is written on a shared board, saved, and sent through afterwards with the session notes.
            </p>
          </div>
          <figure style={{ margin: 0, width: 'min(420px, 100%)', justifySelf: 'end', borderRadius: 56, overflow: 'hidden' }}>
            <ImageSlot shape="rect" placeholder="Photo of a session or study space" style={{ width: '100%', aspectRatio: '4 / 5' }} />
          </figure>
        </div>
      </div>
    </section>
  )
}
