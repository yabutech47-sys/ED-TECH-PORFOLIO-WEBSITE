import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const awards = [
  { year: '2024', title: 'EdTech Innovator of the Year', org: 'African Tech Summit' },
  { year: '2023', title: 'Best Digital Literacy Program', org: 'Ministry of Education' },
  { year: '2022', title: 'Sustainable Tech Award', org: 'Global Education Forum' },
  { year: '2021', title: 'Innovation Excellence', org: 'Ethio-Tech Awards' },
];

const AwardsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 inline-block">Industry Recognition</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Recognition for <br /><span className="text-primary">Excellence.</span></h2>
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed font-medium">
              Our commitment to redefining education in Ethiopia has been recognized by industry leaders and government institutions worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-border pt-12">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-primary/10 flex items-center justify-center shadow-lg">
                    <Star size={18} className="text-primary fill-primary" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-black text-2xl text-foreground">4.9/5 Rating</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-black">Trusted by 10k+ professionals</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="group flex items-center justify-between p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl cursor-default"
              >
                <div className="flex items-center gap-8">
                  <span className="text-2xl font-black text-muted-foreground group-hover:text-primary transition-colors duration-500">{award.year}</span>
                  <div>
                    <h4 className="font-black text-xl text-foreground mb-1">{award.title}</h4>
                    <p className="text-muted-foreground font-medium">{award.org}</p>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <Trophy size={24} className="text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default AwardsSection;