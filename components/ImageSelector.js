import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'
import {View, Text, Image, Button, ImageBackground, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import styles from '../css/stylesEdit';

const ImageSelector = props =>{
    
    const [pickedImage, setPickedImage]=useState(null)
    const takeImageSelector =async()=>{
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        }); //öppnar kamera
        console.log(image)
        setPickedImage(image.uri)   
        props.onImageTaken(image.uri)
    }

    return(
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={takeImageSelector}>
        <View style={styles.choosePicture}>
          <ImageBackground
            source={{uri: pickedImage}}
            style={{height: 100, width: 100}}
            imageStyle={{borderRadius: 15}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather
                name="camera"
                size={50}
                color="black"
                style={{
                  opacity: 0.7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
        </View>
    )
}
export default ImageSelector;