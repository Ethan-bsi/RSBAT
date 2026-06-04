import React from 'react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <img src="/rsbat-logo-transparent.png" alt="RSBAT" className="h-10 w-auto mb-2 opacity-90" />
            <p className="text-xs text-muted-foreground font-sans tracking-wide uppercase">Expert en bâtiment</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#accueil" className="text-xs font-sans tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase">Accueil</a>
            <a href="#services" className="text-xs font-sans tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase">Services</a>
            <a href="#realisations" className="text-xs font-sans tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase">Portfolio</a>
            <a href="#contact" className="text-xs font-sans tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors uppercase">Contact</a>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-16" />

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest mb-6 text-sm">À Propos</h4>
            <p className="text-muted-foreground text-xs font-sans leading-relaxed">RSBAT est votre partenaire de confiance pour tous vos travaux de construction et de rénovation. Implantée en Île-de-France, notre entreprise intervient partout en France pour répondre à vos besoins.
</p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest mb-6 text-sm">Services</h4>
            <ul className="space-y-3 font-sans text-xs text-muted-foreground">
              <li>Construction Neuve</li>
              <li>Rénovation Globale</li>
              <li>Menuiserie & Isolation</li>
              <li>Aménagement Intérieur</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest mb-6 text-sm">Coordonnées</h4>
            <ul className="space-y-3 font-sans text-xs text-muted-foreground">
              <li>75000 Paris, Île-de-France</li>
              <li><span className="text-white/50">Téléphone</span> 06 12 15 39 27</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-widest mb-6 text-sm">Réseaux</h4>
            <ul className="space-y-3 font-sans text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn : RSBAT_officiel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram : RSBAT_officiel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook : RSBAT_officiel</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} RSBAT. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground font-sans hover:text-primary transition-colors">Mentions Légales</a>
            <a href="#" className="text-xs text-muted-foreground font-sans hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  );
}