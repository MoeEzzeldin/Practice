const Database = require('../config/db');
const News = require('../models/news');

class NewsDAO {
  constructor() {
    this.db = Database;
  }

  async getAllNews() {
    const pool = await this.db.connect();
    const result = await pool.request().query('SELECT * FROM News');
    return result.recordset.map(row => new News(row.id, row.title, row.content, row.category, row.publishedAt));
  }
}

module.exports = new NewsDAO();
