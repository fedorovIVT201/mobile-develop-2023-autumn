import { View, Text } from "react-native";
import { useMemo, useState} from "react";
import Button from "../components/Button";

const MemoCounter = () => {
    const [countMemo, setMemo] = useState(0);
    const calculateToMillion = () => {
        let result = 0;
        for (let i = 0; i <= 50000000; i++) {
            result += 1;
        }
        return result;
    };
    const resultMemo = useMemo(() => calculateToMillion(), []);
    let calculated = resultMemo + countMemo;
    return(
        <View>
            <Text>
                UseMemo{"\n"}
                Результат: {calculated}
            </Text>
            <Button title={"+"} color={'green'} onPress={() => setMemo(countMemo + 1)}/>
            <Button title={"-"} color={'red'} onPress={() => setMemo(countMemo - 1)}/>
        </View>
    );
};

const NoMemoCounter = () => {
    const [countNoMemo, setNoMemo] = useState(0);
    const calculateToMillion = () => {
        let result = 0;
        for (let i = 0; i <= 50000000; i++) {
            result += 1;
        }
        return result;
    };
    const resultNoMemo = calculateToMillion();
    let calculated = resultNoMemo + countNoMemo;
    return(
        <View>
            <Text>
                Without UseMemo{"\n"}
                Результат: {calculated}
            </Text>
            <Button title={"+"} color={'green'} onPress={() => setNoMemo(countNoMemo + 1)}/>
            <Button title={"-"} color={'red'} onPress={() => setNoMemo(countNoMemo - 1)}/>
        </View>
    );
};

const Lab3 = () => {
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
            <MemoCounter />
            <NoMemoCounter />
        </View>
    );
};

export default Lab3;