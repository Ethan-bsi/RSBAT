import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ["Tous", "Rénovation", "Construction", "ITE", "Menuiserie"];

const projects = [
  { id: 1, title: "Rénovation Cuisine Moderne", category: "Rénovation", image: "/gallery-renovation.png", size: "large" },
  { id: 2, title: "Villa Contemporaine", category: "Construction", image: "/gallery-construction.png", size: "tall" },
  { id: 3, title: "Isolation Façade", category: "ITE", image: "/gallery-ite.png", size: "normal" },
  { id: 4, title: "Baies Vitrées", category: "Menuiserie", image: "/gallery-menuiserie.png", size: "normal" },
  { id: 5, title: "Rénovation Complète", category: "Rénovation", image: "/hero-bg.png", size: "normal" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(p => activeCategory === "Tous" || p.category === activeCategory);

  return (
    <section id="realisations" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-12">
            Nos Réalisations
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-sm font-sans tracking-widest uppercase pb-1 transition-all",
                  activeCategory === cat 
                    ? "text-primary border-b border-primary" 
                    : "text-muted-foreground border-b border-transparent hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "group relative overflow-hidden bg-card cursor-pointer",
                  project.size === 'large' ? "md:col-span-2 md:row-span-2" : 
                  project.size === 'tall' ? "md:col-span-1 md:row-span-2" : "md:col-span-1 md:row-span-1"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-primary text-xs font-sans tracking-widest uppercase mb-3">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wide mb-4">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}