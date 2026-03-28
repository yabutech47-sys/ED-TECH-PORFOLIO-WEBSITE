import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const CATEGORIES = ['All', 'Digital Design', 'Training', 'Public Sector'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-24 px-4 bg-background relative transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-10 mb-12 md:mb-16">
          <div className="max-w-2xl flex flex-col items-center">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Published Products</span>
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
              Our <span className="text-blue-600 italic">Gallery.</span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium">
              Transforming theory into tangible impact across diverse educational landscapes.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden glass-card border-border shadow-xl">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[4px]">
                    <div className="flex flex-col items-center gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <ArrowRight size={32} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Explore</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="glass-card p-6 rounded-3xl border-white/20 backdrop-blur-xl w-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{project.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}