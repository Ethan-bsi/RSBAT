import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { Process } from '@/components/Process';
import { QuoteForm } from '@/components/QuoteForm';
import { Footer } from '@/components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Process />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}