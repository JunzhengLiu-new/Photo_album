import React from 'react';
import { ButtonGroup } from "react-native-elements";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
class Signle_Check_button extends React.Component{

    constructor () {
        super()
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      updateIndex (selectedIndex) {
        const {single_check} = this.props
        single_check()
        this.setState({selectedIndex})
      }
      
      component1 = () => <Text>Regular map</Text>
      component2 = () => <Text>Live map</Text>
    //   component3 = () => <Text>ButtonGroup</Text>
      
      render () {
        const buttons = [{ element: this.component1 }, { element: this.component2 }]
        const { selectedIndex } = this.state
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 20}} /> 
        )
      }
}
export default Signle_Check_button