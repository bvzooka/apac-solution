const express = require('express');
const router = express.Router();
const museumController = require('../controllers/museumController');

// GET semua museum
router.get('/', museumController.getAllMuseums);

// POST museum baru
router.post('/', museumController.addMuseum);

module.exports = router;