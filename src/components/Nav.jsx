const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'tutors', label: 'Tutors' },
  { id: 'founder', label: 'Founder' },
  { id: 'reviews', label: 'Reviews' },
]

export default function Nav() {
  return (
    <nav className="nav" style={{ gap: 'var(--space-6)' }}>
      <span className="nav-brand" style={{ letterSpacing: '-0.02em' }}>Amber Tutoring</span>
      <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap', marginLeft: 'auto' }}>
        {LINKS.map((l) => (
          <a key={l.id} className="btn btn-ghost" href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#enquire">
          Enquire
        </a>
      </div>
    </nav>
  )
}
