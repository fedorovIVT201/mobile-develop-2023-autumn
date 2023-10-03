import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import WebView from "react-native-webview";

const Lab3Entries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const refresh = () => {
    setLoading(true);
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => {
        setData(res.data.entries);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const refreshWithMemo = useCallback(() => {
    refresh();
  }, []);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1, gap: 10 }}>
      <Button
        title={"Refresh"}
        onPress={() => {
          refresh();
        }}
      />
      <Button
        title={"Refresh with memo"}
        onPress={() => {
          refreshWithMemo();
        }}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        data.map((item, index) => {
          return (
            <Text style={{ color: "black" }} key={index}>
              {item.Description}
            </Text>
          );
        })
      )}
    </SafeAreaView>
  );
};
export default Lab3Entries;
