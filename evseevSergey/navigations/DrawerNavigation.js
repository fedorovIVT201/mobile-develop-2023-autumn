import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab3Entries from "../screens/Lab3Entries";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ColorSpace } from "react-native-reanimated";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Lab1"
        component={Lab1}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "green" },
        }}
      />
      <Drawer.Screen
        name="Lab2"
        component={Lab2}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Lab3"
        component={Lab3}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Lab3Entries"
        component={Lab3Entries}
        options={{ headerTitleAlign: "center" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
