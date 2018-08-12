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

              let calendarViewDateArray = [];
              // date = new Date();
              // dateString = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();

              // calendarArray.items.map((item, index) => {
              //   //cehck that all items are still real
              //   if(item.status == 'confirmed'
              //   && item.start != null && item.start != undefined){
              //         // {'2012-05-22': [{text: 'item 1 - any js object'}],
              //       calendarViewDateArray.push(item.start.dateTime.substring(0,10): item);

              //       //if real, put inside an array object of the date of event

              //       //then sort all events inside each day array
              //        return <Text>{index} {item.start.dateTime}</Text> 
              //   }
              // }
              // calendarArray.

              this.props.setCalendar(calendarArray);
      
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
  
        }

      }
    



  render() {


    return (
      <View/>
    );
  }
}