import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign} from "@expo/vector-icons"
import { Foundation } from '@expo/vector-icons'; 
import { Image, StyleSheet } from "react-native"
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1F2840',
            borderColor: '#1F2840',
          },
          tabBarActiveTintColor: '#327CFF',
          tabBarInactiveTintColor: '#CCCCCC',
          headerShown: false,
        }}>
        <Tab.Screen 
          name="lab1" 
          component={Lab1}
          options={{
            tabBarLabel:() => null,
            tabBarIcon: ({ focused, size }) =>(
              <Image
                source={require('./assets/brush.png')}
                style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF' }}
              />
            ),
          }} 
        />
        <Tab.Screen 
          name="lab2" 
          component={Lab2}
          options={{
            tabBarLabel:() => null,
            tabBarIcon: ({ focused, size }) =>(
              <Image
                source={require('./assets/bitcoin-btc.png')}
                style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF'}}
              />
            )
          }} 
        />
        <Tab.Screen 
          name="lab3" 
          component={Lab3}
          options={{
            tabBarLabel:() => null,
            tabBarIcon: ({ focused, size }) =>(
              <Image
                source={require('./assets/book.png')}
                style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF' }}
              />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
