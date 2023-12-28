import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab5 from "../screens/Lab5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from 'react-redux';
import store from '../store';
const Tab = createBottomTabNavigator();

const LabsNav = () => {
  return (
    <Provider store={store}>
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab5" component={Lab5} />
    </Tab.Navigator>
    </Provider>
  );
};

export default LabsNav;