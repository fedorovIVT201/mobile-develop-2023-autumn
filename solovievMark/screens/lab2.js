import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
var cities = [
  "Yakutsk",
  "London",
  "Moscow",
  "Saint Petersburg",
  "New York",
  "Toronto",
  "Ottawa",
  "Berlin",
  "Paris",
  "Tokyo",
];
var i = 0;
const lab2 = () => {
  const [city, setCity] = useState(cities[i]);
  const [forecast, setForecast] = useState({
    temp: "",
    humidity: "",
    wind_speed: "",
  });

  const getForecast = () => {
    fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
      method: "GET",
      headers: {
        "X-Api-Key": "dvS+l6auPoSTfQ8DrRmTcg==sH8BjvmLlQyoBWs5",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setForecast(json))
      .catch((error) => console.error(error));
  };
  const nextCity = () => {
    if (i < cities.length - 1) {
      i++;
      setCity(cities[i]);
    } else {
      i = 0;
      setCity(cities[i]);
    }
  };
  const previousCity = () => {
    if (i > 0) {
      i--;
      setCity(cities[i]);
    } else {
      i = cities.length - 1;
      setCity(cities[i]);
    }
  };
  useEffect(() => {
    getForecast();
  }, [city]);

  return (
    <View style={styles.container}>
      <Text>
        Город: {city}
        <br />
        Температура: {forecast.temp}°C
        <br />
        Влажность: {forecast.humidity}%<br />
        Скорость ветра: {forecast.wind_speed}ms
      </Text>
      <View style={styles.buttonsCon}>
        <TouchableOpacity style={styles.button} onPress={previousCity}>
          <Text style={{ color: "white" }}>Previous city</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextCity}>
          <Text style={{ color: "white" }}>Next city</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsCon: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});
export default lab2;
