const Database = require('../db/db');

class NewsService {
  constructor() {
    this.db = Database;
  }

  async getNews({ location_id, category_id }) {
    const pool = await this.db.connect();
    let query = `
      SELECT n.news_id, n.source, n.time_published, n.author, n.title, 
             n.description, n.url, n.url_image, n.content
      FROM news n
      LEFT JOIN news_category nc ON n.news_id = nc.news_id
      WHERE 1=1
    `;

    if (location_id) {
      query += ` AND n.location_id = ${location_id}`;
    }

    if (category_id) {
      query += ` AND nc.category_id = ${category_id}`;
    }

    // console.log("Executing SQL Query:", query);  // Debug output
    const result = await pool.request().query(query);
    return result.recordset;
}
}

module.exports = new NewsService();
