import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colorForBackground } from 'react-native-redash'

const { height, width } = Dimensions.get('window')

const hexToRgb = hex => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const FeaturedCard = ({ backgroundColor, brand, exclusive, offer, productImage, onPress, ...item }) => {
  const { r, g, b } = hexToRgb(backgroundColor)
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
    <TouchableOpacity {...{onPress}} activeOpacity={.8} style={[styles.shadow, styles.cardWrapper, {backgroundColor: backgroundColor}]}>
      <View style={styles.contentWrapper}>
        <View style={styles.leftContent}>
            <Image source={logo} style={[styles.logoImg, { tintColor: brand == 'nk'? colorForBackground(r,g,b) : null }]} resizeMode={'contain'} />
          <Text style={[styles.title, {color: colorForBackground(r,g,b)}]}>{offer}</Text>
          <Text style={[styles.subTitle, {color: colorForBackground(r,g,b)}]}>{exclusive? 'Exclusive Offer' : ''}</Text>
        </View>
        <Image source={{uri: productImage}} style={styles.productImage} resizeMode={'contain'} />
      </View>
    </TouchableOpacity>
  )
}

export default FeaturedCard

const styles = StyleSheet.create({
  cardWrapper: {
    height: 140, width: width * 0.8, marginHorizontal: width* 0.05, borderRadius: 20
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftContent: {
    padding: 20,
    width: '50%'
  },
  logoImg: {
    height: '35%',
    width: '45%'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5
  },
  subTitle: {
    fontSize: 15,
    opacity: .5
  },
  productImage: {
    height: '100%',
    width: '50%'
  }

})
