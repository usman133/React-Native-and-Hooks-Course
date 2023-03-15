import Reat from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
  <View styles={styles.viewStyle}>
    <Text styles={styles.textStyle}>Child #1</Text>
    <Text styles={styles.textStyle}>Child #2</Text>
    <Text styles={styles.textStyle}>Child #3 - working</Text>
  </View>

  );
};

const styles = StyleSheet.create({
  viewStyle: {
        borderWidth: 10,
        borderColor: 'black',
        alignItems: 'center'
  },

  textStyle: {
        borderWidth: 10,
        borderColor: 'red'
  }

});

export default BoxScreen;