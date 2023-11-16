import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./screens/Lab1.js";
import Lab2 from "./screens/Lab2.js";
import Lab3 from "./screens/Lab3.js";
import Lab3Entries from "./screens/Lab3Entries.js";

const Tab = createBottomTabNavigator();

export default function App() {
export default function App() {
  return (
    <NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
        <Tab.Screen name="Lab3Entries" component={Lab3Entries} />
      </Tab.Navigator>
    </NavigationContainer>
    </NavigationContainer>
  );
}
