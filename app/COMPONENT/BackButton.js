import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';


type Props = {};
export default class App extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
    }
  }



  componentWillMount(){

  }


  render() {
    return (
      <View
        style={{position: 'absolute', top: 12, left: 12, zIndex:20}}>
              <TouchableHighlight
                onPress={() => {
                  this.props.onPress();
                }}>
                  <Text style={{ fontSize: 32, padding: 4, width: 38, height: 38, fontFamily: 'FontAwesome'}}>{Icons.chevronLeft}</Text>
              </TouchableHighlight>
        </View>
        
    );
  }
}