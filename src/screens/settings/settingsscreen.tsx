// In App.js in a new project

import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import { ImageHeader } from '../../components/headers/imageicon';
import { CustomListsView } from '../../components/lists/itemslists';
import { DoctorsDashboardScreenStyles } from '../doctorsdashboard/doctorsdashboardstyle';
import ForwardIcon from '../../../assets/images/svg/forwardicon.svg';
import LogoutIcon from '../../../assets/images/svg/logout.svg';
export const SettingsScreen = () => {
    return (
        <View style={[DoctorsDashboardScreenStyles.maindiv]}>
            <ImageHeader name={'Vicky Uwaoma'} time={'Last seen 2 Aug 2020'} />


            <FlatList
                style={{
                    paddingHorizontal: scale(15), marginTop: moderateScale(20, 0.5)
                }}
                data={[
                    { key: 'Edit profile', icon: <ForwardIcon /> },
                    { key: 'card details', icon: <ForwardIcon /> },
                    { key: 'Change password', icon: <ForwardIcon /> },
                    { key: 'chat history', icon: <ForwardIcon /> },
                    { key: 'Log out', icon: <LogoutIcon /> },
                ]}
                renderItem={({ item }) => <CustomListsView title={item.key} icon={item.icon} paddingBottom={6} paddingTop={9} />}
            />


        </View>
    );
}
