const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  role: { type: String, enum: ['technique', 'clients', 'admin'], default: 'clients' },
  date_creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Manager', managerSchema);
