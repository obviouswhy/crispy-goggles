import React from 'react'
import { View, Text, Image } from 'react-native'

const ArrowBack = ({size = 15}) => {
  return (
    <Image source={require('../../Assets/Images/Icons/arrow-back.png')} style={{height: size, width: size*2}} resizeMode={'contain'}  />
  )
}

export default ArrowBack
