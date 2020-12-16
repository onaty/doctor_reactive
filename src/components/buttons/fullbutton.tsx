import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { GeneralColor } from '../../stylings/general/colors';
import { FontFamily } from '../../stylings/typography/typography';

export const CutomFullBotton = ({ bgColor = GeneralColor.primary, title = '', textcolor = 'white', margintop = 0 }) => (
    <TouchableOpacity style={{
        backgroundColor: bgColor,
        width: '100%',
        borderColor: GeneralColor.primary,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(4),
        marginTop: moderateScale(margintop, 2),
    }}>
        <Text style={{
            color: textcolor,
            fontFamily: FontFamily.OpensansBold700,
            fontSize: scale(12),
            alignSelf: 'center'
        }}>{title}</Text>
    </TouchableOpacity >
);

