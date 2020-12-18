
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { GeneralColor } from '../../stylings/general/colors';
import { FontFamily } from '../../stylings/typography/typography';

import DropDownIcon from '../../../assets/images/svg/dropdownicon.svg';
// interface InputInterface {
//     title?: string;
//     value?: string;
//     style?: object;

// };


export const CutomSelectField = (props: any) => {

    return (
        <>
            <Text style={[SelectStyles.labelt]}>{props.label}</Text>
            <View style={[SelectStyles.maindiv]}>
                <View style={[SelectStyles.divider]}></View>
                <Text style={[SelectStyles.label]}>select</Text>
                <View style={[SelectStyles.divider]}></View>
                <DropDownIcon />
            </View>
        </>
    )
};


const SelectStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        height: moderateScale(47, 0.2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: verticalScale(5),
        paddingVertical: scale(5),
        paddingHorizontal: scale(10),
        borderWidth: 1,
        borderColor: GeneralColor.anotherGrey,
        borderStyle: 'solid',
        borderRadius: verticalScale(5)

    },
    label: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(14),
        lineHeight: scale(19),
        color: GeneralColor.anotherGrey,

        marginBottom: verticalScale(6),
        // flex:1
    },
    labelt: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(10),
        lineHeight: scale(14),
        color: GeneralColor.labels,
        opacity: 0.8,
    },
    inputbox: {
        width: '100%',
        height: moderateScale(45, 0.1),
        paddingVertical: scale(15),
        paddingHorizontal: scale(10),
        borderWidth: 1,
        borderColor: GeneralColor.anotherGrey,
        borderStyle: 'solid',
        borderRadius: verticalScale(5)
    },
    divider: {
        borderColor: GeneralColor.solidgrey,
        borderTopWidth: verticalScale(.37),
        borderStyle: 'solid',
        height: verticalScale(0),
        // flex: 1,
        // marginTop: verticalScale(-5),
        width: moderateScale(20)
    }

});

