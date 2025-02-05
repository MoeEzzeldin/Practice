const NewsService = require('../services/newsService');

class NewsController {
  constructor(newsService) {
    this.newsService = newsService;
  }

  async getAllNews(req, res) {
    try {
      const news = await this.newsService.getAllNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new NewsController(NewsService);
