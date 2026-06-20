import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronRight } from 'lucide-react';
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';

const TESTIMONIALS = [
  {
    name: 'Dr. Samuel Kassa',
    role: 'Dean of Education',
    text: 'EdTech Hub transformed our institutional approach to digital learning. Their training is unparalleled and truly futuristic.',
    avatar: team1
  },
  {
    name: 'Martha Belay',
    role: 'Secondary School Principal',
    text: 'The infrastructure support provided by the team allowed us to launch our e-learning platform in record time.',
    avatar: team2
  },
  {
    name: 'Yared Tadesse',
    role: 'Tech Lead',
    text: 'Innovative, professional, and deeply committed to the Ethiopian education sector. Truly world-class expertise.',
    avatar: team3
  }
];

const MARQUEE_LABELS = ['Impact', 'Trust', 'Growth', 'Partnership', 'Learning', 'Innovation'];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 px-4">
      <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-14 h-px bg-primary/40"></span>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Trusted by Educators</p>
            <span className="w-14 h-px bg-primary/40"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] tracking-tight uppercase">
            Stories of <span className="text-blue-600">Real Impact.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
            Powerful feedback from schools, principals, and learning leaders who have already seen the EdTech Hub difference.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/70 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.18)] transition-transform duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-primary to-blue-600 opacity-80" />
              <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg shadow-blue-600/10">
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600/90">{testimonial.role}</p>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-white">{testimonial.name}</h3>
                    </div>
                  </div>
                  <Quote className="text-blue-600/20" size={64} />
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed font-medium italic">
                  “{testimonial.text}”
                </p>

                <div className="mt-8 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-600/5 px-4 py-2 uppercase tracking-[0.2em] font-black text-primary">
                    Feedback
                  </span>
                  <span className="flex items-center gap-2 text-white/70">
                    View story <ChevronRight size={18} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-full border border-white/10 bg-background/70 py-4 shadow-inner">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-full items-center gap-10 px-8"
          >
            {[...MARQUEE_LABELS, ...MARQUEE_LABELS].map((label, idx) => (
              <span key={`${label}-${idx}`} className="whitespace-nowrap text-sm font-black uppercase tracking-[0.45em] text-blue-600/90 opacity-90">
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
