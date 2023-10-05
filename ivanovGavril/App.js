import {NavigationContainer} from "@react-navigation/native";
import CreateBottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";

export default function App() {
    const Tab = CreateBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"lab1"} component={Lab1}></Tab.Screen>
                <Tab.Screen name={"lab2"} component={Lab2}></Tab.Screen>
                <Tab.Screen name={"lab3"} component={Lab3}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
