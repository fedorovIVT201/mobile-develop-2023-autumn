import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/mainNavigation";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import client from "./apollo/client";


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
    </ApolloProvider>
  );
}