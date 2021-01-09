import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const FloatingInput = ({ placeholder }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <View style={[styles.wrapper, {borderBottomColor: isActive? '#0074E4' : '#71828A44',}]}>
      <Text style={[styles.placeholder, {color: isActive? '#1D262C' : '#71828A88', fontSize: isActive? 12 : 15, top: isActive? 0 : 15}]}>{placeholder}</Text>
      <TextInput onFocus={()=>setIsActive(true)} onBlur={()=>setIsActive(false)} style={styles.textInput} />
    </View>
  )
}

export default FloatingInput

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    borderBottomWidth: 1
  },
  placeholder: {
    position: 'absolute'
  },
  textInput: {
    width: '100%',
    height: 40
  }
})
