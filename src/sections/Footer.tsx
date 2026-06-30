import { Linkedin, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Drug Registration',
  'Supplements',
  'Cosmetics',
  'Medical Supplies',
  'Import & Export',
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-black pt-[60px] pb-6 px-5 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Left - Company Info */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Opal Pharma"
                className="w-16 h-16 rounded-full object-cover border border-white/10"
              />
              <div>
                <div dir="rtl" className="font-display text-2xl text-white">
                  أوبال فارما
                </div>
                <div className="text-sm font-medium text-medium-gray mt-1">
                  Opal Pharma
                </div>
              </div>
            </div>
            <p className="text-base text-medium-gray mt-4 max-w-md">
              Pharmaceutical Registration &amp; Import Services
            </p>
          </div>

          {/* Right - Links */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-medium-gray hover:text-muted-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-gold mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-medium-gray">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-medium-gray">
            2025 Opal Pharma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-medium-gray hover:text-muted-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-medium-gray hover:text-muted-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
