import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Globe, Award, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const team = [
    { name: "Dr. Abebe Bekele", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Sara Solomon", role: "Head of Innovation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Dawit Mekonnen", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="pt-40 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest uppercase bg-primary/10 text-primary rounded-full">
              Our Narrative
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Architecting the <br />
              <span className="text-primary">Knowledge Frontier.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              EdTech Hub was born from a singular vision: to bridge the digital divide in Ethiopia's education system through elite-level technology and radical instructional design.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Join Our Mission
              </button>
              <button className="px-8 py-4 bg-muted border border-border rounded-full font-bold hover:bg-muted/70 transition-all">
                View Impact Report
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/about-us-office-6cbff6a3-1774606606949.webp" 
                alt="About Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-background border border-border p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="text-4xl font-black text-primary">98%</div>
              <div className="text-sm font-bold text-muted-foreground uppercase">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Built on Core Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our foundation is built on values that prioritize students, empower teachers, and leverage technology for good.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision Education", desc: "Tailored learning experiences that adapt to every student's unique pace and style." },
              { icon: Zap, title: "Radical Innovation", desc: "Constantly pushing the boundaries of what is possible in educational technology." },
              { icon: Shield, title: "Institutional Integrity", desc: "Securing data and building trust with every partnership and implementation." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-black mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">The Minds Behind</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Our Leadership Team.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">A diverse collective of educators, engineers, and visionaries dedicated to educational excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-2xl font-black">{member.name}</h4>
              <p className="text-primary font-bold text-sm uppercase">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to revolutionize <br /> your institution?</h2>
            <button className="px-10 py-5 bg-white text-primary rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;