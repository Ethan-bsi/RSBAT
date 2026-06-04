import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingButtons() {
  const whatsappMessage = encodeURIComponent("Bonjour RSBAT, je souhaite avoir des informations concernant un projet de rénovation/construction.");
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <a 
        href="tel:0123456789"
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Appeler RSBAT"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}