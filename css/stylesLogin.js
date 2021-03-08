import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#000000'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 200,
          borderTopRightRadius: 80,
          paddingHorizontal: 50,
          paddingVertical: 200
      },
      text_header: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 30
      },
      text_footer: {
          color: '#000000',
          fontSize: 18
      },
      action: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5,
         
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#4d4d4d',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      }
     
    })
    export default styles;
