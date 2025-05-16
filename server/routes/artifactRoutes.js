const express = require('express');
const router = express.Router();
const { 
  getArtifactByQR,
  getAllArtifacts // Fungsi baru
} = require('../controllers/artifactController');

router.get('/qr/:code', getArtifactByQR);
router.get('/', getAllArtifacts); // Endpoint untuk katalog

module.exports = router;