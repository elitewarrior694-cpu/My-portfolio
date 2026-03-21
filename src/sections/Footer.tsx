import { SOCIAL_LINKS } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-2xl font-display font-bold text-primary mb-2">GM</p>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Gaurav Mishra. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <div className="text-sm text-white/40">
          Built with <span className="text-primary">React</span> & <span className="text-primary">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
