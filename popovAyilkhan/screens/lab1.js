import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Lab1 = () => {
  
  const [isPressed, setPressed] = useState(false);

  const changeText = () => {
    setPressed(!isPressed)
  };

  const textColor = isPressed ? '#E77C2E' : '#3FDA3C';

  return (
    <View style={styles.container}>
      <Text style={styles.title} >TEXT COLOR</Text>
      <Text style={{color: textColor, marginTop: 160, fontSize: 35, fontFamily: 'Roboto', fontWeight: "700",}}>Hello world!</Text>
      <TouchableOpacity style={styles.button} onPress={changeText}>
        <Text style={styles.textButton}>
          Change color
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3C5F',
    alignItems: 'center',
  },
  title:{
    color: '#F3F4F6',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: "700",
    marginTop: 120
  }, 
  button:{
    width: 205,
    height: 38,
    backgroundColor: '#EFF0F6',
    marginTop: 133,
    borderRadius: 41, 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  textButton:{
    color: '#343333',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: "700",
  }
});

export default Lab1;