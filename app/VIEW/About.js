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
        <Text style={styles.title}>Beliefs</Text>
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>

      <ScrollView>
      <View style={{alignItems: 'center', flex: 1}}>

         <Image
            style={{width: 200, height: 200}}

            source={require('../IMG/luther-rose.jpg')}/>

        <Text style={[styles.small_text,{textAlign: 'center'}]}>

        Our Savior Lutheran Church is part of the Lutheran Church Missouri Synod. 

        Our beliefs are firmly grounded in the doctrine of Grace, Faith, and Scripture. We believe that all are sinful, and it is only through the Grace of God that we are saved. This Grace is given through Faith in Jesus Christ, God’s son. Finally, that the Bible is the Holy infallible inspiration of God. 
        A more comprehensive explanation of our beliefs can be found
        </Text> 
        <TouchableOpacity onPress={() => Communications.web('https://www.lcms.org/about/beliefs/doctrine')}>
          <Text style={[styles.small_text,styles.hyperlink]}>here</Text>
        </TouchableOpacity> 
        

        </View>
      </ScrollView>
    </View>
    );
  }
}