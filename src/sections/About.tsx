import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '500+', label: 'Products Registered' },
  { number: '50+', label: 'Partner Companies' },
  { number: '10+', label: 'Years Experience' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-warm-sand py-[60px] md:py-[120px] px-5 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-12">
        {/* Left Column - Text */}
        <div ref={leftRef} className="lg:w-[55%]">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold">
            ABOUT US
          </span>
          <h2
            className="font-display text-deep-teal mt-4 mb-6 leading-[1.2]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Your Trusted Partner in Pharmaceutical Registration
          </h2>
          <div className="space-y-4 mb-10">
            <p className="text-base text-warm-charcoal leading-relaxed">
              At Opal Pharma, we bridge the gap between international
              pharmaceutical manufacturers and the Egyptian market. With deep
              expertise in regulatory affairs, we ensure your products meet all
              compliance requirements.
            </p>
            <p className="text-base text-warm-charcoal leading-relaxed">
              Our team of experienced pharmacists and regulatory specialists
              handles everything from documentation and submission to follow-up
              and final approval.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl text-muted-gold">
                  {stat.number}
                </div>
                <div className="text-sm text-warm-charcoal mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Decorative */}
        <div ref={rightRef} className="lg:w-[45%] flex items-center">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-deep-teal to-soft-sage relative">
            {/* Decorative hexagonal pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="hexPattern"
                    x="0"
                    y="0"
                    width="60"
                    height="52"
                    patternUnits="userSpaceOnUse"
                  >
                    <polygon
                      points="30,2 56,15 56,41 30,54 4,41 4,15"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexPattern)" />
              </svg>
            </div>
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
