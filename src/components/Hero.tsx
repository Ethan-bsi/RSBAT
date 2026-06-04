import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100dvh] bg-background flex flex-col lg:flex-row">
      {/* Mobile Image (Visible only on small screens) */}
      <div className="lg:hidden w-full h-64 relative mt-20">
        <img 
          src="/hero-bg.png" 
          alt="Chantier de construction" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      {/* Left Column - Content */}
      <div className="w-full lg:w-[55%] min-h-[100dvh] flex flex-col justify-center px-6 lg:pl-20 xl:pl-32 lg:pr-16 py-12 lg:py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-block">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-sans font-medium">Expert en Bâtiment</span>
          </div>
          
          <h1 className="font-display uppercase leading-[1.05] mb-8">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white">VOTRE EXPERT</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-primary">RÉNOVATION &</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white">CONSTRUCTION</span>
          </h1>
          
          <div className="w-full h-[1px] bg-white/10 mb-8" />

          <p className="font-sans text-base text-muted-foreground max-w-sm mb-10 leading-relaxed">
            Transformez vos visions en réalité avec une précision architecturale et un savoir-faire artisanal. Des fondations aux finitions haut de gamme, nous construisons pour durer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-widest h-14 px-8 rounded-none w-full sm:w-auto" asChild>
              <a href="#devis">Devis Gratuit</a>
            </Button>
            <a href="#services" className="group flex items-center gap-2 text-white font-display uppercase tracking-widest text-sm pb-1 border-b border-primary hover:text-primary transition-colors">
              Nos Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 lg:mt-24 flex items-center justify-between lg:justify-start lg:gap-16 border-t border-white/5 pt-8"
        >
         <motion.div className="flex justify-center">
  <span className="text-lg md:text-xl font-sans text-muted-foreground text-center">
    De nombreux projets menés à bien avec la satisfaction de nos clients.
  </span>
</motion.div> 
      </div>
      {/* Right Column - Image (Desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10 w-32" />
        <img 
          src="/hero-bg.png" 
          alt="Chantier de construction de luxe" 
          className="w-full h-full object-cover grayscale-[30%] opacity-80"
        />
        
        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-12 left-12 z-20 bg-background/80 backdrop-blur-md border border-white/10 p-6 max-w-[240px]"
        >
          <div className="w-10 h-10 bg-primary/20 flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="font-display uppercase text-white font-bold tracking-wide mb-1">Garantie Décennale</h4>
          <p className="text-xs text-muted-foreground font-sans">Couverture complète sur vos travaux.</p>
        </motion.div>
      </div>
    </section>
  );
}
