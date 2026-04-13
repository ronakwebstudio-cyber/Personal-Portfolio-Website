const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contacts
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
