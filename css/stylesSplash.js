import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const height_logo = height * 0.9;
const width_logo = width * 0.98;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  backgroundPicture: {
    width: width_logo ,
      height: height_logo
  },
  textPostition:{
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: -400, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  title: {
    marginBottom: 40,
      color: '#ab976f',
      fontSize: 50,

  },
  text: {
      color: 'grey',
      marginTop:10
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 20,

  },
  signIn: {
      width: 350,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
  }
})
export default styles;
