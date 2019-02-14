import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  Animated,
  View,
  Text,
} from 'react-native';
import styles from '../styles';

export default class AnimatedLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      fadeAnim: new Animated.Value(0),
    }
  }

  render(){

    let { fadeAnim } = this.state;
    
    let size = this.props.size;

    let indicator = <ActivityIndicator style={{top:10,marginBottom:10 }} size="large" color="#626F82" />;

    if(!this.state.loading){
      indicator= null;
    }


    let shadow = null;
    if(this.props.shadow != 'false'){
      shadow = styles.avatar_shadow;
    }


    return (
      <View>
        {indicator}
      <Animated.View
        style={[shadow,
            {opacity: fadeAnim,
            width: size,
            height: size,}]}>
        <Image
          resizeMode='cover'
          onLoad={() => {
            this.setState({loading: false});
            Animated.timing(                  
              this.state.fadeAnim,            
              {
                toValue: 1,                   
                duration: 1000,           
              }
            ).start();                
         }}
          style={[
            styles.avatar_box
          ]}
          source={{uri: this.props.source}}/>
          
      </Animated.View>
      </View>
    );
  }
}