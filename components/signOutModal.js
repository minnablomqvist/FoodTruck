import React from 'react'
import {View, TouchableOpacity, Modal, StyleSheet, Text} from 'react-native'
import {AuthContext} from '../components/context'


const SignOutModal = props => {

    const {logOut} = React.useContext(AuthContext);
   

    return (
        <Modal visible={props.modalvisability} animationType="slide" transparent>
      <View style={styles.container}>
        
        <TouchableOpacity 
                     onPress={() => {logOut()}}
                     style={[styles.btnContainer, {backgroundColor:"#ff3333"}]}>
                         <Text style={styles.btnText}>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity 
                     onPress={props.modalNoVisability}
                     style={[styles.btnContainer, {backgroundColor: "#73b92d"}]}>
                         <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {

      flexDirection: 'column',
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center' ,
      marginTop: 120,
      marginBottom: 170,
      marginLeft: 60,
      marginRight: 60,
      backgroundColor: '#fff'
      
    },
    btnContainer: {
        elevation: 2,
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 22,
        marginTop: 25
      },
      btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
 
    });

export default SignOutModal;