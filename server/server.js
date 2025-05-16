const PORT = 3000;
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, '../public')));

// Middleware
app.use(express.json());

// Routes
const museumRoutes = require('./routes/museumRoutes');
app.use('/api/museums', museumRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});