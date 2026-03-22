import { EducationEntry } from '../types';

export const educationEntries: EducationEntry[] = [
  {
    id: 'lyon1',
    title: 'Master Informatique',
    institution: 'Université Claude Bernard Lyon 1',
    logo: '/Université_Lyon_1_(logo).svg',
    period: 'Depuis Sept. 2025',
    location: 'Lyon, France',
    borderColor: 'border-blue-600',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
  },
  {
    id: 'avignon',
    title: 'Licence Informatique',
    institution: "Université d'Avignon",
    logo: "/Université_d'Avignon_(logo).png",
    period: 'Sept. 2023 - 2025',
    location: 'Avignon, France',
    borderColor: 'border-cyan-600',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-800',
  },
  {
    id: 'esi',
    title: 'Classe Préparatoire Intégrée',
    institution: 'ESI - École Supérieure en Informatique',
    logo: '/ESI-SBA_logo_V2.svg',
    period: 'Sept. 2021 - Juin 2023',
    location: 'Algérie',
    borderColor: 'border-slate-600',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-800',
    details: 'Membre du pôle relations externes - Club Ingeniums : Organisation de CTFs et hackathons',
  },
];
