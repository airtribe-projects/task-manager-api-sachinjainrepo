const express = require('express');
const router = express.Router();
const { getNews } = require('../controllers/newsController');

// News routes
router.get('/', getNews);

module.exports = router; 