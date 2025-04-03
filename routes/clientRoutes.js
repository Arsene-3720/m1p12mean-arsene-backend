const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const InformationsClient = require('../models/InformationsClient');
const Vehicule = require('../models/Vehicule');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

// Route d'inscription
router.post('/inscription', async (req, res) => {
    try {
        // Extraire les données de la requête
        const { clientData, informationsData, vehiculesData } = req.body;

        // Enregistrement du client
        const hashedPassword = bcrypt.hashSync(clientData.password, bcrypt.genSaltSync(10));
        const client = new Client({
            ...clientData,
            password: hashedPassword, // Crypter le mot de passe
        });
        await client.save();

        // Enregistrement des informations supplémentaires
        const informations = new InformationsClient({
            ...informationsData,
            client: client._id,
        });
        await informations.save();

        // Enregistrement des véhicules
        for (const vehiculeData of vehiculesData) {
            const vehicule = new Vehicule({
                ...vehiculeData,
                client: client._id, // Lier le véhicule au client
            });
            await vehicule.save();
        }

        // Réponse de succès
        res.status(201).json({
            message: 'Inscription réussie',
            client,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'inscription', error });
    }
});

// Route pour la connexion
router.post('/connexion', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Rechercher le client par email
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: "Aucun compte trouvé avec cet email." });
        }

        // Vérifier le mot de passe
        const isPasswordValid = bcrypt.compareSync(password, client.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Mot de passe incorrect. Veuillez réessayer." });
        }

        // Générer un token d'authentification
        const token = jwt.sign(
            { clientId: client._id, email: client.email },
            'your_secret_key', // Clé secrète pour JWT
            { expiresIn: '1h' } // Expire en 1 heure
        );

        // Réponse de succès avec le token
        res.status(200).json({
            message: "Connexion réussie !",
            token,
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion.", error });
    }
});

router.post('/deconnexion', (req, res) => {
    try {
        // Idéalement, ajouter ici une logique pour invalider le token (si besoin)
        res.status(200).json({ message: "Déconnexion réussie." });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la déconnexion.", error });
    }
});

module.exports = router;
