import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
