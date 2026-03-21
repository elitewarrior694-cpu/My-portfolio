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
                      {link.name === 'Email' ? 'elitewarrior694@gmail.com' : `@gaurav-mishra`}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 glass-card bg-white/5 focus:bg-white/10 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 glass-card bg-white/5 focus:bg-white/10 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 glass-card bg-white/5 focus:bg-white/10 focus:border-primary outline-none transition-all resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-primary text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-[1.02]"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
