/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeStack from './src/Navigation/WelcomeStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <SafeAreaProvider>
          <WelcomeStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
};
export default App;
