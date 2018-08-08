import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
  ScrollView,
} from 'react-native';

import styles from '../styles.js';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

type Props = {};
export default class CalendarView extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      calendar: [],
      
    };
    
  }



  componentWillMount(){

   
    let calendarFormatted = [];

    // this.props.calendar.items.map((item, index) => {
    // //   // let calendarItem =  {;
    //     let title = this.props.items[index].start.dateTime.substring(0,10);
    // //   calendarFormatted.push(title: item);
    // });

   this.setState({calendar: this.props.calendar});
  
  }
               



  render() {

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};



// let agenda = 
// <Agenda
//   // the list of items that have to be displayed in agenda. If you want to render item as empty date
//   // the value of date key kas to be an empty array []. If there exists no value for date key it is
//   // considered that the date in question is not yet loaded
//   items={
    // {'2012-05-22': [{text: 'item 1 - any js object'}],
    //  '2012-05-23': [{text: 'item 2 - any js object'}],
    //  '2012-05-24': [],
    //  '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
    // }}
//   // callback that gets called when items for a certain month should be loaded (month became visible)
//   loadItemsForMonth={(month) => {console.log('trigger items loading')}}
//   // callback that fires when the calendar is opened or closed
//   onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
//   // callback that gets called on day press
//   onDayPress={(day)=>{console.log('day pressed')}}
//   // callback that gets called when day changes while scrolling agenda list
//   onDayChange={(day)=>{console.log('day changed')}}
//   // initially selected day
//   selected={'2012-05-16'}
//   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//   minDate={'2012-05-10'}
//   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//   maxDate={'2012-05-30'}
//   // Max amount of months allowed to scroll to the past. Default = 50
//   pastScrollRange={50}
//   // Max amount of months allowed to scroll to the future. Default = 50
//   futureScrollRange={50}
//   // specify how each item should be rendered in agenda
//   renderItem={(item, firstItemInDay) => {return (<View />);}}
//   // specify how each date should be rendered. day can be undefined if the item is not first in that day.
//   renderDay={(day, item) => {return (<View />);}}
//   // specify how empty date content with no items should be rendered
//   renderEmptyDate={() => {return (<View />);}}
//   // specify how agenda knob should look like
//   renderKnob={() => {return (<View />);}}
//   // specify what should be rendered instead of ActivityIndicator
//   renderEmptyData = {() => {return (<View />);}}
//   // specify your item comparison function for increased performance
//   rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
//   // Hide knob button. Default = false
//   hideKnob={true}
//   // By default, agenda dates are marked if they have at least one item, but you can override this if needed
//   markedDates={{
//     '2012-05-16': {selected: true, marked: true},
//     '2012-05-17': {marked: true},
//     '2012-05-18': {disabled: true}
//   }}
//   // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
//   onRefresh={() => console.log('refreshing...')}
//   // Set this true while waiting for new data from a refresh
//   refreshing={false}
//   // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
//   refreshControl={null}
  
//   // agenda container style
//   style={{}}
// />;
let text = null;
if(this.state.calendar != null){
  text = <ScrollView>
      <Text>{this.state.calendar.items.length}</Text>

    
    {this.state.calendar.items.map((item, index) => {
     if(item.status == 'confirmed'
      && item.start != null && item.start != undefined){
           return <Text>{index} {item.start.dateTime}</Text>
         }
         else{ return null;}
    })}
      <Text>{this.props.calendar.items[0].start.dateTime.substring(0,10)}</Text>
    </ScrollView>;
}

    return (
      <View style={styles.container}>
   <Agenda
  
  items={this.state.calendar}
  
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  onDayPress={(day)=>{console.log('day pressed')}}
  onDayChange={(day)=>{console.log('day changed')}}
  selected={'2018-08-06'}
  minDate={'2012-05-10'}
  maxDate={'2012-05-30'}
  pastScrollRange={50}
  futureScrollRange={50}
  
  renderItem={(item, firstItemInDay) => {return (
    <View>
    <Text>{item.summary}</Text>
    </View>
    );}}
  
  renderDay={(day, item) => {return (
    <View>
    <Text>A day</Text>
    </View>
    );}}
  
  renderEmptyDate={() => {return (<View />);}}
  renderKnob={() => {return (<View />);}}
  renderEmptyData = {() => {return (<View />);}}
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={false}
  
  markedDates={{
    '2012-05-16': {selected: true, marked: true},
    '2012-05-17': {marked: true},
    '2012-05-18': {disabled: true}
  }}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
  refreshControl={null}
  // agenda theme
  theme={{
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // agenda container style
  style={{width: 300, height: 300, flex: 1}}
/>

{text}


      </View>
    );
  }
}