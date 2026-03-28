import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Our elite team will contact you shortly.");
  };

  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute top-0 left-0 w-full h-[600px] -z-10 opacity-30 dark:opacity-20">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/contact-page-background-41f916e9-1774606613104.webp" 
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block"
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8"
          >
            Let's Engineer Your <br />
            <span className="text-primary">Success.</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? We're ready to deploy our expertise to help your institution scale and innovate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { icon: Mail, label: "Inquiries", value: "hello@edtechhub.et", sub: "Response within 4 hours" },
                { icon: Phone, label: "Support", value: "+251 911 234 567", sub: "Mon-Fri, 9am-6pm" },
                { icon: MapPin, label: "Headquarters", value: "Addis Ababa, Ethiopia", sub: "Bole District, Tech Hub Plaza" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-xl font-bold mb-1">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="p-8 bg-primary/5 rounded-[2rem] border border-primary/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-primary" />
                Quick Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-6">Prefer a direct chat? Schedule a 15-minute briefing with our solutions architect.</p>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                Schedule Now <Globe size={18} />
              </button>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      required
                      className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      required
                      className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Institution Type</label>
                  <select className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                    <option>University / Higher Ed</option>
                    <option>K-12 Private School</option>
                    <option>Government Agency</option>
                    <option>EdTech Startup</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Brief</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your objectives..."
                    required
                    className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-foreground text-background rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                >
                  Send Inquiry <Send size={24} />
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;