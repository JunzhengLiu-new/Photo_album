import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput
  } from 'react-native'; 
import * as Animatable from 'react-native-animatable';
import BetterBanner from 'react-native-better-banner';
import { Image,Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import Carousel from 'react-native-carousel'
import PageScrollView from 'react-native-page-scrollview';
import Swiper from 'react-native-swiper'
import Image_item from './Image_item';
import { ImageGallery } from '@georstat/react-native-image-gallery'
import Header from "./Header"
const {width, height} = Dimensions.get('window');
let w = 64
let h = 0
// let {width:w, height:h}=Dimensions.get('window');
class Picture_bubble extends React.Component{
  myRef = React.createRef()
    constructor(props) {
        super(props);
        this.state = {
            width: 64,
            height: 64,
            gallery: false,
            msg:this.props.toChildren,
            msg_2:this.props.toChildren_edit_picture,
            msg_3:this.props.toChildren_picture_uri,
            pics_uri:null,
            isOpen : false,
            subtitle:false,
            zIndex_value:1
        }
      }
    edit_picture = () => {
      // this.state.msg_2(this.state.msg)

      this.setState({
        isOpen:true
    })
    }
    close_function = () => {
      this.setState({
          isOpen:false
      })
    }
    renderHeaderComponent = (image, currentIndex) => {
        return <Header total={image.length} currentIndex={currentIndex} />;
      };
    get_pic_details = () => {
      if(w === 64){
        this._refButton.setNativeProps({
          style: {      
            width:width*0.8, 
            height:width*0.8}
      });
      this._refButton_2.setNativeProps({
        style: {      
          height:100}
    });
        w = width*0.8
        h = 100
      }
      else{
        w = 64
        this._refButton.setNativeProps({
          style: {      
            width:64, 
            height:64}
      });
      this._refButton_2.setNativeProps({
        style: {      
          height:0}
    });
      }

        // if(this.state.gallery === false){
        //     this.setState({width: width*0.8,height: width*0.8,gallery:true ,subtitle:true,zIndex_value:100})
        // }
        // else{
        //     // alert(this.state.zIndex_value)
        //     this.setState({width: 64,height: 64,gallery:false,subtitle:false,zIndex_value:1 })
        // }

      }
    // edit_picture = () => {
    //   this.props.navigation.navigate("Details")
    // }
    render(){
        // if(this.state.msg === 0){
          if(this.state.pics_uri !== null){
            console.log(this.state.pics_uri)
            for (var i=0;i<this.pics_uri.length;i++)
            { 
                console.log(this.pics_uri[i])
            }
          }
            return(
                <View style={{ flex: 1, position: 'relative' }}>
                <TouchableOpacity 
                onPress={this.get_pic_details}
                onLongPress={this.edit_picture}
                // onDeselect={this.get_pic_details}
                >
                  <Animatable.View ref={(c) => this._refButton = c} transition="width height" style={styles.container}>
                    <Swiper style={styles.wrapper} 
                    showsButtons={false} 
                    loop={true}
                    autoplay={true}
                    // index={1}
                    showsPagination={false}
                    >
                    {this.state.msg_3["data"].map((uri,index) => (
                      <Image_item key={index} picture_uri={uri["url"]} width={w} height={w}/>
                    ))
                    }
                    </Swiper>
                  </Animatable.View>
                </TouchableOpacity>
                <View style={{height:"80%"}}>
                <View ref={(c) => this._refButton_2 = c} style={styles.comment}>
                  
                  <View><Text style={{fontWeight:"bold",fontSize:14}}>Title: The first time in ireland</Text></View>
                  <View><Text style={{fontWeight:"bold",fontSize:14}}>Date: 2020-11-11</Text></View>
                  <View><Text style={{fontWeight:"bold",fontSize:14}}>Description: I am very happy today</Text></View>
                </View>
                    {/* <Button onPress={()=>(this.setState({isOpen:true}))} title="Open Gallery" /> */}
                    <ImageGallery 
                    close={this.close_function} 
                    isOpen={this.state.isOpen} 
                    images={this.state.msg_3["data"]}
                    // renderHeaderComponent={this.renderHeaderComponent}
                    >
                  </ImageGallery> 
                </View>

                </View>

            )
    }
}
var styles = StyleSheet.create({
    container: {
      width: w, 
      height: w,
      borderRadius: 10,
      borderStyle:"solid",
      borderColor:"white",
      borderWidth: 3,
      // zIndex:this.zIndex_value
    },
    comment:{height:h,
      backgroundColor:"white",
      opacity: 0.7},
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });
export default Picture_bubble