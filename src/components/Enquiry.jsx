import { useState } from 'react'

const YEAR_LEVELS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12 (HSC)']

const initialForm = {
  student: '',
  parent: '',
  email: '',
  phone: '',
  year: YEAR_LEVELS[0],
  message: '',
}

export default function Enquiry() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="enquire" style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px, 7vw, 96px) clamp(20px, 5vw, 72px) clamp(56px, 8vw, 104px)', scrollMarginTop: 84 }}>
      <div className="stack-md" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 7fr) minmax(0, 4fr)', gap: '48px clamp(24px, 5vw, 88px)', alignItems: 'start' }}>
        <div>
          <span style={{ display: 'block', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-accent-700)', marginBottom: 14 }}>Enquire</span>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 50px)', lineHeight: 1.1, margin: '0 0 20px -0.028em', maxWidth: '20ch' }}>Start with a free trial lesson</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: '52ch', margin: '0 0 40px', color: 'var(--color-neutral-700)' }}>
            Fill this in and we'll reply within one business day with a tutor and a time. No obligation after the trial.
          </p>

          {submitted ? (
            <div style={{ background: 'var(--color-accent-2-100)', borderRadius: 56, padding: 'clamp(32px, 5vw, 56px)' }}>
              <h3 style={{ fontSize: 30, lineHeight: 1.2, margin: 0 }}>Thank you — that's with us.</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, margin: '16px 0 28px', maxWidth: '44ch', color: 'var(--color-neutral-800)' }}>
                We'll be in touch within one business day. If it's urgent, call the number to the right.
              </p>
              <button type="button" className="btn btn-ghost" onClick={() => { setForm(initialForm); setSubmitted(false) }}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'var(--space-6) var(--space-4)' }}>
                <div className="field">
                  <label htmlFor="q-student">Student name</label>
                  <input className="input" id="q-student" name="student" type="text" placeholder="Who are we teaching?" value={form.student} onChange={update('student')} />
                </div>
                <div className="field">
                  <label htmlFor="q-parent">Parent or guardian</label>
                  <input className="input" id="q-parent" name="parent" type="text" placeholder="Full name" value={form.parent} onChange={update('parent')} />
                </div>
                <div className="field">
                  <label htmlFor="q-email">Email</label>
                  <input className="input" id="q-email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={update('email')} />
                </div>
                <div className="field">
                  <label htmlFor="q-phone">Phone</label>
                  <input className="input" id="q-phone" name="phone" type="tel" placeholder="+61 ___ ___ ___" value={form.phone} onChange={update('phone')} />
                </div>
                <div className="field">
                  <label htmlFor="q-year">Year level</label>
                  <select className="input" id="q-year" name="year" value={form.year} onChange={update('year')}>
                    {YEAR_LEVELS.map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field" style={{ marginTop: 32 }}>
                <label htmlFor="q-message">Message</label>
                <textarea
                  className="input"
                  id="q-message"
                  name="message"
                  rows={4}
                  placeholder="Subjects you're after, recent marks, what's been hard, what you're aiming for."
                  style={{ borderRadius: 'var(--radius-md)', resize: 'vertical' }}
                  value={form.message}
                  onChange={update('message')}
                />
              </div>

              <div style={{ marginTop: 32 }}>
                <button type="submit" className="btn btn-primary">Send enquiry</button>
              </div>
            </form>
          )}
        </div>

        <aside style={{ background: 'var(--color-accent-100)', borderRadius: 56, padding: 'clamp(28px, 4vw, 44px)' }}>
          <h3 style={{ fontSize: 24, lineHeight: 1.2, margin: '0 0 24px' }}>Or reach us directly</h3>
          <p style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-neutral-700)', margin: '0 0 6px' }}>Email</p>
          <p style={{ fontSize: 16, lineHeight: 1.5, margin: '0 0 22px' }}><a href="mailto:example@example.com">example@example.com</a></p>
          <p style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-neutral-700)', margin: '0 0 6px' }}>Phone</p>
          <p style={{ fontSize: 16, lineHeight: 1.5, margin: '0 0 22px' }}>+61 123 456 789</p>
          <p style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-neutral-700)', margin: '0 0 6px' }}>Where</p>
          <p style={{ fontSize: 16, lineHeight: 1.5, margin: '0 0 22px' }}>Online, anywhere in Australia</p>
          <p style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--color-neutral-700)', margin: '0 0 6px' }}>Hours</p>
          <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0 }}>Weekdays 3–9pm · Weekends 9am–4pm</p>
        </aside>
      </div>
    </section>
  )
}
