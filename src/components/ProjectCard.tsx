import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    features: string[];
    tech: string[];
    image: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-6 flex-grow">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-white/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
