import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Prise de contact", desc: "Échange initial sur vos besoins." },
  { title: "Étude du projet", desc: "Visite sur site et analyse technique." },
  { title: "Devis gratuit", desc: "Proposition détaillée et chiffrée." },
  { title: "Réalisation", desc: "Exécution par nos équipes." },
  { title: "Livraison", desc: "Réception après levée des réserves." }
];

export function Process() {
  return (
    <section className="py-24 bg-card border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-sans block mb-4">Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
            Notre Processus
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-display font-bold text-xl mb-6 transition-colors bg-card z-10
                  ${index === 0 ? 'border-primary bg-primary text-primary-foreground' : 'border-white/20 text-white group-hover:border-primary group-hover:text-primary'}
                `}>
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">{step.title}</h3>
                <p className="text-xs font-sans text-muted-foreground leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
