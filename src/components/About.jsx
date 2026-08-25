import Flower from './Flower'

const SUBJECTS = [
  'Mathematics Advanced',
  'Mathematics Extension 1',
  'Mathematics Extension 2',
  'Chemistry',
  'Physics',
  'Biology',
]

const STATS = [
  { value: '1:1', label: 'Personalised tutoring' },
  { value: 'Yrs 7–11', label: 'Plus full HSC support' },
  { value: '96%', label: 'Students improve a grade' },
]

export default function About() {
  return (
    <section id="about" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        <Flower className="hero-float hero-float-1" hue={340} />
        <Flower className="hero-float hero-float-2" hue={28} />
        <Flower className="hero-float hero-float-3" hue={265} />
      </div>

      <div className="section-inner hero-inner">
        <p className="eyebrow">About Us</p>
        <h1>
          Personal tutoring that helps bright minds
          <span className="hero-highlight"> bloom</span>.
        </h1>
        <p className="hero-lede">
          Bloom Tutoring pairs Years 7–11 and HSC students with expert 1:1 tutors in
          Mathematics and the Sciences. We build confidence, close gaps, and turn
          study into something students actually look forward to.
        </p>

        <div className="hero-actions">
          <a
            href="#enquiry"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Enquire Now
          </a>
          <a
            href="#tutors"
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('tutors')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Meet Our Tutors
          </a>
        </div>

        <div className="subject-pills">
          {SUBJECTS.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to see us grow</span>
          <div className="scroll-cue-line" />
        </div>
      </div>
    </section>
  )
}
