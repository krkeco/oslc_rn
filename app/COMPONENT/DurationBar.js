import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles.js';

var {wHeight, wWidth} = Dimensions.get('window');

type Props = {};
export default class DurationBar extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      native_x: 0,
      start_x: 0,
      width: 0,
    }
  }



  componentWillMount(){

  }
  componentDidMount(){
    setTimeout( 
      ()=>{
        this.DurationBar.measure( (fx, fy, width, height, px, py) => {
          this.setState({
            start_x: 0,
            width: width,
          },
          alert(this.state.start_x +' to ' + this.state.end_x));

        });
      },
      5
      );

  }

  render() {


    let lineLength = this.props.progress/this.props.duration*(this.state.width-14);
    let durationLine = <View
          style={{
            position: 'absolute',
            marginLeft: 7,
            marginTop: 7,
            borderBottomColor: 'black',
            borderBottomWidth: 16,
            borderRadius: 4,
            width: lineLength
          }}
          />;
    let playerScrollBar = <TouchableOpacity
      onPress={(event)=>{
        this.setState({native_x: event.nativeEvent.locationX});
        alert('percet' +event.nativeEvent.locationX/this.state.width*100);
        this.props.setProgress(event.nativeEvent.locationX/this.state.width*100);
    }}>
      <View
      ref={view => { this.DurationBar = view; }}
      style={{
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 5,
          borderBottomColor: 'white',
          borderBottomWidth: 20,
          borderRadius: 5,
          width: '96%'
        }}/>
      {durationLine}
    </TouchableOpacity>;


    return (
      <View >
        <Text>{this.state.width.toString()}{this.state.native_x.toString()}</Text>
        {playerScrollBar}
      </View>
    );
  }
}