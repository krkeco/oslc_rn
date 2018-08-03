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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainNavigator/>
    );
  }
}

