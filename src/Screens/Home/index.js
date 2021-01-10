import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeaturedCard from '../../Components/FeaturedCard';
import OfferCard from '../../Components/OfferCard';

const featuredOffers = [
  { id: 1, brand: 'mcd', productImage: 'https://i.pinimg.com/originals/2b/96/07/2b9607fcd5f236b4d5483673d0168c67.png', backgroundColor: '#d45349', offer: '20-30% OFF', exclusive: true },
  { id: 2, brand: 'hm', productImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2bf8b9a-43dd-4849-a8f3-e1b1b8cb3bc5/d87a4o5-af7ce089-08ff-4f36-aa42-4de439f2d350.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTJiZjhiOWEtNDNkZC00ODQ5LWE4ZjMtZTFiMWI4Y2IzYmM1XC9kODdhNG81LWFmN2NlMDg5LTA4ZmYtNGYzNi1hYTQyLTRkZTQzOWYyZDM1MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.IqYqVtTpmWG5JAWRrAGL176yn5SqBcFrz52vwVOxt6o', backgroundColor: '#F5E2E4', offer: '40-60% OFF', exclusive: true },
  { id: 3, brand: 'nk', productImage: 'http://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png', backgroundColor: '#a859a8', offer: '25% OFF', exclusive: true },
  { id: 4, brand: 'bk', productImage: 'https://i.dlpng.com/static/png/1596227--burger-meal-png-435_285_preview.png', backgroundColor: '#FBECDB', offer: '40% OFF', exclusive: true },
]
const sections = [
  {id: 1, name: 'All Offers'},
  {id: 2, name: 'Food'},
  {id: 3, name: 'Clothing'},
  {id: 4, name: 'Electronics'},
  {id: 5, name: 'Home'},
]

const offers = [
  {
    id: 1,
    brand: 'mcd',
    backgroundColor: '#d45349',
    title: '20-30% OFF',
    subtitle_short: 'Flat Discounts on Every purchase!',
    subtitle_long: 'Flat discounts on every food purchase on above 50$. T&C Apply',
    data: {
      rating: '4.5',
      category: 'Food',
      days: '15 days'
    }

  },
  {
    id: 2,
    brand: 'hm',
    backgroundColor: '#F5E2E4',
    title: '40-60% OFF',
    subtitle_short: 'For first time users',
    subtitle_long: 'Flat discounts on every food purchase on above 50$. T&C Apply',
    data: {
      rating: '4.2',
      category: 'Clothing',
      days: '12 days'
    }
  },
  {
    id: 3,
    brand: 'nk',
    backgroundColor: '#a859a8',
    title: '25% OFF',
    subtitle_short: 'For Repeat Orders',
    subtitle_long: 'Flat discounts on every food purchase on above 50$. T&C Apply',
    data: {
      rating: '4.3',
      category: 'Clothing',
      days: '11 days'
    }
  },
  {
    id: 4,
    brand: 'bk',
    backgroundColor: '#FBECDB',
    title: '40% Cashback',
    subtitle_short: 'For first time users',
    subtitle_long: 'Flat discounts on every food purchase on above 50$. T&C Apply',
    data: {
      rating: '3.9',
      category: 'Food',
      days: '9 days'
    }
  },
]

/**
 * TODO:
 *
 *
 *  - Add category tabs slider
 *
 *
 */

const { height, width } = Dimensions.get('window')


const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, {top: insets.top + 10}]}>
          <Text style={styles.headerTitle}>Offers Galore</Text>
          <Image source={{uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.headerProfile} resizeMode={'contain'} />
        </View>
        <View style={styles.headerSpacer} />
        <ScrollView style={{paddingVertical: 10}}>
          <ScrollView
            horizontal
            decelerationRate={'fast'}
            snapToInterval={width * 0.9}
            showsHorizontalScrollIndicator={false}
            style={{paddingVertical: 10}}
            >
            {featuredOffers.map( item => <FeaturedCard key={item.id} {...item} />)}
          </ScrollView>
          <View style={{width: '100%', height: 50, backgroundColor: '#44444422', marginVertical: 20}} />
          <View style={{alignItems: 'center'}}>
            <Text style={styles.recommendedTitle}>Recommended for you</Text>
            {offers.map( item => <OfferCard key={item.id} {...item} />)}
          </View>
          <View style={{height: 120}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
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
  recommendedTitle: {
    marginVertical: 15,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#71828A'
  }
})
