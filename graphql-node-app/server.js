const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Sample user data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    social: {
      twitter: "@johndoe",
      linkedIn: "john-doe-123"
    },
    orders: [
      { id: "A100", product: "Laptop", amount: 1200 },
      { id: "B200", product: "Smartphone", amount: 800 }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: {
      street: "456 Oak St",
      city: "Los Angeles",
      country: "USA"
    },
    social: {
      twitter: "@janesmith",
      linkedIn: "jane-smith-456"
    },
    orders: [
      { id: "C300", product: "Tablet", amount: 600 },
      { id: "D400", product: "Headphones", amount: 150 }
    ]
  }
];


// GraphQL Schema
const schema = buildSchema(`
  type Address {
    street: String
    city: String
    country: String
  }

  type Social {
    twitter: String
    linkedIn: String
  }

  type Order {
    id: String
    product: String
    amount: Int
  }

  type User {
    id: ID!
    name: String
    email: String
    address: Address
    social: Social
    orders: [Order]
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }
`);


// Resolvers
const root = {
  user: ({ id }) => users.find(user => user.id == id),
  users: () => users
};

// Initialize Express App
const app = express();
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Enable GraphiQL UI for testing
}));

// Start Server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
