import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Cairo, Egypt',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+20 XXX XXX XXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@opalpharma.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Sun - Thu: 9:00 AM - 5:00 PM',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: -20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1 * i,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-off-white py-[60px] md:py-[120px] px-5 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Column - Form */}
        <div ref={formRef} className="lg:w-[55%]">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold">
            GET IN TOUCH
          </span>
          <h2
            className="font-display text-deep-teal mt-4 mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Start Your Registration Process
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal placeholder:text-medium-gray/60 focus:border-deep-teal focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal placeholder:text-medium-gray/60 focus:border-deep-teal focus:outline-none transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal placeholder:text-medium-gray/60 focus:border-deep-teal focus:outline-none transition-colors"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal placeholder:text-medium-gray/60 focus:border-deep-teal focus:outline-none transition-colors"
              />
            </div>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal focus:border-deep-teal focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select a Service</option>
              <option value="drug">Drug Registration</option>
              <option value="supplements">Supplements</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="medical">Medical Supplies</option>
              <option value="import">Import & Export</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white border border-[rgba(26,95,94,0.15)] rounded-lg px-4 py-3.5 text-base text-warm-charcoal placeholder:text-medium-gray/60 focus:border-deep-teal focus:outline-none transition-colors resize-y"
            />
            <button
              type="submit"
              className="w-full bg-muted-gold text-white rounded-lg py-4 text-sm font-medium hover:brightness-110 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="lg:w-[45%] flex flex-col gap-4">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="bg-white border border-[rgba(26,95,94,0.15)] rounded-xl p-6 flex items-start gap-4"
              >
                <Icon size={24} className="text-muted-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-deep-teal mb-1">
                    {info.title}
                  </h4>
                  <p className="text-base text-warm-charcoal">{info.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
