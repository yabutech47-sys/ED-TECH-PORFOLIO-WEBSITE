import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Briefcase, Info, Mail, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 backdrop-blur-xl w-full max-w-5xl shadow-lg",
          isScrolled 
            ? "bg-background/80 border-border shadow-2xl" 
            : "bg-background/40 border-border shadow-sm"
        )}
      >
        <Link to="/" className="flex items-center gap-2 group">
  {/* The Circle: Now bg-white, slightly larger to fit the bigger logo */}
  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:rotate-12 shadow-md border border-gray-100">
    <span className="flex items-center justify-center">
      {/* The Logo: Increased from w-6 to w-8 */}
      <img 
        src={logo} 
        alt="Logo" 
        className="w-10 h-10 object-contain" 
      />
    </span>
  </div>

  {/* The Text: Stays the same */}
  <span className="font-black tracking-tighter text-xl text-foreground group-hover:text-blue-600 transition-colors uppercase">
    EDTECH HUB
  </span>
</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-muted/30 rounded-full px-2 py-1 border border-border">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "px-5 py-2 text-sm font-black transition-all rounded-full flex items-center gap-2",
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <link.icon size={14} />
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="flex items-center gap-3 border-l border-border pl-6">
            <ThemeToggle />
            <Link 
              to="/contact"
              className="px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-black hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 p-6 bg-background border border-border rounded-[2rem] md:hidden shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex flex-col gap-3 relative z-10">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "text-lg font-black p-4 rounded-2xl flex items-center justify-between group transition-all",
                        isActive ? "bg-blue-600/10 text-blue-600" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <link.icon size={20} />
                        {link.name}
                      </span>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
                <div className="h-px bg-border my-2" />
                <button className="flex items-center justify-center gap-2 px-4 py-4 bg-blue-600 text-white rounded-2xl text-lg font-black shadow-lg shadow-blue-600/20">
                  Book a Consult
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;