import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const GeneralStyling = StyleSheet.create({

    box: {
        width: moderateScale(400),
        height: verticalScale(450),
        padding: scale(10),
        justifyContent:'center',
        alignItems:'center'

    },
    title: {
        fontSize: moderateScale(20, 0.4),
        marginBottom: scale(10),


    },
    text: {
        fontSize: moderateScale(14),
        color:'red',

    },
    button: {
        width: moderateScale(150, 0.3),
        height: moderateScale(45, 0.3),
        marginBottom: moderateScale(10),

    },
    buttonText: {
        fontSize: moderateScale(14),

    }
});