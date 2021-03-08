
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => ( //som en första sida som vi alltid kan se oavsett inloggad eller ej
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>

    </RootStack.Navigator>
);

export default RootStackScreen;