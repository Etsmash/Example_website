import ImageSlot from './ImageSlot'

const TUTORS = [
  {
    name: 'John Doe',
    subject: 'Maths Extension 2',
    tag: 'Extension 2',
    blurb: 'Teaches proof and mechanics by working problems out loud, mistakes included, until the method is the student’s own.',
  },
  {
    name: 'Joe',
    subject: 'Maths Advanced',
    tag: 'Advanced',
    blurb: 'Patient with the fundamentals — the first session is spent finding out how a student thinks before touching content.',
  },
]

export default function Tutors() {
  return (
    <section id="tutors" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 72px)', scrollMarginTop: 84 }}>
      <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>Our tutors</span>
      <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.1, margin: '0 0 20px -0.028em', maxWidth: '22ch' }}>Taught by recent students of the same syllabus</h2>
      <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: '54ch', margin: '0 0 48px', color: 'var(--color-neutral-700)' }}>
        Every tutor sat the HSC in the subject they teach, and each takes a small number of students so nobody becomes a slot in a spreadsheet.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', maxWidth: 860 }}>
        {TUTORS.map((t) => (
          <div className="card elev-sm" key={t.name}>
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
              <div style={{ width: 112, height: 112, borderRadius: '50%', overflow: 'hidden', flex: 'none' }}>
                <ImageSlot shape="circle" style={{ width: 112, height: 112 }} />
              </div>
              <div>
                <h3 className="card-title" style={{ margin: 0 }}>{t.name}</h3>
                <p className="card-kicker" style={{ margin: '6px 0 0' }}>{t.subject}</p>
              </div>
            </div>
            <p className="card-body" style={{ marginTop: 20 }}>{t.blurb}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 18 }}>
              <span className="tag tag-accent">{t.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'clamp(40px, 6vw, 72px)', background: 'var(--color-accent-100)', borderRadius: 56, padding: 'clamp(32px, 5vw, 56px)' }}>
        <h3 style={{ fontSize: 26, lineHeight: 1.2, margin: 0 }}>Want to tutor with us?</h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.65, margin: '14px 0 24px', maxWidth: '48ch', color: 'var(--color-neutral-800)' }}>
          We take on a small number of tutors each year, chosen for how they explain rather than how they scored.
        </p>
        <a className="btn btn-secondary" href="#enquire">Get in touch</a>
      </div>
    </section>
  )
}
