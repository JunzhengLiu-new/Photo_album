import React, {Component} from "react";
import {View,Text,DeviceEventEmitter,AppRegistry,StyleSheet, processColor,ScrollView,Image} from "react-native";
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BarChart} from 'react-native-charts-wrapper';
class Chart extends Component{
    render(){
        return(
        <View>
            <View style={{height:40}}></View>
        <View style={{height:'70%',justifyContent: 'center'}}>
        <View style={styles.container}>
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
        </View>
        </View>
        </View>
)
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
export default Chart