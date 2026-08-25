import useInView from '../hooks/useInView'

const REVIEWS = [
  {
    name: 'Grace T.',
    detail: 'Year 12, Maths Ext 1',
    quote:
      'I went from a low Band 4 to a Band 6 in Extension 1 in two terms. My tutor made calculus actually click for the first time.',
    rating: 5,
  },
  {
    name: 'Daniel M.',
    detail: 'Year 11, Chemistry',
    quote:
      'Bloom matched me with a tutor who explained things exactly how I needed. My marks and my confidence both went up.',
    rating: 5,
  },
  {
    name: 'Sarah L. (Parent)',
    detail: 'Year 9, Mathematics',
    quote:
      'My son actually asks to do his tutoring session now. The 1:1 attention has made such a difference to his motivation.',
    rating: 5,
  },
  {
    name: 'Ethan W.',
    detail: 'Year 12, Physics & Maths Ext 2',
    quote:
      'Having tutors for both subjects who talked to each other about my progress was a game changer heading into the HSC.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    detail: 'Year 10, Biology',
    quote:
      'Patient, encouraging, and genuinely good at teaching. I finally understand how to structure exam responses.',
    rating: 4,
  },
  {
    name: 'Michael H. (Parent)',
    detail: 'Year 12, Chemistry',
    quote:
      'Professional, reliable, and my daughter improved from a 68 to an 89 average across the year. Worth every session.',
    rating: 5,
  },
]

function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star star-filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <figure
      ref={ref}
      className={`review-card ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <Stars rating={review.rating} />
      <blockquote>“{review.quote}”</blockquote>
      <figcaption>
        <strong>{review.name}</strong>
        <span>{review.detail}</span>
      </figcaption>
    </figure>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="section-inner">
        <p className="eyebrow">Reviews</p>
        <h2>What students &amp; parents say</h2>
        <p className="section-lede">
          Streaming in from students across Years 7–11 and the HSC cohort.
        </p>
        <div className="review-grid">
          {REVIEWS.map((r, i) => (
            <ReviewCard review={r} index={i} key={r.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
