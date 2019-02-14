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
            
              this.props.setCalendar(calendarArray);
      
            } else {
              let error = res;
              throw error;
            
            }
          } catch(error) {
          
            console.log("error " + error);
  
        }

      }
    



  render() {


    return (
      <View/>
    );
  }
}