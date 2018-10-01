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

import FontAwesome, { Icons } from 'react-native-fontawesome';


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
      <View style={styles.navContainer}>

        <View style={styles.navDuets}>

          <TouchableOpacity
          style={styles.navBox}
          onPress={this.props.isBulletin}>
          <Text style={styles.navFontA}>{Icons.leanpub}</Text>
          <Text style={styles.navFont}>Bulletin</Text>
          </TouchableOpacity>


           <TouchableOpacity
           style={styles.navBox}
          onPress={this.props.isCalendar}>
            <Text style={styles.navFontA}>{Icons.calendar}</Text>
          <Text style={styles.navFont}>Calendar</Text>
          </TouchableOpacity>

           <TouchableOpacity
           style={styles.navBox}
          onPress={this.props.isRecording}>
          <Text style={styles.navFontA}>{Icons.headphones}</Text>
          <Text style={[styles.navFont]}>Archive</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.navDuets}>

          <TouchableOpacity
          style={styles.navBox}
          onPress={this.props.isGroups}>
          <Text style={styles.navFontA}>{Icons.child}</Text>
          <Text style={styles.navFont}>Groups</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.navBox} onPress={() => Communications.email(['requests@prayers.oslcarcadia.com'],null,null,'Prayer Request from Mobile App','Dear OSLC Prayer Team, \n\n\n')}> 
          <Text style={[styles.navFontA,{color: 'red'}]}>{Icons.heart}</Text>     
            <Text style={styles.navFont}>Prayer{'\n'}Request</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.navBox}
          onPress={this.props.isAbout}>
          <Text style={styles.navFontA}>{Icons.book}</Text>
          <Text style={styles.navFont}>Beliefs</Text>
          </TouchableOpacity>


        </View>
        <View style={styles.navDuets}>

          <TouchableOpacity
          style={styles.navBox}
          onPress={this.props.isStaff}>
          <Text style={styles.navFontA}>{Icons.users}</Text>
          <Text style={styles.navFont}>Staff</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.navBox}
          onPress={this.props.isOffice}>
          <Text style={styles.navFontA}>{Icons.info}</Text>
          <Text style={styles.navFont}>Church{'\n'}Info</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.navBox} onPress={() => Communications.web('https://www.donate.oslcarcadia.com')}>
          <Text style={styles.navFontA}>{Icons.paypal}</Text>
            <Text style={[styles.navFont]}>Donate</Text>
          </TouchableOpacity> 

        </View>
          
      </View>

    );
  }
}