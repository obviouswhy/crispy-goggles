import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Button from '../../Components/Button'
import ArrowBack from '../../Components/ArrowBack'
import FloatingInput from '../../Components/FloatingInput'

const Login = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={{padding: 10}}>
          <ArrowBack />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior={'padding'} style={styles.KeyboardAvoidingView}>
        <Image source={require('../../Assets/Images/onboarding-img.png')} style={[styles.loginImage, {position: 'absolute'}]} resizeMode={'cover'} />
        <View style={styles.loginImage} />
        <View style={styles.textWrapper}>
          <Text style={styles.title} >Login</Text>
          <Text style={styles.subtitle} >Welcome back, login to continue!</Text>
        </View>
        <View  style={styles.inputWrapper}>
          <FloatingInput placeholder={'Username'} />
          <View style={styles.separator} />
          <FloatingInput placeholder={'Password'} />
          <View style={styles.separator} />
          <Text style={{alignSelf: 'flex-end'}}>forgot your Password?</Text>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonWrapper}>
        <Button title={'Sign Up with E-mail'} />
        <Button primary={false} title={'Login to my Account'} />
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 30,
    zIndex: 10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65
  },
  KeyboardAvoidingView: {
    flex: 1,
    width: '100%'
  },
  loginImage: {
    height: '40%',
    width: '100%'
  },
  textWrapper: {
    flex: .5,
    paddingHorizontal: 50,
    backgroundColor: 'transparent',
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
  },
  inputWrapper: {
    width: '90%',
    flex:1,
    justifyContent: 'center',
    alignSelf:'center'
  },
  buttonWrapper: {
    flex: .3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 10
  },
});