const express = require('express');
const app = express();
const artifactRoutes = require('./routes/artifactRoutes'); // Pastikan nama file benar

app.use(express.json());
app.use('/api/artifacts', artifactRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});