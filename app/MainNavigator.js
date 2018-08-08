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
  ScrollView,
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
      calendar: {
        summary: 'a summary',
        status: 'confirmed',
        items: [
          {
            summary: 'item summary',
            start: {
              dateTime: '2018-08-08',

            }
          }
        ]
      },

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
        view: <CalendarView
                calendar={this.state.calendar}/>}, 

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


          let text = <Text>calendar: waiting</Text>;
          if(this.state.calendar != null
            && this.state.calendar != undefined){
            text =<View>
             <Text>calendar: {this.state.calendar.summary}</Text>
             <Text>calendar: {this.state.calendar.items[0].start.dateTime}</Text>

             </View>;

          }

    return (
      <View style={styles.container}>

          <Text style={{fontFamily: 'fontawesome-webfont'}}>{Icons.chevronLeft}</Text>
 <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          Text
        </Text>


        {menu}

        {content}

        <SermonsAPI
          setSeries={(seriesApi) => {
            this.setState({series: seriesApi});
          }}/>
        <CalendarAPI
          setCalendar={(calendarApi) => {
            this.setState({calendar: calendarApi});
          }}/>


          {text}
      </View>
    );
  }
}
