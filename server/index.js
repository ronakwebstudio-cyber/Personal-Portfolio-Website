require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contacts');
const projectRoutes = require('./routes/projects');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    // still start server to allow non-DB fallback routes
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB)`));
  });
