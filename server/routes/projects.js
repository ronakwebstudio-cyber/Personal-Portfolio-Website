const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects — return projects from DB if present, otherwise sample list
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }).limit(50);
    if (projects && projects.length) return res.json(projects);

    // fallback sample
    const sample = [
      { title: 'E-commerce Website', description: 'Responsive e-commerce UI built with HTML/CSS', link: '#' },
      { title: 'Weather App', description: 'Weather app using public APIs and JS', link: '#' },
      { title: 'Todo App', description: 'Simple TODO app with local storage', link: '#' }
    ];
    res.json(sample);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/projects to add (admin use)
router.post('/', async (req, res) => {
  try {
    const { title, description, link } = req.body;
    if (!title) return res.status(400).json({ error: 'Missing title' });
    const project = new Project({ title, description, link });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
