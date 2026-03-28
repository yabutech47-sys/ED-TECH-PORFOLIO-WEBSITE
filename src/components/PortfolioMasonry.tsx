import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ["All", "Digital Literacy", "Infrastructure", "STEM", "Innovation"];

const projects = [
  {
    id: 1,
    title: "Smart Classroom Init",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Teacher AI Co-pilot",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Rural Connectivity",
    category: "Digital Literacy",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 4,
    title: "Robotics Workshop",
    category: "STEM",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    title: "EdTech Dashboard",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 6,
    title: "Future Lab",
    category: "STEM",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  }
];

const PortfolioMasonry = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section className="py-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <span className="text-primary font-black tracking-widest uppercase text-sm mb-4 inline-block">Case Studies</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Project Showcase.</h2>
          <p className="text-muted-foreground text-lg font-medium">Explore our portfolio of transformative educational technology implementations across the region.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 bg-muted/50 p-2 rounded-[2rem] border border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-black transition-all",
                filter === cat 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-[3rem] overflow-hidden break-inside-avoid border border-border bg-card shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-6">{project.title}</h3>
                  <button className="flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white rounded-full text-sm font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all w-fit">
                    View Case Study
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortfolioMasonry;