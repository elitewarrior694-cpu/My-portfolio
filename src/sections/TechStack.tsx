import { motion } from 'motion/react';
import { TECH_STACK } from '../data';

export default function TechStack() {
  return (
    <section id="skills" className="section-container bg-white/[0.02] rounded-[3rem]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Tech <span className="text-primary">Stack</span>
        </h2>
        <p className="text-white/60">Tools and technologies I use to bring ideas to life.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_STACK.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <category.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
