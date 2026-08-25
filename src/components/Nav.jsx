import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About Us' },
  { id: 'tutors', label: 'Tutors' },
  { id: 'founder', label: 'Founder' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'enquiry', label: 'Enquire' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#about" className="nav-brand" onClick={go('about')}>
          <span className="nav-brand-mark" aria-hidden="true">✿</span>
          Bloom Tutoring
        </a>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-enquire-btn"
          onClick={go('enquiry')}
        >
          Book a Tutor
        </button>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
