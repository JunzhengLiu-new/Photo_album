import React, {Component} from "react";
import {View,Text} from "react-native";
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native-elements';
class Login extends Component{
    changepage_register = () => {
        this.props.navigation.navigate("Register")
    }
    changepage_changepassword = () => {
        this.props.navigation.navigate("Change Password")
    }
    changepage_home = () => {
        this.props.navigation.navigate("Home")
    }
    render(){
        return(
        <View >
            <Image
            source={{ uri: "/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/main_page_picture.jpeg" }}
            style={{ width: "100%", height: 200 }}
            />
            <Input
                placeholder='Email'
            />
            <Input placeholder="Password" secureTextEntry={true} />
            <Text>
                 <Button
                    onPress={this.changepage_register}
                    title="Create an account"
                    type="clear"
                />
            </Text>
            <Button
            title="Login"
            onPress={this.changepage_home}
            />
            <Button
                    onPress={this.changepage_changepassword}
                    title="Forget password"
                    type="clear"
                />
        </View>)
    }
}
export default Login