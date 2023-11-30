import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput,} from 'react-native';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import ReactDOM from "react-dom";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";

const Tab = createBottomTabNavigator();
const colors = {
  Red: '#FF0000',
  Blue: '#0000FF',
  Orange: '#FFA500',
}
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

function Second(){
 const [color, setColor] = useState('gold');
 const [text, onChangeText] = useState('gold');
 useEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);
function changecolor(){
  setColor(text)
}
  return (
  <View style={styles.container}>
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={changecolor}
        title='Press Me! '>
      </Button>
      </View>
  )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
