// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen } from '../screens/landingpage/landingscreen';
import { LoginScreen } from '../screens/loginscreen/loginscreen';
import { GettingStartedScreen } from '../screens/gettingstarted/gettingstarted';
import { SelectUsertypeScreen } from '../screens/selectusertype/selectusertypescreen';
import BackButton from '../../assets/images/svg/backButton.svg';
import { scale } from 'react-native-size-matters';
import { Dimensions } from "react-native";
import { PatientSignupScreen } from '../screens/patientsignup/patientsignupscreen';
import { SuccessPageScreen } from '../screens/successpage/successpagescreen';
import { DoctorSignupScreen } from '../screens/doctorsignup/doctorsignuppscreen';
import { DoctorsDashboardScreen } from '../screens/doctorsdashboard/doctorsdashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeActiveIcon from '../../assets/images/svg/tabs/HomeActiveIcon.svg';
import HomeInactiveIcon from '../../assets/images/svg/tabs/HomeIcon.svg';
import MessagesActiveIcon from '../../assets/images/svg/tabs/messageActiveIcon.svg';
import MessagesInactiveIcon from '../../assets/images/svg/tabs/messageIcon.svg';
import ApointMentsActiveIcon from '../../assets/images/svg/tabs/appointmentActiceicon.svg';
import ApointMentsInactiveIcon from '../../assets/images/svg/tabs/appointmenticon.svg';
import SettingsActiveIcon from '../../assets/images/svg/tabs/settingsActiveicon.svg';
import SettingsInactiveIcon from '../../assets/images/svg/tabs/settingsicon.svg';
import { GeneralColor } from '../stylings/general/colors';
import { SettingsScreen } from '../screens/settings/settingsscreen';
import { PatientmessagesScreen } from '../screens/patientmessages/patientmessagesscreen';
import { PatientappointmentsScreen } from '../screens/patientappointments/patientappointmentsscreen';
import { PatientdashboardScreen } from '../screens/patientdashboard/patientdashboardscreen';

const { width, height } = Dimensions.get("window");
let headerHeight;
export const AppDimensionLen = { width, height, headerHeight }
const Stack = createStackNavigator();

export const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerBackImage: () => <BackButton />,
          headerLeftContainerStyle: { paddingLeft: scale(10) },

        }}
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessPageScreen" component={SuccessPageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen} />
        <Stack.Screen name="SelectUsertypeScreen" component={SelectUsertypeScreen} />
        <Stack.Screen name="PatientSignupScreen" component={PatientSignupScreen} />
        <Stack.Screen name="DoctorSignupScreen" component={DoctorSignupScreen} />
        <Stack.Screen name="DoctorsDashboardScreen" component={DoctorsDashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PatientsTabsStacks" component={PatientsTabsStacks} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function PatientsTabsStacks() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icon;

          if (route.name === 'PatientsHome') {
            Icon = focused
              ? <HomeActiveIcon />
              : <HomeInactiveIcon />;
          } else if (route.name === 'patientsMessages') {
            Icon = focused
              ? <MessagesActiveIcon />
              : <MessagesInactiveIcon />;
          } else if (route.name === 'AppointMents') {
            Icon = focused
              ? <ApointMentsActiveIcon />
              : <ApointMentsInactiveIcon />;
          } else if (route.name === 'Settings') {
            Icon = focused
              ? <SettingsActiveIcon />
              : <SettingsInactiveIcon />;
          }

          // You can return any component that you like here!
          return Icon;
        },
      })}

      tabBarOptions={{
        activeTintColor: GeneralColor.primary,
        inactiveTintColor: GeneralColor.anotherGrey,
      }}
    
    >
      <Tab.Screen name="PatientsHome" component={PatientdashboardScreen} options={{title:'Home'}}/>
      <Tab.Screen name="patientsMessages" component={PatientmessagesScreen} options={{title:'Messages'}} />
      <Tab.Screen name="AppointMents" component={PatientappointmentsScreen} options={{title:'Appointments'}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{title:'Setting'}}/>
    </Tab.Navigator>
  );
}