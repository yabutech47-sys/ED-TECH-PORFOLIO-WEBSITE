import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-32 px-4 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Inquiries</span>
            <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
              GET IN <br /><span className="text-gradient-silver italic">TOUCH.</span>
            </h2>
            <p className="text-2xl text-zinc-500 mb-16 max-w-md font-medium leading-relaxed">
              We are ready to build the future of education with you. Start the conversation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <ContactInfo icon={Mail} label="Email Us" value="hello@edtechhubet.com" />
              <ContactInfo icon={Phone} label="Call Us" value="+251 911 234 567" />
              <ContactInfo icon={MapPin} label="Visit Us" value="Addis Ababa, ET" />
              <ContactInfo icon={ArrowUpRight} label="Socials" value="@edtechhubet" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 rounded-[48px] border-white/10 relative"
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
              <Send size={24} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 ring-blue-500/50 transition-all text-white placeholder:text-zinc-800" 
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required
                    type="email"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 ring-blue-500/50 transition-all text-white placeholder:text-zinc-800" 
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Your Vision</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-6 focus:outline-none focus:ring-2 ring-blue-500/50 transition-all text-white placeholder:text-zinc-800 resize-none" 
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-6 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group uppercase text-xs tracking-widest"
              >
                Launch Communication
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="group cursor-default">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-zinc-500 group-hover:text-blue-500 transition-colors">
          <Icon size={16} />
        </div>
        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">{label}</p>
      </div>
      <p className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors pl-14">{value}</p>
    </div>
  );
}