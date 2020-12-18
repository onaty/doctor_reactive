// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { GeneralColor } from '../../stylings/general/colors';
import SuccesCheck from '../../../assets/images/svg/succesccheck.svg'
import { SuccessPageStyles } from './successpage';
import { useNavigation } from '@react-navigation/native';

export const SuccessPageScreen = () => {
    const { navigate } = useNavigation()
    const gotoLoginPage = () => {

        navigate("LoginScreen")
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: GeneralColor.backgroundwhite }}>
                <View style={[SuccessPageStyles.maindiv]}>
                    <SuccesCheck />
                    <Text style={[SuccessPageStyles.welcomeText, { marginTop: moderateScale(10, 2) }]}>Congratulations!!!</Text>
                    <Text style={[SuccessPageStyles.welcomeText]}>Your account has been created successfully.</Text>
                    <View style={{ width: '100%', marginTop: moderateScale(35, 2) }}>
                        <CutomFullBotton

                            title="GET STARTED"
                            onButtonPress={() => { gotoLoginPage()}}

                        ></CutomFullBotton>
                    </View>
                </View>
            </SafeAreaView>

        </>
    );
}
