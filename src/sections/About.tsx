import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Gaurav is a self-driven MERN stack developer who focuses on building real-world applications instead of just tutorials. He has experience in frontend and backend development, API integration, and deploying applications.
            </p>
            <p>
              He has also worked on machine learning projects using TensorFlow/Keras and is interested in building scalable SaaS products.
            </p>
            <p>
              He enjoys solving real-world problems, building products from scratch, and experimenting with new technologies.
            </p>
          </div>
          
          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">Uttar Pradesh</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Location</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">MERN</p>
              <p className="text-sm text-white/40 uppercase tracking-widest">Specialization</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square glass-card p-4 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
