import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Users, Target, Rocket, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-4xl font-black mb-6">Project Not Found</h1>
        <button 
          onClick={() => navigate('/')} 
          className="px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-black uppercase tracking-widest text-xs mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium mb-12">
              {project.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-[32px] border-border">
                <Target className="text-blue-500 mb-4" size={32} />
                <h4 className="text-xs font-black text-foreground uppercase tracking-widest mb-2 italic">The Challenge</h4>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>
              <div className="glass-card p-8 rounded-[32px] border-border">
                <Rocket className="text-blue-500 mb-4" size={32} />
                <h4 className="text-xs font-black text-foreground uppercase tracking-widest mb-2 italic">The Solution</h4>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/5] rounded-[48px] overflow-hidden border border-border"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <ImageIcon className="text-primary" />
              <h2 className="text-3xl font-black tracking-tight uppercase">Workshop & Process Images</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((img, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-[32px] overflow-hidden border border-border aspect-video group"
                  whileHover={{ y: -5 }}
                >
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-10 rounded-[32px] border-border">
              <div className="flex items-center gap-4 mb-8">
                <Users className="text-blue-500" />
                <h3 className="text-xl font-black uppercase tracking-tight">Team Work</h3>
              </div>
              <p className="text-muted-foreground mb-10 leading-relaxed font-medium">
                {project.teamWork}
              </p>
              
              <div className="space-y-6 pt-8 border-t border-border">
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Key Deliverables</h4>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-foreground font-bold">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-[48px] overflow-hidden py-32 px-10 text-center">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/team-work-collaboration-6be6b1a8-1774616312478.webp" 
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
            alt="CTA bg" 
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Impactful Innovation starts here.</h2>
            <Link 
              to="/contact"
              className="px-12 py-6 bg-primary text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/40 inline-block"
            >
              Let's build together
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}