const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    date_naissance: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    numero_telephone: { type: String, required: true },
    password: { type: String, required: true }, // À crypter pour la sécurité
    image: { type: String }, // Stocke le chemin ou l'URL de l'image
    date_inscription: { type: Date, default: Date.now },
    mecanicien: { type: mongoose.Schema.Types.ObjectId, ref: 'Mecanicien', default: null }, // Référence au mécanicien
});

module.exports = mongoose.model('Client', ClientSchema);
