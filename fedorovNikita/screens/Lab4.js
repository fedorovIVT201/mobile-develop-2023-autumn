// Install necessary packages
// npm install @react-native-community/async-storage apollo-boost graphql react-apollo react-apollo-hooks

// Import required modules
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import AsyncStorage from '@react-native-community/async-storage';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

// Define your GraphQL endpoint
const GRAPHQL_ENDPOINT = 'https://your-graphql-endpoint.com/graphql';

// Create an HTTP link
const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

// Create an error link to handle errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// Create an auth link to add authentication headers
const authLink = setContext(async (_, { headers }) => {
  // Get the authentication token from AsyncStorage or any other storage
  const token = await AsyncStorage.getItem('authToken');

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Combine all the links
const link = ApolloLink.from([errorLink, authLink, httpLink]);

// Create the Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Wrap your app with the ApolloProvider and ApolloHooksProvider
const Lab4 = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      {/* Your main app component */}
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default Lab4;
