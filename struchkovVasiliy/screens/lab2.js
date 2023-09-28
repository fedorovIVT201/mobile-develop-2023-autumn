import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { StyleSheet } from 'react-native';
import axios from "axios";
import Button from "../components/button";

const Lab2 = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response?.data?.fact);
    } catch (error) {
      console.error("Ошибка при получении факта:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Text style={styles.factText}>{fact}</Text>
      )}
      <Button
        loading={loading}
        onPress={getFact}
        title="Обновить"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  factText: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default Lab2;