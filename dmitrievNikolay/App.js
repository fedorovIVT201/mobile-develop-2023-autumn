import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="lab1" component={Lab1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
