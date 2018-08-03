import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import styles from './styles.js';

type Props = {};
export default class NavigatorView extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
    }
  }



  componentWillMount(){

  }


  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
        onPress={this.props.isBulletin}>
        <Text>Bulletin</Text>
        </TouchableOpacity>

         <TouchableOpacity
        onPress={this.props.isCalendar}>
        <Text>Calendar</Text>
        </TouchableOpacity>

         <TouchableOpacity
        onPress={this.props.isRecording}>
        <Text>Sermons</Text>
        </TouchableOpacity>

      </View>
    );
  }
}