import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { GeneralColor } from '../../stylings/general/colors';
import { FontFamily } from '../../stylings/typography/typography';
// interface InputInterface {
//     title?: string;
//     value?: string;
//     style?: object;

// };


export const CutomInput = (props: any) => {
    let { ismargintop, setheight } = props;

    return (
        <>
            <View style={[InputStyles.maindiv, ismargintop == 'none' ? {} : { marginTop: verticalScale(14) }]}>
                <Text style={[InputStyles.label]}>{props.title}</Text>
                <TextInput
                    style={[InputStyles.inputbox, setheight ? { height: setheight } : {}]}
                    placeholderTextColor={GeneralColor.anotherGrey}
                    {...props}
                />

            </View>
        </>
    )
};


const InputStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        // height: verticalScale(55),

        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'

        // marginTop: verticalScale(14)
    },
    label: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(10),
        lineHeight: scale(14),
        color: GeneralColor.labels,
        opacity: 0.8,
        marginBottom: verticalScale(6),
        textTransform:"capitalize"
    },
    inputbox: {
        width: '100%',
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        borderWidth: 1,
        borderColor: GeneralColor.anotherGrey,
        borderStyle: 'solid',
        borderRadius: verticalScale(5)
    }

});

