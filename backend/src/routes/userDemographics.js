const express = require('express');
const router = express.Router();
const UserDemographics = require('../models/UserDemographics');

// Create user demographics
router.post('/user-demographics', (req, res) => {
    const { user_id, date_of_birth, gender, religion, address } = req.body;
    UserDemographics.create({ user_id, date_of_birth, gender, religion, address }, (err, demographics) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(demographics);
    });
});

// Get user demographics by user ID
router.get('/user-demographics/:user_id', (req, res) => {
    const { user_id } = req.params;
    UserDemographics.findByUserId(user_id, (err, demographics) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!demographics) {
            return res.status(404).json({ error: 'User demographics not found' });
        }
        res.json(demographics);
    });
});

// Update user demographics by user ID
router.put('/user-demographics/:user_id', (req, res) => {
    const { user_id } = req.params;
    const { date_of_birth, gender, religion, address } = req.body;
    UserDemographics.updateByUserId(user_id, { date_of_birth, gender, religion, address }, (err, demographics) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(demographics);
    });
});

// Delete user demographics by user ID
router.delete('/user-demographics/:user_id', (req, res) => {
    const { user_id } = req.params;
    UserDemographics.deleteByUserId(user_id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(204).send();
    });
});

module.exports = router;