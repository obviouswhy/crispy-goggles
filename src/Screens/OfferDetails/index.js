import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ArrowBack from '../../Components/ArrowBack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Pill from '../../Components/Pill'

const OfferDetails = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const { item } = route.params
  const { brand, title, subtitle_long, data } = item
  let logo = (() => {
    switch (brand) {
      case 'mcd':
        return require('../../Assets/Images/brand_logos/macdonalds-logo.png')
      case 'hm':
        return require('../../Assets/Images/brand_logos/hm-logo.png')
      case 'nk':
        return require('../../Assets/Images/brand_logos/nike-logo.png')
      case 'bk':
        return require('../../Assets/Images/brand_logos/bk-logo.png')
      default:
        break
    }
  })();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={styles.safeArea}>
        <View View style={[styles.header, {top: insets.top + 10}]}>
          <TouchableOpacity onPressOut={() => navigation.goBack()} style={{ height: 40, width: 40, alignItems:'center', justifyContent: 'center'}} >
            <ArrowBack />
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 40, width: 40, alignItems:'center', justifyContent: 'center'}} >
            <Icon name={'star-o'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerSpacer} />
        <View style={{width: '100%', height: '20%', flexDirection: 'row', alignItems:'center', paddingHorizontal: 20}}>
          <SharedElement id={`item.${item.id}.logo`} style={{height: '50%', width: '20%', marginRight: 20}}>
            <Image source={logo} style={styles.logoImg} resizeMode={'contain'} />
          </SharedElement>
          <SharedElement style={{}} id={`item.${item.id}.title`}>
            <View style={{width: '90%'}}>
              <Text style={styles.title}>{title}</Text>
              <Text style={{}}>{subtitle_long}</Text>
            </View>
          </SharedElement>
        </View>
        <SharedElement style={{}} id={`item.${item.id}.pills`}>
          <View style={{flexDirection: 'row',}}>
            <Pill type={'rating'} {...{data}} />
            <Pill type={'category'} {...{data}} />
            <Pill type={'days'} {...{data}} />
          </View>
        </SharedElement>
      </SafeAreaView>
    </View>
  )
}

export default OfferDetails

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    padding: 20
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  headerProfile: {
    height: 50,
    width: 50,
    borderRadius: 40/2,
    backgroundColor: 'plum',
  },
  headerSpacer: {
    height: 75
  },
  logoImg: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
})
