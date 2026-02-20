import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/siteData";

import corporateImg from "../assets/images/Amice-Corporate-Uniform.jpg";
import industrialImg from "../assets/images/Amice-Industries-Workwear.jpg";
import healthcareImg from "../assets/images/Amice-Nurse-Uniform.jpg";
import product1 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-02_06_53-PM.png";
import product4 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-03_02_12-PM.png";
import product10 from "../assets/images/products/ChatGPT-Image-Sep-30-2025-04_39_38-PM.png";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "ISO Certified Quality",
    description: "ISO 9001:2015 certified manufacturing with rigorous quality checks at every stage.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Custom Branding",
    description: "Embroidery, printing, and logo placement tailored to your brand identity.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Reach",
    description: "Serving businesses across the UK and beyond with reliable, on-time delivery.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    description: "Premium quality uniforms at prices that make sense for your business.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Turnaround",
    description: "Efficient production ensures your uniforms are ready when you need them.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "A personal account manager to guide you from design to delivery.",
  },
];

const story = [
  {
    image: corporateImg,
    title: "Designed for Your Industry",
    text: "Every uniform we create starts with understanding your industry, your team, and your brand. We don't do one-size-fits-all — we craft solutions specific to your needs.",
  },
  {
    image: product4,
    title: "Built to Last",
    text: "We use premium fabrics and proven manufacturing techniques. Every stitch is quality-checked so your uniforms stay looking sharp, wash after wash.",
  },
  {
    image: product1,
    title: "Your Brand, Front and Centre",
    text: "From precision embroidery to high-definition prints, we bring your brand to life on every garment. Your team becomes a walking showcase of your identity.",
  },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "50,000+", label: "Uniforms Delivered" },
  { value: "15+", label: "Industries Covered" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 opacity-15">
          <img
            src={industrialImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm font-medium mb-6">
            Why {companyInfo.name.toUpperCase()}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
            More Than Just
            <span className="block font-semibold italic">Uniforms</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            We believe a uniform is a strategic tool for smarter workplaces — enhancing safety, boosting productivity, and strengthening your brand.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
              The {companyInfo.name.toUpperCase()} Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              Why Businesses <span className="font-semibold">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-700 mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              How We <span className="font-semibold">Deliver Excellence</span>
            </h2>
          </div>

          <div className="space-y-20">
            {story.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-semibold mb-5">
                    {index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-primary mb-6 mx-auto lg:mx-0" />
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Mosaic */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">
              Across Industries
            </p>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              Trusted by <span className="font-semibold">Every Sector</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative overflow-hidden group lg:row-span-2">
              <img
                src={corporateImg}
                alt="Corporate uniforms"
                className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Corporate</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={healthcareImg}
                alt="Healthcare uniforms"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Healthcare</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={product10}
                alt="Industrial workwear"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Industrial</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={industrialImg}
                alt="Workwear solutions"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Construction</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <img
                src={product1}
                alt="Branded polo"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm font-medium mb-6">
            Let's Work Together
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Ready to Elevate Your
            <span className="block font-semibold italic">Team's Image?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Get a free, no-obligation quote and discover how {companyInfo.name.toUpperCase()} can transform your workforce's appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
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
