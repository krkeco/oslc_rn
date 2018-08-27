import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from '../styles.js';

import Hyperlink from 'react-native-hyperlink';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Communications from 'react-native-communications';


type Props = {};
export default class Office extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {

    };
   
  }

  componentWillMount(){
  }


  render() {


    return (
      
    <View
      style={[{height: '100%', width: '100%'}]}>
      <View
        style={styles.header}>
        <Text style={styles.title}>Office Information</Text>
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>

      <ScrollView>
      <View style={{alignItems: 'center', flex: 1}}>

        
          <TouchableOpacity onPress={() => Communications.phonecall('6264477690', true)}>
          <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'fontawesome-webfont'}}>{Icons.phone}</Text>
            <Text style={[styles.normal_text,styles.hyperlink]}>626-447-7690</Text>      
          </TouchableOpacity>

        
          <TouchableOpacity onPress={() => Communications.email(['oslcarcadia@aol.com'],null,null,'OSLCArcadia email from Mobile','Hi OSLC, \n\n\n')}>      
          <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'fontawesome-webfont'}}>{Icons.envelope}</Text>
            <Text style={[styles.normal_text,styles.hyperlink]}>OSLCArcadia@aol.com</Text>
          </TouchableOpacity>
          
        
        <TouchableOpacity onPress={() => Communications.web('https://www.google.com/maps/place/Our+Savior+Lutheran+Church/@34.126288,-118.0525331,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2dbb08211387d:0xc1ddefee13bf4039!8m2!3d34.126288!4d-118.0503391')}>
          <Text style={{textAlign: 'center', fontSize: 35, fontFamily: 'fontawesome-webfont'}}>{Icons.map}</Text>
          <Text style={[styles.normal_text,styles.hyperlink,{textAlign: 'center'}]}>512 W Duarte Rd., Arcadia, CA 91007</Text> 
        </TouchableOpacity> 

        </View>
      </ScrollView>
    </View>
    );
  }
}