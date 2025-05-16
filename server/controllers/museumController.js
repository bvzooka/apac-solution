const museumModel = require('../models/museumModel');

// Get all museums
exports.getAllMuseums = (req, res) => {
    try {
        const museums = museumModel.getAllMuseums();
        res.json(museums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add new museum
exports.addMuseum = (req, res) => {
    try {
        const newMuseum = req.body;
        const museum = museumModel.addMuseum(newMuseum);
        res.status(201).json(museum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};