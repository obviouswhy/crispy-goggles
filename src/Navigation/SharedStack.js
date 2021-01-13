import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from '../Screens/Home';
import OfferDetails from '../Screens/OfferDetails';

const Stack = createSharedElementStackNavigator();

export const iosTransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

const SharedStack = () => {
  return (
    <Stack.Navigator
     initialRouteName="Home"
     screenOptions={({ route, navigation }) => ({
        headerShown: false,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      })}
     >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="OfferDetails"
        component={OfferDetails}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [{
                  id: `item.${item.id}.logo`
                },
                {
                  id: `item.${item.id}.title`,
                  animation: "fade",
                  resize: "clip",
                  align: "left-top",
                },
                {
                  id: `item.${item.id}.pills`,
                  animation: "fade",
                  resize: "clip",
                  align: "left-top",
                },
          ];
        }}
      />
    </Stack.Navigator>
  );
}

export default SharedStack;

