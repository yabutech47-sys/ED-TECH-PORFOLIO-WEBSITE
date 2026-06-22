import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import BentoGrid from '../components/BentoGrid';
import HorizontalServices from '../components/HorizontalServices';
import Portfolio from '../components/Portfolio';
import AwardsSection from '../components/AwardsSection';
import ContactForm from '../components/ContactForm';
import Marquee from '../components/Marquee';
import ScrollReveal from '../components/ScrollReveal';
import TestimonialSection from '../components/Testimonials';

const SectionDivider = ({ className = "" }: { className?: string }) => (
  <ScrollReveal direction="none" scale={1} duration={1} delay={0.1} threshold={0.5}>
    <div className={`w-full flex justify-center py-1 relative z-10 pointer-events-none overflow-hidden ${className}`}>
      <div className="w-full max-w-7xl px-6">
        <div className="section-divider" />
      </div>
    </div>
  </ScrollReveal>
);

const HomePage = () => {
  return (
    <div className="bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      {/* Hero section with a prominent entrance animation */}
      <ScrollReveal 
        direction="up" 
        duration={1.2} 
        distance={60} 
        scale={0.9} 
        threshold={0.05}
      >
        <Hero />
      </ScrollReveal>
      
      <div id="experience" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <Experience />
        </ScrollReveal>
      </div>
      
    
      
      <div id="services" className="relative z-10">
        <HorizontalServices /> 
      </div>

      
      <SectionDivider />
      <div id="metrics" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <BentoGrid />
        </ScrollReveal>
      </div>

      <SectionDivider />

      <div id="gallery" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <Portfolio />
        </ScrollReveal>
      </div>

      <SectionDivider />

      <div id="awards" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <AwardsSection />
        </ScrollReveal>
      </div>

      <SectionDivider />

      <div id="partners" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <Marquee />
        </ScrollReveal>
      </div>
      <SectionDivider />

      <div id="testimonials" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1}>
          <TestimonialSection />
        </ScrollReveal>
      </div>
      
      

      <div id="contact" className="relative z-10">
        <ScrollReveal direction="up" distance={40} delay={0.1} threshold={0.15}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default HomePage;