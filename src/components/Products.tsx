import { useEffect, useState } from "react";
import LazyImage from "./LazyImage";
import healthcarePdf from "../assets/documents/healthcare.pdf?url";
import { Link } from "react-router-dom";

// Import local product images
import product1 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-02_06_53-PM.png";
import product2 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-02_09_07-PM.png";
import product3 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-02_57_32-PM-683x1024.png";
import product4 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_02_12-PM.png";
import product5 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_05_18-PM.png";
import product6 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_07_28-PM.png";
import product7 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_11_09-PM-683x1024.png";
import product8 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_16_17-PM-683x1024.png";
import product9 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-04_35_15-PM-1.png";
import product10 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-04_39_38-PM.png";
import product11 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-05_20_56-PM.png";
import product12 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-05_23_14-PM.png";
import product13 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-05_25_57-PM.png";
import product14 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-05_29_21-PM.png";
import product15 from "../assets/images/products/ashton_female.png";
import product16 from "../assets/images/products/ashton_1.jpeg";
import product17 from "../assets/images/products/ashton_2.jpeg";
import product18 from "../assets/images/products/ashton_3.jpeg";

// Import category images
import corporateImg from "../assets/images/Amice-Corporate-Uniform.jpg";
import industrialImg from "../assets/images/Amice-Industries-Workwear.jpg";
import healthcareImg from "../assets/images/Amice-Nurse-Uniform.jpg";
import schoolImg from "../assets/images/Amice-School-Uniform-768x512.jpg";

const previousWork = [
  { image: product1, alt: "Custom branded polo with embroidered logo" },
  { image: product2, alt: "Softshell jacket with logo placement" },
  { image: product3, alt: "Branded polo shirt" },
  { image: product4, alt: "Premium work jacket with branding" },
  { image: product5, alt: "Corporate vest with embroidered logo" },
  { image: product6, alt: "Performance fleece with branding" },
  { image: product7, alt: "Hospitality polo with custom design" },
  { image: product8, alt: "Retail staff shirt with brand integration" },
  { image: product9, alt: "Healthcare scrubs" },
  { image: product10, alt: "High-visibility safety vest" },
  { image: product11, alt: "Chef coat with custom branding" },
  { image: product12, alt: "Care worker tunic" },
  { image: product13, alt: "Server waistcoat" },
  { image: product14, alt: "Durable workwear jacket" },
  { image: product15, alt: "Ashton female uniform" },
  { image: product16, alt: "Ashton male uniform" },
  { image: product17, alt: "Ashton black female uniform" },
  { image: product18, alt: "European female" },
];

const offerings = [
  {
    title: "Corporate Wear",
    description: (
      <>
        <p className="mb-4">
          We provide a complete selection of professional uniforms, including:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Formal shirts (short &amp; long sleeve)</li>
          <li>Tailored trousers and skirts</li>
          <li>Blazers and jackets</li>
          <li>Branded polo shirts</li>
          <li>Knitwear and layering options</li>
        </ul>
        <p>
          All garments are available with <strong>custom branding</strong> to
          match your company identity.
        </p>
      </>
    ),
    image: corporateImg,
  },
  {
    title: "Industrial Workwear",
    description: (
      <>
        Amice Industries Workwear specializes in high-performance{" "}
        <strong>safety wear</strong> and <strong>industrial uniforms</strong>{" "}
        designed to protect workers while ensuring comfort and durability. We
        provide a wide range of <strong>industrial workwear solutions</strong>{" "}
        including hi-visibility clothing, flame-resistant apparel, coveralls,
        jackets, and protective gear tailored to meet international safety
        standards. Every product is crafted with precision, using durable
        fabrics and advanced manufacturing techniques to withstand demanding
        environments. Trusted by industries across construction, logistics,
        healthcare, and manufacturing, Amice Industries guarantees reliable
        protection without compromising on fit or style. Our mission is to keep
        your workforce safe, comfortable, and professionally represented at all
        times.
      </>
    ),
    image: industrialImg,
  },
  {
    title: "Healthcare Uniforms",
    description: (
      <>
        We supply <strong>NHS-compliant uniforms</strong> for the National
        Health Service, as well as private hospitals, clinics, and care homes
        across the UK. Our range includes{" "}
        <strong>scrubs, tunics, lab coats, and medical workwear</strong>, all
        made from high-quality, breathable fabrics that offer durability, easy
        maintenance, and all-day comfort. Every garment is designed to support
        the demanding routines of healthcare professionals while maintaining a
        clean, professional appearance.
      </>
    ),
    image: healthcareImg,
    downloadLink: healthcarePdf,
    downloadLabel: "Download Healthcare Uniform Catalogue",
  },
  {
    title: "School Uniforms",
    description: (
      <>
        <p className="mb-4">
          Smart, durable school wear designed to instil pride, promote equality,
          and withstand the demands of an active school day. We supply schools
          across the UK with uniforms that look great from the first day of term
          to the last.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Custom badges, crests, and logo embroidery</li>
          <li>Wide range of sizes for all ages</li>
          <li>Durable, easy-care fabrics built to last</li>
          <li>Colour options to match your school identity</li>
          <li>Bulk ordering with consistent sizing</li>
        </ul>
        <p className="mb-4">
          Whether you need a full uniform set or specific garments, we work
          closely with schools to deliver a solution that reflects your values
          and keeps pupils looking their best.
        </p>
      </>
    ),
    image: schoolImg,
  },
  {
    title: "Hospitality Uniforms",
    description: (
      <>
        <p className="mb-4">
          In hospitality, presentation is everything. Our uniforms help your
          team make the right first impression, whether they're behind the pass,
          on the floor, or welcoming guests at the door.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Chef coats and kitchen wear</li>
          <li>Aprons for front and back of house</li>
          <li>Server and waitstaff uniforms</li>
          <li>Front-of-house and reception wear</li>
          <li>Custom branding and logo embroidery</li>
        </ul>
        <p className="mb-4">
          From independent restaurants to large hotel groups, we tailor every
          order to your brand, ensuring a consistent and polished look across
          your entire team.
        </p>
      </>
    ),
    image: product9,
  },
  {
    title: "Retail Staff Wear",
    description: (
      <>
        <p className="mb-4">
          Modern, branded uniforms for retail teams that reflect your store's
          identity. Your uniform should reflect your brand clearly and
          consistently. We offer:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>High-quality logo embroidery</li>
          <li>Colour matching to your brand guidelines</li>
          <li>Multiple garment styles and fits</li>
          <li>Bulk ordering for teams of any size</li>
        </ul>
        <p className="mb-4">
          Whether you need subtle branding or a bold identity, we tailor
          everything to your requirements.
        </p>
      </>
    ),
    image: product8,
  },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-white/60 tracking-[0.3em] uppercase text-sm font-medium mb-4 md:mb-6">
            Premium Uniform Collections
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 leading-tight">
            Where Every Thread
            <span className="block font-semibold italic">
              Speaks Professionalism
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-10 font-light">
            Custom branding through embroidery, printing, and logo placement to
            showcase your identity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
            >
              Request a Quote
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="#our-work"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Our Previous Work */}
      <section id="our-work" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              Our Previous <span className="font-semibold">Work</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of custom branded uniforms we've created for businesses
              across the UK
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previousWork.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="what-we-offer" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
              What We <span className="font-semibold">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive uniform solutions tailored to every industry
            </p>
          </div>

          <div className="space-y-12">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center bg-gray-50 rounded-lg overflow-hidden`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className="relative overflow-hidden group">
                    <LazyImage
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-72 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      wrapperClassName="w-full"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full p-8 lg:p-12">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <div className="w-16 h-1 bg-primary mb-6" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {offering.description}
                  </p>
                  {offering.downloadLink && (
                    <a
                      href={offering.downloadLink}
                      download={offering.downloadLabel}
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-medium tracking-wide hover:bg-primary-dark transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3"
                        />
                      </svg>
                      {offering.downloadLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Delivery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide mb-3">
              Quality &amp; Reliability
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Every uniform we deliver is built to perform and delivered when
              promised.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Quality & Comfort */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Built for Daily Wear
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Durable, long-lasting fabrics",
                  "Comfortable fits for all-day wear",
                  "Easy-care materials, less ironing, easy washing",
                  "Professional finish that holds over time",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & Reliability */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                  Fast, Reliable Service
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Quick turnaround times",
                  "Consistent quality across every order",
                  "Reliable delivery schedules you can plan around",
                  "Trusted by businesses across the UK",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm font-medium mb-6">
            Start Your Project
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Ready to Elevate Your
            <span className="block font-semibold italic">Brand Identity?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Let our team craft the perfect uniform solution that reflects your
            values and leaves a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 font-medium tracking-wide hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+447460856977"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
