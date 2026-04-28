import { ExperienceEntry } from '../types';

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'ekoalu',
    title: 'Alternance IA & Automatisation',
    company: 'Ekoalu',
    period: 'Depuis Sept. 2025',
    location: 'France',
    description: "Développement d'outils d'IA et d'automatisation pour l'industrie de la menuiserie aluminium.",
    achievements: [
      "Développement d'EkoaluElevationsPro : outil de génération automatique d'élévations menuiserie aluminium SAPA Performance 70",
      "Conception d'un système Graph RAG pour analyser les commandes clients immobilier et proposer les produits correspondants",
      "Automatisation de processus métier avec intégration d'intelligence artificielle",
    ],
    tags: ['JavaScript', 'Python', 'RAG', 'Graph', 'IA', 'Automatisation'],
    borderColor: 'border-blue-600',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
  },
  {
    id: 'lma',
    title: 'Stage de Recherche',
    company: "Laboratoire de Mathématiques d'Avignon (Institut AGÈS)",
    period: 'Mai - Juillet 2025',
    location: 'Avignon, France',
    description: "Approximate Bayesian Computation pour les processus de Hawkes.",
    achievements: [
      "Implémentation d'algorithmes ABC en R et Python pour l'inférence bayésienne",
      "Application à des cas réels en finance et neurosciences",
    ],
    tags: ['Python', 'R', 'Statistiques', 'Recherche'],
    borderColor: 'border-green-600',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-800',
  },
];
