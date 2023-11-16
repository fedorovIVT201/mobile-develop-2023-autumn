import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Registration from "../screens/Registration";
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconColor, iconName;

          return <Ionicons name="clipboard-outline" size={32} color="gray" />;
        },
        tabBarActiveTintColor: "rgb(	173, 216, 230)",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
