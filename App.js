/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  StyleSheet, StatusBar } from 'react-native';
import Onboarding from './src/Screens/Onboarding';
import Splash from './src/Screens/Splash';
import Welcome from './src/Screens/Welcome';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Splash /> */}
      {/* <Welcome /> */}
      <Onboarding />
    </>
  );
};
export default App;
