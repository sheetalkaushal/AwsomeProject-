import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const DisplayTimerDate = ({ type, value,isdanger}) => {
    return (
        <View>
            <View style={{alignItems:"center",padding:moderateScale(5)}}>
                <Text>{type}</Text>
            </View>
            <View>
                <Text>{value}</Text>
            </View>

        </View>
    )
}

export default DisplayTimerDate