// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { FlatList, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { ImageHeader } from '../../components/headers/imageicon';
import { CustomListsView } from '../../components/lists/itemslists';
import { DoctorsDashboardModalStyles, DoctorsDashboardScreenStyles } from './doctorsdashboardstyle';
import ForwardIcon from '../../../assets/images/svg/forwardicon.svg';
import LogoutIcon from '../../../assets/images/svg/logout.svg';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { CutomFullBotton } from '../../components/buttons/fullbutton';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';


export const DoctorsDashboardScreen = () => {

    const [modalVisible, setShowModal] = useState(false);
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
        ? Dimensions.get("window").height
        : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

        const closeSD=()=>{
            useState(false)
        }
    return (
        <View style={[DoctorsDashboardScreenStyles.maindiv]}>
            <ImageHeader name={'Doctor Tobi'} time={'Last seen 6 Aug 2019'} />


            <FlatList
                style={{
                    paddingHorizontal: scale(15), marginTop: moderateScale(20, 0.5)
                }}
                data={[
                    { key: 'View chats', icon: <ForwardIcon /> },
                    { key: 'Bank details', icon: <ForwardIcon /> },
                    { key: 'Edit profile', icon: <ForwardIcon /> },
                    { key: 'Chat history', icon: <ForwardIcon /> },
                    { key: 'Change password', icon: <ForwardIcon /> },
                    { key: 'Log out', icon: <LogoutIcon /> },
                ]}
                renderItem={({ item }) => <CustomListsView title={item.key} icon={item.icon} paddingBottom={6} paddingTop={9} />}
            />

            <Modal


                isVisible={modalVisible}
                swipeDirection={[ 'down']}
                style={{ margin: 0 }}
                backdropOpacity={0.15}
                onSwipeComplete={(data)=>{
                    console.log(data);
                    
                    setShowModal(false) ;
                }}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
            
            >
                <SuccuessModal close={() => { setShowModal(false) }} />

            </Modal>
            <View style={[{ marginBottom: 70 }]}>
                <CutomFullBotton title="GET STARTED" onButtonPress={() => { setShowModal(true) }} />

                <CutomFullBotton title="off STARTED" onButtonPress={() => { setShowModal(false) }} />
            </View>
        </View>
    );

}


const SuccuessModal = (props: any) => {
    const insets = useSafeAreaInsets();
    return (
        <>
            <View style={[DoctorsDashboardModalStyles.maindiv, { paddingTop: insets.top + 20, flex: 1 }]}>
                <View style={[DoctorsDashboardModalStyles.innerMain, { paddingBottom: insets.bottom + 15 }]}>
                    <ScrollView >
                        <Text style={[DoctorsDashboardModalStyles.title]}>Attention!</Text>
                        <Text style={[DoctorsDashboardModalStyles.subtitle]}>Kindly update your account details and change your default login password</Text>



                        <View style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingTop: verticalScale(17)
                        }}>
                            <View style={{ width: '20%', }}>
                                <CutomFullBotton title="OK" onButtonPress={() => { props.close() }} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>

        </>
    )
}





