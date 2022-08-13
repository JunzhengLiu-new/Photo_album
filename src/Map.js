import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import Signle_Check_button from './Single_Check_button';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import Picture_bubble from './Picture_bubble';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0062;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6)}`;
}

class Map extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
      init_state:false,
      map_type : "terrain",
      current_markers:[{"coordinate":{"latitude":53.34107739570166,"longitude":-6.252452490840801},"key":0,"color":"#335cfd"},
      {"coordinate":{"latitude":53.33811938981487,"longitude":-6.252124398562503},"key":1,"color":"#c725db"},
      {"coordinate":{"latitude":53.34108113765923,"longitude":-6.248902920262153},"key":2,"color":"#3cc161"},
      {"coordinate":{"latitude":53.33659196337754,"longitude":-6.247359968330034},"key":3,"color":"#6ebd3f"},],
      picture_uri:[{"key":0,"data":[{url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/A1.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/A2.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/A3.jpeg"},]},
      {"key":1,"data":[{url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/B1.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/B2.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/B3.jpeg"},]},
      {"key":2,"data":[{url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/C1.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/C2.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/C3.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/C4.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/C5.jpeg"},]},
      {"key":3,"data":[{url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/D1.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/D2.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/D3.jpeg"},
      {url:"/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/D4.jpeg"},]}
    ]
    };
  }
  // myRef_single_check = React.createRef()
  single_check = () => {
    if(this.state.map_type === "terrain"){
      this.setState({
        map_type:"hybrid"
      })
    }
    else{
      this.setState({
        map_type:"terrain"
      })
    }
    
  }
  // edit_picture = (id) => {
  //   this.state.picture_uri.map((marker)=>{
  //     if(marker.key === id){
  //       // console.log(marker.data)
  //       this.props.navigation.navigate("Details",{pics_uri:marker.data})
  //     }
  //   })
    
  // }
  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude).toFixed(2)
      var long = parseFloat(position.coords.longitude).toFixed(2)
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
      this.setState({region: initialRegion,init_state:true})
      
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  }
  onMapPress(e) {
    let length = this.state.current_markers.length
    let id = this.state.current_markers[length-1]["key"] + 1
    // alert(id)
    this.setState({
      markers: [
        // ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
    console.log(JSON.stringify(this.state.markers))
  }
  add_new_item = () => {
    this.props.navigation.navigate("New_album")
  }
  render() {
    if(this.state.init_state === false){
            return(
              <Text>Loading.....</Text>
            )
          }
    else{
    return (
      <View>

        <View style={styles.container}
        // onLongPress={this.edit_picture}
        >
          <MapView
            mapType={this.state.map_type}
            enableZoomControl = {true}
            showsUserLocation={true}
            scrollEnabled={true}
            showsScale={true}
            style={styles.map}
            initialRegion={this.state.region}
            onPress={e => this.onMapPress(e)}>
            {this.state.markers.map((marker) => (
              <Marker
                key={marker.key}
                coordinate={marker.coordinate}
                pinColor={"red"}
                onPress={this.add_new_item}
              />
            ))}
            {
            this.state.current_markers.map((marker) => (
              <Marker
                key={marker.key}
                coordinate={marker.coordinate}
                // onPress={this.get_pic_details}
              >
              <Picture_bubble key={marker.key} toChildren={marker.key} toChildren_edit_picture={this.edit_picture} toChildren_picture_uri={this.state.picture_uri[marker.key]}/>
              </Marker>
            ))
            }
          </MapView>
          {/* <View style={{ position: 'absolute', top: 10, width: '100%' }}>
          <TextInput
            style={{
              borderRadius: 10,
              margin: 10,
              color: '#000',
              borderColor: '#666',
              backgroundColor: '#FFF',
              borderWidth: 1,
              height: 45,
              paddingHorizontal: 10,
              fontSize: 18,
            }}
            placeholder={'Search'}
            placeholderTextColor={'#666'}
          />
          </View>    */}
          <Signle_Check_button
            single_check={this.single_check}
          />
        </View>
      </View>
    );
  }}
}

const styles = StyleSheet.create({
  container: {
    height:height * 0.9,
    width:width,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default Map
