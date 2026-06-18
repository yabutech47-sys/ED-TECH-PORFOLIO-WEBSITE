import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Laptop, Cpu, BookOpen, Palette, Users, ArrowRight, ArrowUpRight, Sparkles, ChevronRight, Fingerprint, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Digital Books",
    description: "Interactive reading experiences with embedded multimedia and Interactivity Based comprehension tools.",
    icon: BookOpen,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/digital-books-module-b1eecc98-1774609534565.webp",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Module Design",
    description: "Master the craft of UI/UX and visual storytelling with our industry-leading design team.",
    icon: Palette,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/design-training-e2d46b12-1774609534545.webp",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "LMS Support",
    description: "Empowering educators through our advanced Learning Management System with integrated teaching tools.",
    icon: Users,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/teachers-through-lms-website-ca65fa3a-1774609535071.webp",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Live Training",
    description: "Immersive workshops using holographic displays and and hands-on learning.",
    icon: Laptop,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/tech-education-future-921f7159-1774604060281.webp",
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "Tech Integration",
    description: "Seamlessly connecting legacy systems with future-ready infrastructure across Ethiopia.",
    icon: Cpu,
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/tech-connectivity-ethiopia-6d67a62d-1774604054308.webp",
    color: "from-indigo-400 to-blue-600"
  }
];

const HorizontalServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleRandomNavigate = () => {
    const randomProject = PROJECTS[Math.floor(Math.random() * PROJECTS.length)];
    navigate(`/project/${randomProject.id}`);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      
      if (!section || !container) return;

      const getScrollAmount = () => {
        return section.scrollWidth - window.innerWidth;
      };

      // Set initial position
      gsap.set(section, { x: 0 });

      // The Horizontal Scrolling Logic
      gsap.to(section, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: isMobile ? "top 10%" : "top 10%",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Entrance animation for cards
      gsap.fromTo(".service-card", 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }, containerRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('resize', refresh);
    const timeout = setTimeout(refresh, 500);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', refresh);
      clearTimeout(timeout);
    };
  }, [isMobile]);

  const ColoredTitle = ({ text, className }: { text: string; className?: string }) => {
    const words = text.split(' ');
    return (
      <h2 className={className}>
        {words.map((word, i) => (
          <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-blue-600"}>
            {word}{" "}
          </span>
        ))}
      </h2>
    );
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background overflow-hidden selection:bg-primary/30 py-8 md:py-16 no-scrollbar"
    >
      <div className="min-h-[45vh] md:min-h-[50vh] flex flex-col justify-center overflow-hidden py-10">
        
        {/* Section Header - Centered */}
        <div className="px-6 md:px-24 mb-10 md:mb-16 text-center relative z-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
                </svg>
              </div>
              <span className="font-black uppercase tracking-[0.4em] text-[9px] md:text-[11px]">
                Our Capabilities
              </span>
            </div>
            <ColoredTitle 
              text="Our Services."
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]"
            />
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div 
          ref={sectionRef} 
          className="flex flex-row items-center gap-6 md:gap-12 pl-6 md:pl-[25vw] pr-[20vw] w-max will-change-transform no-scrollbar"
        >
          {/* Intro Content (now shown on desktop too) */}
          <div className="service-card w-[240px] h-[320px] flex flex-col justify-center px-4 shrink-0">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Zap size={20} className="animate-pulse" />
                <span className="font-black uppercase tracking-widest text-[10px]">Swipe to Explore</span>
              </div>
              <h4 className="text-3xl font-black tracking-tighter text-foreground leading-[0.9] mb-4 uppercase">
                TAILORED <br /> <span className="text-blue-600">SOLUTIONS</span>
              </h4>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Discover how we are transforming the educational landscape through technology and innovative training methodologies.
              </p>
              <div className="mt-8 flex items-center gap-2 text-zinc-400">
                <ChevronRight size={16} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Start Journey</span>
              </div>
            </div>

          {services.map((service, index) => (
            <div 
              key={index}
              onClick={handleRandomNavigate}
              className="service-card group relative h-[360px] md:h-[480px] w-[280px] md:w-[460px] flex-shrink-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-card border border-border/60 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer shadow-lg shadow-black/5"
            >
              <div className="absolute inset-0 bg-muted group-hover:hidden transition-opacity duration-300" />
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col justify-end backdrop-blur-[6px] bg-black/10 border-t border-white/5 transition-all duration-500 group-hover:bg-black/20 group-hover:backdrop-blur-[10px]">
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 md:mb-10 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl md:text-5xl font-black mb-3 md:mb-5 tracking-tighter text-white transition-colors duration-300 group-hover:text-primary leading-tight md:leading-[0.9]">
                  {service.title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx % 2 === 0 ? "text-white" : "text-blue-400"}>
                      {word}{" "}
                    </span>
                  ))}
                </h3>
                
                <p className="text-[11px] md:text-[16px] leading-relaxed max-w-[95%] text-zinc-300 group-hover:text-white transition-colors duration-300 font-medium line-clamp-3 mb-4 md:mb-8">
                  {service.description}
                </p>
                
                <div 
                  className="mt-2 md:mt-4 flex items-center gap-3 text-primary font-black group/btn w-fit uppercase text-[9px] md:text-[13px] tracking-widest"
                >
                  <span>Explore Module</span>
                  <div className="w-7 h-7 md:w-12 md:h-12 rounded-full border border-primary/40 flex items-center justify-center transition-all group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:scale-110">
                    <ArrowRight size={isMobile ? 14 : 20} className="transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action Card */}
          <div 
            onClick={handleRandomNavigate}
            className="service-card group relative h-[360px] md:h-[480px] w-[280px] md:w-[460px] flex-shrink-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary flex flex-col items-end justify-end text-left p-5 md:p-8 transition-all duration-700 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-20 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 md:w-28 md:h-28 bg-background/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 md:mb-14 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                <Sparkles size={isMobile ? 32 : 48} className="text-primary-foreground" />
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-primary-foreground mb-3 md:mb-6 tracking-tighter leading-tight uppercase">
                Explore More!!! <br /> Now
              </h3>
              
              <p className="text-[10px] md:text-[14px] font-bold mb-4 md:mb-8 max-w-[170px] md:max-w-[280px] text-primary-foreground/90 uppercase tracking-[0.2em]">
                View Full Ecosystem
              </p>
              
              <div 
                className="px-4 py-2 md:px-10 md:py-5 bg-background text-primary rounded-full text-[10px] md:text-[14px] font-black flex items-center gap-2 md:gap-3 hover:shadow-[0_16px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 active:scale-95"
              >
                View All
                <ArrowUpRight size={isMobile ? 18 : 28} />
              </div>
            </div>
          </div>

          {/* Outro Content (now shown on desktop too) */}
          <div className="service-card w-[240px] h-[320px] flex flex-col justify-center px-4 shrink-0">
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-blue-600 animate-spin-slow" size={24} />
              </div>
              <h4 className="text-3xl font-black tracking-tighter text-foreground leading-[0.9] mb-4 uppercase">
                Ready to <br /> <span className="text-blue-600">Ignite?</span>
              </h4>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Our network is expanding. Join us in building the next generation of learning tools.
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => navigate('/contact')} 
                  className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest"
                >
                  Get in touch
                  <Fingerprint size={30} />
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalServices;