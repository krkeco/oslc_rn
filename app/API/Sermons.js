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
    this.getSeries = this.getSeries.bind(this);
  }



  componentWillMount(){

    this.getSeries();

  }

  SortByDate = (a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  SortByDateString = (a, b) => {
        return b.date - a.date;
    }


  async getSeries() {


    try { 
      let response = 
      await fetch('https://hidden-brook-22839.herokuapp.com/series.json',
      {
         method: 'GET',
        headers: {
        },
      });

      let res = await response.text();

      if (response.status >= 200 && response.status < 300) {

        var seriesData = JSON.parse(res);
        // seriesData.sort(this.SortByDate);

        // seriesData.map((series, i) =>
        //   series.services.sort(this.SortByDateString)
        // );

        this.setState({series: seriesData.series});
        this.props.setSeries(seriesData.series);
                  
        // Alert.alert(
        //   'series Found',
        //    seriesData.series[0].title + ' accessed',
        //   [
        //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'Yes.', onPress: () => console.log('yesh') },
        //   ],
        //   { cancelable: true }
        // );
      
      } else {
        let error = res;
        throw error;
              //  Alert.alert(
              //   'We DONT got the cred',
              //   error.toString(),
              //   [
              //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              //     {text: 'Yes.', onPress: () => console.log('yesh') },
              //   ],
              //   { cancelable: false }
              // );
        }
      } catch(error) {
             // Alert.alert(
             //    'We DONT got the cred',
             //    error.toString(),
             //    [
             //      {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             //      {text: 'Yes.', onPress: () => console.log('yesh') },
             //    ],
             //    { cancelable: false }
             //  );
            // this.setState({error: error});
            console.log("error " + error);
            // this.setState({showProgress: false});
          
    // Alert.alert(
    //   'Calendar NOT Found',
    //   'error: ' + error,
    //   [
    //     {text: 'Oops', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'Yes.', onPress: () => console.log('yesh') },
    //   ],
    //   { cancelable: true }
    // );
        }

      }
    



  render() {

    // let series = null;

    // if(this.state.series != null
    //   && this.state.series != undefined
    //   && this.state.series.length > 0){
    //   series = 
    //   <View>
    //   {this.state.series.map((series,index) => {
        
    //     return <Text>{series.title}</Text>
    //   })
    //   }
    //   </View>;
    // }

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}