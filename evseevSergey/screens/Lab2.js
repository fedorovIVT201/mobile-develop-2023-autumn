import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import { Button } from "react-native";

const DATA = [
    {
        id : '0',
        title : 'Object 1',
    }
]

let nextid=0;

const Lab2 = () =>{

    const [text, onChangeText] = React.useState('Just a text');
    const [DATA,setDATA] = useState([]);

    return(
        <SafeAreaView
        style={{
            justifyContent:"center",
            alignContent:"center",
            flex:1,
        }}>
            <TextInput
            style = {styles.input}
            onChangeText={onChangeText}
            value={text}
            />
            <Button
                title="Add activity"
                onPress={()=>{
                    setDATA([...DATA,{id: nextid++,title:text}])
                }}
            />
            <FlatList
                data = {DATA}
                renderItem={itemData=>(
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>{itemData.item.id+' '+itemData.item.title}</Text>
                    <TouchableOpacity onPress={()=>{
                        nextid--;
                        setDATA(
                            DATA.filter(a => a.id !== itemData.item.id)
                          );
                    }}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
                )}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
    },
});
export default Lab2;