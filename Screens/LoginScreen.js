import React, { useState, useContext } from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import {AuthContext} from '../components/context'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../css/stylesLogin'
import User from '../Model/User';


const LoginScreen = ({navigate}) => {

    const [data, setData] = useState({ //kräver dessa för inloggning
        username: '', 
        password: '', 
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true, //valideringar med felmeddelanden
        isValidPassword: true,
    });

    const { logIn } = useContext(AuthContext);

    const textInputChange =(value) =>{  //för att få till check när användaren skriver korrekt input
        if(value.trim().length >= 4){ 
            setData({
                ...data, //get exsiting state
                username: value,
                check_textInputChange: true,
                isValidUser: true 
            })
        }
        else {
            setData({
                ...data,
                username: value,
                check_textInputChange: false,
                isValidUser: false

            })}}
    
    const handlePasswordChange =(value) => {
        if(value.trim().length >= 3) { //trim tar bort mellanslag
            setData({
                ...data,
                password: value,
                isValidPassword: true
            });
        }
        else{
            setData({
                ...data,
                password: value,
                isValidPassword: false
            });
    }}

    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry //Motsatsen
        });
    }

    const handleValidUserName =(value) =>{
        if(value.trim().length >= 4) { //trim tar bort mellanslag
            setData({
                ...data,
                isValidUser: true
            });
        }
        else{
            setData({
                ...data,
                isValidUser: false
            });
   }
}
   
    const loginHandle = (userName, password) => {    
        const foundUser = User.filter( item => { //.filter går igenom varje item i User och ser om input är desamma som "databasen" User
            return userName == item.username && password == item.password;
        });

        if (foundUser.length == 0) { //felhantering
            Alert.alert("Invalid user", "Användarnamn eller lösenord är inkorrekt", 
            [ {test: "OK"}]);
        return; //istället för att gå vidare till logIn funktionen
        }
        logIn(foundUser);
    }

    return (
        <View style={styles.container}>
       <View style={styles.footer}>
            <StatusBar backgroundColor='#000000' barStyle="light-content"/>
       
               <Text style={styles.text_footer}>
                Username</Text>
               <View style={styles.action}>
                   <FontAwesome  //user icon
                    name="user" 
                    size={24} 
                    color="black" 
                   />
                   <TextInput 
                   placeholder="Enter your Username"
                   placeholderTextColor="#999999"
                   style={styles.textInput}
                   autoCapitalize="none" //får inte rätta ett namn
                   onChangeText={(value) => textInputChange(value)}
                   onEndEditing ={(event)=>handleValidUserName(event.nativeEvent.text)} 
                   //onEndEditing skickar inte value utan ett event, utan vi får gräva ner i event för att hitta value(text)
                   />
                {data.check_textInputChange ?
                  <AntDesign  // check icon
                    name="check" 
                    size={24} 
                    color="black" />
                  : null }
                 </View>
                 {data.isValidUser ? null : 
                 <Text style={styles.errorMsg}>Du måste ange minst 4 tecken</Text>
                 }

            <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
               <View style={styles.action}>
                <FontAwesome
                     name="lock" 
                    size={24} 
                    color="black" />
                <TextInput 
                   placeholder="Enter your password"
                   placeholderTextColor="#999999"
                   style={styles.textInput}
                   secureTextEntry={data.secureTextEntry ? true : false} //visar inte lösenordet
                   autoCapitalize="none" //får inte rätta ett lösenord
                   onChangeText={(value) => handlePasswordChange(value)}
                   />
                   <TouchableOpacity onPress={updateSecureTextEntry}>
                       {data.secureTextEntry ? 
                    <Feather 
                    name="eye-off" 
                    size={24} 
                    color="black" />
                   :
                   <Ionicons 
                   name="eye-outline" 
                   size={24} 
                   color="black" 
                   />
                  }
                   </TouchableOpacity>
                 </View>
                 {data.isValidPassword ? null : 
                 <Text style={styles.errorMsg}>Du måste ange minst 3 tecken</Text>
                 }

                <TouchableOpacity>
                 <Text style={{color: '#009c9e', marginTop:15}}>Forgot password?</Text>
                 </TouchableOpacity>

                 <View style={styles.button}>
                     <TouchableOpacity 
                     style={styles.signIn}
                     onPress={() =>{loginHandle(data.username, data.password)}}>
                     <LinearGradient  //knapp
                     colors={['#ab976f', '#b4a37f']}
                     style={styles.signIn}>
                         <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                     </LinearGradient>
                     </TouchableOpacity>

                     <TouchableOpacity style={[styles.signIn, {marginTop: 15}]}>
                     <LinearGradient  
                     colors={['#c6c6c6', '#b9b9b9']}
                     style={styles.signIn}>
                         <Text style={[styles.textSign, {color:'#e0e0e0'}]}>Sign Up</Text>
                     </LinearGradient>
                     </TouchableOpacity>
                 </View>
       </View>
       </View>
    );
};
export default LoginScreen;
