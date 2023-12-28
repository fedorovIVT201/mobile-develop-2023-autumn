const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Mock user data (replace this with your actual user data and authentication logic)
const users = [
  { id: '1', username: 'user1', email: 'user1@example.com', password: 'password1' },
  { id: '2', username: 'user2', email: 'user2@example.com', password: 'password2' },
];

// Function to find a user by username and password
const findUser = (username, password) => {
  return users.find((user) => user.username === username && user.password === password);
};

// Define the GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(input: LoginInput!): AuthPayload
  }
`;

// Define resolvers for the schema
const resolvers = {
  Query: {
    me: (_, __, { currentUser }) => currentUser,
  },
  Mutation: {
    login: (_, { input }) => {
      const { username, password } = input;
      const user = findUser(username, password);

      if (user) {
        // In a real-world scenario, you would generate a secure token
        const token = 'your_generated_token';

        return { token, user };
      } else {
        throw new Error('Invalid username or password');
      }
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // In a real-world scenario, you would implement authentication logic here
    // For simplicity, we'll use a mock currentUser based on a fake token
    const fakeToken = req.headers.authorization || '';
    const fakeUserId = fakeToken === 'your_generated_token' ? '1' : null;
    const currentUser = fakeUserId ? users.find((user) => user.id === fakeUserId) : null;

    return { currentUser };
  },
});

// Create an Express app
const app = express();

// Start the Apollo Server and apply the middleware to Express
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Set the port for the server
  const PORT = 4000;

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/graphql`);
  });
}

startServer();
