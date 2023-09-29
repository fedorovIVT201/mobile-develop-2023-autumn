import { Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";

function useNow(refreshFrequency) {
    const [now, setNow] = useState(new Date);
    useEffect(() => {
        const interval = setInterval(
            () => setNow(new Date()),
            refreshFrequency,
        );
        return () => clearInterval(interval);
    });
    return now;
}

const Lab2 = () => {
    const dateState = useNow();
    return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            gap: 10,
          }}
        >
          <Text>{dateState}</Text>
          <Button
            onPress={() => {
                useNow();
            }}
            title={"Button"}
          />
        </View>
    );
};

export default Lab2;