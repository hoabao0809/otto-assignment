const express = require('express');

const router = express.Router();

// Todos APIs
router.use('/api/v1/todos', require('./todo/index.js'));

// Contact APIs
router.use('/api/v1/contacts', require('./contact/index.js'));

module.exports = router;