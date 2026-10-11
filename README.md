# Refonte Web & Accessibilité — Landing Page PME & Commerces

Landing page à fort taux de conversion dédiée à la refonte de sites web et landing pages pour commerces, restaurants et PME (accessibilité numérique WCAG / RGAA, Directive Européenne 2025, design chic inspiré de mabonneadresse.com).

## 🚀 Correction de l'erreur Vercel (`npm error code ERESOLVE`)

L'erreur sur Vercel était causée par un conflit de version entre le package `esbuild` présent dans `devDependencies` et `Vite 8`.

La correction a été appliquée :
1. ✅ **`package.json`** : suppression de la dépendance conflictuelle `esbuild` (gérée automatiquement par Vite).
2. ✅ **`.npmrc`** : ajout de `legacy-peer-deps=true` pour sécuriser l'installation sur tous les serveurs de build.
3. ✅ **`vercel.json`** : ajout de `"installCommand": "npm install --legacy-peer-deps"`.

### Pour appliquer le correctif sur GitHub et Vercel :

Exécutez simplement ces commandes dans votre terminal :

```bash
git add .
git commit -m "fix: resolve npm dependencies for Vercel deployment"
git push origin main
```

Dès le `push`, Vercel relancera automatiquement le build et affichera **Ready (Success)** en quelques secondes !

---

### Commandes utiles en local

- `npm install` : installer les dépendances (fonctionne sans conflit)
- `npm run dev` : lancer le serveur local sur `localhost:3000`
- `npm run build` : générer le bundle de production dans `/dist`
