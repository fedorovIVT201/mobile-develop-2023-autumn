import { Text, View, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Lab2 = () => {

  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");

  const getData = () => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        setPrice(response.data.bpi.USD.rate);
        setCode(response.data.bpi.USD.code);
      });
    console.info("Work")
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{price} {code}</Text>
      <Button title='Update' onPress={getData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lab2;