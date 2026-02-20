import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteData';

import corporateImg from '../assets/images/Amice-Corporate-Uniform.jpg';
import schoolImg from '../assets/images/Amice-School-Uniform-768x512.jpg';
import nurseImg from '../assets/images/Amice-Nurse-Uniform.jpg';
import industrialImg from '../assets/images/Amice-Industries-Workwear.jpg';

const stats = [
  { value: '500+', label: 'Uniforms Delivered' },
  { value: '25+', label: 'Countries Served' },
  { value: '6+', label: 'Trusted Partners' },
  { value: '100%', label: 'Quality Commitment' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality You Can Trust',
    description: 'Top-grade fabrics and expert craftsmanship, ISO certified at every step.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Tailored to Your Brand',
    description: 'Custom branding, embroidery, and design options that carry your identity.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Always On Time',
    description: 'Reliable delivery schedules — we never miss a deadline.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Value for Money',
    description: 'Factory-direct pricing without compromising on quality.',
  },
];

const compliancePoints = [
  'Regular supplier assessments and audits',
  'Staff training to prevent modern slavery risks',
  'Clear reporting mechanisms for concerns',
  'Ethical standards in all supplier contracts',
];

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#121621' }}>
        {/* Decorative elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(227,30,36,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/15 rounded-full text-xs font-medium text-white/60 tracking-widest uppercase mb-8">
                About Amice
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                CRAFTED WITH
                <span className="block text-primary">PURPOSE.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
                With years of experience in the garment industry, {companyInfo.name} delivers exceptional uniforms that combine style, comfort, and durability — because your team deserves the best.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-white/40 text-xs tracking-wide uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img src={corporateImg} alt="Corporate uniforms" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-56">
                    <img src={nurseImg} alt="Healthcare uniforms" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden h-56">
                    <img src={schoolImg} alt="School uniforms" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img src={industrialImg} alt="Industrial workwear" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Decorative border accent */}
              <div className="absolute -inset-3 border border-white/[0.06] rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Premium Uniform Solutions
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-gray-500 text-lg leading-relaxed">
              Our mission is simple: provide uniforms that reflect your brand's values and leave a lasting impression. We build long-term partnerships through personalized service, competitive pricing, and reliable delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/[0.07] text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance / Ethics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={corporateImg}
                  alt="Our commitment to ethical practices"
                  className="w-full h-[28rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/70 text-sm tracking-widest uppercase mb-2">Our Commitment</p>
                  <p className="text-white text-xl font-bold">Ethical & Transparent Practices</p>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-black">ISO</p>
                <p className="text-xs text-white/80 tracking-wide">9001:2015 Certified</p>
              </div>
            </div>

            {/* Right content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/[0.07] rounded-full text-xs font-semibold text-primary tracking-widest uppercase mb-6">
                Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                Transparency & Ethics
              </h2>
              <div className="w-12 h-[2px] bg-primary mb-6 rounded-full" />

              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-gray-900">Statement from the People Director:</span> {companyInfo.name} Ltd takes its responsibilities under the Modern Slavery Act 2015 extremely seriously. We are committed to identifying, understanding, and addressing potential modern slavery risks across our operations and supply chain.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are dedicated to ensuring that all workers involved in our business and supply chain are treated fairly, with dignity, and in safe working conditions.
              </p>

              {/* Compliance checklist */}
              <div className="space-y-4 mb-8">
                {compliancePoints.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.07] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Management Accountability</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our senior management team is accountable for enforcing these standards within their departments and maintaining supplier relationships that reflect {companyInfo.name}'s commitment to ethical practices. We aim to build a transparent, responsible, and sustainable business ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#121621' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Elevate Your Team's Image?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch for a free, no-obligation quote. Let's create uniforms your team will be proud to wear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
