import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-white/60 max-w-xl">
            A selection of my recent work, ranging from AI-powered SaaS to experimental hardware.
          </p>
        </div>
        <div className="text-primary font-bold text-sm uppercase tracking-widest">
          {PROJECTS.length} Projects Total
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
