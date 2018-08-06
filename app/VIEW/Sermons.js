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

    let series = <Text>no series {this.state.series.length}</Text>;

    if(this.state.series != null
      && this.state.series != undefined
      && this.state.series.length > 0){
      series = 
      <View>
      {this.state.series.map((series,index) => {
        
        return <Text key={index}>{series.title}</Text>
      })
      }
      </View>;
    }

    return (
      <View style={styles.container}>
        {series}
      </View>
    );
  }
}