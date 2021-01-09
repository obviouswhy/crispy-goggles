import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../Screens/Onboarding';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({ headerShown: false })}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}
export default WelcomeStack;