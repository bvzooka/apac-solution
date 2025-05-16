exports.getAllArtifacts = async (req, res) => {
  try {
    const artifacts = await Artifact.find(); // Jika pakai database
    // atau: const artifacts = require('../data/artifacts.json'); // Jika pakai file JSON
    res.json(artifacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};