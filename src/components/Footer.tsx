import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Globe, MessageSquare, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-black text-xs">EH</span>
              </div>
              <span className="font-black tracking-tighter text-2xl uppercase text-foreground">EdTech Hub</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-8 font-medium">
              Architecting the next century of education in Ethiopia through radical innovation and technical mastery.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, Info, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center hover:bg-blue-600/5 hover:border-blue-600/50 transition-all group">
                  <Icon size={20} className="text-muted-foreground group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-8 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/#services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '#' },
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground hover:text-blue-600 font-bold flex items-center gap-2 group transition-colors">
                    {item.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-6 font-medium">Receive elite insights on education and technology.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-muted/30 border border-border rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
              />
              <button className="absolute right-2 top-2 px-4 py-1.5 bg-foreground text-background rounded-xl text-xs font-black">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-6">
          <p className="text-muted-foreground text-sm font-medium">\u00a9 2024 EdTech Hub Ethiopia. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <span className="text-muted-foreground text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</span>
            <div className="flex items-center gap-2 bg-blue-600/5 px-3 py-1 rounded-full border border-blue-600/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;