const sql = require("mssql");

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        encrypt: false, // Set to true if using Azure
        trustServerCertificate: true, // Required for self-signed certs
    },
};
console.log(dbConfig)

// Check for Windows Authentication
if (process.env.DB_AUTH === "integrated") {
    dbConfig.options.trustedConnection = true; // Uses Windows Auth
} else {
    dbConfig.user = process.env.DB_USER;
    dbConfig.password = process.env.DB_PASSWORD;
}

// Function to connect to SQL Server
async function connectDB() {
    try {
        await sql.connect(dbConfig);
        console.log("Connected to SQL Server successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

module.exports = { sql, connectDB };
