// In App.js in a new project

import * as React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import TeleDocLogo from '../../../assets/images/svg/teledoclogo.svg';
import DsStep1 from '../../../assets/images/svg/psstep1.svg';
import DsStep2em from '../../../assets/images/svg/dsstep2em.svg';
import DsStep3em from '../../../assets/images/svg/dsstep3em.svg';


import ProfilePic from '../../../assets/images/svg/onbpi.svg';
import Checkicon from '../../../assets/images/svg/checkonboardicon.svg';
import CardIcon from '../../../assets/images/svg/cardiconoboarding.svg';
import CalenderIcon from '../../../assets/images/svg/calenderOnboarx.svg';

import DsStep2f from '../../../assets/images/svg/dsstep2f.svg';
import DsStep3f from '../../../assets/images/svg/dsstep3f.svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DoctorSignupStyles, FileSelectStyles } from './doctorsignupstyles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GeneralColor } from '../../stylings/general/colors';
import { CutomInput } from '../../components/input/input';
import { Picker } from '@react-native-picker/picker';
import { CutomSelectField } from '../../components/input/selectfield';
import { CutomIconInput } from '../../components/input/inputwithicon';

export const DoctorSignupScreen = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();
    const [usertype, setUserType] = useState('');
    const [pagetitle, setPageTitle] = useState('Personal Information');
    let [step, setStep] = useState(1);
    useEffect(() => {
      
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
            setPageTitle('Doctor Upload')
        } else if (next == 3) {
            setPageTitle('Profile Picture')
        }
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={[DoctorSignupStyles.maindiv, {}]}>
                <ScrollView style={[{ marginBottom: insets.bottom + moderateScale(5, .4) }]}>
                    <View style={[DoctorSignupStyles.topdiv]}>
                        <TeleDocLogo style={{ marginTop: verticalScale(10) }} />
                        <Text style={[DoctorSignupStyles.title]}>Doctor sign up</Text>
                        <View style={[DoctorSignupStyles.steppercontainer]}>
                            <PatientSignupStepper step={step} />
                        </View>
                        <Text style={[DoctorSignupStyles.sectiontitle]}>{pagetitle} </Text>
                    </View>

                    {step == 1 ?
                        <StepOne nextstep={() => { gonextStep() }} />
                        : step == 2 ?
                            <StepTwo nextstep={() => { gonextStep() }} />
                            : <StepThree nextstep={() => { gonextStep() }} />}
                </ScrollView>
            </View>
        </>
    );
}

const StepOne = (props: any) => {

    return (
        <>
            <View >
                {/* <CutomInput title="FULL NAME" onChangeText={(text: string) => setUserType(text)}
                        value={usertype} placeholder={''} /> */}
                <CutomInput title="FULL NAME" placeholder={'vickyskengz'} />

                <CutomInput title="EMAIL ADDRESS" placeholder={'vickyskengz@gmail.com'} />
                <CutomInput title="PHONE NUMBER" placeholder={'08119898665'} />
                <View style={[DoctorSignupStyles.selectViewHolder]}>
                    <View style={[{ flex: 1, marginRight: 20 }]}>
                        <CutomInput setheight={moderateScale(47, 0.2)} ismargintop={'none'} title="AGE" placeholder={'35'} />
                    </View>
                    <View style={[{ flex: 3, marginRight: 20 }]}>
                        <CutomSelectField label="GENDER" />
                    </View>
                    <View style={[{ flex: 3 }]}>
                        <CutomSelectField label="RELIGION" />
                    </View>

                </View>
                <CutomInput multiline numberOfLines={4} setheight={moderateScale(100, 0.2)} title="ADDRESS" placeholder={'35'} />




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
                <CutomInput title="UNIVERSITY ATTENDED" placeholder={'Ibadan University'} />
                <CutomInput title="YEARS OF EXPIRIENCE" placeholder={'10'} />
                <SelectFile title={'nigeria medical license (MBA)'} filetitle={'choose file'} />
                <SelectFile title={'University Degree'} filetitle={'choose file'} />
                <SelectFile title={'letter of recommendation'} filetitle={'choose file'} />

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

                <View style={[{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft:'30%',marginTop:moderateScale(40,.6) }]}>
                    <ProfilePic />
                    <View style={[{ marginTop: moderateScale(30, .2),width:'100%' }]}>
                        <CutomFullBotton
                            title="Upload Profile Pic"
                            onButtonPress={() => { }}

                        ></CutomFullBotton>
                    </View>
                </View>


                <View style={[{ position:'absolute', width: '100%',bottom:"-60%"}]}>
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
            <View style={[DoctorSignupStyles.holdingContainer]}>

                <View style={[DoctorSignupStyles.filledBE]}></View>
                <View style={[DoctorSignupStyles.contentData]}>
                    <DsStep1 />
                    <Text style={[DoctorSignupStyles.steperlabel]}>Personal</Text>
                    <Text style={[DoctorSignupStyles.steperlabel]}>Information</Text>
                </View>
                <View style={[DoctorSignupStyles.emptyMid, { marginRight: scale(5), borderColor: prop.step >= 2 ? GeneralColor.primary : GeneralColor.anotherGrey, }]}></View>
                <View style={[DoctorSignupStyles.contentData]}>
                    {prop.step >= 2 ? <DsStep2f /> : <DsStep2em />}
                    <Text style={[DoctorSignupStyles.steperlabel]}>Document</Text>
                    <Text style={[DoctorSignupStyles.steperlabel]}>Upload</Text>
                </View>
                <View style={[DoctorSignupStyles.emptyMid, { marginLeft: scale(5), borderColor: prop.step >= 3 ? GeneralColor.primary : GeneralColor.anotherGrey, }]}></View>
                <View style={[DoctorSignupStyles.contentData]}>
                    {prop.step >= 3 ? <DsStep3f /> : <DsStep3em />}
                    <Text style={[DoctorSignupStyles.steperlabel]}>Profile</Text>
                    <Text style={[DoctorSignupStyles.steperlabel]}>Picture</Text>
                </View>
                <View style={[DoctorSignupStyles.emptyBE]}></View>
            </View>
        </>
    )
}


const SelectFile = (props: any) => {

    return (
        <>
            <View style={[FileSelectStyles.mainview]}>
                <Text style={[FileSelectStyles.label]}>{props.title}</Text>
                <View style={[FileSelectStyles.filediv]}>
                    <View style={[FileSelectStyles.emptypart]}><Text>{''}</Text></View>
                    <TouchableOpacity style={[FileSelectStyles.filledpart]}>
                        <Text style={[FileSelectStyles.filledparttext]}>{props.filetitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
