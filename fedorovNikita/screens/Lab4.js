// Import required modules
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { ApolloProvider, useQuery, useMutation, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from '@apollo/client/core';

const LOGIN = gql`
  mutation UserLogin($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

const GET_ME = gql`
  query GetMe {
    me {
      id
      username
      email
    }
  }
`;

// Apollo Client setup
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// App component
const Lab4 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error, data }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const response = await login({ variables: { username, password } });
      console.log('Login success:', response.data);
      // Handle successful login (e.g., store the token in AsyncStorage)
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error
    }
  };


//   Mutation to handle user login
//   const [loginMutation, { loading: loginLoading, error: loginError, data: loginData }] = useMutation(LOGIN, {
//     onCompleted: ({ login }) => {
//       console.log('Login successful. Token:', login.token);
//     },
//   });

  // Query to get user data
//   const { loading, error, data  } = useQuery(GET_ME);

//   const handleLogin = () => {
//     loginMutation({ variables: { username, password } });
//   };

//   const { loading, error, data } = useQuery(GET_ME);
//   const [login, { loading: loginLoading, error: loginError, data: loginData }] = useMutation(LOGIN);

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
