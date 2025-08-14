const express = require('express');
const router = express.Router();
const { getUserPreferences, updateUserPreferences } = require('../controllers/userPreferencesController');
const verifyToken = require('../verifytoken.js');

// User preferences routes (protected with JWT)
router.get('/', verifyToken, getUserPreferences);
router.put('/', verifyToken, updateUserPreferences);

module.exports = router; 