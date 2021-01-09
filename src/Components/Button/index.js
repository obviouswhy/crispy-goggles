import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';


const Button = ({ title, primary = true, size = 'lg', onClick}) => {

  let btnStyles = primary ? styles.primary : styles.secondary
  let textStyles = primary? styles.textPrimary : styles.textSecondary
  let width = (() => {
    switch (size) {
      case 'lg':
        return '90%'
      case 'md':
        return '45%'
      case 'sm':
        return '25%'
      default:
        return '90%'
    }
  })();

  return (
    <TouchableOpacity onPress={onClick} activeOpacity={.6} style={[btnStyles, { width }]}>
      <Text style={[textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  primary: {
    height: 45,
    backgroundColor: '#0074E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 2
  },
  secondary: {
    height: 45,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: '#FFFFFF',
    padding: 10,
  },
  textSecondary: {
    color: '#1D262C',
    padding: 10
  }
});

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
