import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Pill,
  FlaskConical,
  Sparkles,
  Stethoscope,
  Ship,
  ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Pill,
    title: 'Drug Registration',
    description:
      'Complete registration of pharmaceutical products with Egyptian Drug Authority (EDA) and regional health ministries.',
  },
  {
    icon: FlaskConical,
    title: 'Supplements',
    description:
      'Regulatory filing and approval for dietary supplements, vitamins, and nutritional products.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetics',
    description:
      'Cosmetic product registration, safety assessment, and compliance with local regulations.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Supplies',
    description:
      'Registration of medical devices, consumables, and healthcare equipment for third parties.',
  },
  {
    icon: Ship,
    title: 'Import & Export',
    description:
      'End-to-end logistics management for pharmaceutical imports and exports across the Middle East.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.services-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards stagger animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: 0.1 * i,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-off-white py-[60px] md:py-[120px] px-5 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="services-header text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold">
            WHAT WE DO
          </span>
          <h2
            className="font-display text-deep-teal mt-4 mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Comprehensive Pharmaceutical Services
          </h2>
          <p className="text-xl font-light text-warm-charcoal leading-relaxed">
            From drug registration to import logistics, we handle every step of
            bringing healthcare products to market.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`bg-white border border-[rgba(26,95,94,0.15)] rounded-2xl p-8 md:p-10 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[rgba(201,169,110,0.3)] group ${
                  i >= 3 ? 'lg:col-span-1 lg:last:col-start-2' : ''
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                <Icon
                  size={48}
                  className="text-muted-gold mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl text-deep-teal mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-warm-charcoal leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-gold group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight size={16} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
