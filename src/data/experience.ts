// tsx-output/src/data/experience.ts

import { ExperienceEntry } from '../types';

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'ekoalu',
    title: 'Alternance — IA & Automatisation',
    company: 'Ekoalu',
    period: 'Sept. 2025 — présent',
    location: 'France',
    description: "Développement d'outils d'IA et d'automatisation pour l'industrie de la menuiserie aluminium.",
    achievements: [
      "EkoaluElevationsPro — outil de génération d'élévations menuiserie SAPA Performance 70",
      "Système Graph RAG pour analyser les commandes immobilier et proposer les produits",
      "Automatisation de processus métier avec IA",
    ],
    tags: ['JavaScript', 'Python', 'RAG', 'Graph', 'IA'],
  },
  {
    id: 'lma',
    title: 'Stage de Recherche',
    company: "Laboratoire de Mathématiques d'Avignon (Institut AGÈS)",
    period: 'Mai — Juillet 2025',
    location: 'Avignon',
    description: "Approximate Bayesian Computation pour les processus de Hawkes.",
    achievements: [
      "Implémentation d'algorithmes ABC en R et Python pour l'inférence bayésienne",
      "Application à des cas réels en finance et neurosciences",
    ],
    tags: ['Python', 'R', 'Statistiques', 'Recherche'],
  },
];
