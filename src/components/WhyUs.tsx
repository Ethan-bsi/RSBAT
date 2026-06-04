import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Users, Wrench, FileText } from 'lucide-react';

const reasons = [
  { icon: Users, title: "Expertise Reconnue", desc: "Des professionnels qualifiés avec des années de pratique." },
  { icon: Wrench, title: "Qualité des Matériaux", desc: "Nous sélectionnons uniquement des matériaux premium et durables." },
  { icon: Clock, title: "Respect des Délais", desc: "Une planification rigoureuse pour une livraison à temps." },
  { icon: FileText, title: "Devis Rapide & Clair", desc: "Transparence totale sur les coûts avec un chiffrage détaillé." },
  { icon: CheckCircle2, title: "Finitions Haut de Gamme", desc: "Le souci du détail poussé à l'extrême pour un résultat parfait." },
  { icon: Shield, title: "Garantie Décennale", desc: "Vos travaux sont couverts pour une tranquillité d'esprit totale." },
];

export function WhyUs() {
  return (
    <section id="pourquoi-nous" className="bg-background border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
        
        {/* Left - Image */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
          <img 
            src="/gallery-construction.png" 
            alt="Construction de qualité" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background" />
        </div>

        {/* Right - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 lg:px-20 py-20 bg-background z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Notre Différence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-none mb-12">
              L'Exigence <br/>Avant Tout
            </h2>
            
            <div className="flex flex-col">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-6 py-6 border-b border-white/5 group">
                  <div className="mt-1">
                    <reason.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display uppercase tracking-wide mb-1 group-hover:text-primary transition-colors">{reason.title}</h4>
                    <p className="text-xs font-sans text-muted-foreground leading-relaxed max-w-md">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}