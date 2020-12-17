// In App.js in a new project

import * as React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import TeleDocLogo from '../../../assets/images/svg/teledoclogo.svg';
import PsStep1 from '../../../assets/images/svg/psstep1.svg';
import PsStep2em from '../../../assets/images/svg/psstep2em.svg';
import PsStep3em from '../../../assets/images/svg/psstep3em.svg';

import PsStep2f from '../../../assets/images/svg/psstep2f.svg';
import PsStep3f from '../../../assets/images/svg/psstep3f.svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { PatientSignupStyles } from './patientsignupstyles';
import { ScrollView } from 'react-native-gesture-handler';
import { GeneralColor } from '../../stylings/general/colors';

export const PatientSignupScreen = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();
    const [usertype, setUserType] = useState(true);
    const [step, setStep] = useState(1);
    const gotoSignup = () => {

        navigate("GettingStartedScreen")
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={[PatientSignupStyles.maindiv]}>
                <View style={[PatientSignupStyles.topdiv]}>
                    <TeleDocLogo style={{ marginTop: verticalScale(10) }} />
                    <Text style={[PatientSignupStyles.title]}>patient sign up</Text>
                    <View style={[PatientSignupStyles.steppercontainer]}>
                        <PatientSignupStepper step={step} />
                    </View>
                    <Text style={[PatientSignupStyles.sectiontitle]}>Security Details</Text>
                </View>
            </ScrollView>
        </>
    );
}

interface PatientSignupStepperProps {
    step: number
}
const PatientSignupStepper = (prop: PatientSignupStepperProps) => {
    return (
        <>
            <View style={[PatientSignupStyles.holdingContainer]}>

                <View style={[PatientSignupStyles.filledBE]}></View>
                <View style={[PatientSignupStyles.contentData]}>
                    <PsStep1 />
                    <Text style={[PatientSignupStyles.steperlabel]}>Personal</Text>
                    <Text style={[PatientSignupStyles.steperlabel]}>Information</Text>
                </View>
                <View style={[PatientSignupStyles.emptyMid, { marginRight: scale(5), borderColor: prop.step >= 2 ? GeneralColor.primary : GeneralColor.anotherGrey, }]}></View>
                <View style={[PatientSignupStyles.contentData]}>
                    {prop.step >= 2 ? <PsStep2f /> : <PsStep2em />}
                    <Text style={[PatientSignupStyles.steperlabel]}>Security</Text>
                    <Text style={[PatientSignupStyles.steperlabel]}>Details</Text>
                </View>
                <View style={[PatientSignupStyles.emptyMid, { marginLeft: scale(5) ,borderColor: prop.step >= 3 ? GeneralColor.primary : GeneralColor.anotherGrey,}]}></View>
                <View style={[PatientSignupStyles.contentData]}>
                    {prop.step >= 3 ? <PsStep3f /> : <PsStep3em />}
                    <Text style={[PatientSignupStyles.steperlabel]}>Payment</Text>
                    <Text style={[PatientSignupStyles.steperlabel]}>Information</Text>
                </View>
                <View style={[PatientSignupStyles.emptyBE]}></View>
            </View>
        </>
    )
}