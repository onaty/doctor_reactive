
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { GeneralColor } from '../../stylings/general/colors';
import { FontFamily } from '../../stylings/typography/typography';

import HeaderImage from '../../../assets/images/svg/headericonimage.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// interface InputInterface {
//     title?: string;
//     value?: string;
//     style?: object;

// };


export const ImageHeader = (props: any) => {
    const insets = useSafeAreaInsets();
    return (
        <>
            <View style={[ImageHeaderStyles.maindiv, { paddingTop: insets.top + verticalScale(15) }]}>
                <View style={[{ marginRight: moderateScale(10, .6) }]}>
                    <HeaderImage  />
                </View>
                <View style={[]}>
                    <Text style={[ImageHeaderStyles.name]}>{props.name}</Text>
                    <Text style={[ImageHeaderStyles.time]}>{props.time}</Text>
                </View>
            </View>
        </>
    )
};


const ImageHeaderStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        height: moderateScale(120, 0.2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GeneralColor.white,
        paddingHorizontal: scale(15),
        paddingBottom: verticalScale(20),

    },
    name: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(12),
        lineHeight: scale(16),
        color: GeneralColor.solidgrey,

        marginBottom: verticalScale(2),
        // flex:1
    },
    time: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(8),
        lineHeight: scale(11),
        color: GeneralColor.labels,
    }

});

