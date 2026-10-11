# Refonte Web & Accessibilité — Landing Page PME & Commerces

Landing page à fort taux de conversion dédiée à la refonte de sites web et landing pages pour commerces, restaurants et PME (accessibilité numérique WCAG / RGAA, Directive Européenne 2025, design chic inspiré de mabonneadresse.com).

## 🚀 Déploiement en 2 minutes sur Vercel via GitHub

Ce projet est **100% prêt pour Vercel**. La configuration est déjà optimisée avec Vite, React et Tailwind CSS.

### Étape 1 : Publier le code sur votre dépôt GitHub

Dans votre terminal local (ou depuis votre interface Git) :

```bash
# 1. Initialiser git si ce n'est pas déjà fait
git init

# 2. Ajouter tous les fichiers et commiter
git add .
git commit -m "Initial commit - Landing page Accessibilité PME"

# 3. Lier votre repo GitHub (remplacez par votre URL)
git branch -M main
git remote add origin https://github.com/VOTRE_PSEUDO/VOTRE_DEPOT.git

# 4. Pousser le code
git push -u origin main
```

### Étape 2 : Connecter à Vercel

1. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **"Add New..."** puis **"Project"**.
3. Sélectionnez votre dépôt GitHub fraîchement créé et cliquez sur **"Import"**.
4. Vercel détecte automatiquement :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquez sur **"Deploy"**. Votre site sera en ligne avec SSL (HTTPS) gratuit et un domaine `.vercel.app` (ou votre propre nom de domaine personnalisé).

---

### Commandes utiles en local

- `npm install` : installer les dépendances
- `npm run dev` : lancer le serveur de développement local
- `npm run build` : générer le bundle de production optimisé dans `/dist`
- `npm run lint` : vérifier les types TypeScript
