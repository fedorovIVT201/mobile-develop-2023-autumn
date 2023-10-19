import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Text, View} from "react-native";

const Form = ({addHandler}) => {
    const [text, setText] = useState('');
    const onChange = (textTaken) =>{
        setText(textTaken);
    }
    return(
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу" />
            <Button color ="green" title ="Добавить задачу" onPress={()=>addHandler(text)}/>
        </View>
    )
} 
export default Form; 

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginVertical: 30,
        marginHorizontal: "20%",
        width: "60%",
    }
})