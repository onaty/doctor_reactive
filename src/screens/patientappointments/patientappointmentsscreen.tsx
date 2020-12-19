// In App.js in a new project

import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import { ImageHeader } from '../../components/headers/imageicon';
import { PatientappointmentStyles } from './patientappointmentsStyles';

export const PatientappointmentsScreen = () => {
    const { width, height } = Dimensions.get("window");
    return (
        <View style={[ ]}>
            <ImageHeader name={'Vicky Uwaoma'} time={'Last seen 2 Aug 2020'} />

            <ScrollView contentContainerStyle={[PatientappointmentStyles.scrollview,{paddingBottom:200} ]}>
                <Appointmentitem
                    doctorname='Dr Tobi Mike' time='01/08/2019, 8:29 AM' amount='1,000' duration='30 mins' status={false} />
                <Appointmentitem
                    doctorname='Dr Felicia Ibokwe' time='01/08/2019, 8:29 AM' amount='23,000' duration='1hr' status={true} />
                <Appointmentitem
                    doctorname='Dr David Orondaye' time='01/08/2019, 8:29 AM' amount='1,400' duration='39 mins' status={true} />
                <Appointmentitem
                    doctorname='Dr Tobi Mike' time='01/08/2019, 8:29 AM' amount='1,000' duration='30 mins' status={false} />
                <Appointmentitem
                    doctorname='Dr Felicia Ibokwe' time='01/08/2019, 8:29 AM' amount='23,000' duration='1hr' status={true} />
                <Appointmentitem
                    doctorname='Dr David Orondaye' time='01/08/2019, 8:29 AM' amount='1,400' duration='39 mins' status={true} />
                <Appointmentitem
                    doctorname='Dr Tobi Mike' time='01/08/2019, 8:29 AM' amount='1,000' duration='30 mins' status={false} />
                <Appointmentitem
                    doctorname='Dr Felicia Ibokwe' time='01/08/2019, 8:29 AM' amount='23,000' duration='1hr' status={true} />
                <Appointmentitem
                    doctorname='Dr David Orondaye' time='01/08/2019, 8:29 AM' amount='1,400' duration='39 mins' status={true} />
                <Appointmentitem
                    doctorname='Dr Tobi Mike' time='01/08/2019, 8:29 AM' amount='1,000' duration='30 mins' status={false} />
                <Appointmentitem
                    doctorname='Dr funk Ibokwe' time='01/08/2019, 8:29 AM' amount='23,000' duration='1hr' status={true} />
       
            <Appointmentitem
                    doctorname='Dr sadefola Mike' time='01/08/2019, 8:29 AM' amount='1,000' duration='30 mins' status={false} />
           
            </ScrollView>
            
        </View>
    );
}


interface Appointmentitem {
    doctorname?: string;
    time?: string;
    amount?: string;
    duration?: string;
    status?: boolean;
}


const Appointmentitem = (props: Appointmentitem) => {
    return (
        <View style={[PatientappointmentStyles.appointmentcard]}>
            <View style={[PatientappointmentStyles.infodiv]}>
                <Text style={[PatientappointmentStyles.doctorename]}>{props.doctorname}</Text>
                <Text style={[PatientappointmentStyles.date]}>{props.time}</Text>
                <Text style={[PatientappointmentStyles.amount]}>₦{props.amount}</Text>
                <Text style={[PatientappointmentStyles.duration]}>Duration: {props.duration}</Text>
            </View>
            <View style={[PatientappointmentStyles.statusdiv]}>
                {props.status ? <Text style={[PatientappointmentStyles.status, { color: '#3CB304' }]}>Completed</Text> : <Text style={[PatientappointmentStyles.status, { color: '#F94242' }]}>On going</Text>}


            </View>
        </View>
    )
}