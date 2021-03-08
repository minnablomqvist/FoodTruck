import React, {useState} from 'react'
import {View, Text, ScrollView, TextInput, Button, StatusBar, TouchableOpacity, Alert} from 'react-native'
import ImageSelector from '../components/ImageSelector'
import {useDispatch} from 'react-redux'
import * as FoodActions from '../store/food-actions'
import styles from '../css/stylesEdit';



const EditScreen = ({navigation}) => {
    const dispatch=useDispatch()


    const [selectedImage, setImage]=useState(null) //hämta och spara bild input
    const onImageTakenHandler=(path)=>{
        setImage(path)
    }
    const [foodTitleValue, setFoodTitleValue]=useState('') //hämta och spara titel input
    const titleEditHandler=(text1)=>{
        setFoodTitleValue(text1)
    }
    const [foodInfoValue, setFoodInfoValue]=useState('') //hämta och spara info input
    const infoEditHandler=(text2)=>{
        setFoodInfoValue(text2)
    }
    const [foodCostValue, setFoodCostValue]=useState('') //Hämta och spara pris input
    const costEditHandler=(text3)=>{
        setFoodCostValue(text3)
    }
    const saveFoodHandler =()=>{
        if(selectedImage == null ||foodTitleValue.length == 0|| foodInfoValue.length == 0 || foodCostValue.length == 0 ){
            Alert.alert("Invalid input", "Alla fält måste vara ifyllda", 
            [ {test: "OK"}]);
        return;
        }
        dispatch(FoodActions.addFood(selectedImage, foodTitleValue,foodInfoValue,foodCostValue))
            navigation.navigate('HomePage')         
    }


    return(
        <View style={styles.background}>
             <StatusBar backgroundColor='#ab976f' barStyle="light-content"/>
        <ScrollView>
        <View style={styles.container}>

            <ImageSelector onImageTaken={onImageTakenHandler} /> 

            <Text style={styles.text_footer}> * Namn </Text>
            <TextInput 
             placeholder="ex. Carbonara"
             placeholderTextColor="#999999"
            style={styles.textInput} 
            onChangeText={titleEditHandler} value={foodTitleValue}/>
             

            <Text style={styles.text_footer}> * Information </Text>
            <TextInput 
              placeholder="ex. bacon, grädde, parmesan"
              placeholderTextColor="#999999"
            style={styles.textInput} 
            onChangeText={infoEditHandler} value={foodInfoValue}/>

           
            <Text style={styles.text_footer}> * Pris </Text>
            <TextInput 
              placeholder="Ange pris."
              placeholderTextColor="#999999"
              keyboardType='numeric' //Detta jag i videon kallar "NumberInput", tror numberInput finns men det fungerar bara i en web-applikation. Fick istället använda keyboardType
            style={styles.textInput} 
            onChangeText={costEditHandler} value={foodCostValue}/>
           
                     <TouchableOpacity 
                     onPress={saveFoodHandler}
                     style={styles.btnSaveContainer}>
                         <Text style={styles.btnSaveText}>Spara</Text>
                     </TouchableOpacity>
         
        
        </View>

        </ScrollView>
        </View>
        
    )
}
export default EditScreen;