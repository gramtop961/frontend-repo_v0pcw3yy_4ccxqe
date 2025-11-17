import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <div className="relative">
        <Hero />
        <Navbar />
      </div>
      <Services />
      <Showcase />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
