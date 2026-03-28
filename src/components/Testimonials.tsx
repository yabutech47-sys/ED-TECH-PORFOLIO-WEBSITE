import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Dr. Samuel Kassa',
    role: 'Dean of Education',
    text: 'EdTech Hub transformed our institutional approach to digital learning. Their training is unparalleled and truly futuristic.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel'
  },
  {
    name: 'Martha Belay',
    role: 'Secondary School Principal',
    text: 'The infrastructure support provided by the team allowed us to launch our e-learning platform in record time.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Martha'
  },
  {
    name: 'Yared Tadesse',
    role: 'Tech Lead',
    text: 'Innovative, professional, and deeply committed to the Ethiopian education sector. Truly world-class expertise.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yared'
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Voices of Industry</span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase">HEAR FROM THE <span className="text-gradient-silver italic">LEADERS.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[40px] relative group border-white/5"
            >
              <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-blue-500/10 transition-colors" size={80} />
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 p-1 bg-white/5">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h4 className="font-black text-white text-lg tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}