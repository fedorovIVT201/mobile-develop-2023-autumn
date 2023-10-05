import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";

export default function Lab2() {
  const [film, setFilm] = useState({
    name: "",
    year: "",
    poster: {
      url: "",
      previewUrl: "",
    },
    description: "",
  });

  const getFilm = () => {
    fetch("https://api.kinopoisk.dev/v1.3/movie/random", {
      headers: {
        "X-API-KEY": "HYJ3FBW-7AN4CJ1-MWDVHE2-7M1DNT8",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setFilm(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.buttonGray} onPress={() => getFilm()}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Verdana",
            textAlign: "center",
            color: "white",
          }}
        >
          Случайный фильм
        </Text>
      </TouchableOpacity>
      <img src={film.poster.url} style={styles.image} />
      <Text style={styles.name}>
        {film.name} <br /> ({film.year})
      </Text>
      <Text style={styles.description}>{film.description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGray: {
    position: "absolute",
    top: 20,
    height: 60,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  image: {
    position: "absolute",
    borderRadius: 6,
    top: 100,
    left: 20,
    width: 180,
    height: 252,
  },
  name: {
    fontSize: 21,
    textAlign: "center",
    position: "absolute",
    width: 150,
    left: 220,
    top: 100,
  },
  description: {
    fontSize: 16,
    position: "absolute",
    top: 365,
    left: 20,
    width: 350,
    textAlign: "center",
  },
});
