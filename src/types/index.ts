export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconLabel: string;
  iconBg: string;
  tagColor: string;
  status?: 'completed' | 'in-progress';
  category: 'ai' | 'web' | 'tools' | 'simulation' | 'professional';
  links: { label: string; url: string; type: 'github' | 'gitlab' | 'external' }[];
}

export interface EducationEntry {
  id: string;
  title: string;
  institution: string;
  logo?: string;
  period: string;
  location: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  description?: string;
  details?: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  borderColor: string;
  badgeBg: string;
  badgeText: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  skills: string[];
  type: 'tags' | 'list';
  items?: { name: string; detail: string }[];
}

export interface NavItem {
  id: string;
  label: string;
}
