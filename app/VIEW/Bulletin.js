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
   

    this.checkDimensionValues();
  }

  checkDimensionValues = () => {

    this.setState({
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        });
  }

  render() {

    let url = 'https://oslcarcadia.com/bulletins/'+ this.props.dateString+'.pdf';
    const source = {uri: url,cache:false};

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
