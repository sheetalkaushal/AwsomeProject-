import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback } from 'react'
import HomeHeader from '../../Compontent/HomeHeader'
import imagePath from '../../constants/imagePath'

import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ChatPage = () => {
  const SnapChatList = [
    {
      id: 1,
      profileimg: imagePath.demoPerson,
      userName: "Neha",
      streak: 103,
      time: "23m"
    },
    {
      id: 2,
      profileimg: imagePath.demoPerson,
      userName: "Sonali Sharma",
      streak: 205,
      time: "23m"
    },
    {
      id: 3,
      profileimg: imagePath.demoPerson,
      userName: "Riya Sharma",
      streak: 75,
      time: "23m"
    },
    {
      id: 4,
      profileimg: imagePath.demoPerson,
      userName: "Priyam",
      streak: 13,
      time: "23m"
    },
  ]
  const snapComponent = useCallback((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.snaplistView}>
        <View style={styles.snaplist}>
          <Image source={item.profileimg} style={styles.profileimg} />
          <Text style={{ marginLeft: 12 }}>{item.userName}</Text>
          <Text>new snap</Text>
        </View>

      </TouchableOpacity>
    )
  }, [])

  return (
    <View>
      <HomeHeader CenterText="Chat" />
      {SnapChatList.map((item, index) => {
        return (
          snapComponent(item, index)
        )
      })}
    </View>
  )
}

export default ChatPage


// styles details
const styles = StyleSheet.create({
  snaplistView: {
    flexDirection: "row",
    marginHorizontal: moderateScale(18),
    alignItems: "center"
  },
  snaplist: {
    marginTop: moderateScale(12),
    flexDirection: "row"
  },
  profileimg: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 20,
  },
})
