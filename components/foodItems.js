import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {deleteFood} from '../store/food-actions'


const FoodItem = props => {

    
    return (
      <View style={styles.container}>
      <View>
            <Image source={{ uri: props.image }} style={styles.image} />
       </View> 
        <TouchableOpacity style={styles.placeitem} >
            <View style={styles.card}>   
            <View> 
                <Text style={styles.cardTitle}>{props.title}</Text>
                <Text style={styles.cardInfo}> {props.info}</Text>
                <Text style={styles.cardCost}>{props.cost} :-</Text>
                </View>
            </View>
        </TouchableOpacity >
                
                <View style={{alignItems: 'center'}}>
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
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center' ,

  },
  placeitem: {
    paddingVertical: 5,
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

},
  card: {
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
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
        marginBottom: 4,
      },
      cardCost: {
          fontSize: 15,
          color: '#b8860b',
          textAlign: 'center'
        },
    });
const mapDispatchToProps = dispatch => {
    return{
    deleteFood: (id) => dispatch(deleteFood(id))
    };
  };
export default connect (null,mapDispatchToProps) (FoodItem);