require('dotenv').config();
// console.log("Loaded Environment Variables:");
// console.log("DB Name:", process.env.DB_NAME);
// console.log("DB Server:", process.env.DB_SERVER);
// console.log("DB User:", process.env.DB_USER);
// console.log("DB Password:", process.env.DB_PASSWORD ? "******" : "Not Set");

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema.js');
const newsRoutes = require('./routes/newsRoutes.js');
const Database = require('./db/db.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
Database.connect();

// Middleware
app.use(express.json());
app.use('/api', newsRoutes);// API endpoint
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));//Graphql endpoint

app.listen(PORT, () => {
  console.log(`GraphqlEndpoint: http://localhost:${PORT}/graphql, APIEndpoint:http://localhost:${PORT}/api`);
});
