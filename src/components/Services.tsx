import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home, Wind, Zap, Shield, Maximize, Hammer, PaintBucket, Pipette, Grid, Layers, Wrench, Droplet, MoveDiagonal } from 'lucide-react';

const services = [
  { icon: Building2, title: "Construction", desc: "Construction neuve de maisons individuelles et bâtiments avec matériaux premium." },
  { icon: Home, title: "Rénovation", desc: "Rénovation globale ou partielle, remise à neuf et modernisation d'espaces." },
  { icon: Wind, title: "Climatisation", desc: "Installation de systèmes de climatisation performants et silencieux." },
  { icon: Zap, title: "Pose de PAC/BT", desc: "Installation de Pompes À Chaleur et Ballons Thermodynamiques." },
  { icon: Shield, title: "Isolation", desc: "Isolation thermique et acoustique intérieure de haute performance." },
  { icon: Maximize, title: "ITE", desc: "Isolation Thermique par l'Extérieur pour une performance énergétique optimale." },
  { icon: Grid, title: "Menuiserie", desc: "Pose de fenêtres, baies vitrées et portes sur-mesure." },
  { icon: Droplet, title: "Étanchéité", desc: "Travaux d'étanchéité pour toitures terrasses et fondations." },
  { icon: Layers, title: "Plâtrerie", desc: "Création de cloisons, faux-plafonds et finitions parfaites." },
  { icon: MoveDiagonal, title: "Carrelage", desc: "Pose de carrelage grand format, faïence et mosaïque." },
  { icon: Wrench, title: "Extension", desc: "Agrandissement de maison et surélévation pour plus d'espace." },
  { icon: Hammer, title: "Cuisine", desc: "Pose et aménagement de cuisines équipées sur-mesure." },
  { icon: PaintBucket, title: "Peinture", desc: "Peinture intérieure et extérieure aux finitions soignées." },
  { icon: Pipette, title: "Sol souple", desc: "Fourniture et pose de parquets, lino et revêtements de sol." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Nos Expertises</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-none max-w-2xl">
            Domaines <br/>d'Intervention
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-card p-8 rounded-none border-t-2 border-transparent hover:border-primary transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="text-5xl font-display text-white/5 absolute top-4 right-4 font-bold select-none pointer-events-none group-hover:text-primary/10 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              
              <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              
              <h3 className="text-xl font-bold text-white mb-3 font-display uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <a href="#contact" className="group flex items-center gap-2 text-white font-display uppercase tracking-widest text-sm pb-1 border-b border-primary hover:text-primary transition-colors">
            Discuter d'un projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}