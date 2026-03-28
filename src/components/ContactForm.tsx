import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Sparkles, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "Our visionaries will reach out to you within 24 hours."
    });
  };

  return (
    <section id="contact" className="pb-20 md:pb-24 pt-0 container mx-auto px-6">
      <div className="bg-card rounded-[3rem] md:rounded-[4rem] border border-border p-6 md:p-10 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 blur-[120px] rounded-full -ml-40 -mb-40 pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 items-start">
          {/* Text Content */}
          <div className="lg:col-span-5">
            <span className="text-primary font-black tracking-widest uppercase text-xs mb-6 inline-flex items-center gap-2">
              <Sparkles size={14} />
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-foreground">
              Let's Build the <br /> <span className="text-gradient-silver">Future Together.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 font-medium leading-relaxed max-w-md">
              Have a project in mind or want to explore collaboration opportunities? 
              Reach out to us and let's start a conversation about excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <p className="text-xl md:text-2xl font-black text-foreground break-all">vision@edtechhub.et</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Headquarters</p>
                  <p className="text-xl md:text-2xl font-black text-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:col-span-7 bg-muted/20 p-6 md:p-10 rounded-[2.5rem] border border-border/50 shadow-inner"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Service Required</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none font-bold text-foreground cursor-pointer">
                    <option>Digital Integration</option>
                    <option>Teacher Training</option>
                    <option>Infrastructure Setup</option>
                    <option>Elite Consultation</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us about your project objectives..."
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-medium text-foreground placeholder:text-muted-foreground/50"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full py-5 bg-primary text-primary-foreground rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;