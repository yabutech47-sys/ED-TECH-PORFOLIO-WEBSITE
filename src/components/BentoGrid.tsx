import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe, Award } from 'lucide-react';
import { cn } from '../lib/utils';

const MetricCard = ({ title, value, label, icon: Icon, className }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-[2.5rem] border border-border bg-card backdrop-blur-xl relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon size={160} className="text-primary" />
      </div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-8 group-hover:scale-110 transition-transform">
          <Icon className="text-primary" size={24} />
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-6xl font-black tracking-tighter text-foreground">
            {value}
          </span>
          <span className="text-2xl font-black text-primary">+</span>
        </div>
        <h3 className="text-2xl font-black mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-20 md:py-24 container mx-auto px-6">
      <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
        <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 inline-block">Market Leadership</span>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
          Elite <span className="text-blue-600">Metrics.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg font-medium">Quantifying our impact across the Horn of Africa with precision and excellence.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <MetricCard
          className="md:col-span-2"
          icon={Users}
          value="10k"
          title="Empowered Educators"
          label="We've successfully trained a decade of visionary teachers who are now reshaping the classroom experience."
        />
        <MetricCard
          className="md:col-span-2"
          icon={BookOpen}
          value="45"
          title="Premium Courses"
          label="Tailored curriculum focusing on high-end tech integration and modern pedagogical standards."
        />
        <MetricCard
          className="md:col-span-1"
          icon={Globe}
          value="12"
          title="Partners"
          label="Bridging international standards with local excellence."
        />
        <MetricCard
          className="md:col-span-3 border-primary/30 bg-primary/5 shadow-primary/5"
          icon={Award}
          value="20"
          title="Tech Awards"
          label="Excellence recognized globally by educational technology bodies and international innovation forums."
        />
      </div>
    </section>
  );
};

export default BentoGrid;