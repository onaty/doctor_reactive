// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ForwardIcon from '../../../assets/images/svg/forwardicon.svg';
import DoctorImage from '../../../assets/images/svg/doctorimage.svg';
import { ImageHeader } from '../../components/headers/imageicon';
import { TestingSVGDD } from '../../components/svgimages/foll';
import { DoctorsSVG } from '../../components/svgimages/doctorimage';
import { scale, verticalScale } from 'react-native-size-matters';
import { PatientdashboardStyles } from './patientdashboardstyles';
import { GeneralColor } from '../../stylings/general/colors';

export const PatientdashboardScreen = () => {
    return (
        <View style={[{ backgroundColor: '#F7F7F7' }]}>
            <ImageHeader name={'Vicky Uwaoma'} time={'Last seen 2 Aug 2020'} />
            <ScrollView contentContainerStyle={[PatientdashboardStyles.maindiv]}>
                <View style={{ marginBottom: verticalScale(20) }}>
                    <RequestDocCard />
                </View>
                <View style={{ marginBottom: verticalScale(70) }}>
                    <RequestDocCardIscoming />
                </View>
                <View style={[PatientdashboardStyles.softdiv,]}>
                    <View style={[PatientdashboardStyles.leaguediv, { marginRight: scale(20) }]}>
                        <Text style={[PatientdashboardStyles.leaguedivtext]}>view all doctors’ profile</Text>
                    </View>
                    <View style={[PatientdashboardStyles.leaguediv]}>
                        <Text style={[PatientdashboardStyles.leaguedivtext]}>number of sessions done</Text>
                        <Text style={[PatientdashboardStyles.leaguedivnumber]}>5</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const RequestDocCard = (props: any) => {

    return (
        <>
            <View style={[PatientdashboardStyles.selectcarddiv]}>
                <View style={[{ height: 150 }]}>
                    <Image
                        style={{ width: '100%' }}
                        source={require('../../../assets/images/svg/doctorsimage.png')} />
                </View>
                <View style={[PatientdashboardStyles.infodiv]}>
                    <View style={[]}>
                        <Text style={[PatientdashboardStyles.speacktoDoctor]}>speak to A Doctor</Text>
                    </View>
                    <View style={[]}>
                        <Text style={[PatientdashboardStyles.amount]}>₦ 1,000</Text>
                        <Text style={[PatientdashboardStyles.rate]}>per 30 mins</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const RequestDocCardIscoming = (props: any) => {

    return (
        <>
            <View style={[PatientdashboardStyles.selectcarddiv]}>
                <View style={[{ height: verticalScale(150) }]}>
                    <Image
                        style={{ width: '100%', height: verticalScale(150) }}
                        source={require('../../../assets/images/svg/doctorgroup.png')} />
                </View>
                <View style={[PatientdashboardStyles.infodiv]}>
                    <View style={[]}>
                        <Text style={[PatientdashboardStyles.speacktoDoctor]}>speak to A Doctor</Text>
                    </View>
                    <View style={[]}>
                        <Text style={[PatientdashboardStyles.amount]}>₦ 1,000</Text>
                        <Text style={[PatientdashboardStyles.rate]}>per 30 mins</Text>
                    </View>
                </View>
                <View style={[PatientdashboardStyles.overlay]}>
                    <Text style={[PatientdashboardStyles.overlaytext]}>Coming soon!!!</Text>
                </View>
            </View>

        </>
    )
}
