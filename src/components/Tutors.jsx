import useInView from '../hooks/useInView'

const TUTORS = [
  {
    name: 'Amelia Chen',
    subjects: ['Maths Ext 2', 'Maths Ext 1'],
    blurb:
      'HSC Mathematics mentor of 6 years with a first-class engineering degree. Loves breaking down proofs into plain English.',
    hue: 340,
  },
  {
    name: 'Rohan Patel',
    subjects: ['Physics', 'Maths Advanced'],
    blurb:
      'Physics tutor and PhD candidate who turns tricky mechanics and electromagnetism into intuitive, visual lessons.',
    hue: 28,
  },
  {
    name: 'Sofia Marinov',
    subjects: ['Chemistry', 'Biology'],
    blurb:
      'Former HSC Chemistry state-ranker. Specialises in exam technique, practicals, and building rock-solid fundamentals.',
    hue: 265,
  },
  {
    name: 'Jack Nguyen',
    subjects: ['Maths Advanced', 'Maths Ext 1'],
    blurb:
      'Patient, methodical tutor for Years 7–11 students building strong foundations before the HSC ramps up.',
    hue: 150,
  },
  {
    name: 'Priya Iyer',
    subjects: ['Biology', 'Chemistry'],
    blurb:
      'Medicine student who tutors the sciences with a focus on real-world application and memorable analogies.',
    hue: 200,
  },
  {
    name: 'Liam O’Connor',
    subjects: ['Physics', 'Maths Ext 2'],
    blurb:
      'Enjoys the hardest HSC questions. Great for high-achieving students chasing that last few marks.',
    hue: 340,
  },
]

function TutorCard({ tutor, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <article
      ref={ref}
      className={`tutor-card ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="tutor-avatar" style={{ '--hue': tutor.hue }}>
        {tutor.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
      <h3>{tutor.name}</h3>
      <div className="tutor-subjects">
        {tutor.subjects.map((s) => (
          <span key={s} className="pill pill-small">
            {s}
          </span>
        ))}
      </div>
      <p>{tutor.blurb}</p>
    </article>
  )
}

export default function Tutors() {
  return (
    <section id="tutors" className="section section-alt">
      <div className="section-inner">
        <p className="eyebrow">Our Tutors</p>
        <h2>A tutor for every learning style</h2>
        <p className="section-lede">
          Every Bloom tutor is hand-picked for subject mastery and, just as
          importantly, for their ability to teach it well.
        </p>
        <div className="tutor-grid">
          {TUTORS.map((t, i) => (
            <TutorCard tutor={t} index={i} key={t.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
