import React from 'react'
import { Image } from 'react-native'

const AppLogo = ({ size = 50 }) => (
  <Image source={require('../../Assets/Images/app-logo.png')} style={{height: size, width: size}} />
)

export default AppLogo
