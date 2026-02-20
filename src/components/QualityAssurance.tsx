import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

const qualityObjectives = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    value: '100',
    unit: '%',
    label: 'On-Time Delivery',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '<1',
    unit: '%',
    label: 'Defect Rate',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '48',
    unit: 'h',
    label: 'Response Time',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '25',
    unit: '+',
    label: 'Countries Served',
  },
];

const modernSlaveryPolicy = [
  'Comprehensive supplier due diligence',
  'Zero tolerance for unethical labour',
  'Strict compliance with local laws',
  'Immediate investigation protocols',
  'Transparency and open reporting',
];

const ethicalEnvironmental = [
  'Fair labour & ethical sourcing',
  'Waste reduction initiatives',
  'Eco-friendly packaging options',
  'Continuous staff training',
  'Community investment programs',
];

const isoAlignment = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Consistent Quality',
    description: 'Rigorous 7-stage inspection protocol ensures every garment meets exact specifications.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Traceability',
    description: 'Full documentation trail from raw material sourcing to final shipment delivery.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Continuous Audit',
    description: 'Regular internal and third-party audits to maintain compliance and improve processes.',
  },
];

const certifications = ['ISO 9001', 'WRAP', 'SEDEX', 'OEKO-TEX', 'BSCI', 'ACCORD', 'GOTS'];

export default function QualityAssurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/20 rotate-45" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary rotate-45" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/30 rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/10 rotate-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Ethical Trade
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                OUR COMMITMENT
                <br />
                TO
                <br />
                <span className="text-primary">EXCELLENCE.</span>
              </h1>

              {/* Description */}
              <div className="border-l-4 border-primary pl-6 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Quality and ethics define {companyInfo.name} Pvt Ltd. From fabric sourcing to final delivery, we ensure every uniform meets the highest professional standards. "Delivering trust, reliability, and consistent quality is at the heart of everything we do." Whether supplying national brands, schools, hospitals, or local businesses, our goal is to build long-term partnerships based on reliability and service excellence.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide"
              >
                Free Quote | Book Appointment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image with stat */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Quality inspection process"
                className="rounded-lg shadow-xl w-full object-cover"
              />
              {/* Stat card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 border-l-4 border-primary">
                <p className="text-4xl font-black text-primary">&lt;1%</p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Defect Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Objectives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-wide mb-4">
              OUR QUALITY OBJECTIVES
            </h2>
            <p className="text-gray-600 text-lg">
              Our measurable objectives ensure excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityObjectives.map((obj, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {obj.icon}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-black text-gray-900">{obj.value}</span>
                  <span className="text-2xl font-bold text-primary">{obj.unit}</span>
                </div>
                <p className="text-gray-600 font-medium">{obj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Ethics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-wide mb-4">
              COMMITMENT TO ETHICS
            </h2>
            <p className="text-gray-600 text-lg">
              We believe in a transparent, safe, and fair supply chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Modern Slavery Policy Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-wide">
                  MODERN SLAVERY POLICY
                </h3>
              </div>
              <ul className="space-y-3">
                {modernSlaveryPolicy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethical & Environmental Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 tracking-wide">
                  ETHICAL & ENVIRONMENTAL
                </h3>
              </div>
              <ul className="space-y-3">
                {ethicalEnvironmental.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 9001:2015 Alignment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-wide">
              ISO 9001:2015 ALIGNMENT
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {isoAlignment.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 tracking-wide mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-center text-gray-400 font-medium tracking-widest uppercase mb-8">
              Certified Excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Partner with a Quality-Focused Manufacturer
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience the difference that certified quality and ethical manufacturing can make for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
