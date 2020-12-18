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


export const CutomIconInput = (props: any) => {

    return (
        <>
            <View style={[InputStyles.maindiv]}>
                <Text style={[InputStyles.label]}>{props.title}</Text>
                <View   style={[InputStyles.iputser]}>
                    <TextInput
                        style={[InputStyles.inputbox]}
                        placeholderTextColor={GeneralColor.anotherGrey}
                        {...props}
                    />
                    {props.icon ? props.icon : <></>}
                </View>

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
        marginTop: verticalScale(14)

    },
    label: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(10),
        lineHeight: scale(14),
        color: GeneralColor.labels,
        opacity: 0.8,
        marginBottom: verticalScale(6)
    },
    inputbox: {
        width: '100%',
        flex:4,
        marginLeft:4
       
      
    }, 
    iputser: {
        // width: '100%',
        borderWidth: 1,
        borderColor: GeneralColor.anotherGrey,
        borderStyle: 'solid',
        borderRadius: verticalScale(5),
        marginTop: verticalScale(2),
        height: moderateScale(55, 0.1),
        paddingVertical: scale(15),
        paddingHorizontal: scale(10),
        display:'flex',
        flexDirection:'row',
        

    },

});

