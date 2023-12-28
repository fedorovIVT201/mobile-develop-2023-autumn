import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="lab1"
          component={Lab1}
          options={{
            title: "Лабораторная работа №1",
            tabBarLabel: "Лаб 1",
            tabBarActiveTintColor: "green",
          }}
        />
        <Tab.Screen
          name="lab2"
          component={Lab2}
          options={{
            title: "Лабораторная работа №2",
            tabBarLabel: "Лаб 2",
            tabBarActiveTintColor: "green",
          }}
        />
        <Tab.Screen
          name="lab3"
          component={Lab3}
          options={{
            title: "Лабораторная работа №3",
            tabBarLabel: "Лаб 3",
            tabBarActiveTintColor: "green",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}