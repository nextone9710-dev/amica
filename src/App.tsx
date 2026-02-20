import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import QualityAssurance from './components/QualityAssurance'
import WhyChooseUs from './components/WhyChooseUs'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<QualityAssurance />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
