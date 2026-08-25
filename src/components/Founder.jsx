import ImageSlot from './ImageSlot'

export default function Founder() {
  return (
    <section id="founder" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 72px)', scrollMarginTop: 84 }}>
      <div className="stack-md" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 5fr) minmax(0, 7fr)', gap: '40px clamp(24px, 5vw, 88px)', alignItems: 'start' }}>
        <figure style={{ margin: 0, borderRadius: 56, overflow: 'hidden', width: '100%' }}>
          <ImageSlot shape="rect" placeholder="Photo of Amber" style={{ width: '100%', aspectRatio: '4 / 5' }} />
        </figure>
        <div>
          <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>The founder</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, margin: '0 0 12px -0.028em' }}>Amber</h2>
          <p style={{ fontSize: 17, lineHeight: 1.5, margin: '0 0 28px', color: 'var(--color-accent-700)', fontWeight: 600 }}>Founding member: 100 atar. Best person ever</p>
          <p style={{ fontSize: 18, lineHeight: 1.7, margin: '0 0 20px', maxWidth: '54ch' }}>
            I started Amber Tutoring because the help I wanted in Year 12 didn't exist near me. What was on offer was a room of thirty students, a booklet, and a tutor reading the answers off the back page.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: '0 0 20px', maxWidth: '54ch', color: 'var(--color-neutral-800)' }}>
            So the company only does one thing: one tutor, one student, for an hour a week. I still teach Extension 2 and Chemistry myself, and I meet every family before their first lesson. When a student is stuck, I want to know whether it's the content, the exam, or the four hours of sleep — those need different answers.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: '0 0 32px', maxWidth: '54ch', color: 'var(--color-neutral-800)' }}>
            Marks matter, and we chase them honestly. But the students I'm proudest of are the ones who stopped being frightened of the subject.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 36 }}>
            <span className="tag tag-accent">100 ATAR</span>
            <span className="tag tag-accent">Maths Extension 2</span>
            <span className="tag tag-accent-2">Chemistry</span>
          </div>
          <figure style={{ margin: 0, background: 'var(--color-accent-2-100)', borderRadius: 56, padding: 'clamp(28px, 4vw, 48px)' }}>
            <blockquote style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)', fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.35, margin: 0, maxWidth: '30ch' }}>
              "Nobody is bad at maths. Most people were just moved on too early."
            </blockquote>
            <figcaption style={{ fontSize: 15, lineHeight: 1.6, margin: '24px 0 0', color: 'var(--color-neutral-700)' }}>— Amber, founder</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
