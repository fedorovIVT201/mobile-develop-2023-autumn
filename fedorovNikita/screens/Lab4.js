// Import required modules
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ApolloProvider, useQuery, useMutation, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from '@apollo/client/core';

// GraphQL mutation for user login
const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

// GraphQL query to get user data (replace with your own query)
const USER_QUERY = gql`
  query GetUser {
    user {
      id
      username
    }
  }
`;

// Apollo Client setup
const httpLink = createHttpLink({
  uri: 'your-graphql-endpoint',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// App component
const Lab4 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Mutation to handle user login
  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      // For simplicity, we're not handling token storage or refresh here.
      // In a real app, use a secure storage solution.
      console.log('Login successful. Token:', login.token);
    },
  });

  // Query to get user data
  const { data, loading } = useQuery(USER_QUERY);

  const handleLogin = () => {
    loginMutation({ variables: { username, password } });
  };

  return (
    <ApolloProvider client={client}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        />
        <Button title="Login" onPress={handleLogin} />
        {loading && <Text>Loading...</Text>}
        {data && (
          <View>
            <Text>User ID: {data.user.id}</Text>
            <Text>Username: {data.user.username}</Text>
          </View>
        )}
      </View>
    </ApolloProvider>
  );
};

export default Lab4;
