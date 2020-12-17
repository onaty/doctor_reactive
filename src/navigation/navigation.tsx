// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '../screens/landingpage/landingscreen';
import { LoginScreen } from '../screens/loginscreen/loginscreen';
import { GettingStartedScreen } from '../screens/gettingstarted/gettingstarted';
import { SelectUsertypeScreen } from '../screens/selectusertype/selectusertypescreen';
import { GeneralColor } from '../stylings/general/colors';
import BackButton from '../../assets/images/svg/backButton.svg';
import { scale } from 'react-native-size-matters';
import { StyleSheet, Dimensions } from "react-native";
import { useHeaderHeight } from '@react-navigation/stack';
import { PatientSignupScreen } from '../screens/patientsignup/patientsignupscreen';

const { width, height } = Dimensions.get("window");
let headerHeight;
export const AppDimensionLen = { width, height, headerHeight }
const Stack = createStackNavigator();

export const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen}

          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerBackImage: () => <BackButton />,
            headerLeftContainerStyle: { paddingLeft: scale(10) },

          }}
        />
        <Stack.Screen name="SelectUsertypeScreen"
          component={SelectUsertypeScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerBackImage: () => <BackButton />,
            headerLeftContainerStyle: { paddingLeft: scale(10) },

          }} />
        <Stack.Screen name="PatientSignupScreen"
          component={PatientSignupScreen}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerBackImage: () => <BackButton />,
            headerLeftContainerStyle: { paddingLeft: scale(10) },

          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

