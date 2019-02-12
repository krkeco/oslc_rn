import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  View,
} from 'react-native';

import styles from '../styles.js';

import Series from '../COMPONENT/Series.js';


 

type Props = {};
export default class Sermons extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
   
  }

  componentWillMount(){
 
  	this.setState({series: this.props.series});
  }


  render() {

    let series = null;

    if(this.props.series != null
      && this.props.series != undefined
      && this.props.series.length > 0){
      series = 
      <View>
        {this.props.series.map((series,index) => {
        
          return <Series
              key={index}
              series={series}
            />
        })}
      </View>;
    }

    return (
      <ScrollView style={styles.container}>
        {series}
      </ScrollView>
      
    );
  }

}