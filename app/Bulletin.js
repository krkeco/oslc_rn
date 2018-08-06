/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import styles from './styles.js';

import Pdf from 'react-native-pdf';

type Props = {};
export default class App extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      dateString: '20180722',
    }
  }


  componentWillMount(){
    var d = new Date();
    var day = d.getDay();
    diff = d.getDate() - day + (day == 0 ? 0:0); // adjust when day is sunday
    
    new_day =  new Date(d.setDate(diff));
    year = d.getFullYear();
    month = d.getMonth() +1;
    if(month < 10){month = "0" + month;}
    day = d.getDate();
    if(day < 10){day = "0" + day;}
    this.setState({dateString: ''+year+''+month+day}); 
  }

  render() {

    let url = 'https://oslcarcadia.com/bulletins/'+ this.state.dateString+'.pdf';
    const source = {uri: url,cache:true};


    return (
     
      <View style={{flex: 1}}>
      <Text>{this.state.dateString}</Text>
       <Pdf
        source={source}
        onLoadComplete={(numberOfPages,filePath)=>{
            console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages)=>{
            console.log(`current page: ${page}`);
        }}
        onError={(error)=>{
            console.log(error);
        }}
        style={styles.pdf}/>
      </View>
    );
  }
}
