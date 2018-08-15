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

import Communications from 'react-native-communications';


type Props = {};
export default class About extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
   
  }

  componentWillMount(){
  	this.setState({series: this.props.series});
  }


  render() {


    return (
      
    <View
      style={[{height: '100%', width: '100%'}]}>
      <View
        style={styles.header}>
        <Text style={styles.title}>About Us</Text>
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>

      <ScrollView>
        
        <Text style={styles.small_text}>Our Savior Lutheran Church is part of the Lutheran Church Missouri Synod. 

        Our beliefs are firmly grounded in the doctrine of Grace, Faith, and Scripture. We believe that all are sinful, and it is only through the Grace of God that we are saved. This Grace is given through Faith in Jesus Christ, God’s son. Finally, that the Bible is the Holy infallible inspiration of God. 
        A more comprehensive explanation of our beliefs can be found
        </Text> 
        <TouchableOpacity onPress={() => Communications.web('https://www.lcms.org/about/beliefs/doctrine')}>
          <Text style={styles.normal_text}>here</Text>
        </TouchableOpacity> 
        

        <Text style={styles.large_text}>Sunday Services:</Text> 
        <Text> 8:00AM Liturgical Service</Text> 
        <Text> 9:30AM Sunday School Classes for all ages</Text> 
        <Text> 10:45AM Liturgical Service</Text> 
        <Text> 6:30PM Praise Service </Text> 

        <Text style={styles.large_text}>Monday Service</Text> 
        <Text> 6:30PM Abbreviated Service</Text> 



        <Text style={styles.large_text}>Office Information:</Text> 

        <Text>Phone:</Text> 
          <TouchableOpacity onPress={() => Communications.phonecall('6264477690', true)}>
            <Text style={styles.normal_text}>626-447-7690</Text>      
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Communications.email(['oslcarcadia@aol.com'],null,null,'OSLCArcadia email from Mobile','Hi OSLC, \n\n\n')}>      
            <Text style={styles.normal_text}>OSLCArcadia@aol.com</Text>
          </TouchableOpacity>
          
        <TouchableOpacity onPress={() => Communications.web('https://www.google.com/maps/place/Our+Savior+Lutheran+Church/@34.126288,-118.0525331,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2dbb08211387d:0xc1ddefee13bf4039!8m2!3d34.126288!4d-118.0503391')}>
          <Text style={styles.normal_text}>Address: 512 W Duarte Rd., Arcadia, CA 91007</Text> 
        </TouchableOpacity> 


      </ScrollView>
    </View>
    );
  }
}