import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

import styles from '../styles.js';

import Service from './Service.js';
import Header from './Header.js';
import BackButton from './BackButton.js';

type Props = {};
export default class Series extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  componentWillMount(){

  }


  toggleModal(visible) {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
      
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
            <View>


            <Header 
              type="2"
              title={this.props.series.title}/>

            <BackButton
              onPress={()=>{this.setState({modalVisible: false});}}/>

          </View>
          <ScrollView style={styles.container}>
                   
            <View>
              {this.props.series.services.map((service,index) =>{
                  return <Service
                            key={index}
                            service={service}
                          />
                })}
            </View>

          </ScrollView>
      
        </Modal>

        <TouchableHighlight
          style={[styles.recordingModal]}
          onPress={() => {
            this.toggleModal();
          }}>
          <View>
          <Text style={styles.title} >{this.props.series.title}</Text>
          <Image
           style={{width: '100%', height:'50%',marginLeft: '0%'}}
           source={{uri: this.props.series.image}}
           />
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}