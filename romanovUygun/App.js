import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count: number,setCount]= useState(0)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, marginBottom: 15,}}>{count}</Text>
      <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(count + 5)}>
          <Text>Button +5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(count + 10)}>
          <Text>Button +10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(count - 3)}>
          <Text>Button -3 </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  buttonGray: {
    marginBottom: 10,
    height:50, 
    borderRadius:10,
    width:100,
    alignItems:'center',
    backgroundColor:'gray',
    justifyContent:'center'
  },
});
