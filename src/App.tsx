import { Routes, Route, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueSteps from './components/ValueSteps'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import QualityAssurance from './components/QualityAssurance'
import WhyChooseUs from './components/WhyChooseUs'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

const quickLinks = [
  { label: 'Our Products', description: 'Corporate, healthcare, school & more', href: '/products' },
  { label: 'About Us', description: 'Our story, mission & values', href: '/about' },
  { label: 'Quality Assurance', description: 'ISO certified manufacturing process', href: '/quality' },
  { label: 'Why Choose Us', description: 'What sets Amice apart', href: '/why-us' },
]

function QuickLinksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Amice</h2>
          <p className="text-gray-500 mt-2">Everything you need to know about our uniform solutions</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group block bg-gray-50 hover:bg-primary rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-white mb-1 transition-colors">{link.label}</h3>
              <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinksSection />
      <Testimonials />
      <ValueSteps />
      <Contact />
    </>
  )
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Amice Pvt Ltd | Custom Uniform Manufacturer & Supplier UK',
    description: 'Amice Pvt Ltd — premium custom uniform manufacturer and supplier for UK businesses. Corporate wear, school uniforms, healthcare uniforms, industrial workwear, and logo embroidery.',
  },
  '/about': {
    title: 'About Us | Amice Pvt Ltd — UK Uniform Manufacturer',
    description: 'Learn about Amice Pvt Ltd, a UK-based premium uniform manufacturer with ISO 9001:2015 certification. Crafting high-quality custom uniforms since our founding.',
  },
  '/products': {
    title: 'Uniform Products | Corporate, School, Healthcare & More — Amice UK',
    description: 'Browse Amice\'s full range of custom uniforms: corporate wear, school uniforms, healthcare scrubs, industrial workwear, hospitality uniforms, and retail staff wear.',
  },
  '/quality': {
    title: 'Quality Assurance | ISO Certified Uniform Manufacturing — Amice UK',
    description: 'Amice Pvt Ltd is ISO 9001:2015 certified with rigorous quality control at every stage. Discover our commitment to delivering consistently high-quality uniforms.',
  },
  '/why-us': {
    title: 'Why Choose Amice | Premium UK Uniform Supplier',
    description: 'Why businesses across the UK trust Amice: ISO certified quality, custom branding, fast turnaround, competitive pricing, and dedicated account support.',
  },
  '/contact': {
    title: 'Contact Us | Get a Free Uniform Quote — Amice Pvt Ltd',
    description: 'Get in touch with Amice Pvt Ltd for a free, no-obligation uniform quote. Call, email, or WhatsApp our team today.',
  },
}

function usePageMeta() {
  const location = useLocation()
  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta['/']
    document.title = meta.title
    const descEl = document.querySelector('meta[name="description"]')
    if (descEl) descEl.setAttribute('content', meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `https://staging.amice.co.uk${location.pathname}`)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://staging.amice.co.uk${location.pathname}`)
  }, [location.pathname])
}

function App() {
  usePageMeta()
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
