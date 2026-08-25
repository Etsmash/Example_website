import Nav from './components/Nav'
import About from './components/About'
import FlowerDivider from './components/FlowerDivider'
import Tutors from './components/Tutors'
import Founder from './components/Founder'
import Reviews from './components/Reviews'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <FlowerDivider />
        <Tutors />
        <Founder />
        <Reviews />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
