import { StyleSheet, Dimensions } from 'react-native';

let oslcGray = '#626F82';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },


  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vertical : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  app: {
    
  },

  recordingModal: {
    borderRadius: 5,
    backgroundColor: oslcGray,
    height: 100,
    margin: 5,
    paddingTop: 10,


  },
  recordingIcons: { 
    fontSize: 32, 
    padding: 4,
    marginLeft: 10,
    width: 38, 
    height: 38, 
    fontFamily: 'FontAwesome',
  },
  recordingFont: {
    fontFamily: 'Futura',
    fontSize: 18,
    margin: 5,
    color: 'white',
  },
  recordingSubFont: {
    fontFamily: 'Raleway',
    fontSize: 10,
    marginLeft: 7,
    marginTop: 0,
    color: 'white'
  },

  navContainer: {
    flex: 1, 
    justifyContent: 'space-evenly',
  },

  infoAwesome: {
    marginTop:5,
    fontFamily: 'FontAwesome',
  },
  officeHyperlink: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  navDuets: {


    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',

  },
  navBox:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: oslcGray,

    flex: 1,
    justifyContent: 'center',
  },
  navFontA: {
   fontSize: 45,
   fontFamily: 'FontAwesome', 
   textAlign: 'center',
   color: oslcGray,
  },
  navFont: {
    marginTop: 5,
    fontFamily: 'Futura',
    textAlign: 'center',
    fontSize: 20,
    color: oslcGray,
  },
  hyperlink: {
    color: 'orange'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: oslcGray,
    marginBottom: 5,
  },
  small_text: {
    fontFamily: 'Raleway',
    fontSize: 20,
  },
  normal_text: {
    fontSize: 25,
  },
  large_text: {
    fontSize: 30,
  },
  text_underline: {
    textDecorationLine: 'underline',
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#555',
    height: 65,
    width: '100%',
    paddingTop: 20,
    
    left: 0,
    top: 0,
  },
  title: {
    fontFamily: 'Futura',
    marginLeft: 20,
    marginTop: -5,
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute', 
    top: 20,
    left: 10, 
  },

  appLogo: {
    height: 50,
    width: 50,
    right: 10,
    top: 5,
    position: 'absolute',
  },

  appLogoContainer: {
  },

  twoPickers: {
    fontFamily: 'Futura',
    fontSize: 24,
    marginTop: -20,

    width: '70%',
    height: 65,
  },
  twoPickerItems: {
    fontFamily: 'Raleway',
    fontSize: 18,
    height: 65,
    color: 'white'
  },


});
