import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'Intelligence Artificielle',
    icon: '🤖',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    type: 'tags',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'HuggingFace', 'CNN/MLP', 'LangChain', 'RAG'],
  },
  {
    id: 'frontend',
    title: 'Développement Frontend',
    icon: '💻',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    type: 'tags',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Développement Backend',
    icon: '🔧',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    type: 'tags',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Flask', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'devops',
    title: 'DevOps & Outils',
    icon: '⚙️',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    type: 'tags',
    skills: ['Git', 'Docker', 'Jenkins', 'CI/CD', 'Agile/SCRUM'],
  },
  {
    id: 'languages',
    title: 'Langues',
    icon: '🌐',
    iconBg: '',
    iconColor: '',
    type: 'list',
    skills: [],
    items: [
      { name: 'Anglais', detail: 'C2 - Certifié LanguageCert (2025)' },
      { name: 'Français', detail: 'Courant' },
    ],
  },
];
