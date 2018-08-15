import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  normal_text: {
    fontSize: 25,
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
    color: '#828FA2',
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
