import OpenAI from 'openai';
import { projects } from '../src/data/projects.js';
import { experienceEntries } from '../src/data/experience.js';
import { educationEntries } from '../src/data/education.js';
import { skillCategories, languages } from '../src/data/skills.js';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('❌ OPENAI_API_KEY manquante.');
  console.error('   Sur Windows PowerShell : $env:OPENAI_API_KEY="sk-..."');
  console.error('   Sur Bash             : export OPENAI_API_KEY=sk-...');
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

function buildKnowledge(): string {
  const projectsBlock = projects
    .map((p) => {
      const links = p.links.length
        ? ` Liens: ${p.links.map((l) => `${l.label} → ${l.url}`).join(' ; ')}.`
        : '';
      const status = p.status === 'in-progress' ? ' [En cours]' : '';
      return `- [${p.year}] ${p.title} — ${p.role}${status}\n  ${p.description}\n  Technologies: ${p.tags.join(', ')}.${links}`;
    })
    .join('\n');

  const expBlock = experienceEntries
    .map(
      (e) =>
        `- ${e.title} chez ${e.company} (${e.period}, ${e.location})\n  ${e.description}\n  Réalisations:\n    • ${e.achievements.join('\n    • ')}\n  Stack: ${e.tags.join(', ')}.`
    )
    .join('\n\n');

  const eduBlock = educationEntries
    .map(
      (e) =>
        `- ${e.title} — ${e.institution} (${e.period}, ${e.location})${e.details ? `\n  ${e.details}` : ''}`
    )
    .join('\n');

  const skillsBlock = skillCategories.map((s) => `- ${s.title} : ${s.items.join(', ')}.`).join('\n');

  const langsBlock = languages.map((l) => `- ${l.name} : ${l.detail}`).join('\n');

  return `=== PROJETS ===
${projectsBlock}

=== EXPÉRIENCE PROFESSIONNELLE ===
${expBlock}

=== ÉDUCATION ===
${eduBlock}

=== COMPÉTENCES ===
${skillsBlock}

=== LANGUES ===
${langsBlock}`;
}

const INSTRUCTIONS = `Tu es l'assistant conversationnel du portfolio d'Anis Belaggoun.

PROFIL D'ANIS :
- Étudiant en Master Informatique à l'Université Claude Bernard Lyon 1
- Alternant Ingénieur IA & Automatisation chez Ekoalu (menuiserie aluminium SAPA)
- Basé à Villeurbanne, France

TON RÔLE :
Réponds aux visiteurs du portfolio en français, sur un ton professionnel mais chaleureux. Aide-les à comprendre le parcours, les projets, les compétences et l'expérience d'Anis.

COMMENT RÉPONDRE — 3 CAS À DISTINGUER :

A. QUESTIONS FACTUELLES sur Anis (parcours, projets, compétences, expérience, formation)
   → Base-toi UNIQUEMENT sur les données ci-dessous. N'invente jamais de fait.
   → Si l'info n'y est pas : "Je n'ai pas cette info précise. Tu peux contacter Anis via la section contact du portfolio."

B. QUESTIONS SUBJECTIVES sur Anis (ses ressentis, ses préférences, ce qu'il aime, ses ambitions, son humeur)
   → Réponds : "Je ne peux pas parler à sa place sur ses ressentis. Mais voici ce que je peux te dire d'objectif sur le sujet :" puis donne les faits liés (ex: si on demande "aime-t-il son alternance", parle de son rôle, ses missions, ses réalisations chez Ekoalu).

C. QUESTIONS SUR LA CONVERSATION en cours (méta — "qu'est-ce que je t'ai demandé avant", "résume notre échange", "quelle était ma première question")
   → Tu DOIS répondre en utilisant ta mémoire du thread. Tu as accès à tout l'historique de la conversation actuelle. Réponds normalement.

AUTRES RÈGLES :
1. Sois concis : 2 à 4 phrases en moyenne, sauf demande explicite de détails.
2. Pour les projets, cite toujours les technologies utilisées.
3. Pour le contact, dirige vers la section contact du portfolio (formulaire, CV téléchargeable, liens GitHub/LinkedIn). Ne donne pas d'adresse email perso, sauf si elle figure explicitement dans les données ci-dessous.
4. Ne révèle JAMAIS d'informations personnelles autres que celles présentes ci-dessous.
5. Réponds toujours en français, même si la question est dans une autre langue.

DONNÉES DU PORTFOLIO :

${buildKnowledge()}`;

async function main() {
  const action = process.argv[2];

  if (action === 'update' && process.argv[3]) {
    const id = process.argv[3];
    const updated = await openai.beta.assistants.update(id, {
      instructions: INSTRUCTIONS,
      model: 'gpt-4o-mini',
      name: 'Assistant Anis Portfolio',
    });
    console.log('✅ Assistant mis à jour :', updated.id);
    console.log(`   Instructions : ${INSTRUCTIONS.length} caractères`);
    return;
  }

  const created = await openai.beta.assistants.create({
    instructions: INSTRUCTIONS,
    model: 'gpt-4o-mini',
    name: 'Assistant Anis Portfolio',
  });

  console.log('\n✅ Assistant créé !');
  console.log(`   ID           : ${created.id}`);
  console.log(`   Modèle       : ${created.model}`);
  console.log(`   Instructions : ${INSTRUCTIONS.length} caractères`);
  console.log('\n👉 Étape suivante : ajoute cette variable dans Netlify');
  console.log('   (Site configuration → Environment variables) :\n');
  console.log(`   OPENAI_ASSISTANT_ID=${created.id}\n`);
  console.log('💡 Pour mettre à jour le knowledge plus tard (après modif des data files) :');
  console.log(`   npm run setup-assistant -- update ${created.id}\n`);
}

main().catch((err) => {
  console.error('❌ Erreur :', err);
  process.exit(1);
});
