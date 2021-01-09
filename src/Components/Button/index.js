import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ title, type = 'primary'}) => {

  let btnStyles = styles.primary
  let textStyles = styles.textPrimary
  if (type == 'secondary') btnStyles = styles.secondary, textStyles = styles.textSecondary

  return (
    <TouchableOpacity style={btnStyles}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  primary: {
    width: '90%',
    height: 45,
    backgroundColor: '#0074E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  secondary: {
    width: '90%',
    height: 45,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: '#FFFFFF'
  },
  textSecondary: {
    color: '#1D262C'
  }
});