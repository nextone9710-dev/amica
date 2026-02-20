import { whyChooseUs, certifications } from '../data/siteData';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Amice?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We are committed to delivering excellence in every uniform we manufacture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div id="quality" className="border-t border-white/20 pt-12">
          <h3 className="text-xl font-semibold text-center mb-8">Our Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 px-6 py-3 rounded-lg text-white/90 font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
