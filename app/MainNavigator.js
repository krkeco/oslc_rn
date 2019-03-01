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
import Service from './COMPONENT/Service.js';

import Bulletin from './VIEW/Bulletin.js';
import ModernBulletin from './VIEW/ModernBulletin.js';

import About from './VIEW/About.js';
import ChurchInfo from './VIEW/ChurchInfo.js';

import SermonsAPI from './API/Sermons.js';
import SermonsView from './VIEW/Sermons.js';

import CalendarView from './VIEW/Calendar.js';
import CalendarAPI from './API/Calendar.js';

import NavigatorView from './NavigatorView.js';

// import Hyperlink from 'react-native-hyperlink';
import Communications from 'react-native-communications';


import FontAwesome, { Icons } from 'react-native-fontawesome';

import SideMenu from 'react-native-side-menu';


type Props = {};

export default class MainNavigator extends Component<Props> {
  
 constructor(props) {
    super(props);
    this.state = {
      pdf_text: 'no notes yet',
      dateString: '20180722',

      
      //sermon series
      series: null,
      isOpen: false,
      sermonDataReceived: false,
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
    this.getDateString();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  toggleMenu = () =>{
    if(this.state.isOpen){
        this.setState({isOpen: false});
      }else{
        this.setState({isOpen: true});
      }
  }

  getDateString = () => {

     var d = new Date();
    var day = d.getDay();
    diff = d.getDate() - day + (day == 0 ? 0:0); // adjust when day is sunday
    
    new_day =  new Date(d.setDate(diff));
    year = d.getFullYear();
    month = d.getMonth() +1;
    if(month < 10){month = "0" + month;}
    day = d.getDate();
    if(day < 10){day = "0" + day;}
    this.setState({dateString: ''+year+''+month+day}); 

  }

  setSeries = (seriesData) => {
    this.setState({
      series: seriesData,
      sermonDataReceived: true,
    });
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
    if(this.state.series == null
      && this.state.sermonDataReceived){
      this.setState({sermonDataReceived: false});
    }

    const sideMenu = <View style={styles.sideMenuContainer}>
      <Text style={styles.normal_text}>Our Savior</Text>
      
          <TouchableOpacity style={styles.sideMenuHyperlink} onPress={() => Communications.email(['OSLC.KC@gmail.com'],null,null,'OSLCArcadia feedback email from Mobile','Hi KC, \n\n\n')}>      
          <Text style={[styles.normal_text,styles.infoAwesome]}>{Icons.envelope}</Text>
            <Text style={[{marginTop: 5},styles.small_text]}> App Feedback</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.sideMenuHyperlink} onPress={() => Communications.phonecall('6264477690', true)}>
          <Text style={[styles.normal_text,styles.infoAwesome]}>{Icons.phone}</Text>
            <Text style={[{marginTop: 5},styles.small_text]}> Call us</Text>      
          </TouchableOpacity>

      </View>;


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
            <Picker.Item label="Bulletin" value={1} />
            <Picker.Item label="Newsletter" value={11} />
            
          </Picker>
          
          <Image
            style={styles.appLogo}
            source={{uri: 'https://www.oslcarcadia.com/img/logo/cheesy.png'}}/>
      </View>
    </View>;


            // <Picker.Item label="Modern Worship" value={10} />
    let nav =  [
             
        {name: 'navigator',
        view: <NavigatorView
                sermonDataReceived={this.state.sermonDataReceived}
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
            
            <Bulletin
            dateString={this.state.dateString}/>
          </View>
          }, 

        {name: 'recording',
        view:  
          <View
            style={[{height: '100%', width: '100%'}]}>
            
            <Header title="Recordings"/>
            <SermonsView
                series = {this.state.series}/>
          </View>
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
        view: <ChurchInfo/>},

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

      menu =     <View
        style={{position: 'absolute', top: 12, left: 12, zIndex:20}}>
        <TouchableOpacity
          onPress={() => {this.toggleMenu();}}>

          <Text style={{ fontSize: 32, padding: 4, width: 38, height: 38, fontFamily: 'FontAwesome'}}>{Icons.bars}</Text>
        
        </TouchableOpacity>
        </View>;
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
    let localservice =   {
                    "id": 30,
                    "title": "That's My Boy",
                    "date": "20180429",
                    "created_at": "2018-04-30T20:53:29.373Z",
                    "updated_at": "2018-04-30T20:53:29.373Z",
                    "speaker": "Deacon Michael Powers"
                };
    // content = <Service
    //                 service={localservice}
    //               />;

    return (

      <SideMenu 
        menu={sideMenu}
        isOpen={this.state.isOpen}
        onChange={(isOpen)=>{
          if(isOpen){
            this.setState({isOpen: true});
          }else{
            this.setState({isOpen: false});
          }
        }}>
      <View style={[styles.container]}>
        {webView}
        {content}


          {dev}
        {menu}
        <SermonsAPI
          setSeries={(series) => {this.setSeries(series)}}/>
         
      </View>

      </SideMenu>
    );
  }
}
