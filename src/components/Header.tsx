import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Pourquoi Nous', href: '#pourquoi-nous' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2 z-50 shrink-0">
          <img src="/rsbat-logo-transparent.png" alt="RSBAT Logo" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-sans tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer">
            <Phone className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
            <span>06 12 15 39 27</span>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-widest px-6 py-2.5 rounded-none uppercase text-sm">
            <a href="#devis">Devis Gratuit</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-foreground z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 pt-20">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-display uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-lg text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>06 12 15 39 27</span>
            </div>
            <Button asChild className="bg-primary text-primary-foreground font-display uppercase tracking-widest px-8 py-6 rounded-none text-lg w-full max-w-[250px]">
              <a href="#devis" onClick={() => setIsMobileMenuOpen(false)}>Devis Gratuit</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
