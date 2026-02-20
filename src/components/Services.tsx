import schoolUniform from '../assets/images/Amice-School-Uniform-768x512.jpg';
import corporateUniform from '../assets/images/Amice-Corporate-Uniform.jpg';
import nurseUniform from '../assets/images/Amice-Nurse-Uniform.jpg';
import industrialUniform from '../assets/images/Amice-Industries-Workwear.jpg';

const products = [
  {
    title: 'School Uniforms',
    description: 'High-quality uniforms designed for comfort and durability, meeting the standards of UK educational institutions.',
    image: schoolUniform,
  },
  {
    title: 'Corporate Wear',
    description: 'Professional workwear that represents your brand with style and functionality.',
    image: corporateUniform,
  },
  {
    title: 'Healthcare Uniforms',
    description: 'Comfortable, practical nurse and medical uniforms designed for long shifts.',
    image: nurseUniform,
  },
  {
    title: 'Industrial Workwear',
    description: 'Safety-compliant workwear and protective clothing for various industries.',
    image: industrialUniform,
  },
];

export default function Services() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Uniform Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality uniforms manufactured to the highest standards for businesses across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {product.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Request Quote
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Designs</h3>
            <p className="text-gray-600">
              Bespoke uniform solutions tailored to your specific requirements. We work with you to create unique designs that perfectly represent your brand identity.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Wear</h3>
            <p className="text-gray-600">
              High-visibility and protective gear meeting UK safety standards. Keep your team safe and compliant with our range of safety workwear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
