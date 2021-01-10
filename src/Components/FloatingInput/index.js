import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

const FloatingInput = ({ placeholder }) => {

  const [isActive, setIsActive] = useState(false)
  const [text, setText] = useState("")

  const top = useSharedValue(20);
  const scale = useSharedValue(1);
  const left = useSharedValue(0);
  const opacity = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => ({
    top: top.value,
    transform: [{ scale: scale.value }],
    left: left.value,
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  const setActive = state => {
    top.value = state || text.length > 0? withSpring(0, customSpring) : withSpring(20, customSpring)
    scale.value = state || text.length > 0? withSpring(.7, customSpring) : withSpring(1, customSpring)
    left.value = state || text.length > 0? withSpring(-9, customSpring) : withSpring(0, customSpring)
    opacity.value = state || text.length > 0? withSpring(1, customSpring) : withSpring(0.5, customSpring)
    setIsActive(state)
  }

  const customSpring = {
    damping: 20,
    stiffness: 90,
  }

  return (
    <Animated.View style={[styles.wrapper, animatedOpacity, {borderBottomColor: isActive? '#0074E4' : '#71828A55'}]}>
      <Animated.Text style={[styles.placeholder, animatedStyle, animatedOpacity]}>{placeholder}</Animated.Text>
      <TextInput onFocus={()=>setActive(true)} onBlur={()=>setActive(false)} onChangeText={text => setText(text)} style={styles.textInput} />
    </Animated.View>
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
    position: 'absolute',
    color: '#1D262C'
  },
  textInput: {
    width: '100%',
    height: 40
  }
})
