import React, {Component} from "react";
import {View,Text,Div,TextInput} from "react-native";
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ImagePicker from 'react-native-image-crop-picker';   
class New_album extends Component{
    state = {
        markedDates:{}
    }
    open_camera = () => {
        // ImagePicker.openCamera({
        //   mediaType: 'video',
        // }).then(image => {
        //   console.log(image);
        // });
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
        }).catch(   );
      }
    render(){
        const date=this.state.markedDates
        return(
        <View>
            <View style={{height:'15%'}}><Input placeholder='Title'/></View>
            <View style={{height:'25%'}}><Input placeholder='Description'/></View>
            <Calendar
              onDayPress={day => {
                var data_time = {}
                data_time[day.dateString] = {selected: true, marked: true, selectedColor: 'blue'}
                this.setState({
                    markedDates:data_time,
                })
              }}
              markedDates={this.state.markedDates}
            ></Calendar>
            <Button title="Select picture and upload" onPress={this.open_camera}></Button>
            {/* <View style={{height:'25%'}}><Text>Date</Text></View>
            <View style={{height:'25%'}}><Text>Description</Text></View>
            <View style={{height:'25%'}}><Text>Upload</Text></View> */}
        </View>)
    }
}
export default New_album