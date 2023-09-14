//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import imagePath from '../constants/imagePath';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const LoaderImage = ({ imageUrl, placeHolderUrl = Image.resolveAssetSource(imagePath.demoPerson).uri, style, indicatorSize = 'large', containerStyle }) => {
    const [isloaded, setLoaded] = useState(false)
    // console [isloadingStatus,setLoadedStatus]= useState(false)

    return (
        <>
            <View style={{ ...styles.container, ...containerStyle }}>
                <FastImage
                    style={style}
                    source={{
                        // uri:Image.resolveAssetSource(ImagePath.demoPerson).uri
                        uri: imageUrl ? imageUrl : placeHolderUrl,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                    onLoadStart={e => console.log('Loading Start')}
                    onProgress={(e) =>
                        // console.log('Loading Progress ' + e.nativeEvent.loaded / e.nativeEvent.total)
                        setLoaded(false)
                    }
                    onLoad={e =>
                        setLoaded(false)
                        // console.log('Loading Loaded ' + e.nativeEvent.width, e.nativeEvent.height)
                    }
                    onLoadEnd={e =>
                        setLoaded(true)
                        // console.log('Loading Ended')
                    }
                    defaultSource={imagePath.demoPerson}
                />
                {!(isloaded) &&
                    <View
                    style={{
                        position: 'absolute',
                    }}
                    >
                        <ActivityIndicator 
                        size={indicatorSize} 
                        // color={colors.theme}
                        color="black"
                        style={styles.indicator}

                        />
                         </View>

                }


            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center', justifyContent: 'center',
    },
});

//make this component available to the app
export default React.memo(LoaderImage);