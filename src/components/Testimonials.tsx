import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jean-Pierre L.",
    city: "Paris",
    work: "Rénovation complète",
    text: "Un travail remarquable de la part des équipes RSBAT. Les délais ont été respectés et les finitions sont irréprochables. Je recommande les yeux fermés."
  },
  {
    name: "Ornella L.",
    city: "Seine-et-Marne",
    work: "Construction totale d'une micro-crèche",
    text: "Entreprise sérieuse qui a su aboutir le plus grand projet professionel de ma carrière, je recommande vivement."
  },
  {
    name: "Thomas C.",
    city: "Cannes",
    work: "Pose de menuiseries",
    text: "Très satisfait de la pose de nos nouvelles baies vitrées. Du matériel de haute qualité et une pose parfaite. Une vraie équipe d'experts."
  },
  {
    name: "Sophie M.",
    city: "Biarritz",
    work: "Rénovation cuisine & pose de carrelage",
    text: "Des artisans minutieux qui ont le souci du détail. RSBAT a su nous conseiller sur le choix des matériaux et réaliser un travail magnifique."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 p-8 rounded-none flex flex-col relative group hover:border-primary/50 transition-colors bg-transparent"
            >
              <div className="absolute -top-6 left-6 text-8xl text-primary/10 font-display leading-none select-none group-hover:text-primary/20 transition-colors">"</div>
              
              <div className="flex gap-1 text-primary mb-6 relative z-10 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8 flex-grow relative z-10 italic">
                {testimonial.text}
              </p>
              
              <div className="mt-auto">
                <div className="font-bold text-white uppercase font-display tracking-widest text-sm mb-1">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground font-sans">{testimonial.work} • {testimonial.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
