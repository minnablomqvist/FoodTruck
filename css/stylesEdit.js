import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center' 
      },
      text_footer: {
          color: '#000000',
          fontSize: 18
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#000000',
        marginBottom: 15,
        marginTop: 10,
        borderBottomWidth: 1,
      },
      choosePicture: {
        marginTop: 25,
        marginBottom: 25,
        height: 200,
        width: 200,
        borderStyle: 'solid',  
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnSaveContainer: {
        elevation: 2,
        backgroundColor: "#73b92d",
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 22,
        marginTop: 25
      },
      btnSaveText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
     
    })
    export default styles;
