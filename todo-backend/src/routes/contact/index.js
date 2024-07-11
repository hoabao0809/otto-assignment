const express = require('express');
const router = express.Router();

const contactController = require('../../controllers/contact.controller.js');
const asyncHandler = require('../../helpers/asyncHandler.js');

// GET /contacts - Search contacts
router.get('', asyncHandler(contactController.searchContacts));

module.exports = router;