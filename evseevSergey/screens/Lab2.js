import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  Image,
  Alert,
} from "react-native";
const Lab2 = () => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewPic = () => {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((resp) => {
        setCat(resp.data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getNewPic();
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: cat.url }}
        style={{ width: 400, height: 400, marginBottom: 15 }}
      />
      <Button
        loading={loading}
        title={"Искать случайную кошку"}
        onPress={() => {
          getNewPic();
        }}
      />
    </View>
  );
};
export default Lab2;
