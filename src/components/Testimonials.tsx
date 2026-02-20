import { useState, useEffect, useCallback, useRef } from 'react';
import { testimonials } from '../data/siteData';

import ganeshLogo from '../assets/images/partners/ganesh.png';
import megamartLogo from '../assets/images/partners/megamart.webp';
import shakthiLogo from '../assets/images/partners/shakthi.webp';
import veenaLogo from '../assets/images/partners/veena.png';
import aliBhavanLogo from '../assets/images/partners/alii bhavan.jpeg';
import polskiLogo from '../assets/images/partners/polski.jpeg';

const partnerLogos: Record<string, string> = {
  Ganesh: ganeshLogo,
  MEGAMART: megamartLogo,
  'Sakthi Supermarkets': shakthiLogo,
  Veenas: veenaLogo,
  'ALI BHAVAN': aliBhavanLogo,
  POLSKI: polskiLogo,
};

const partnerRoles: Record<string, string> = {
  Ganesh: 'Asian Supermarket',
  MEGAMART: 'Retail Chain',
  'Sakthi Supermarkets': 'Supermarket Group',
  Veenas: 'Restaurant & Store',
  'ALI BHAVAN': 'Restaurant',
  POLSKI: 'Supermarket',
};

function QuoteOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z" />
    </svg>
  );
}

function QuoteClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M36 14h-6l-4 8v12h12V22h-6zm-16 0h-6l-4 8v12h12V22h-6z" />
    </svg>
  );
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(((index % totalSlides) + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Swipe handler
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#121621' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(227,30,36,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Background decorative quotes — subtle, non-overlapping */}
      <div className="absolute top-16 left-8 opacity-[0.03] pointer-events-none">
        <QuoteOpen className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-[0.03] pointer-events-none">
        <QuoteClose className="w-32 h-32 text-white" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide mb-3">
          TESTIMONIALS
        </h2>
        <p className="text-base md:text-lg text-white/50 font-light">
          What Our Clients Say About Us?
        </p>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-5 rounded-full" />
      </div>

      {/* Partner logos strip */}
      <div className="relative max-w-4xl mx-auto px-4 mb-14">
        <p className="text-center text-xs tracking-[0.25em] uppercase text-white/30 mb-6">
          Trusted by businesses across the UK
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {Object.entries(partnerLogos).map(([name, logo]) => (
            <div
              key={name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center p-3 md:p-4 hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider area — full viewport width for peek effect */}
      <div className="relative">
        {/* Edge fade masks */}
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-24 lg:w-40 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #121621 0%, transparent 100%)',
          }}
        />
        <div
          className="hidden md:block absolute right-0 top-0 bottom-0 w-24 lg:w-40 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, #121621 0%, transparent 100%)',
          }}
        />

        {/* Navigation arrows — positioned outside content area */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/[0.07] border border-white/10 text-white/70 hover:bg-primary/90 hover:border-primary hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/[0.07] border border-white/10 text-white/70 hover:bg-primary/90 hover:border-primary hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Card track */}
        <div
          ref={trackRef}
          className="overflow-hidden"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop: each card = 50% of container, center the active one */}
          <div
            className="hidden md:flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(25% - ${currentSlide * 50}%))`,
            }}
          >
            {testimonials.map((testimonial, idx) => {
              const distance = Math.abs(idx - currentSlide);
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className="w-[50%] flex-shrink-0 px-4 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : distance === 1 ? 0.45 : 0.15,
                    transform: `scale(${isActive ? 1 : 0.95})`,
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              );
            })}
          </div>

          {/* Mobile: each card = 88% of container, center the active one */}
          <div
            className="flex md:hidden transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(6% - ${currentSlide * 88}%))`,
            }}
          >
            {testimonials.map((testimonial, idx) => {
              const distance = Math.abs(idx - currentSlide);
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  className="w-[88%] flex-shrink-0 px-2 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : distance === 1 ? 0.4 : 0.15,
                    transform: `scale(${isActive ? 1 : 0.95})`,
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dot indicators — centered */}
      <div className="flex justify-center items-center gap-2.5 mt-12">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-7 h-2 bg-primary'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const logo = partnerLogos[testimonial.name];
  const role = partnerRoles[testimonial.name] || 'Client';

  return (
    <div className="relative group">
      {/* Card */}
      <div className="relative rounded-2xl border border-white/[0.12] bg-white/[0.05] p-8 md:p-10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.08]">
        {/* Opening quote */}
        <QuoteOpen className="w-10 h-10 text-primary/40 mb-2" />

        {/* Star rating */}
        <div className="flex gap-1.5 mb-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-5 h-5 ${
                star <= Math.floor(testimonial.rating)
                  ? 'text-amber-400'
                  : testimonial.rating > star - 1
                    ? 'text-amber-400/50'
                    : 'text-white/10'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-white leading-[1.9] text-base md:text-lg mb-8">
          "{testimonial.content}"
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-primary/30 mb-6" />

        {/* Client info */}
        <div className="flex items-center gap-5 h-14">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex-shrink-0 ring-2 ring-primary/40 shadow-lg shadow-primary/10">
            {logo ? (
              <img
                src={logo}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-white font-bold text-xl">
                {testimonial.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <p className="text-white font-bold text-base leading-tight truncate">
              {testimonial.name}
            </p>
            <p className="text-white/50 text-sm leading-tight mt-1">
              {role}
            </p>
          </div>
        </div>

        {/* Closing quote — bottom-right */}
        <div className="absolute bottom-6 right-8 md:right-10">
          <QuoteClose className="w-9 h-9 text-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}
