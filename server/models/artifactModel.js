const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
  artifactId: { type: String, unique: true }, // ID unik untuk QR
  name: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, required: true },
  era: { type: String }, // Contoh: "Jurassic", "Colonial"
  imageUrl: { type: String }, // Link gambar dari upload
  location: { type: String } // Lokasi di museum
});

module.exports = mongoose.model('Artifact', artifactSchema);