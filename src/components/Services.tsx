import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Laptop, PhoneCall, Layers, Leaf, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Advanced Training',
    desc: 'Elite pedagogical tech integration for modern classrooms.',
    icon: Laptop,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/service-training-87b09e51-1774603956772.webp',
    color: 'from-blue-600 to-cyan-400',
    effect: '3D Hologram'
  },
  {
    title: 'Institutional Support',
    desc: 'End-to-end tech support and infrastructure optimization.',
    icon: PhoneCall,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/service-support-4e10ea60-1774603961500.webp',
    color: 'from-purple-600 to-pink-400',
    effect: 'Live Pulse'
  },
  {
    title: 'Digital Resources',
    desc: 'Comprehensive library of curated digital learning materials.',
    icon: Layers,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/service-resources-99b547eb-1774603956100.webp',
    color: 'from-orange-600 to-red-400',
    effect: 'Glass Stack'
  },
  {
    title: 'Climate Action',
    desc: 'Sustainable EdTech solutions with a focus on green energy.',
    icon: Leaf,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/service-climate-10db548d-1774603955533.webp',
    color: 'from-green-600 to-emerald-400',
    effect: 'Biometric'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const scrollWidth = sectionRef.current.scrollWidth - window.innerWidth;

    const pin = gsap.to(sectionRef.current, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-black">
      <div ref={triggerRef}>
        <div className="h-screen flex flex-col justify-center relative">
          {/* Fixed Title Area - Pushed up slightly */}
          <div className="absolute top-12 md:top-16 left-0 w-full z-20 pointer-events-none">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 flex items-center gap-2">
                    <Sparkles size={14} />
                    Our Ecosystem
                  </span>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">THE INTERACTIVE <span className="text-gradient-silver italic">LAB.</span></h2>
                </div>
                <p className="text-zinc-500 max-w-sm text-lg font-medium pb-2">
                  Step into the future of education with our specialized technological modules.
                </p>
              </div>
            </div>
          </div>

          <div ref={sectionRef} className="flex gap-10 pl-[calc((100vw-1280px)/2+2rem)] pr-40 mt-32 md:mt-20">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[600px] group pt-40 md:pt-20"
              >
                <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden glass-card border-white/10 mb-8 transform transition-transform duration-500 group-hover:scale-[0.98]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* Effect Label */}
                  <div className="absolute top-8 right-8">
                    <span className="px-4 py-2 rounded-full glass border-white/20 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
                      {service.effect}
                    </span>
                  </div>

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500 text-white group-hover:text-black">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                    <p className="text-white/70 text-lg max-w-md group-hover:translate-x-2 transition-transform duration-500 delay-75">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}