import React, {Component} from "react";
import {View,Text,DeviceEventEmitter,AppRegistry,StyleSheet, processColor,ScrollView,Image} from "react-native";
import { Button,Input,Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar } from 'react-native-elements';
import { WebView } from "react-native-webview"

class Home extends Component{
  changepage_map = () => {
    this.props.navigation.navigate("Map")
}
    render(){
        return(   
        <View>
            <View style={{height:30}}></View>
            <View style={{alignItems: 'center'}}>
            <Avatar
              size="large"
              rounded
              title="CR"
              source={{uri:'/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/A1.jpeg'}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            </View>
            <View style={{height:'5%'}}></View>
            <View style={{height:'70%'}}>
            <Card>
              <Card.Title>HELLO Herui</Card.Title>
              <Card.Divider/>
              <Card.Image source={require('/Users/liujunzheng/Desktop/Pic_map/pic_map/Picture/Home_screen_page.jpeg')}>
              </Card.Image>
              <Text style={{marginTop: 10,marginBottom: 10,fontSize:20}}>
              You have not traveled for <Text onPress={()=>{alert('Coming soon')}} style={{color:"red"}}>32</Text> days. In the past year, you have been to <Text onPress={()=>{alert('Coming soon')}} style={{color:"red"}}>30</Text> countries and <Text onPress={()=>{alert('Coming soon')}} style={{color:"red"}}>120</Text> cities. 
              </Text>
              <Text style={{marginTop: 10,marginBottom: 10,fontSize:20}}>
              You like to travel by <Text onPress={()=>{this.props.navigation.navigate("Chart")}} style={{color:"red"}}>plane</Text> the most, your longest trip took <Text onPress={()=>{alert('Coming soon')}} style={{color:"red"}}>23</Text> days, the highest place you have ever reached is <Text><Text onPress={()=>{alert('Coming soon')}} style={{color:"red"}}>Tibet</Text> (5000 meters)</Text>
              </Text>
                <Button
                  // icon={<Icon name='code' color='#ffffff' />}
                  onPress={this.changepage_map}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='View all your traces' />
            </Card>
            </View>
            {/* <View style={{height:'40%',justifyContent: 'center'}}> */}
            {/* <View style={styles.container}>
              <BarChart style={styles.chart}
                data={{dataSets:[{label: "your main mode of travel", values: [{y: 1000}, {y: 2000}, {y: 15000},{y:3000}],
                config:{
                  color: processColor('teal'),
                  barShadowColor: processColor('lightgrey'),
                  highlightAlpha: 90,
                  highlightColor: processColor('red'),
                }
                }]}}
                xAxis={{
                  valueFormatter: ['Trian', 'Car','Airplane','Others'],
                  granularityEnabled: true,
                  granularity : 1,
                }}
              />
            </View> */}
            {/* </View> */}
            {/* <View style={{alignItems: 'center'}}>
            <Button 
            type="outline"
            style={{width:"80%"}}
            title="Track your footsteps"
            onPress={this.changepage_map}
            />
            </View> */}

        </View>)
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1
  }
});
export default Home