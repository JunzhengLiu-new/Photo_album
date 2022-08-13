import React, {Component} from "react";
import {View,Text,Div} from "react-native";
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class Register extends Component{
    render(){
        return(
        <View>
            <Input placeholder="Email" secureTextEntry={true} />
            <Input placeholder="Password" secureTextEntry={true} />
            <Input placeholder="Repeat  Password" secureTextEntry={true} />
            <Button
            title="Register"

            />
        </View>)
    }
}
export default Register