import react, {useState} from "react";
import {View, StyleSheet, Text, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
          <Text>Enter Password:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"            
            autoCorrect={false}
            value={password}
            onChangeText = {newValue => setPassword(newValue)}
          />
          {password.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;