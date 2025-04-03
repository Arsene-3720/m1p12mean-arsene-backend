const mongoose = require('mongoose');

const VehiculeSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }, // Relation avec Client
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    annee_fabrication: { type: Number, required: true },
    numero_immatriculation: { type: String, required: true },
});

module.exports = mongoose.model('Vehicule', VehiculeSchema);
