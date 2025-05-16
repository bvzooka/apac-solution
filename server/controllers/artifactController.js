const artifactModel = require('../models/artifactModel');

exports.getAllArtifacts = (req, res) => {
  try {
    const artifacts = artifactModel.getAllArtifacts();
    res.json(artifacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addArtifact = (req, res) => {
  try {
    const newArtifact = req.body;
    const artifact = artifactModel.addArtifact(newArtifact);
    res.status(201).json(artifact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};