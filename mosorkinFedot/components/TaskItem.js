import { View } from 'react-native';
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";

const TaskItem = ({ item, toggleTask }) => (
  <View style={[styles.item, item.checked && styles.completedTask]}>
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
);

const styles = StyleSheet.create({
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

export default TaskItem;
