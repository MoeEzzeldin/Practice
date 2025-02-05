const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema.js');
const newsRoutes = require('./routes/newsRoutes.js');
const Database = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
Database.connect();

// Middleware
app.use(express.json());
app.use('/api', newsRoutes);
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
