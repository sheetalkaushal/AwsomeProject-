import { View, Text } from 'react-native'
import React from 'react'
import CountDownTimer from '../../Compontent/CountDownTimer'

const CountMonth = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
    const NOW_IN_MS = new Date().getTime()

    const DateTimeAfterThreeDays = THREE_DAYS_IN_MS + NOW_IN_MS
    console.log(DateTimeAfterThreeDays, "DateTimeAfterThreeDays >>");

    return (
        <View>
            <Text>Count DownTimer</Text>
            <CountDownTimer TargetDate={DateTimeAfterThreeDays} />
        </View>
    )
}

export default CountMonth;