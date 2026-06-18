import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const spring = useSpring(0, { stiffness: 45, damping: 20 });
  const count = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-8 bg-card border border-border rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 group">
      <div className="text-5xl md:text-6xl font-black text-primary mb-2 flex items-baseline gap-1">
        <motion.span>{count}</motion.span>
        <span className="text-3xl">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-semibold uppercase tracking-widest text-sm group-hover:text-primary transition-colors">
        {label}
      </p>
    </div>
  );
};

const Experience = () => {
  const stats = [
    { value: 12, label: "Years of Excellence", suffix: "+" },
    { value: 10, label: "Institutional Partners", suffix: "+" },
    { value: 25000, label: "Certified Educators", suffix: "+" },
    { value: 1000, label: "Trainings", suffix: "+" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block"
          >
            Our Impact In Numbers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            Decades of Pedagogical <br className="hidden md:block" /> Innovation.
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Experience;