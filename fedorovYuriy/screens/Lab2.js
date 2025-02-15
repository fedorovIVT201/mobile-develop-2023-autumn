import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Lab2 = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFunc = () => {
    setLoading(true);
    axios
      .get("https://dog-api.kinduff.com/api/facts")
      .then((data) => {
        setFact(data?.data?.facts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getFunc();
  }, []);
  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ textAlign: "center" }}>{fact}</Text>
      <Button
        loading={loading}
        title={"Обновить"}
        onPress={() => {
          getFunc();
        }}
      />
    </View>
  );
};

export default Lab2;