import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="glass-card p-8 md:p-16 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-primary group-hover:text-dark-bg transition-all">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest">{link.name}</p>
                    <p className="text-lg font-medium group-hover:text-primary transition-colors">
                      {link.name === 'Email' ? 'elitewarrior694@' : `@gaurav-mishra`}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
