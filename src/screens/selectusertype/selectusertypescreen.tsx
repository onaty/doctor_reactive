// In App.js in a new project

import * as React from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import TeleDocLogo from '../../../assets/images/svg/teledoclogo.svg';
import Docicon from '../../../assets/images/svg/doctoricon.svg';
import PatientIcon from '../../../assets/images/svg/patientmaskicon.svg';
import { SelectUsertypeStyles } from './selectusertypestyles';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const SelectUsertypeScreen = () => {
    const insets = useSafeAreaInsets();
    const { navigate } = useNavigation();
    const [usertype, setUserType] = useState(true);
    const gotoSignup = () => {

        navigate("PatientSignupScreen")
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <View style={[SelectUsertypeStyles.maindiv, { paddingBottom: insets.bottom }]}>


                <View style={{}}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <TeleDocLogo style={{ marginTop: verticalScale(10) }} />
                    </View>
                    <Text style={[SelectUsertypeStyles.chooseAccounttype]}>Choose Account Type</Text>
                    <View style={[SelectUsertypeStyles.accountDocs]}>
                        <Pressable
                            onPress={() => { setUserType(true)}}
                            style={[usertype ? SelectUsertypeStyles.selectDivfilled : SelectUsertypeStyles.selectDivempty, { marginRight: scale(15) }]} >
                            <View style={[SelectUsertypeStyles.innerView]} >
                                <View style={[{ width: '100%' }]}>
                                    <View style={[usertype ? SelectUsertypeStyles.filledStateforradio : SelectUsertypeStyles.emptyStateforradio]}>
                                    </View>
                                </View>
                                <Docicon />
                                <Text style={[SelectUsertypeStyles.Accounttext]}>Doctor</Text>
                            </View>
                        </Pressable>
                        <Pressable
                         onPress={() => { setUserType(false)}}
                         style={[!usertype ? SelectUsertypeStyles.selectDivfilled : SelectUsertypeStyles.selectDivempty, {}]} >
                            <View style={[SelectUsertypeStyles.innerView]} >
                                <View style={[{ width: '100%' }]}>
                                    <View style={[!usertype ? SelectUsertypeStyles.filledStateforradio : SelectUsertypeStyles.emptyStateforradio]}>
                                    </View>
                                </View>
                                <PatientIcon />
                                <Text style={[SelectUsertypeStyles.Accounttext]}>Patient</Text>
                            </View>
                        </Pressable>
                    </View>

                </View>
                <View style={{ width: '100%', paddingHorizontal: moderateScale(20, 2),marginBottom:verticalScale(30) }}>
                    <CutomFullBotton

                        title="NEXT"
                        onButtonPress={() => { gotoSignup() }}

                    ></CutomFullBotton>
                </View>
            </View>

        </>
    );
}
