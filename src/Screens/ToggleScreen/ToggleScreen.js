import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch';

const ToggleScreen = () => {
    const [value, Setvalue] = useState(false)
    return (
        <View style={{ marginTop: 89, marginLeft: 67 }}>
            <Switch
                value={value}
                onValueChange={(val) => Setvalue(!value)}
                disabled={false}
                activeText={'On'}
                inActiveText={'Off'}
                changeValueImmediately={true}
                backgroundActive={'blue'}
                backgroundInactive={'gray'}
                
            />
        </View>
    )
}

export default ToggleScreen