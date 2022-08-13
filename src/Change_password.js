import React, {Component} from "react";
import {View,Text,Div} from "react-native";
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class Change_password extends Component{
    render(){
        return(
        <View>
            <Input placeholder="Email" secureTextEntry={true} />
            <Button
            title="Retrieve Password"
            />
        </View>)
    }
}
export default Change_password