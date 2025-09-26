const express = require('express');
const router = express.Router();
const Contact = require('../models/ContactModel');

router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = new Contact({ name, email, subject, message });
        await contact.save();

        res.status(200).json({ success: true, message: 'Message received!' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
