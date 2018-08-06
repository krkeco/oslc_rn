import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import styles from './styles.js';


import Hyperlink from 'react-native-hyperlink'

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
        <Text style={styles.normal_text}>Bulletin</Text>
        </TouchableOpacity>

         <TouchableOpacity
        onPress={this.props.isCalendar}>
        <Text style={styles.normal_text}>Calendar</Text>
        </TouchableOpacity>

         <TouchableOpacity
        onPress={this.props.isRecording}>
        <Text style={styles.normal_text}>Sermons</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.props.isGroups}>
        <Text style={styles.normal_text}>Groups</Text>
        </TouchableOpacity>

        <Hyperlink 
          linkDefault={ true } 
          linkText='Prayer Request'>

          <Text  style={styles.normal_text}>
            requests@prayers.oslcarcadia.com
          </Text>
        </Hyperlink>

         <TouchableOpacity
        onPress={this.props.isDonate}>
        <Text style={styles.normal_text}>Donate</Text>
        </TouchableOpacity>

      </View>
    );
  }
}