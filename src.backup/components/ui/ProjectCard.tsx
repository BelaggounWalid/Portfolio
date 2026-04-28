import { Github, ExternalLink, GitBranch } from 'lucide-react';
import { Project } from '../../types';

const tagColorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-800' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-800' },
  green: { bg: 'bg-green-100', text: 'text-green-800' },
  red: { bg: 'bg-red-100', text: 'text-red-800' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-800' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-800' },
};

const linkIcons = {
  github: Github,
  gitlab: GitBranch,
  external: ExternalLink,
};

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
  index: number;
}

export default function ProjectCard({ project, isDark, index }: ProjectCardProps) {
  const colors = tagColorMap[project.tagColor] || tagColorMap.blue;

  return (
    <div
      className={`group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border backdrop-blur-sm ${
        isDark ? 'bg-gray-900/80 border-gray-700 hover:border-gray-500' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:border-slate-300'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-8">
        <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <span className="text-white text-xl font-bold">{project.iconLabel}</span>
        </div>
        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {project.title}
        </h3>
        <p className={`mb-4 leading-relaxed text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {project.status === 'in-progress' && (
            <span className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              En cours
            </span>
          )}
          {project.links.map((link) => {
            const Icon = linkIcons[link.type];
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  link.type === 'external'
                    ? 'text-blue-600 hover:text-blue-700'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Icon size={16} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
