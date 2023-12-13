import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Lab2 = () => {

  const [price, setPrice] = useState("");

  const getData = () => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        let rate = parseFloat(response.data.bpi.USD.rate_float).toFixed(2);
        let formattedRate = new Intl.NumberFormat('en-US').format(rate).toString().replace(/,/g, " ");
        setPrice(formattedRate);
      });
    console.info("Work")
    console.log(typeof price)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>${price}</Text>
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.textButton}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3C5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#EFF0F6", 
    minHeight: 38,
    minWidth: 158,
    borderRadius: 41
  },
  textButton: {
    fontSize: 15,
    fontFamily: "Montserrat",
    textAlign: "center",
    textAlignVertical: 'center',
    color: "#343333",
  },
  text:{
    color: "#F3F4F6",
    fontSize: 35
  }
});

export default Lab2;