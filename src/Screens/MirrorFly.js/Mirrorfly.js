import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from "react";
import imagePath from '../../constants/imagePath';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import LoaderImage from '../../Compontent/LoaderImage';
import HomeHeader from '../../Compontent/HomeHeader';
const MirrorFly = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [imageData, setImageData] = useState("")
  // // ImagePicker
  // const imagePicker = () => {
  //   let options = {
  //     storageOption: {
  //       path: 'image',
  //     },
  //   };
  //   launchImageLibrary(options, response => {
  //     console.log('imagepath>>12===', response?.assets[0]?.uri);
  //     setselectImage(response?.assets[0]?.uri);
  //   });
  // };

  //IMAGEPICKER
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      // includeBase64: true,
      // maxHeight: 2000,
      // maxWidth: 2000,
    };
    launchImageLibrary(options, (response) => {
      // console.log(response,'responce library')
      if (response.didCancel) {
        console.log('User cancelled image picker', response);
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        // let imageUri = response.uri || response.assets?.[0]?.uri;
        let imageUri = response;
        setImageData(imageUri?.assets[0]);
        setSelectedImage(imageUri?.assets[0]?.uri)
      }
    });
  };
  // console.log(selectedImage?.uri,'imageUriimageUriimageUriimageUri');

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        // let imageUri = response.uri || response.assets?.[0]?.uri;
        let imageUri = response;
        setImageData(imageUri?.assets[0])
        setSelectedImage(imageUri?.assets[0]?.uri)
      }
    });
  }
  //alertfunction
  const twoOptionAlertFunction = () => {
    Alert.alert(
      // 'Select Your Image ',
      // 'From Gallery Camera ',

      'Choose From',
      ' ',
      [
        { text: 'close', callingCode: true },
        { text: 'Gallery', onPress: () => openImagePicker() },
        { text: 'Camera', onPress: () => handleCameraLaunch() },
      ]
    )
  }
  return (

    <View style={styles.profileview}>
      <LoaderImage
        imageUrl={selectedImage}
        style={styles.editProfile}
      />
      {/* <Image style={styles.editProfile}
        source={{ uri:IMAGE_BASE_URL+ selectedImage?.uri }} /> */}
      <TouchableOpacity onPress={() => twoOptionAlertFunction()}>
        <Image style={styles.MarkTick} source={imagePath.ic_Edit} />
      </TouchableOpacity>
    </View>
  )
}

export default MirrorFly


// define styleSheet
const styles = StyleSheet.create({
  profileview: {
    marginTop: 18,
    alignItems: "center",
  },
  MarkTick: {
    alignSelf: "center",
    position: "absolute",
    marginTop: -15
  },
  editProfile: {
    height: 87,
    width: 87,
    borderRadius: 44,
    borderWidth: 1,
  },

})
