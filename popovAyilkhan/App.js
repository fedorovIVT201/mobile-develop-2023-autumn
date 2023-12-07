import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign} from "@expo/vector-icons"
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="lab1" 
          component={Lab1}
          options={{
            tabBarIcon: () =>(
              <AntDesign name="bars" size={24} color="black" />
            )
          }} 
        />
        <Tab.Screen 
          name="lab2" 
          component={Lab2}
          options={{
            tabBarIcon: () =>(
              <AntDesign name="barschart" size={24} color="black" />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
