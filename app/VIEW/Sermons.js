import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View,
} from 'react-native';

import styles from '../styles.js';


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
        
        return <View key={index}>
          <Text>{series.title}</Text>
          {series.services.map((service,index) =>{
            return <Text>{service.title}</Text>
          })}
          </View>
      })
      }
      </View>;
    }

    return (
      <View style={styles.container}>
      <Text>Sermon Recordings:</Text>
        {series}
      </View>
    );
  }

}