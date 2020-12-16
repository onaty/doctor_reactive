import React from "react";
import { View, Text, SafeAreaView, StatusBar, Button, Alert, } from "react-native";
import { SvgUri } from "react-native-svg";
import { GeneralColor } from "../../stylings/general/colors";
import { LandingPageStyles } from "./landingpage";
import OnboardingImage from '../../../assets/images/svg/onboarding.svg';
import { ScrollView } from "react-native-gesture-handler";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { BlockBlueButton, TextButtonWhite } from "../../stylings/buttons/buttons";
import { CutomFullBotton } from "../../components/buttons/fullbutton";

export const LandingScreen = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: GeneralColor.backgroundwhite }}>
                <ScrollView contentContainerStyle={[LandingPageStyles.maindivlanding.maindivcontainer]} style={[LandingPageStyles.maindivlanding.maindiv]}>
                    <View style={[LandingPageStyles.maindivlanding.innerView]} >
                        <Text style={[LandingPageStyles.maindivlanding.welcomeText]}>Welcome</Text>
                        <OnboardingImage style={{ marginTop: verticalScale(40) }} />
                        <Text
                            style={[LandingPageStyles.maindivlanding.welcomeTextInfo]}>
                            health is wealth, therefore take care of your health</Text>
                    </View>
                    <View style={{ width: '100%', marginTop: moderateScale(25,2) }}>
                        <CutomFullBotton

                            title="GER STARTED"
                        ></CutomFullBotton>
                        <CutomFullBotton
                            margintop={10}
                            title="ALREADY REGISTERED? LOGIN"
                            bgColor={GeneralColor.white}
                            textcolor={GeneralColor.primary}
                        ></CutomFullBotton>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    );
}