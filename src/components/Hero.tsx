import { useState, useRef } from 'react';
import { companyInfo } from '../data/siteData';
import heroVideo from '../assets/videos/demo.mp4';
import heroBg from '../assets/images/background.png';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoSectionRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoSectionRef.current) {
      if (isPlaying) {
        videoSectionRef.current.pause();
      } else {
        videoSectionRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
    <section id="home" className="relative min-h-screen pt-16 lg:pt-20 bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/70" />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>

      {/* Hero Text */}
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <p className="text-white/50 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-[fadeSlideDown_0.8s_ease_forwards]" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            {companyInfo.tagline}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-white leading-[1.1] tracking-tight animate-[fadeSlideUp_0.8s_ease_0.2s_both]" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            YOU'D LOVE TO
            <br />
            <span className="text-primary">WEAR IT.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl mt-4 animate-[fadeSlideUp_0.8s_ease_0.4s_both]" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            And it's a uniform.
          </p>
          {/* Central CTA */}
          <a
            href="#contact"
            className="inline-block mt-6 bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/30 transition-transform duration-200 hover:scale-105 animate-[fadeSlideUp_0.8s_ease_0.6s_both]"
          >
            EXPLORE COLLECTION
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-[fadeIn_1s_ease_1s_both]">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>

    {/* Video Section */}
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoSectionRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Video Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/70 transition-colors"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/70 transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
