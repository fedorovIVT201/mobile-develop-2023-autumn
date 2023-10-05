import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Lab2 = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../icons/calendar.png")}
        style={styles.image}
      />
      <Text>
        {' '}
        {dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </Text>
      <View style={styles.space}></View>
      <Image
        source={require("../icons/clock.png")}
        style={styles.image}
      />
      <Text>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    height: 30,
    width: 30,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Lab2;