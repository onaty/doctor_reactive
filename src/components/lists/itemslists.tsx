import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { GeneralColor } from '../../stylings/general/colors';
import { FontFamily } from '../../stylings/typography/typography';

export const CustomListsView = (props: any) => {

    return (
        <>
            <View style={[CustomListsViewStyles.maindiv, { paddingTop: verticalScale(props.paddingTop), paddingBottom: verticalScale(props.paddingBottom) }]}>
                <Text style={[CustomListsViewStyles.label]}>{props.title}</Text>

                {props.icon ? props.icon : <></>}
            </View>
        </>
    )
};


const CustomListsViewStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        // height: verticalScale(55),

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: verticalScale(14),
        borderColor: GeneralColor.inappbackground2,
        borderBottomWidth: 1,
        borderStyle: 'solid'

    },
    label: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(11),
        lineHeight: scale(19),
        color: GeneralColor.solidgrey,
        marginBottom: verticalScale(6),
        textTransform:'capitalize'
    },

});

