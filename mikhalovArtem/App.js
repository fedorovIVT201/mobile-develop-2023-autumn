import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';


const Screen1 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen 3</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={Screen1} />
        <Tab.Screen name="Screen 2" component={Screen2} />
        <Tab.Screen name="Screen 3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;