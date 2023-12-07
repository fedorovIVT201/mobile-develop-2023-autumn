import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Text,
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import MemoButton from "../components/buttons/MemoButton";
import axios from "axios";

const Lab3 = () => {
  const [data, setData] = useState([]);
  const [dataMemo, setDataMemo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMemo, setLoadingMemo] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerMemo, setTimerMemo] = useState(0);
  const refresh = async () => {
    const start = Date.now();
    setLoading(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoading(false));
    setData(res.data.entries);
    setTimer(Date.now() - start);
  };
  const refreshWithMemo = useCallback(async () => {
    const start = Date.now();
    setLoadingMemo(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoadingMemo(false));
    setDataMemo(res.data.entries);
    setTimerMemo(Date.now() - start);
  }, []);

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{ flex: 1, gap: 10 }}>
      <MemoButton
        text={"Обновить"}
        onPress={() => {
          refresh();
          refreshWithMemo();
        }}
      />
      <Text style={{ fontSize: 20 }}>
        Время загрузки без useMemo: {timer} ms
      </Text>
      <Text style={{ fontSize: 20 }}>
        Время загрузки с useMemo: {timerMemo} ms
      </Text>

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
      {loadingMemo ? (
        <ActivityIndicator />
      ) : (
        dataMemo.map((item, index) => {
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

export default Lab3;
