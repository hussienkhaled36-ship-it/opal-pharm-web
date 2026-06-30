import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import BinaryRain from '@/components/BinaryRain';

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(
        tagRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.1
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.2
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.3
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.45
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        0.8
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Binary Rain Canvas */}
      <BinaryRain />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center h-full px-5">
        {/* Logo */}
        <div
          ref={logoRef}
          className="opacity-0 translate-y-5 mb-6"
        >
          <img
            src="/logo.jpg"
            alt="Opal Pharma Logo"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover border-2 border-muted-gold/30"
          />
        </div>

        {/* Tag Label */}
        <div
          ref={tagRef}
          className="opacity-0 translate-y-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-gold mb-6"
        >
          Pharmaceutical Excellence
        </div>

        {/* Hero Title */}
        <h1
          ref={titleRef}
          className="opacity-0 translate-y-5 font-display text-white max-w-[900px] leading-[1.1]"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          <span dir="rtl" className="block">
            أوبال فارما
          </span>
          <span className="block mt-2">Opal Pharma</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="opacity-0 translate-y-5 text-xl font-light text-white/75 max-w-[560px] mt-8 leading-relaxed"
        >
          Registration of pharmaceuticals, supplements, cosmetics &amp; medical
          supplies. Import &amp; export services across Egypt and the Middle East.
        </p>

        {/* CTA Group */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-5 flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="inline-flex items-center justify-center bg-muted-gold text-white rounded-lg px-9 py-3.5 text-sm font-medium hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
          >
            Our Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white rounded-lg px-9 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="opacity-0 translate-y-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="relative w-px h-10 bg-white/40">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-muted-gold"
              style={{
                animation: 'scrollBounce 1.5s ease-in-out infinite',
              }}
            />
          </div>
          <span className="text-xs text-white/40">Scroll</span>
        </div>
      </div>

      {/* Scroll animation keyframes injected */}
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { top: 0; }
          50% { top: 34px; }
        }
      `}</style>
    </section>
  );
}
