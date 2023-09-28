import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
    </Tab.Navigator>
  );
};

export default Navigation;
