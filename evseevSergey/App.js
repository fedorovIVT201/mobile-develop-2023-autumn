import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigation from "./navigations/TabNavigation";
import DrawerNavigation from "./navigations/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: "http://192.168.0.4:4000/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View>
          <StatusBar backgroundColor="rgb(217,217,217)" />
        </View>
        <DrawerNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}
