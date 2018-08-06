/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View
} from 'react-native';

import styles from './styles.js';
import Bulletin from './Bulletin.js';

import SermonsAPI from './API/Sermons.js';
import SermonsView from './VIEW/Sermons.js';

import CalendarView from './VIEW/Calendar.js';
import CalendarAPI from './API/Calendar.js';

import NavigatorView from './NavigatorView.js';

import Hyperlink from 'react-native-hyperlink';

import FontAwesome, { Icons } from 'react-native-fontawesome';

//not implemented yet
import PayPal from 'react-native-paypal-wrapper';


type Props = {};

export default class MainNavigator extends Component<Props> {
  
 constructor(props) {
    super(props);
    this.state = {
      pdf_text: 'no notes yet',
      
      //sermon series
      series: [],

      current_index: 0,
      
     
      

    };
  }

  componentWillMount(){

  }

  navigate = (index) => {

    this.setState({current_index: index});

  }

  render() {

    let nav =  [
             
        {name: 'navigator',
        view: <NavigatorView
                isBulletin={() => {this.navigate(1);}}
                isRecording={() => {this.navigate(2);}}
                isCalendar={() => {this.navigate(3);}}
                isGroups={() => {this.navigate(4);}}
                isDonate={() => {this.navigate(5);}}
                isPrayer={() => {this.navigate(6);}}//not used
                />}, 
        
        {name: 'bulletin',
        view: <Bulletin/>}, 

        {name: 'recording',
        view: <SermonsView
                series = {this.state.series}/>}, 

        {name: 'calendar',
        view: <CalendarView/>}, 

        {name: 'groups',
        view: <Text>groupView</Text>},

        {name: 'donate',
        view: <Text>donateView</Text>},

        {name: 'prayer',
        view: <Text>PR</Text>},
    
      ];


    let sampleText = 'no content yet';
    
    let content = nav[this.state.current_index].view;
      

    let menu =
        <TouchableOpacity
          onPress={() => {this.navigate(0);}}>
        
          <Text>Go Back!</Text>
        
        </TouchableOpacity>;

    return (
      <View style={styles.container}>

 <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          <FontAwesome style={{fontFamily: 'fontawesome-webfont'}}>{Icons.chevronLeft}</FontAwesome>
          Text
        </Text>


        {menu}

        {content}

        <Text>{this.state.series.length}</Text>

        <SermonsAPI
          setSeries={(seriesApi) => {
            this.setState({series: seriesApi});
          }}/>
        <CalendarAPI/>

      </View>
    );
  }
}
