const { addArtifact } = require('../controllers/artifactController');

router.post('/', addArtifact); // Handle POST request