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
import NavigatorView from './NavigatorView.js';

type Props = {};
export default class MainNavigator extends Component<Props> {
  
 constructor(props) {
    super(props);
    this.state = {
      pdf_text: 'no notes yet',

      nav: [
             
                {name: 'navigator',
                  bool: 1, 
                view: <NavigatorView
                        isBulletin={() => {this.navigate(1);}}
                        isRecording={() => {this.navigate(2);}}
                        isCalendar={() => {this.navigate(3);}}

                        />}, 
                
                {name: 'bulletin',
                  bool: 0, 
                view: <Bulletin/>}, 

                {name: 'recording',
                  bool: 0, 
                view: <Text>recordingView</Text>}, 

                {name: 'calendar',
                  bool: 0, 
                view: <Text>calendarView</Text>}, 

                {name: 'groups',
                  bool: 0, 
                view: <Text>groupView</Text>},

                {name: 'donate',
                  bool: 0, 
                view: <Text>donateView</Text>},
            
            ],
    current_index: 0,

    };
  }

  componentWillMount(){


  }

  navigate = (index) => {

    this.setState({current_index: index});

    // if(index == 0){
    //   this.setState({
    //     nav: [
    //      {name: 'navigator',
    //         bool: 1, 
    //       view: <NavigatorView
    //               navigate={this.navigate}/>}, 
          
    //       {name: 'bulletin',
    //         bool: 0, 
    //       view: <Bulletin/>}, 

    //       {name: 'recording',
    //         bool: 0, 
    //       view: <Text>recordingView</Text>}, 

    //       {name: 'calendar',
    //         bool: 0, 
    //       view: <Text>calendarView</Text>}, 

    //       {name: 'groups',
    //         bool: 0, 
    //       view: <Text>groupView</Text>},

    //       {name: 'donate',
    //         bool: 0, 
    //       view: <Text>donateView</Text>},
          
    //     ]});
    // }
    // if(index == 1){
    //   this.setState({
    //      nav: [
    //      {name: 'navigator',
    //         bool: 1, 
    //       view: <NavigatorView
    //               navigate={this.navigate}/>}, 
          
    //       {name: 'bulletin',
    //         bool: 0, 
    //       view: <Bulletin/>}, 

    //       {name: 'recording',
    //         bool: 0, 
    //       view: <Text>recordingView</Text>}, 

    //       {name: 'calendar',
    //         bool: 0, 
    //       view: <Text>calendarView</Text>}, 

    //       {name: 'groups',
    //         bool: 0, 
    //       view: <Text>groupView</Text>},

    //       {name: 'donate',
    //         bool: 0, 
    //       view: <Text>donateView</Text>},
          
    //     ]
    //   });
    // }
    // if(index == 2){
    //   this.setState({
    //      nav: [
    //      {name: 'navigator',
    //         bool: 1, 
    //       view: <NavigatorView
    //               navigate={this.navigate}/>}, 
          
    //       {name: 'bulletin',
    //         bool: 0, 
    //       view: <Bulletin/>}, 

    //       {name: 'recording',
    //         bool: 0, 
    //       view: <Text>recordingView</Text>}, 

    //       {name: 'calendar',
    //         bool: 0, 
    //       view: <Text>calendarView</Text>}, 

    //       {name: 'groups',
    //         bool: 0, 
    //       view: <Text>groupView</Text>},

    //       {name: 'donate',
    //         bool: 0, 
    //       view: <Text>donateView</Text>},
          
    //     ]
    //   });
    // }
    // if(index == 3){
    //   this.setState({
    //      nav: [
    //      {name: 'navigator',
    //         bool: 1, 
    //       view: <NavigatorView
    //               navigate={(index) => this.navigate(index)}/>}, 
          
    //       {name: 'bulletin',
    //         bool: 0, 
    //       view: <Bulletin/>}, 

    //       {name: 'recording',
    //         bool: 0, 
    //       view: <Text>recordingView</Text>}, 

    //       {name: 'calendar',
    //         bool: 0, 
    //       view: <Text>calendarView</Text>}, 

    //       {name: 'groups',
    //         bool: 0, 
    //       view: <Text>groupView</Text>},

    //       {name: 'donate',
    //         bool: 0, 
    //       view: <Text>donateView</Text>},
          
    //     ]
    //   });
    // }

    // let newNav = [];

    // this.state.nav.map((navItem, i) =>{
    //   let updatedItem = navItem;
    //   if(index == i){
    //     updatedItem.bool = 1;
    //   }else{
    //     updatedItem.bool = 0;
    //   }

    //   newNav.push(updatedItem);
    // })

    // this.setState({nav: newNav});

  }

  render() {
    let sampleText = 'no content yet';
    // {this.state.nav.map((navItem, index) => {
    //       if(navItem.bool == 1){
    //                 return navItem.view}
    //                 else{return null;}
    //     })}
    let content = this.state.nav[this.state.current_index].view;
      
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
          </Text>
        <TouchableOpacity
          onPress={() => {this.navigate(0);}}>
        
          <Text>Go Back!</Text>
        
        </TouchableOpacity>

        {content}

      </View>
    );
  }
}
