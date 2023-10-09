import React, {useState} from "react";
import { StyleSheet, View, FlatList, Text} from "react-native";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Form from "../components/Form";

const Lab2 = () =>{
    const [listOfItems, setlistOfItems] = useState([
        {text: "Купить молоко", key: "1"},
        {text: "Помыть машину", key: "2"},
        {text: "Почистить картошку", key: "3"},
        {text: "Сходить в магазин", key: "4"},
        
    ])

    const addHandler = (text) => {
        setlistOfItems((list) => {
            return [
                {text: text, key: Math.random().toString(36).substring(7)},
                ...list
            ]
        })
    }
    
    const deleteHandler = (key) => {
        setlistOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key )
        })
    }

    return (
        <View>
            <Header/>
            <Form addHandler={addHandler} />
            <View>
                <FlatList data={listOfItems} renderItem={({item})=>(
                    <ListItem el = {item} deleteHandler={deleteHandler}/>
                )} />
            </View>
        </View>
    )
}
export default Lab2;

const styles = StyleSheet.create({


})