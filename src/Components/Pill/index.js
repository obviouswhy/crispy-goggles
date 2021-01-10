import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Pill = ({type, data}) => {

  switch (type) {
    case 'rating':
      return (
        <View style={styles.ratingPill}>
          <Icon name='star' style={styles.ratingIcon} />
          <Text style={styles.ratingText}>{data.rating}</Text>
        </View>
      )
    case 'category':
      let categoryColor = (() => {
        switch (data.category) {
          case 'Clothing':
            return '#8B57DF'
          case 'Food':
            return '#0074E4'
          case 'Electronics':
            return '#74E400'
          case 'Home':
            return '#E40074'
          default:
            break
        }
      })();
      return <View style={[styles.categoryPill, {backgroundColor: `${categoryColor}22`}]}><Text style={[styles.categoryText, {color: categoryColor}]}>{data.category}</Text></View>
    case 'days':
      return <View style={styles.daysPill}><Text style={styles.daysText}>{data.days}</Text></View>
    default:
      return null;
  }
}

export default Pill

const styles = StyleSheet.create({
  ratingPill: {
    backgroundColor: '#FFDC6833',
    paddingRight: 10,
    paddingVertical: 2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems:'center',
    marginHorizontal: 2.5
  },
  ratingIcon: {
    paddingLeft: 10,
    paddingRight: 5,
    color: '#FFC504'
  },
  ratingText: {
    fontSize: 13
  },
  categoryPill: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    marginHorizontal: 2.5
  },
  categoryText: {
    fontSize: 13
  },
  daysPill: {
    backgroundColor: '#CF1E4333',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    marginHorizontal: 2.5
  },
  daysText: {
    fontSize: 13,
    color: '#CF1E43'
  },
})
