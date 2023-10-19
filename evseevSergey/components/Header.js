import React from "react";
import { StyleSheet, View, Text} from "react-native";

const Header = () => {
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
} 
export default Header; 

const styles = StyleSheet.create({
    main: {
      paddingTop: 25,
      height: 80,
      backgroundColor: "silver"  
    },
    text:{
        fontSize: 18,
        color: "black",
        textAlign: "center",
    }
})