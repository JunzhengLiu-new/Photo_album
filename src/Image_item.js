import React, {Component} from "react";
import {View,Text,Div,StyleSheet,ActivityIndicator} from "react-native";
// import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image,Button } from 'react-native-elements';
class Image_item extends Component{
    render(){
        const {picture_uri,width,height} = this.props
        return(
            <View style={styles.slide}>
            <Image
            source={{ uri: picture_uri }}
            style={{ width: width-4, height: width-4,borderRadius: 10,paddingTop:"auto"}}
            PlaceholderContent={<ActivityIndicator />}
            // roundAsCircle={true}
          /></View>)
    }
}
var styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },})
export default Image_item