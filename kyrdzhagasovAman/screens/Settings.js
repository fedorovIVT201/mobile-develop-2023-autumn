import { View } from "react-native"
import Button from "../components/Button"
import { useNavigation } from "@react-navigation/native";



const Settings = () => {
    const nav = useNavigation();

    return(
        <View style={{ flex: 1, gap: 10, alignItems: "center", margin: 16 }}>
            <Button title={"Выйти"} onPress={() => nav.replace("Login")}/>
        </View>
    )
}

export default Settings