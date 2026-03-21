import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer (MERN)";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 glass-card text-primary text-sm font-bold tracking-wider uppercase">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            Gaurav <span className="text-primary">Mishra</span>
          </h1>
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
            "I build full-stack web apps and AI-powered products that solve real-world problems."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 glass-card font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
