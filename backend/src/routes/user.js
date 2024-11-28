const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

// Create a new user
router.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    User.create({ name, email, password }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(user);
    });
});

// Get user by email
router.get('/users/email/:email', (req, res) => {
    const { email } = req.params;
    User.findByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    });
});

// Get user by ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    });
});

module.exports = router;