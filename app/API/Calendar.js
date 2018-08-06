import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
} from 'react-native';

import styles from '../styles.js';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

type Props = {};
export default class CalendarView extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {

    };
    this.getCalendar = this.getCalendar.bind(this);
  }



  componentWillMount(){

    this.getCalendar();

  }


  async getCalendar() {

    try { 
            let response = 
            await fetch('https://www.googleapis.com/calendar/v3/calendars/40p2dd8jdh8nr8phgcrlvadcg0@group.calendar.google.com/events?key=AIzaSyA7Lew4hcfCkK3hCRbXfqZDjl5eP0z6-j8',
            {
               method: 'GET',
              headers: {
              },
            });
      
            let res = await response.text();
      
            if (response.status >= 200 && response.status < 300) {


              let calendarArray = JSON.parse(res); 

              this.props.setCalendar(calendarArray);
   
    // Alert.alert(
    //   'Calendar Found',
    //   calendarArray.summary + 'accessed',
    //   [
    //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'Yes.', onPress: () => console.log('yesh') },
    //   ],
    //   { cancelable: true }
    // );
      
            } else {
              let error = res;
              throw error;
              //  Alert.alert(
              //   'We DONT got the cred',
              //   error.toString(),
              //   [
              //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              //     {text: 'Yes.', onPress: () => console.log('yesh') },
              //   ],
              //   { cancelable: false }
              // );
            }
          } catch(error) {
             // Alert.alert(
             //    'We DONT got the cred',
             //    error.toString(),
             //    [
             //      {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             //      {text: 'Yes.', onPress: () => console.log('yesh') },
             //    ],
             //    { cancelable: false }
             //  );
            // this.setState({error: error});
            console.log("error " + error);
            // this.setState({showProgress: false});
          
    // Alert.alert(
    //   'Calendar NOT Found',
    //   'error: ' + error,
    //   [
    //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'Yes.', onPress: () => console.log('yesh') },
    //   ],
    //   { cancelable: true }
    // );
        }

      }
    



  render() {


    return (
      <View/>
    );
  }
}