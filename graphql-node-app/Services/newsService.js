const NewsDAO = require('../dao/NewsDAO');

class NewsService {
  constructor(newsDAO) {
    this.newsDAO = newsDAO;
  }

  async getAllNews() {
    return await this.newsDAO.getAllNews();
  }
}

module.exports = new NewsService(NewsDAO);
