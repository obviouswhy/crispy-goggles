import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Button from '../../Components/Button'
import SocialButton from '../../Components/SocialButton'

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../../Assets/Images/onboarding-img.png')} style={styles.welcomeImage} resizeMode={'contain'} />
      <View style={styles.textWrapper}>
        <Text style={styles.title} >Welcome Abroad!</Text>
        <Text style={styles.subtitle} >Signup to get started with the app. Login if you already have an account.</Text>
      </View>
      <View style={{width: '100%', height: '30%', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between'}}>
          <SocialButton type={'fb'} size={'md'} title={'f'} />
          <SocialButton type={'gl'} size={'md'} title={'G'} />
        </View>
        <Button title={'Sign Up with E-mail'} />
        <Button primary={false} title={'Login to my Account'} />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  welcomeImage: {
    width: '100%',
    height: '30%'
  },
  textWrapper: {
    paddingHorizontal: 50,
    marginTop: '-10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    color: '#1D262C',
    fontSize: 20,
    fontWeight: '600',
    padding: 15
  },
  subtitle: {
    textAlign: 'center',
    color: '#71828A',
    fontSize: 12
  }
});