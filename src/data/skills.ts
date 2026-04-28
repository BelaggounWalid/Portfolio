// tsx-output/src/data/skills.ts

import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai',
    title: 'Intelligence Artificielle',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'HuggingFace', 'CNN/MLP', 'LangChain', 'RAG'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'devops',
    title: 'DevOps & Outils',
    items: ['Git', 'Docker', 'Jenkins', 'CI/CD', 'Agile/SCRUM'],
  },
];

export const languages = [
  { name: 'Anglais', detail: 'C2 — Certifié LanguageCert (2025)' },
  { name: 'Français', detail: 'Courant' },
];
