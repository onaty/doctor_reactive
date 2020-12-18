// In App.js in a new project

import * as React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import TeleDocLogo from '../../../assets/images/svg/teledoclogo.svg';
import PsStep1 from '../../../assets/images/svg/psstep1.svg';
import PsStep2em from '../../../assets/images/svg/psstep2em.svg';
import PsStep3em from '../../../assets/images/svg/psstep3em.svg';


import ProfileIcon from '../../../assets/images/svg/profileblueonboarding.svg';
import Checkicon from '../../../assets/images/svg/checkonboardicon.svg';
import CardIcon from '../../../assets/images/svg/cardiconoboarding.svg';
import CalenderIcon from '../../../assets/images/svg/calenderOnboarx.svg';

import PsStep2f from '../../../assets/images/svg/psstep2f.svg';
import PsStep3f from '../../../assets/images/svg/psstep3f.svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { PatientSignupStyles } from './patientsignupstyles';
import { ScrollView } from 'react-native-gesture-handler';
import { GeneralColor } from '../../stylings/general/colors';
import { CutomInput } from '../../components/input/input';
import { Picker } from '@react-native-picker/picker';
import { CutomSelectField } from '../../components/input/selectfield';
import { CutomIconInput } from '../../components/input/inputwithicon';

export const PatientSignupScreen = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();
    const [usertype, setUserType] = useState('');
    const [pagetitle, setPageTitle] = useState('Personal Information');
    let [step, setStep] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        console.log(step, 'all steps');
        if (step >= 3) {
            gotoSignup()
        }

    });
    const gotoSignup = () => {

        navigate("SuccessPageScreen")
    }
    const gonextStep = () => {
        let next = step + 1
        setStep(next);
        if (next == 2) {
            setPageTitle('Security Details')
        } else if (next == 3) {
            setPageTitle('Payment Information')
        }
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
                    <Text style={[PatientSignupStyles.sectiontitle]}>{pagetitle} </Text>
                </View>

                {step == 1 ?
                    <StepOne nextstep={() => { gonextStep() }} />
                    : step == 2 ?
                        <StepTwo nextstep={() => { gonextStep() }} />
                        : <StepThree nextstep={() => { gonextStep() }} />}
            </ScrollView>
        </>
    );
}

const StepOne = (props: any) => {

    return (
        <>
            <View>
                {/* <CutomInput title="FULL NAME" onChangeText={(text: string) => setUserType(text)}
                        value={usertype} placeholder={''} /> */}
                <CutomInput title="FULL NAME" placeholder={''} />

                <CutomInput title="EMAIL ADDRESS" placeholder={''} />
                <View style={[PatientSignupStyles.selectViewHolder]}>
                    <View style={[{ flex: 1, marginRight: 20 }]}>
                        <CutomSelectField label="GENDER" />
                    </View>
                    <View style={[{ flex: 1 }]}>
                        <CutomSelectField label="RELIGION" />
                    </View>

                </View>
                <View style={[PatientSignupStyles.selectViewHolder, { marginTop: 20 }]}>
                    <View style={[{ flex: 1, marginRight: 20 }]}>
                        <CutomSelectField label="BLOOD GROUP" />
                    </View>
                    <View style={[{ flex: 1 }]}>
                        <CutomSelectField label="GENOTYPE " />
                    </View>

                </View>

                <View style={[{ marginTop: moderateScale(30, .2) }]}>
                    <CutomFullBotton

                        title="NEXT"
                        onButtonPress={() => { props.nextstep() }}

                    ></CutomFullBotton>
                </View>
            </View>
        </>
    )
}

const StepTwo = (props: any) => {

    return (
        <>
            <View>
                {/* <CutomInput title="FULL NAME" onChangeText={(text: string) => setUserType(text)}
                        value={usertype} placeholder={''} /> */}
                <CutomInput title="PASSWORD" placeholder={'*******'} />

                <CutomInput title="CONFIRM PASSWORD" placeholder={'*****'} />


                <View style={[{ marginTop: moderateScale(30, .2) }]}>
                    <CutomFullBotton

                        title="NEXT"
                        onButtonPress={() => { props.nextstep() }}

                    ></CutomFullBotton>
                </View>
            </View>
        </>
    )
}

const StepThree = (props: any) => {

    return (
        <>
            <View>
                {/* <CutomInput title="FULL NAME" onChangeText={(text: string) => setUserType(text)}
                        value={usertype} placeholder={''} /> */}
                <CutomIconInput title="NAME ON CARD" placeholder={'*******'} icon={<ProfileIcon style={[{}]} />} />

                <CutomIconInput title="CARD NUMBER" placeholder={'*****'} icon={<Checkicon />} />
                <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]} >
                    <View style={[{ marginRight: 10, flex: 1 }]}>

                        <CutomIconInput title="CVV" placeholder={'*****'} icon={<CardIcon />} />
                    </View>
                    <View style={[{ flex: 1 }]}>

                        <CutomIconInput title="MM/YY" placeholder={'*****'} icon={<CalenderIcon />} />
                    </View>
                </View>


                <View style={[{ marginTop: moderateScale(30, .2) }]}>
                    <CutomFullBotton

                        title="SUBMIT"
                        onButtonPress={() => { props.nextstep() }}

                    ></CutomFullBotton>
                </View>
            </View>
        </>
    )
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
                <View style={[PatientSignupStyles.emptyMid, { marginLeft: scale(5), borderColor: prop.step >= 3 ? GeneralColor.primary : GeneralColor.anotherGrey, }]}></View>
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