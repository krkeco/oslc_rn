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

import Pdf from 'react-native-pdf';
import PDFViewer from 'react-native-view-pdf';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class PDFView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
 <PDFViewer
    style={{ flex: 1 }}
    onError={(error) => console.log('onError', error)}
    onLoad={() => console.log('PDF rendered from url')}
    resource="http://www.pdf995.com/samples/pdf.pdf"
    resourceType="url"
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
