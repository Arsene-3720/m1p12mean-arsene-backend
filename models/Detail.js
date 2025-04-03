const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
  nom_detail: { type: String, required: true },
  description: { type: String, required: true },
  specialite: { type: mongoose.Schema.Types.ObjectId, ref: 'SpecialiteMecanicien' },
  duree: { type: String, required: false }
});

module.exports = mongoose.model('Detail', DetailSchema);
