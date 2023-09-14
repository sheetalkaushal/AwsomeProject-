import { View, Text } from 'react-native'
import React from 'react'
import ToggleScreen from './src/Screens/ToggleScreen/ToggleScreen'
import MirrorFly from './src/Screens/MirrorFly.js/Mirrorfly'
import ChatPage from './src/Screens/ChatPage/ChatPage'
import Carousel from './src/Screens/Carousel/CarouselDesign'
import CarouselDesign from './src/Screens/Carousel/CarouselDesign'
import Cube from './src/Screens/Cube/Cube'
import { FilterImageScreen } from './src/Screens/FilterImageScreen/FilterImageScreen'
import CountMonth from './src/Screens/CountMonth/CountMonth'


const App = () => {


  return (
    <View style={{ flex: 1 }}>
      {/* <ToggleScreen/> */}
      {/* <MirrorFly/> */}
      {/* <ChatPage/> */}
      {/* <CarouselDesign /> */}
      {/* <Cube/> */}
      {/* <FilterImageScreen /> */}
      <CountMonth/>
    </View>
  )
}

export default App