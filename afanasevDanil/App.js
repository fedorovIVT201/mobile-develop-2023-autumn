import { Button} from 'react-native';
import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";

const Tab = createBottomTabNavigator();
export default function App () {

  return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First lab" component={Lab1} />
        <Tab.Screen name="Second lab" component={Lab2} />
        <Tab.Screen name="Third lab" component={Third} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

function Third(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
      <Button title="HELLO" onClick={() => setCount(count + 1)}/>
  );
}
