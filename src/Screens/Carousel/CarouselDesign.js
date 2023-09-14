import React, { useState, useRef } from 'react';
import { View, Dimensions, Image, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import { moderateScale } from 'react-native-size-matters';
export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const data = [
    {
        id: 1,
        propertyDetailsImage: imagePath.ic_propertyDetailsImage,
        more: imagePath.ic_carousalOption,
        CarouselBack: imagePath.ic_carousalBack,
    },
    {
        id: 2,
        propertyDetailsImage: imagePath.ic_propertyDetailsImage,
        more: imagePath.ic_carousalOption,
        CarouselBack: imagePath.ic_carousalBack,
    },
    {
        id: 3,
        propertyDetailsImage: imagePath.ic_propertyDetailsImage,
        more: imagePath.ic_carousalOption,
        CarouselBack: imagePath.ic_carousalBack,
    },
];
const CarouselDesign = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: "100%",
                        height: 300,
                        flex: moderateScale(0.7),

                    }}
                    source={item.propertyDetailsImage}
                >
                    <View style={{
                        // marginTop: Platform.OS === 'ios' ? getStatusBarHeight() + moderateScale(10) : moderateScale(15),
                        // ...commonStyles.rowSpaceBetween,
                        // backgroundColor: "transparent",
                        paddingHorizontal: moderateScale(20),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: moderateScale(20)

                    }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}
                        >
                            <Image source={item.CarouselBack} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={item.more} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.PaginationView}>
                        <Pagination
                            dotsLength={data.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 8,
                                backgroundColor: 'blue',
                            }}
                            tappableDots={true}
                            inactiveDotStyle={{
                                backgroundColor: 'white',

                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                ref={isCarousel}
                layout="default"
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)}
            />
        </View>
    );
}

export default CarouselDesign;

// style

const style = StyleSheet.create({
    PaginationView: {
        flex: moderateScale(0.43),
        justifyContent: 'flex-end'
    }
})
