import react from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) => {
    const  {
      imageSource = "",
      title = "Failed to load",
      imageScore = 0
    } = props
    return (
      <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>Image Score - {imageScore}</Text>
      </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;