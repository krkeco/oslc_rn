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
                  
      
      } else {
        let error = res;
        throw error;
        }
      } catch(error) {
            console.log("error " + error);

        }

      }
    



  render() {

    let series = null;

    if(this.state.series != null
      && this.state.series != undefined
      && this.state.series.length > 0){
      series = 
      <View>
      {this.state.series.map((series,index) => {
        
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
      <View />
    );
  }
}