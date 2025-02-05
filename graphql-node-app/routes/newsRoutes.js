const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/newsController');

router.get('/news', (req, res) => NewsController.getAllNews(req, res));

module.exports = router;
