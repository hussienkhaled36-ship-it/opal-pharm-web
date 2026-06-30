import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Documentation',
    description: 'We prepare all required regulatory documents and product dossiers.',
  },
  {
    number: '02',
    title: 'Submission',
    description: 'Application is submitted to the relevant health authority.',
  },
  {
    number: '03',
    title: 'Follow-up',
    description: 'We track progress and address any queries from authorities.',
  },
  {
    number: '04',
    title: 'Approval',
    description: 'Final registration certificate is obtained and delivered.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.process-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Connecting line animation
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Steps stagger animation
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.from(step, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.15 * i,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-deep-teal py-[60px] md:py-[120px] px-5 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="process-header text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold">
            OUR PROCESS
          </span>
          <h2
            className="font-display text-white mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            From Application to Approval
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/20"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-[1]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[i] = el; }}
                className="flex lg:flex-col items-center lg:text-center gap-5 lg:gap-0"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full border border-muted-gold bg-deep-teal flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-muted-gold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:mt-5 text-left lg:text-center">
                  <h3 className="text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2 lg:max-w-[220px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
