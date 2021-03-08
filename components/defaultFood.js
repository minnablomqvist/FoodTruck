import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {deleteFood} from '../store/food-actions'

const DefaultFoods = props => {
    
    return (
      <View style={styles.container}>
      <View>
            <Image source={require('../assets/lax.png')} style={styles.image} />
       </View> 
        <TouchableOpacity style={styles.placeitem} >
            <View style={styles.card}>   
            <View> 
                <Text style={styles.cardTitle}>Asien inspirerad lax med blomkålspure</Text>
                <Text style={styles.cardInfo}>lax, gurka, tomat, blomkål, sesam, soja</Text>
                <Text style={styles.cardCost}>125 kr {props.cost } 
                </Text>
                </View>
            </View>
        </TouchableOpacity >
        
                <View style={{marginTop:10, alignItems: 'center'}}>
                <TouchableOpacity onPress={deleteFood.bind(props.id)}>
                <FontAwesome5 
                name="trash-alt" 
                size={20} 
                color="black"  
                />
                </TouchableOpacity>
                </View>
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center' ,
  
    },
    placeitem: {
      paddingVertical: -50,
      flexDirection: 'row',
      alignItems: 'center'
  
  },
  image: {
      width: 200,
      height: 200,
      borderColor: '#ccc',
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 5,
      marginBottom: 10
  },

        cardTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: 7,  
        },
        cardInfo: {
          fontSize: 15,
          color: '#515151',
          textAlign: 'center',
          fontStyle: 'italic',
          marginBottom: 5,
        },
        cardCost: {
            fontSize: 15,
            color: '#b8860b',
            textAlign: 'center'
          },
      });
export default DefaultFoods;