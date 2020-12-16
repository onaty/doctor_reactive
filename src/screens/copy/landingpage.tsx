// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { LandingPageStyles } from './landingpage';

export const LandingScreen = () => {
    return (
        <View style={[LandingPageStyles.maindivlanding.maindiv]}>
            <Text style={[LandingPageStyles.maindivlanding.welcomeText]}>Welcome</Text>
        </View>
    );
}
