import { View, Text } from 'react-native'
import React from 'react'
import DisplayTimerDate from './DisplayTimerDate';
import { UseCountDown } from './UseCountDown';


const ExpiredNotice = () => {
    return (
        <View>
            <Text>ExpiredNotice!!!</Text>
            <Text>Please select a future date and time.</Text>
        </View>
    )
};
const ShowCounter = ({ days, hours, mintues, seconds }) => {
    return (
        <View style={{
            flexDirection: "row", justifyContent: "center"
        }}>
            <DisplayTimerDate value={days} type={'Days'} isdanger={days <= 3} />
            <Text>:</Text>
            <DisplayTimerDate value={hours} type={'Hours'} isdanger={false} />
            <Text>:</Text>
            <DisplayTimerDate value={mintues} type={'Mintues'} isdanger={false} />
            <Text>:</Text>
            <DisplayTimerDate value={seconds} type={'Seconds'} isdanger={false} />
            <Text>:</Text>
        </View>
    )
}
const CountDownTimer = ({ TargetDate }) => {
    const [days, hours, mintues, seconds] = UseCountDown(TargetDate)
    if (days + hours + mintues + seconds <= 0) {
        return <ExpiredNotice />
    }
    else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                mintues={mintues}
                seconds={seconds} />
        )
    }
}

export default CountDownTimer