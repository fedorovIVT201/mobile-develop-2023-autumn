import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Lab2 = () => {
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}></View>;
    <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={"Кнопка"}
      ></Button>
}