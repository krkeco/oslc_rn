/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Text,
  Dimensions,
  ScrollView,
  View,
  WebView,
  Picker,
  Image,
} from 'react-native';

import styles from './styles.js';
import Header from './COMPONENT/Header.js';

import Bulletin from './VIEW/Bulletin.js';
import ModernBulletin from './VIEW/ModernBulletin.js';

import About from './VIEW/About.js';
import Office from './VIEW/Office.js';

import SermonsAPI from './API/Sermons.js';
import SermonsView from './VIEW/Sermons.js';

import CalendarView from './VIEW/Calendar.js';
import CalendarAPI from './API/Calendar.js';

import NavigatorView from './NavigatorView.js';

import Hyperlink from 'react-native-hyperlink';

import FontAwesome, { Icons } from 'react-native-fontawesome';



type Props = {};

export default class MainNavigator extends Component<Props> {
  
 constructor(props) {
    super(props);
    this.state = {
      pdf_text: 'no notes yet',

      
      //sermon series
      series: null,
      calendar: {
        summary: 'a summary',
        status: 'confirmed',
        items: [
          {
            summary: 'item summary',
            start: {
              dateTime: '2018-08-08',

            }
          }
        ]
      },

      current_index: 0,
      //for bulletin subviews
      subpageIndex: 1,
      
     
      

    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  setSeries = (seriesData) => {
    this.setState({series: seriesData});
  }

  handleBackPress = () => {
    this.navigate(0);
    return true;
  }

  navigate = (index) => {

    this.setState({current_index: index});

  }
  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
  onBack() {
    this.refs['WEBVIEW_REF'].goBack();
  }

  render() {

    let webView =  null;

    let bulletinTabs = 
    <View style={{height: 65}}>
     <View
        style={[styles.header,{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}]}>

          <Picker
            style={styles.twoPickers} itemStyle={styles.twoPickerItems}
            selectedValue={this.state.subpageIndex}
            onValueChange={(itemValue) => {
              this.setState({subpageIndex: itemValue})
              this.navigate(itemValue);
            }}
          >
            <Picker.Item label="Liturgical Bulletin" value={1} />
            <Picker.Item label="Modern Worship" value={10} />
            <Picker.Item label="Newsletter" value={11} />
            
          </Picker>
          
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>
    </View>;

    let nav =  [
             
        {name: 'navigator',
        view: <NavigatorView
                isBulletin={() => {this.navigate(this.state.subpageIndex);}}
                isRecording={() => {this.navigate(2);}}
                isCalendar={() => {this.navigate(3);}}
                isGroups={() => {this.navigate(4);}}
                isDonate={() => {this.navigate(5);}}
                isPrayer={() => {this.navigate(6);}}//not used
                isAbout={() => {this.navigate(7);}}
                isOffice={() => {this.navigate(8);}}
                isStaff={() => {this.navigate(9);}}
                //10 modern worship bulletin
                //11 newsletter
                />}, 
        
        {name: 'bulletin',
        view: 
         <View
            style={[{height: '100%', width: '100%'}]}>
            
            {bulletinTabs}
            
            <Bulletin/>
          </View>
          }, 

        {name: 'recording',
        view:  
          // <View
          //   style={[{height: '100%', width: '100%'}]}>
          //   <WebView
          //     ref='WEBVIEW_REF'
          //     source={{uri: 'https://sermons.oslcarcadia.com'}}
          //     style={{height: Dimensions.get('window').height}}
          //     />
          // </View>
        <SermonsView
                series = {this.state.series}/>
              }, 

        {name: 'calendar',
        view: 
          <View
            style={[{height: '100%', width: '100%'}]}>
            
          <Header title="Calendar"/>

            <WebView
              ref='WEBVIEW_REF'
              source={{uri: 'https://calendar.google.com/calendar/embed?src=40p2dd8jdh8nr8phgcrlvadcg0%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA'}}
              style={{height: Dimensions.get('window').height}}
              />
          </View>
          // <CalendarView
          //   calendar={this.state.calendar}/>
              }, 

        {name: 'groups',
        view: 
          <View
            style={[{height: '100%', width: '100%'}]}>
           <Header title="Groups"/>

            <WebView
              ref='WEBVIEW_REF'
              source={{uri: 'https://www.groups.oslcarcadia.com/index.php'}}
              style={{marginTop: -60, zIndex: -10, height: Dimensions.get('window').height}}
              />
          </View>},

        {name: 'donate',
        view: 
          <View
            style={[{top: 50, height: '100%', width: '100%'}]}>
            <WebView
              ref='WEBVIEW_REF'
              source={{uri: 'https://www.donate.oslcarcadia.com/paypal.php'}}
              style={{height: Dimensions.get('window').height}}
              />
          </View>
        },

        {name: 'prayer',
        view: <Text>PR</Text>},

        {name: 'about',
        view: <About/>},
        
        {name: 'office',
        view: <Office/>},

        {name: 'staff',
        view:  
          <View
            style={[{height: '100%', width: '100%'}]}>
             
             <Header title="Staff"/>
            
            <WebView
              ref='WEBVIEW_REF'
              source={{uri: 'https://contact.oslcarcadia.com'}}
              style={{height: Dimensions.get('window').height}}
              />
          </View>
              },


        {name: 'modern bulletin',
        view: 
         <View
            style={[{height: '100%', width: '100%'}]}>
            {bulletinTabs}
            <ModernBulletin/>
          </View>
        }, 


        {name: 'newsletter',
        view: 
         <View
            style={[{height: '100%', width: '100%'}]}>
             <View
              style={[{zIndex:3}]}>
            {bulletinTabs}
            </View>
             <WebView
              ref='WEBVIEW_REF'
              source={{uri: 'https://announcements.oslcarcadia.com'}}
              style={{height: Dimensions.get('window').height, marginTop: -85}}
              />
          </View>
        }, 
    
      ];


    let sampleText = 'no content yet';
    
    let content = nav[this.state.current_index].view;
      

    let menu =

        <View
        style={{position: 'absolute', top: 12, left: 12, zIndex:20}}>
        <TouchableOpacity
          onPress={() => {this.navigate(0);}}>

          <Text style={{ fontSize: 32, padding: 4, width: 38, height: 38, fontFamily: 'FontAwesome'}}>{Icons.chevronLeft}</Text>
        
        </TouchableOpacity>
        </View>;

    if(this.state.current_index == 0){

      menu = null;
    }
    if(this.state.canGoBack){
      menu = <View
        style={{position: 'absolute', top: 20, left: 10, zIndex: 20}}>
        <TouchableOpacity
          disabled={!this.state.canGoBack}
          onPress={this.onBack.bind(this)}
          >
          <Text style={styles.topbarText}>Go Back</Text>
        </TouchableOpacity>
      </View>;
    }



    let dev = null;

    // if(__DEV__){
    //     dev = <Text style={{position: 'absolute', bottom: 0}}>calendar: waiting</Text>;
    //     if(this.state.calendar != null
    //       && this.state.calendar != undefined){
    //       dev =
    //       <View
    //         style={{height: '0%', position: 'absolute', top: 0, right:0}}>
    //        <Text>calendar: {this.state.calendar.summary}</Text>
    //        <Text>calendar: {this.state.calendar.items[0].start.dateTime}</Text>
    
    //       </View>;
    
    //     }
    // }
     
        // <CalendarAPI
        //   setCalendar={(calendarApi) => {
        //     this.setState({calendar: calendarApi});
        //   }}/>
        // <View
        // style={{height: '0%', position: 'absolute', top: 0}}>
        //   <SermonsAPI
        //     setSeries={(seriesApi) => {
        //       this.setState({series: seriesApi});
        //     }}/>
        // </View>



    // let series = <Text>no series from API </Text>;

    // if(this.state.series != null
    //   && this.state.series != undefined
    //   && this.state.series.length > 0){
    //   series = 
    //   <View style={styles.container}>
    //   {this.state.series.map((series,seriesIndex) => {
        
    //     return <View key={seriesIndex}>
    //       <Text>{series.title}</Text>
    //       {series.services.map((service,serviceIndex) =>{
    //         return <Text key={serviceIndex}>{service.title}</Text>
    //       })}
    //     </View>
    //   })
    //   }
    //   </View>;
    // }

    return (
      <View style={[styles.container]}>
        {webView}
        {content}


          {dev}
        {menu}
        <SermonsAPI
          setSeries={(series) => {this.setSeries(series)}}/>
         
      </View>
    );
  }
}
