import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Award as AwardIcon, Star } from 'lucide-react';

const AWARDS = [
  { title: 'Best EdTech Innovation', year: '2023', org: 'Ethiopian Tech Summit', icon: Trophy, color: 'text-blue-500' },
  { title: 'National Partner', year: '2022', org: 'MoE Ethiopia', icon: ShieldCheck, color: 'text-purple-500' },
  { title: 'Excellence in Training', year: '2024', org: 'African Ed Leaders', icon: AwardIcon, color: 'text-green-500' },
  { title: 'Impact Award', year: '2021', org: 'UNDP Future Lab', icon: Star, color: 'text-orange-500' },
];

export default function Awards() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {AWARDS.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-3xl glass-card border-white/20 flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative">
                <award.icon className={award.color} size={40} />
                <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-5 blur-2xl transition-opacity ${award.color}`} />
              </div>
              <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase mb-3">{award.year}</span>
              <h3 className="text-lg font-black mb-2 tracking-tight">{award.title}</h3>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}