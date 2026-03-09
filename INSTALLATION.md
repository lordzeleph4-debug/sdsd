# 📖 GUIDE D'INSTALLATION COMPLET

## Option 1: Installation Locale (Test rapide)

### 1. Préparer les dossiers
```bash
mkdir sentinet-app
cd sentinet-app
```

### 2. Créer la structure
- Créer dossier `public/`
- Mettre `public/index.html` (renommer `public-index.html`)
- Mettre `server.js` à la racine
- Mettre `package.json` à la racine

### 3. Installer et lancer
```bash
npm install
npm start
```

Accéder à: http://localhost:3000

Code d'accès: `SECRET123`

---

## Option 2: Déploiement Vercel (Production)

### Prérequis
- Compte GitHub
- Compte Vercel (gratuit)

### Étapes

#### 1️⃣ Créer le repository GitHub

1. Aller sur GitHub.com
2. Cliquer "New" pour créer un repository
3. Nommer: `sentinet-app`
4. Créer avec README

#### 2️⃣ Ajouter les fichiers

1. Dans le repository, cliquer "Add file" → "Create new file"
2. Créer `server.js` (copier le contenu)
3. Créer `package.json` (copier le contenu)
4. Créer `.gitignore` (copier le contenu)
5. Créer `public/index.html`:
   - Cliquer "Create new file"
   - Taper `public/index.html`
   - Copier le contenu de `public-index.html`

#### 3️⃣ Déployer sur Vercel

1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Sélectionner "Import Git Repository"
4. Selectionner votre repository `sentinet-app`
5. Cliquer "Import"

#### 4️⃣ Configurer les variables

1. Dans la page de déploiement, aller à "Environment Variables"
2. Ajouter une variable:
   - **Name:** `SENTINET_API_KEY`
   - **Value:** `SNT-FC3622765FF5A1941940`
3. Cliquer "Add"
4. Cliquer "Deploy"

#### 5️⃣ Attendre le déploiement

- Vercel compile et déploie automatiquement
- Vous recevez une URL comme: `https://sentinet-app.vercel.app`
- ✅ C'est prêt!

---

## 📝 Noms de fichiers exactes

À respecter pour Vercel:

| Fichier | Chemin |
|---------|--------|
| Server | `server.js` (racine) |
| Package | `package.json` (racine) |
| HTML | `public/index.html` |
| Git | `.gitignore` (racine) |

---

## 🔑 Configuration importante

### Avant de déployer

**Modifier le code d'accès:**

Dans `public/index.html`, ligne ~426:
```javascript
const ACCESS_CODE = 'SECRET123'; // ← CHANGEZ CE CODE
```

Exemple:
```javascript
const ACCESS_CODE = 'VOTRE_CODE_2024'; // Votre code personnel
```

### Après le déploiement (Vercel)

**Ajouter la clé API:**

1. Aller sur le dashboard Vercel
2. Sélectionner votre projet `sentinet-app`
3. Aller dans "Settings"
4. Cliquer "Environment Variables"
5. Ajouter:
   - Name: `SENTINET_API_KEY`
   - Value: `SNT-FC3622765FF5A1941940`
6. Cliquer "Save"
7. Cliquer "Redeploy" sur l'onglet "Deployments"

---

## ✅ Tester

### Local
1. Ouvrir http://localhost:3000
2. Entrer code: `SECRET123`
3. Chercher quelqu'un
4. ✅ Résultats

### Vercel
1. Ouvrir https://votre-project.vercel.app
2. Entrer code: Votre code perso
3. Chercher quelqu'un
4. ✅ Résultats

---

## 🆘 Problèmes courants

**"Clé API manquante"**
→ Ajouter `SENTINET_API_KEY` dans les variables d'env Vercel

**"Page not found (404)"**
→ Vérifier que `public/index.html` existe dans le repo GitHub

**"Cannot find module express"**
→ Lancer `npm install` localement avant de pusher

**Erreur lors de la recherche**
→ Vérifier les logs Vercel: Deployments → Logs

---

## 📞 Liens utiles

- [Documentation SentiNet](https://sentinet.x10.mx)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Help](https://docs.github.com)

