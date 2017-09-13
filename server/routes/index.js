const express = require('express');
const contactRoutes = require('./contact.route');

const router = express.Router();

router.use('/contacts', contactRoutes);

module.exports = router;
