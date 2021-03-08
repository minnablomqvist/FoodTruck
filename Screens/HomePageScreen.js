import React,  { useState } from 'react'
import {View, Text, Button, FlatList, StatusBar, TouchableOpacity,} from 'react-native'
import { useSelector } from 'react-redux';
import FoodItem from '../components/foodItems'
import DefaultFoods from '../components/defaultFood'
import SignOutModal from '../components/signOutModal'
import styles from '../css/stylesHome'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


const HomePageScreen = ({navigation}) =>{

  const foods=useSelector(state=>state.foods.foods) //hämtar array med objekt
  const [showModal, setModal]=useState(false) //öppnar modal för att logga ut
  const closeModal = () => { 
    setModal(false) //stänger modal
  }

    
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Ionicons.Button  //knapp med plus-tecken
            name="add-sharp" 
            size={33} 
            color="white" 
            backgroundColor="#ab976f"
            onPress={() => (navigation.navigate('EditPage'))}/>
          ),
          headerLeft: () =>
          <FontAwesome.Button 
          name="user-circle-o" //User-symbol
          size={28}
          color="white"
          backgroundColor="#ab976f"  
          style={styles.userBtn}
          onPress={() => setModal(true)}/>
        });
      }, [navigation]);

    return(
      <View>   
         <StatusBar backgroundColor='#ab976f' barStyle="light-content"/>
         <SignOutModal modalvisability={showModal} modalNoVisability={closeModal}/>        
         {foods.length ?( //visar flatlist och arrayen foods innehåller ngt. (Arrayen foods skapas i reducer med hänsyn till modelen Food)
          <FlatList data={foods} keyExtractor={item=>item.id} renderItem={itemData=> <FoodItem image={itemData.item.imageUri} title={itemData.item.title} info={itemData.item.info} cost={itemData.item.cost}/>} />
         
          )
        :
        <DefaultFoods/> //dummy data skapad för gränssnittet
        }
          <TouchableOpacity 
                     onPress={()=>navigation.navigate('EditPage')}>
                         <Text style={styles.btnAddText}>Lägg till</Text>
          </TouchableOpacity>
      </View>
    )
}
export default HomePageScreen;