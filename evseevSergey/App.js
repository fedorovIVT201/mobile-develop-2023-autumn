import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from './screens/Lab1.js';
const Tab = createBottomTabNavigator();

  export default function App(){
  return (
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab111" component={Lab1} />
      </Tab.Navigator>
   </NavigationContainer>
  );
};