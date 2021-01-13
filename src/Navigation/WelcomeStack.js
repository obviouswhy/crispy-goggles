import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../Screens/Onboarding';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import SharedStack from './SharedStack';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({ headerShown: false })}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={SharedStack} />
    </Stack.Navigator>
  );
}
export default WelcomeStack;