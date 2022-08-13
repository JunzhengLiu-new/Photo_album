import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { FooterProps } from '../../src/types';
class Header extends React.Component{
    state = {
        currentIndex:this.props.currentIndex,
        total:this.props.total
    }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>
              {this.state.currentIndex + 1}/{this.state.total}
            </Text>
          </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'rgba(3, 43, 14,0.5)',
    flexDirection: 'row',
    height: 150,
    // justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  text: {
    color: 'white',
  },
});

export default Header;