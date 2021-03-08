import React from 'react';
import {  View, Text, TouchableOpacity,  ImageBackground  , StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../css/stylesSplash'
import splash from '../assets/splash.png'

const SplashScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
        <ImageBackground  source={splash}
        style={styles.backgroundPicture}
        resizeMode="stretch">
            <View style={styles.textPostition}>
                <Text style={styles.title}>Food Truck</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                <LinearGradient
                    colors={['#000000', '#000000']}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Get started</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </View>
        </ImageBackground >
        </View>
           
      </View>
    );
};

export default SplashScreen;

