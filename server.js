// server.js - Express server pour Vercel

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API endpoint - Recherche SentiNet
app.post('/api/search', async (req, res) => {
    try {
        const {
            prenom,
            nom,
            date_naissance,
            telephone,
            email,
            ville,
            code_postal,
            immat,
            vin,
        } = req.body;

        // Récupérer la clé API depuis les variables d'environnement
        const API_KEY = process.env.SENTINET_API_KEY || 'SNT-FC3622765FF5A1941940';

        if (!API_KEY) {
            console.error('❌ Clé API manquante');
            return res.status(500).json({
                status: 'error',
                message: 'Clé API non configurée'
            });
        }

        // Construire les paramètres de requête
        const params = new URLSearchParams();

        if (prenom) params.append('prenom', prenom);
        if (nom) params.append('nom', nom);
        if (date_naissance) params.append('date_naissance', date_naissance);
        if (telephone) params.append('telephone', telephone);
        if (email) params.append('email', email);
        if (ville) params.append('ville', ville);
        if (code_postal) params.append('code_postal', code_postal);
        if (immat) params.append('immat', immat);
        if (vin) params.append('vin', vin);

        const url = `https://sentinet.x10.mx/tunnel/reacher-api/search?${params.toString()}`;

        console.log('🔍 Appel SentiNet API');
        console.log('URL:', url);
        console.log('API Key:', API_KEY.substring(0, 10) + '...');

        // Faire la requête à l'API SentiNet avec le header X-API-Key
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-Key': API_KEY,
                'Content-Type': 'application/json',
            }
        });

        console.log('✅ Réponse SentiNet - Status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Erreur SentiNet:', response.status, errorText);
            return res.status(response.status).json({
                status: 'error',
                message: `Erreur SentiNet: ${response.status}`,
                details: errorText
            });
        }

        const data = await response.json();

        console.log('✅ Données reçues de SentiNet:', data.results_count, 'résultats');

        // Retourner les résultats
        return res.status(200).json(data);

    } catch (error) {
        console.error('❌ Erreur serveur:', error);
        return res.status(500).json({
            status: 'error',
            message: error.message || 'Erreur lors de la recherche',
            results_count: 0,
            data: []
        });
    }
});

// Servir l'index.html pour toutes les autres routes
app.get('/', (req, res) => {
    res.sendFile(new URL('./public/index.html', import.meta.url).pathname);
});

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
