const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const { connectDB } = require("./db");
require("dotenv").config(); // Only needed in one place

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// GraphQL Endpoint
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true, // GraphiQL UI enabled
    })
);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
});
