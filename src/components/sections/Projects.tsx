import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

interface ProjectsProps {
  isDark: boolean;
  isVisible: boolean;
}

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'professional', label: 'Professionnel' },
  { id: 'ai', label: 'IA' },
  { id: 'web', label: 'Web' },
  { id: 'tools', label: 'Outils' },
  { id: 'simulation', label: 'Simulation' },
];

export default function Projects({ isDark, isVisible }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects" isDark={isDark} isVisible={isVisible}>
      <h2 className={`text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Projets
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-lg'
                : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isDark={isDark}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
