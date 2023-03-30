import Reat from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
  <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoeStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
  </View>

  );
};

const styles = StyleSheet.create({
  viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height:200,
        alignItems: 'center'
        //flexDirection:'row'
  },

  textOneStyle: {
        borderWidth: 3,
        borderColor: 'red'
  },

  textTwoeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf:'stretch'
},

textThreeStyle: {
  borderWidth: 3,
  borderColor: 'red'

}

});

export default BoxScreen;