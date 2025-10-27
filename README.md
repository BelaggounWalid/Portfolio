# Portfolio Anis BELAGGOUN

Portfolio professionnel moderne avec mode sombre et chatbot intelligent.

## Fonctionnalités

- Design moderne et responsive (mobile & desktop)
- Mode sombre/clair avec persistance
- Navigation fluide entre les sections
- Chatbot intelligent qui répond aux questions sur mon parcours
- Section projets avec liens
- Intégration du CV en téléchargement
- Logos des universités

## Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icônes)

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Cloner ou télécharger le projet

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production dans le dossier `dist`
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run typecheck` - Vérifie les types TypeScript

## Déploiement

Pour déployer le site :

1. Créer la version de production :
```bash
npm run build
```

2. Le dossier `dist` contient tous les fichiers prêts pour le déploiement

3. Vous pouvez déployer sur :
   - Netlify (recommandé)
   - Vercel
   - GitHub Pages
   - Tout hébergeur web statique

### Déploiement sur Netlify

**Option 1 : Déploiement manuel**
1. Créer un compte sur [Netlify](https://www.netlify.com/)
2. Glisser-déposer le dossier `dist` sur Netlify
3. Votre site est en ligne !

**Option 2 : Déploiement continu avec Git (recommandé)**
1. Poussez votre code sur GitHub, GitLab ou Bitbucket
2. Connectez votre repository à Netlify
3. Netlify détectera automatiquement les paramètres de build (défini dans `netlify.toml`)
4. Chaque push sur la branche principale déclenchera automatiquement un nouveau déploiement
5. Votre site est en ligne et se met à jour automatiquement !

## Structure du projet

```
project/
├── public/              # Fichiers statiques (images, CV, logos)
├── src/
│   ├── components/      # Composants React
│   │   └── Chatbot.tsx  # Composant chatbot intelligent
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── dist/                # Version de production (après build)
└── package.json         # Dépendances du projet
```

## Personnalisation

Pour personnaliser le portfolio :

1. Modifier les informations dans `src/App.tsx`
2. Mettre à jour la base de connaissances du chatbot dans `src/components/Chatbot.tsx`
3. Remplacer les images dans le dossier `public/`
4. Mettre à jour le CV dans `public/CV_Anis.pdf`

## Contact

- Email: aniswalidbelaggoun@gmail.com
- Téléphone: 07 44 80 56 01
- LinkedIn: [anisBelaggoun](https://www.linkedin.com/in/anisbelaggoun/)
- GitHub: [BelaggounWalid](https://github.com/BelaggounWalid)
