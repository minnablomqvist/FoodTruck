import React, { useEffect, useMemo } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePageScreen from './Screens/HomePageScreen'
import EditScreen from './Screens/EditScreen'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import foodReducer from './store/food-reducer'
import {AuthContext} from './components/context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from './Screens/RootStackScreen';


const Stack=createStackNavigator();
const Drawer = createDrawerNavigator(); //större projekt än väntat. Skapar en modual istället

const rootReducer=combineReducers({
  foods:foodReducer
});
const store=createStore(rootReducer,applyMiddleware(ReduxThunk))//initialstate och uppdateringar

export default function App() {
    
  const initialLoginState = { //sätter initiala värden till inloggningen
    isLoading: true,
    userName: null,
    userToken: null,
  };
  
  const loginReducer = (prevState, action) =>{  // Mina tre typer av koppling till asyncStorage för inloggning
    switch(action.type){
      case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading:false,
        };
        case 'LOGOUT':
          return{
            ...prevState,
            userName:null,
            userToken:null,
            isLoading: false,
          };
    }};

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  
  const authContext = useMemo(() => ({
    logIn: async(foundUser) => { //vi testar om vi får korrekt user på LoginScreen
      const userToken = String(foundUser[0].userToken); 
      const userName = foundUser[0].username;
        try {

          await AsyncStorage.setItem('userToken', userToken) //sätter userToken
        } catch (e) {
          console.log(e);
        }        
      dispatch({type: 'LOGIN', id: userName, token:userToken});
    },

    logOut: async () => { //lägg till med rootstack
      try {
        await AsyncStorage.removeItem('userToken'); // Tar bort userToken
      } catch(e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
  }), []); //skicka med tom array för vaarje gång vi render vår skärm


  useEffect(() => {
    setTimeout(async() => {
 
      let userToken;
      userToken = null; //ska hämta från asyncstorage istället
      try {
        userToken = await AsyncStorage.getItem('userToken'); //Hämtar userToken
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);



  return (
    
    <Provider store={store}> 
    <AuthContext.Provider value={authContext}>
   <NavigationContainer>
     {loginState.userToken != null ? ( //om man loggar in så kommer man få se första sidan
     <Stack.Navigator initialRouteName='HomePage'
     screenOptions={{
       headerTitleAlign: 'center', 
       headerStyle: {
         backgroundColor: '#ab976f', //change color
       },
       headerTintColor: '#fff',
       headerTitleStyle:{
         fontWeight: 'bold',
       },
     }}>
       <Stack.Screen name="HomePage" component={HomePageScreen} options={{title: 'Food truck'}}/>    
       <Stack.Screen name="EditPage" component={EditScreen} options={{title: 'Lägg till mat'}}/>
     </Stack.Navigator>
     )
     :
     <RootStackScreen/> //annars förblir vi i rootstack
    }
   </NavigationContainer>
   </AuthContext.Provider>
   </Provider>
   
  ); 
}