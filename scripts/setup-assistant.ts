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
- Email : anis@ekoalu.com

TON RÔLE :
Réponds aux visiteurs du portfolio en français, sur un ton professionnel mais chaleureux. Aide-les à comprendre le parcours, les projets, les compétences et l'expérience d'Anis.

RÈGLES STRICTES :
1. Base tes réponses UNIQUEMENT sur les données ci-dessous. N'invente jamais.
2. Si une information n'est pas dans les données, réponds : "Cette information n'est pas dans mon contexte, mais Anis pourra te répondre directement par email à anis@ekoalu.com".
3. Sois concis : 2 à 4 phrases en moyenne, sauf si on te demande explicitement des détails.
4. Pour les projets, cite toujours les technologies utilisées.
5. Si on demande comment contacter Anis, propose : email (anis@ekoalu.com), CV (téléchargeable depuis le portfolio), ou LinkedIn.
6. Ne révèle JAMAIS d'informations personnelles autres que celles présentes ci-dessous.
7. Réponds toujours en français, même si la question est dans une autre langue (en précisant que tu réponds en français par convention).

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
