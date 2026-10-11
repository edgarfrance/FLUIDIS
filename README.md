# Refonte Web et Accessibilité — Landing Page PME et Commerces

Landing page à fort taux de conversion dédiée à la refonte de sites web et landing pages pour commerces, restaurants et PME (accessibilité numérique WCAG / RGAA, Directive Européenne 2025, design sobre et épuré).

## 🚀 Correction du déploiement Vercel

L'erreur initiale sur Vercel était causée par un conflit de version entre le package `esbuild` dans `devDependencies` et `Vite 8`.

La correction a été appliquée :
1. ✅ **`package.json`** : suppression de la dépendance conflictuelle `esbuild` (gérée automatiquement par Vite).
2. ✅ **`.npmrc`** : ajout de `legacy-peer-deps=true` pour sécuriser l'installation sur tous les serveurs de build.
3. ✅ **`vercel.json`** : configuration de l'installation et du routage SPA.

### Pour appliquer sur GitHub et Vercel :

Exécutez simplement ces commandes dans votre terminal :

```bash
git add .
git commit -m "feat: landing page adjustments, hero simplification, dynamic a11y quiz and Vercel fix"
git push origin main
```

---

### Commandes utiles en local

- `npm install` : installer les dépendances
- `npm run dev` : lancer le serveur local sur `localhost:3000`
- `npm run build` : générer le bundle de production dans `/dist`
