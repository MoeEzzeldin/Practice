const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController.js');

router.get('/news', (req, res) => newsController.getAllNews(req, res));

module.exports = router;
