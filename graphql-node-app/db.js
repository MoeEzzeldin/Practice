require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Set to true if using Azure MSSQL
    trustServerCertificate: true
  }
};

class Database {
  constructor() {
    this.pool = null;
  }

  async connect() {
    if (!this.pool) {
      try {
        this.pool = await sql.connect(config);
        console.log('Connected to MSSQL');
      } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
      }
    }
    return this.pool;
  }
}

module.exports = new Database();
