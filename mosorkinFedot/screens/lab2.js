import { StyleSheet, ScrollView, View } from "react-native";
import { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import axios from "axios";

const Lab2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Silverthg/myjson/tasks")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  }, []);

  const toggleTask = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.taskList}>
        {data
          .slice()
          .sort((a, b) => a.checked - b.checked)
          .map((item) => (
            <View
              key={item.id}
              style={[styles.item, item.checked && styles.completedTask]}
            >
              <CheckBox
                title={item.title}
                checked={item.checked}
                onPress={() => toggleTask(item.id)}
                containerStyle={{
                  backgroundColor: "transparent",
                  borderWidth: 0,
                }}
                textStyle={{ color: item.checked ? "#ccc" : "#fff" }}
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202a25",
  },
  taskList: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#5F4BB6",
    borderRadius: 15,
  },
  completedTask: {
    backgroundColor: "#86A5D9",
  },
});

export default Lab2;
