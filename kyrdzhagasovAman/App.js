import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";
import Lab3Part1 from "./screens/Lab3Part1";
import Lab3Part2 from "./screens/Lab3Part2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Lab3Stack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen"
      }}
    >
      <Stack.Screen
        name="lab3Home"
        component={Lab3}
        options={{ title: "Лабораторная работа №3" }}
      />
      <Stack.Screen
        name="lab3.1"
        component={Lab3Part1}
        options={{ title: "c useMemo" }}
      />
      <Stack.Screen
        name="lab3.2"
        component={Lab3Part2}
        options={{ title: "без useMemo" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "lab3Home";

    switch (routeName) {
      case "lab3Home":
        return "Лабораторная работа №3";
      case "lab3.1":
        return "c useMemo";
      case "lab3.2":
        return "без useMemo";
    }
  }

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
          component={Lab3Stack}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            tabBarLabel: "Лаб 3",
            tabBarActiveTintColor: "green",
            headerShown: false,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
