import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import AppLogo from '../../Components/AppLogo'

const Splash = () => (
  <SafeAreaView style={{flex: 1}}>
    <ImageBackground source={require('../../Assets/Images/confetti-bg.png')} style={styles.imageBackground}>
      <AppLogo />
    </ImageBackground>
  </SafeAreaView>
)

export default Splash

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});