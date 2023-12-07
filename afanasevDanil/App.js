import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";

const Tab = createBottomTabNavigator();
export default function App () {

  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First lab" component={Lab1} />
        <Tab.Screen name="Second lab" component={Lab2} />
        <Tab.Screen name="Third lab" component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}
