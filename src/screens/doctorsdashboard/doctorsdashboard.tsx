// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ImageHeader } from '../../components/headers/imageicon';
import { CustomListsView } from '../../components/lists/itemslists';
import { DoctorsDashboardScreenStyles } from './doctorsdashboardstyle';

import ForwardIcon from '../../../assets/images/svg/forwardicon.svg';

import LogoutIcon from '../../../assets/images/svg/logout.svg';
import { moderateScale, scale } from 'react-native-size-matters';

export const DoctorsDashboardScreen = () => {
    return (
        <View style={[DoctorsDashboardScreenStyles.maindiv]}>
            <ImageHeader name={'Doctor Tobi'} time={'Last seen 6 Aug 2019'} />


            <FlatList
            style={{
                paddingHorizontal: scale(15),marginTop:moderateScale(20,0.5)}}
                data={[
                    { key: 'View chats', icon: <ForwardIcon /> },
                    { key: 'Bank details' , icon: <ForwardIcon /> },
                    { key: 'Edit profile' , icon: <ForwardIcon /> },
                    { key: 'Chat history', icon: <ForwardIcon />  },
                    { key: 'Change password', icon: <ForwardIcon />  },
                    { key: 'Log out', icon: <LogoutIcon />  },
                ]}
                renderItem={({ item }) => <CustomListsView title={item.key} icon={item.icon} paddingBottom={6} paddingTop={9} />}
            />

        </View>
    );

}


