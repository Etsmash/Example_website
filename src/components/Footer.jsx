export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div>
          <a href="#about" className="nav-brand" onClick={go('about')}>
            <span className="nav-brand-mark" aria-hidden="true">✿</span>
            Bloom Tutoring
          </a>
          <p className="footer-tagline">1:1 tutoring for Years 7–11 &amp; the HSC.</p>
        </div>

        <nav className="footer-links">
          <a href="#about" onClick={go('about')}>About Us</a>
          <a href="#tutors" onClick={go('tutors')}>Tutors</a>
          <a href="#founder" onClick={go('founder')}>Founder</a>
          <a href="#reviews" onClick={go('reviews')}>Reviews</a>
          <a href="#enquiry" onClick={go('enquiry')}>Enquiry</a>
        </nav>

        <div className="footer-contact">
          <a href="mailto:hello@bloomtutoring.com.au">hello@bloomtutoring.com.au</a>
          <span>Sydney, NSW</span>
        </div>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} Bloom Tutoring. All rights reserved.</p>
    </footer>
  )
}
