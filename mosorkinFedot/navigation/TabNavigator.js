import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../imgs/lab1icon.png")}
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
                source={require("../imgs/lab2icon.png")}
                style={styles.img}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../imgs/lab3icon.png")}
                style={styles.img}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});

export default TabNavigator;
