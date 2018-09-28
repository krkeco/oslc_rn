import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
  app: {
    fontFamily: 'futura_medium_bt'

  },

  navContainer: {
    flex: 1, 
    justifyContent: 'space-evenly',
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
    borderColor: '#626F82',

    flex: 1,
    justifyContent: 'center',
  },
  navFontA: {
   fontSize: 45,
   fontFamily: 'FontAwesome', 
   textAlign: 'center',
  },
  navFont: {
    fontFamily: 'futura_medium_bt',
    textAlign: 'center',
    fontSize: 20,
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
    color: '#626F82',
    marginBottom: 5,
  },
  small_text: {
    fontSize: 15,
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
    height: 80,
    width: '100%',
    padding: 20,

    left: 0,
    top: 0,
  },
  title: {
    marginLeft: 20,
    marginTop: -5,
    fontSize: 28,
    color: '#626F82',
    textAlign: 'center',
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


});
