import About from './Components/About'
import ContactSection from './Components/ContactSection'
import Dishes from './Components/Dishes'
import Expertise from './Components/Expertise'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Mission from './Components/MIssion'
import Navbar from './Components/Navbar'
import Review from './Components/Review'

const App = () => (
  <main className="overflow-y-hidden text-neutral-200 antialiased">
    <HeroSection />
    <Navbar />
    <Dishes />
    <About />
    <Mission />
    <Expertise />
    <Review />
    <ContactSection />
    <Footer />
  </main>
)

export default App



