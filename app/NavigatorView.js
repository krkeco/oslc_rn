import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  WebView,
} from 'react-native';

import styles from './styles.js';


import Hyperlink from 'react-native-hyperlink';

import Communications from 'react-native-communications';


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

        <TouchableOpacity onPress={() => Communications.email(['requests@prayers.oslcarcadia.com'],null,null,'Prayer Request from Mobile App','Dear OSLC Prayer Team, \n\n\n')}>      
          <Text style={styles.normal_text}>Prayer Request</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.props.isAbout}>
        <Text style={styles.normal_text}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.props.isStaff}>
        <Text style={styles.normal_text}>Staff</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.props.isOffice}>
        <Text style={styles.normal_text}>Office Info</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Communications.web('https://www.donate.oslcarcadia.com')}>
          <Text style={[styles.normal_text,styles.hyperlink]}>Donate</Text>
        </TouchableOpacity> 
        
        
      </View>
    );
  }
}