import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo1-9df57aee-1774616303692.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo2-8dfa51ec-1774616303754.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo3-b469d1c3-1774616303620.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo4-0e50ae08-1774616304126.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo5-a697cdf0-1774616303559.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/logo6-c2fc2ce5-1774616303798.webp',
];

export default function Marquee() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-transparent group">
      <div className="container mx-auto px-6 mb-8 relative z-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-primary/30"></span>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Global Ecosystem</p>
            <span className="w-12 h-px bg-primary/30"></span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-center tracking-tighter uppercase leading-[0.85]">
            Our <span className="text-blue-600">Partners.</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-background via-transparent to-background" />
        
        <div className="flex overflow-hidden py-6 md:py-10">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-24 md:gap-40 items-center whitespace-nowrap px-12"
          >
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="w-32 md:w-48 h-20 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-foreground">
                <img 
                  src={logo} 
                  alt={`Partner ${i}`} 
                  className="max-w-full max-h-full object-contain filter invert dark:invert-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-4 flex justify-center opacity-20">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-muted-foreground">Certified Alliances & Strategic Hubs</span>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}