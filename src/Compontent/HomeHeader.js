import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '../constants/imagePath'
const HomeHeader = ({
  headerstyle,
  CenterText,
  leftView,
  personimg,
  centertxt,
  Add,
  more,
  searchimg
}) => {
  return (
    <View style={{ ...styles.headerstyle, ...headerstyle }}>
      <View style={{ ...styles.leftView, ...leftView }}>
        <Image style={{ ...styles.personimg, ...personimg }} source={imagePath.demoPerson} />
        <Image style={{ ...styles.searchimg, ...searchimg }} source={imagePath.ic_search} />
      </View>
      <Text style={{ ...styles.centertxt, ...centertxt }}>{CenterText}</Text>
      <View style={styles.rightView}>
        <Image style={{ ...styles.Add, ...Add }} source={imagePath.ic_add} />
        <Image style={{ ...styles.more, ...more }} source={imagePath.ic_More} />
      </View>
    </View>
  )
}

export default HomeHeader


// styles
const styles = StyleSheet.create({
  headerstyle: {
    minHeight: moderateScale(67),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(18)
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center"
  },
  rightView: {
    flexDirection: "row",
    alignItems: "center",
  },
  centertxt: {
    color: "black",
    fontSize: moderateScale(15)
  },
  personimg: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50)
  },
  searchimg: {
    marginLeft: moderateScale(17),
    width: scale(20),
    height: verticalScale(20)
  },
  righticons: {
    marginRight: moderateScale(17)
  },
  Add: {
    width: scale(20),
    height: verticalScale(20),
    marginRight: moderateScale(12)
  },
  more: {
    width: scale(20),
    height: verticalScale(20)
  }
})