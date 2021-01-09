import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Button from '../../Components/Button'

const Welcome = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../../Assets/Images/welcome-img.png')} style={styles.welcomeImage} resizeMode={'contain'} />
      <View style={styles.textWrapper}>
        <Text style={styles.title} >Cheers to Discounts!</Text>
        <Text style={styles.subtitle} >Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.</Text>
      </View>
      <Button title={'Get Started'} />
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  welcomeImage: {
    width: '100%',
    height: '65%'
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