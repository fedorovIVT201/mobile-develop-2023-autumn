import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Lab1 from "./screens/lab1.js";
import Lab2 from "./screens/lab2.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./imgs/lab1icon.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./imgs/lab2icon.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});
