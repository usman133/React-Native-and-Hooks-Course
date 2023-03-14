import react from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Usman'
    return (
    <View> 
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={{fontSize:20}}>My name is {myName}</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;