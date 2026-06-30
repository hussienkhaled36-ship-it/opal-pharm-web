import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-[12px]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center"
        >
          <img
            src="/logo.jpg"
            alt="Opal Pharma"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white hover:text-muted-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex text-sm font-medium bg-muted-gold text-white rounded-md px-6 py-2.5 hover:brightness-110 transition-all duration-300"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[rgba(10,10,10,0.98)] backdrop-blur-[12px] border-t border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-white hover:text-muted-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex text-center justify-center text-sm font-medium bg-muted-gold text-white rounded-md px-6 py-3 mt-2 hover:brightness-110 transition-all duration-300"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
