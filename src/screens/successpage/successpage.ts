import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const SuccessPageStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        height:  '100%',
        padding: scale(23),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    welcomeText: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontStyle: 'normal',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(19),
        textTransform: 'capitalize',
        color:GeneralColor.solidgrey

    }

});

