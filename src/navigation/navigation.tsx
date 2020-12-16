// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '../screens/landingpage/landingscreen';
import { LoginScreen } from '../screens/loginscreen/loginscreen';
import { GettingStartedScreen } from '../screens/gettingstarted/gettingstarted';
import { SelectUsertypeScreen } from '../screens/selectusertype/selectusertypescreen';
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SelectUsertypeScreen" component={SelectUsertypeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

