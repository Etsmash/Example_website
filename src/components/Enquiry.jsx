import { useState } from 'react'

const YEAR_LEVELS = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12 (HSC)']
const SUBJECTS = [
  'Mathematics Advanced',
  'Mathematics Extension 1',
  'Mathematics Extension 2',
  'Chemistry',
  'Physics',
  'Biology',
]

const initialForm = {
  name: '',
  email: '',
  yearLevel: '',
  subject: '',
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
    <section id="enquiry" className="section">
      <div className="section-inner enquiry-inner">
        <div className="enquiry-copy">
          <p className="eyebrow">Enquiry</p>
          <h2>Let's find the right tutor for you</h2>
          <p className="section-lede">
            Tell us a little about your student and what they need. We'll get back
            to you within one business day with a tutor match.
          </p>
          <ul className="enquiry-points">
            <li>Free 15-minute matching call</li>
            <li>No lock-in contracts</li>
            <li>In-person or online sessions available</li>
          </ul>
        </div>

        <div className="enquiry-form-wrap">
          {submitted ? (
            <div className="enquiry-success">
              <span className="enquiry-success-mark">✿</span>
              <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
              <p>
                Your enquiry has been received. A member of the Bloom team will be
                in touch shortly to discuss the best tutor match.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setForm(initialForm)
                  setSubmitted(false)
                }}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Smith"
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="form-row form-row-split">
                <div>
                  <label htmlFor="yearLevel">Year level</label>
                  <select
                    id="yearLevel"
                    required
                    value={form.yearLevel}
                    onChange={update('yearLevel')}
                  >
                    <option value="" disabled>
                      Select year
                    </option>
                    {YEAR_LEVELS.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    required
                    value={form.subject}
                    onChange={update('subject')}
                  >
                    <option value="" disabled>
                      Select subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="message">Tell us a bit more (optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="e.g. Struggling with calculus ahead of the trial exams"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
