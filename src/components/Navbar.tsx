import { motion } from 'motion/react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'projects', 'contact']);
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="glass-card px-6 py-3 flex items-center gap-8 pointer-events-auto">
        <a href="#hero" className="text-xl font-display font-bold text-primary mr-4">GM</a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-white/60'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="bg-primary hover:bg-primary/90 text-dark-bg px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
