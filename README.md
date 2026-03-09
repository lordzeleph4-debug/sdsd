# SentiNet - Application de Recherche

Application web complète avec authentification par code secret et intégration de l'API SentiNet via backend Express.

## 📦 Structure du projet

```
sentinet-app/
├── server.js                    # Serveur Express (frontend + API)
├── package.json                 # Dépendances Node.js
├── public/
│   └── index.html              # Interface web
├── .gitignore
└── README.md
```

## 🚀 Installation locale

### 1. Cloner et installer
```bash
git clone <votre-repo>
cd sentinet-app
npm install
```

### 2. Configurer les variables d'env
Créer un fichier `.env`:
```
SENTINET_API_KEY=SNT-FC3622765FF5A1941940
PORT=3000
```

### 3. Lancer l'application
```bash
npm start
```

Ouvrir `http://localhost:3000`

## 🌐 Déploiement sur Vercel

### 1. Préparer les fichiers

Créer cette structure:
```
mon-projet/
├── server.js
├── package.json
├── public/
│   └── index.html
├── .gitignore
└── vercel.json (optionnel)
```

### 2. Pousser sur GitHub
```bash
git add .
git commit -m "Initial commit"
git push
```

### 3. Déployer sur Vercel
1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer "New Project"
3. Sélectionner votre repository GitHub
4. Cliquer "Deploy"

### 4. Ajouter les variables d'environnement
1. Aller dans "Settings" du projet
2. Cliquer "Environment Variables"
3. Ajouter:
   - **Name:** `SENTINET_API_KEY`
   - **Value:** `SNT-FC3622765FF5A1941940`
4. Cliquer "Save"
5. Redéployer

## 🔐 Configuration

### Code d'accès
Modifier dans `public/index.html` (ligne ~426):
```javascript
const ACCESS_CODE = 'SECRET123'; // ← Changez par votre code
```

### Clé API SentiNet
Jamais dans le code! Utiliser la variable d'env `SENTINET_API_KEY`:
- **Local:** Dans le fichier `.env`
- **Production (Vercel):** Dans "Environment Variables"

## 📋 Code d'accès par défaut

```
SECRET123
```

## ✅ Test après déploiement

1. Ouvrir l'URL Vercel
2. Entrer: `SECRET123`
3. Entrer un critère (ex: nom = "Dupont")
4. Cliquer "Rechercher"
5. ✅ Les résultats doivent s'afficher

## 🐛 Troubleshooting

### Erreur "Clé API non configurée"
- Vérifier que `SENTINET_API_KEY` est dans les variables d'env Vercel
- Redéployer après l'ajout

### Erreur 500 sur recherche
- Ouvrir les logs Vercel (onglet "Deployments")
- Vérifier la clé API est valide
- Vérifier que votre plan a des requêtes restantes

### Page 404
- Vérifier que `public/index.html` existe
- Vérifier la structure des dossiers
- Revalidate dans Vercel

## 📞 Support

Documentation SentiNet: https://sentinet.x10.mx
