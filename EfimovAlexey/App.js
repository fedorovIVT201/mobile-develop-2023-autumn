import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={[styles.container]}>
      <Text style={{fontSize:50, fontFamily: 'Verdana'}}>{count}</Text>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(count - 5)}>
              <Text style={{fontSize:25, fontFamily: 'Verdana'}}>-5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(count + 5)}>
              <Text style={{fontSize:25, fontFamily: 'Verdana'}}>+5</Text>
          </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  buttonGray: {
    margin: 20,
    height:50, 
    borderRadius:10,
    width:100,
    alignItems:'center',
    backgroundColor:'gray',
    justifyContent:'center',
    backgroundColor: 'orange'
  },
});

