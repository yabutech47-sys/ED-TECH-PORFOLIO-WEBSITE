import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ChevronRight, Play, X } from 'lucide-react'; // Added X icon

// Import your local video from your src folder here
// Replace './your-video.mp4' with the actual path to your file
import visionVideo from '../img/vision.mp4'; // Ensure the video file is in the src folder or adjust the path accordingly

const Hero = () => {
  // State to manage video modal visibility
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Hero Visual Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/33943c95-e4d1-4c21-8271-ff184160c372/hero-particles-map-bd1e0a5a-1774604060299.webp" 
          alt="Tech Particles Map"
          className="w-full h-full object-cover opacity-30 dark:opacity-50 scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] uppercase border border-primary/20 rounded-full bg-primary/5 backdrop-blur-md text-">
            Next Generation Learning
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-foreground uppercase">
            Pioneering the Future of <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Ethiopian Education.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
            Transforming teaching through elite tech integration and professional mastery. Experience the luxury of seamless digital advancement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 md:mb-20">
            <motion.a
  href="/about" // Now TypeScript is happy because this is an anchor tag!
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="group relative px-8 py-4 bg-primary text-white dark:text-black rounded-full font-black text-lg overflow-hidden flex items-center gap-2 shadow-xl shadow-primary/20 cursor-pointer"
>
  Start Your Journey
  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
</motion.a>
            
            {/* Watch Vision Button - Click Opens Modal */}
            <motion.button 
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-background/50 hover:bg-muted transition-colors backdrop-blur-md font-bold"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Play fill="currentColor" size={16} className="text-primary translate-x-0.5" />
              </div>
              <span className="text-foreground">Watch Vision</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Overlay Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the player itself
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Video Player */}
              <video
                src={visionVideo}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;