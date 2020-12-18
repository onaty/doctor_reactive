import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { GeneralColor } from "../../stylings/general/colors";
import { LandingPageStyles } from "../landingpage/landingpage";
import TeleDocLogo from '../../../assets/images/svg/teledoclogo.svg';
import { moderateScale, verticalScale } from "react-native-size-matters";
import { CutomInput } from "../../components/input/input";
import { LoginPageStlyl } from "./loginpage";
import { CutomFullBotton } from "../../components/buttons/fullbutton";


export const LoginScreen = () => {
    const { navigate } = useNavigation();

    const gotoGetStarted = () => {

        navigate("GettingStartedScreen")
    }
    const dashboard= () => {

        navigate("DoctorsDashboardScreen")
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: GeneralColor.backgroundwhite }}>
                <ScrollView contentContainerStyle={[LandingPageStyles.maindivlanding.maindivcontainer]} style={[LandingPageStyles.maindivlanding.maindiv]}>
                    <View style={[LandingPageStyles.maindivlanding.innerView]} >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <TeleDocLogo style={{ marginTop: verticalScale(10) }} />
                        </View>

                        <Text style={[LoginPageStlyl.title]}>Login</Text>
                        <CutomInput title="EMAIL OR PHONE NUMBER" placeholder={'090 0990 0904'} />

                        <CutomInput title="PASSWORD" placeholder={'********************'} />
                        <View style={{ width: '100%', marginTop: moderateScale(25, 2) }}>

                            <CutomFullBotton
                                margintop={10}
                                title="DON’T HAVE AN ACCOUNT? SIGN UP"
                                bgColor={GeneralColor.white}
                                textcolor={GeneralColor.primary}
                                onButtonPress={() => { gotoGetStarted() }}
                            ></CutomFullBotton>
                            <CutomFullBotton
    
                                title="LOGIN"
                                onButtonPress={() => { dashboard() }}
                                margintop={15}

                            ></CutomFullBotton>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    );
}