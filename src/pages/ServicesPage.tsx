import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Users, Laptop, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const services = [
  {
    title: "Digital Books Module",
    description: "Transforming traditional learning into an interactive digital experience. Our module includes AI-powered summaries, interactive 3D diagrams, and offline access for students.",
    icon: BookOpen,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/digital-books-module-b1eecc98-1774609534565.webp",
    color: "from-blue-600 to-indigo-600",
    features: ["Interactive 3D Diagrams", "AI Comprehension Tools", "Offline Capability"]
  },
  {
    title: "Design Training",
    description: "Industry-standard UI/UX and visual design training. We empower the next generation of designers with practical, project-based learning and expert mentorship.",
    icon: Palette,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/design-training-e2d46b12-1774609534545.webp",
    color: "from-purple-600 to-pink-600",
    features: ["UI/UX Fundamentals", "Advanced Prototyping", "Design Systems"]
  },
  {
    title: "Teachers LMS Website",
    description: "A comprehensive Learning Management System designed by teachers, for teachers. Streamline classroom management, tracking, and student engagement in one platform.",
    icon: Users,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/teachers-through-lms-website-ca65fa3a-1774609535071.webp",
    color: "from-cyan-500 to-blue-500",
    features: ["Live Classroom Suite", "Performance Analytics", "Resource Sharing Hub"]
  },
  {
    title: "Advanced Training",
    description: "Specialized workshops focused on pedagogical tech integration. We help institutions bridge the gap between traditional teaching and future-ready technology.",
    icon: Laptop,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/tech-education-future-921f7159-1774604060281.webp",
    color: "from-blue-400 to-cyan-400",
    features: ["Tech Integration Strategy", "Digital Literacy", "AI in Education"]
  },
  {
    title: "Tech Integration",
    description: "Providing the backbone for digital education. We implement robust infrastructure and connectivity solutions tailored for educational institutions.",
    icon: Cpu,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/tech-connectivity-ethiopia-6d67a62d-1774604054308.webp",
    color: "from-indigo-400 to-blue-600",
    features: ["Network Infrastructure", "Cloud Management", "Hardware Solutions"]
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRandomNavigate = () => {
    const randomProject = PROJECTS[Math.floor(Math.random() * PROJECTS.length)];
    navigate(`/project/${randomProject.id}`);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 selection:bg-primary/30">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Centered Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="flex flex-col mb-4 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 mb-2 text-primary"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current" 
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                Our Capabilities
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-black text-foreground tracking-tighter uppercase leading-[0.85]"
            >
              Services<span className="text-primary">.</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 max-w-2xl text-xl font-medium mt-8"
          >
            We provide a comprehensive ecosystem of educational technology and design solutions 
            crafted to empower students, teachers, and institutions across Ethiopia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={handleRandomNavigate}
              className="group relative bg-card border border-border/50 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-muted animate-pulse group-hover:hidden" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />
                <div className={`absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-primary/20`}>
                  <service.icon className="text-white" size={24} />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 tracking-tight">
                   {service.title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx % 2 === 0 ? "text-foreground" : "text-blue-600"}>
                      {word}{" "}
                    </span>
                  ))}
                </h3>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div 
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="font-black text-xs uppercase tracking-widest">Inquire Now</span>
                  <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center transition-all group-hover/btn:bg-white group-hover/btn:text-primary">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;