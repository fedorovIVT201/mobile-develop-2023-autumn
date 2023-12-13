import { Text, View, StyleSheet, Button, ActivityIndicator, SafeAreaView, FlatList } from "react-native";
import { useState, useMemo } from "react";

const Lab3 = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [timeapi, setTimeApi] = useState(0);
    const [timememo, setTimeMemo] = useState(0);
  
    const fetchBooks = async () => {
        let start = Date.now();
        try {
            setLoading(true);
            const response = await fetch("https://fakerapi.it/api/v1/texts?_quantity=1000&_characters=500", {});
            const data = await response.json();
            setBooks(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Finish load");
            setTimeApi(Date.now() - start);
            setLoading(false);
        }
    };

    const booksData = useMemo(() => books, [books]);

    const loadFromMemo = () => {
        let start = Date.now();
        setLoading(true);
        setBooks(booksData);
        setLoading(false);
        setTimeMemo(Date.now() - start);
    };
  
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <Text style={styles.genre}>Genre: {item.genre}</Text>
        </View>
    );
  
    return (
        <View style={styles.container}>
            <Text>Loading time: {timeapi}ms</Text>
            <Button title='Download books' style={styles.button} onPress={fetchBooks}/>
            {/* <Button title='Delete' style={styles.button} onPress={setBooks([])}/> */}
            <Text>Load time from cache: {timememo}ms</Text>
            <Button title='Load from Cache' style={styles.button} onPress={loadFromMemo}/>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={books.slice(0, 10)}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop:20,
        backgroundColor: '#2F3C5F'
    },
    item: {
        marginBottom: 16,
        backgroundColor: '#EFF0F6',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 16,
        marginBottom: 4,
    },
    genre: {
        fontSize: 16,
    },
});

export default Lab3;