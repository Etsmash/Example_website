import Nav from './components/Nav'
import About from './components/About'
import Tutors from './components/Tutors'
import Founder from './components/Founder'
import Reviews from './components/Reviews'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', minHeight: '100vh', overflowX: 'clip' }}>
      <Nav />
      <main>
        <About />
        <Tutors />
        <Founder />
        <Reviews />
        <Enquiry />
      </main>
      <Footer />
    </div>
  )
}
