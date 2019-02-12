/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import MainNavigator from './app/MainNavigator.js';

import codePush from "react-native-code-push";

type Props = {};
export default class App extends Component<Props> {

	componentDidMount(){
	  codePush.sync({
	    // updateDialog: true,
	    installMode: codePush.InstallMode.IMMEDIATE
	  });
	}

  render() {
    return (
      <MainNavigator/>
    );
  }
}



App = codePush(App);
