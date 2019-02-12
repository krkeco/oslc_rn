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
  View,
  Dimensions,
  Alert,
} from 'react-native';


import styles from '../styles.js';

import Pdf from 'react-native-pdf';

type Props = {};
export default class App extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      dateString: '20180722',
      width: 0,
      height: 0,
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

    this.checkDimensionValues();
  }

  checkDimensionValues = () => {

    this.setState({
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        });
  }

  render() {

    let url = 'https://oslcarcadia.com/bulletins/'+ this.state.dateString+'.pdf';
    const source = {uri: url,cache:true};

    let dev = null;
    // if(__DEV__){
    //   <Text>{this.state.dateString}</Text>
    // }

    return (
     
      <View style={{flex: 1, width: this.state.width, height: this.state.height}}
        onLayout={this.checkDimensionValues}
      >
      {dev}
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
        style={{
          flex:1
        }}
        />
      </View>
    );
  }
}
