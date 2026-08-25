import useInView from '../hooks/useInView'

export default function Founder() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="founder" className="section">
      <div className="section-inner founder-inner" ref={ref}>
        <div className={`founder-portrait ${inView ? 'is-visible' : ''}`}>
          <div className="founder-portrait-frame">EK</div>
        </div>
        <div className={`founder-copy ${inView ? 'is-visible' : ''}`}>
          <p className="eyebrow">Our Founder</p>
          <h2>Meet Emily Kwan</h2>
          <p>
            Emily founded Bloom Tutoring after tutoring HSC Mathematics and Chemistry
            privately for years and seeing the same pattern: bright students held
            back not by ability, but by one-size-fits-all classrooms.
          </p>
          <p>
            After graduating with First Class Honours in Science and ranking in the
            top 1% of the state for HSC Mathematics Extension 2, she set out to
            build a tutoring company that treats every student as an individual —
            matching them with the right tutor, not just any tutor.
          </p>
          <p>
            Today, Bloom works with a small, carefully vetted team of tutors who
            share her belief that great teaching is equal parts subject mastery and
            genuine care for the student in front of them.
          </p>
          <blockquote>
            “Every student can bloom — they just need the right conditions to grow
            in.”
          </blockquote>
        </div>
      </div>
    </section>
  )
}
