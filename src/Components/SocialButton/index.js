import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'


const SocialButton = ({ type, size = 'lg', onClick}) => {

  const SocialIcon = () => (
    type == 'fb'
      ? <Icon name={'facebook-f'} size={15} color={'#3B5998'} />
      : <Icon name={'google'} size={15} color={'#EA4335'} />
  )

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
    <TouchableOpacity onPress={onClick} activeOpacity={.6} style={[styles.btn, { width }]}>
      <SocialIcon />
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
  btn: {
    height: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#71828A80',
    margin: 2
  }
});

SocialButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['fb', 'gl']).isRequired,
  onClick: PropTypes.func,
};
