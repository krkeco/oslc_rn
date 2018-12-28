import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles.js';

import SoundPlayer from 'react-native-sound-player';

import FontAwesome, { Icons } from 'react-native-fontawesome';

type Props = {};
export default class Series extends Component<Props> {
 constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playType: 'sermon',

    }
  }

  playMedia = (url) =>{
     try {
      // play the file tone.mp3
      // SoundPlayer.playSoundFile('tone', 'mp3')
      // or play from url
      
      this.setState({playing: true});

      SoundPlayer.playUrl(url)
    } catch (e) {
      alert('Something went wrong with playback! Please check your internet connection, or try restarting the app.');
      console.log(`cannot play the sound file`, e);
    }
  }


  componentWillMount(){

  }

  parseDate = (date) => {
    return date.slice(4,6) + "/" + date.slice(6,8) + "/" + date.slice(0,4);
  }


  setPlayButton = () => {
    let trackUrl = 'https://oslcarcadia.com/sermons/'+this.props.service.date+'_'+this.state.playType+'.mp3';

    if(this.state.playing){
     return <TouchableOpacity
        onPress={() => {
          SoundPlayer.pause();
          this.setState({playing: false});
        }}>
      
      <Text style={styles.recordingIcons}>
        {Icons.pause}
      </Text>
      </TouchableOpacity>;
    }else{
    return <TouchableOpacity
      onPress={() => {this.playMedia(trackUrl)}}>
      
      <Text style={styles.recordingIcons}>
        {Icons.play}
      </Text>
    </TouchableOpacity>;

    }
  }

  render() {
    let sermonStyle = null;
    let serviceStyle = null;
    if(this.state.playType == 'sermon'){
      sermonStyle = {
    borderWidth: 0.75,
    borderColor: 'black',};
    }else{
      serviceStyle = {
    borderWidth: 0.75,
    borderColor: 'black',};
    }

    let playButton =  this.setPlayButton();
    


    return (
      <View style={styles.recordingModal} >
        <View style={[styles.horizontal,{marginTop: -10}]}>
            <Text style={[styles.recordingFont,{flex: 9}]}>{this.props.service.title}</Text>
            <Text style={[styles.recordingFont,{flex: 5}]}>{this.parseDate(this.props.service.date)}</Text>
          </View>
        <View style={[styles.horizontal,{marginTop: -25}]}>
          
          <View style={[styles.vertical,{flex:7}]}>
            <Text style={[styles.recordingFont,{color: 'black', marginTop: 15}]}>{this.props.service.speaker}</Text>
          </View>

          <View style={[styles.vertical,{flex:2}]}>
            
            <TouchableOpacity
              style={sermonStyle}
              onPress={() => {
                SoundPlayer.pause();
                this.setState({playType: 'sermon'});
              }}>
            
                  <Text style={styles.recordingSubFont} >Sermon</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[serviceStyle,{marginTop: 10}]}
              onPress={() => {
                SoundPlayer.pause();
                this.setState({playType: 'service'});
              }}>
                  <Text style={styles.recordingSubFont} >Service</Text>
            
            </TouchableOpacity>

          </View>
          <View style={[styles.vertical,{flex:2}]}>
            {playButton}
          </View>
        </View>

      </View>
    );
  }
}