import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import styles from '../styles.js';

type Props = {};
export default class App extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
    }
  }



  componentWillMount(){

  }


  render() {
    return (
      <View
        style={styles.header}>
        <Text style={styles.title}>{this.props.title}</Text>
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>
    );
  }
}