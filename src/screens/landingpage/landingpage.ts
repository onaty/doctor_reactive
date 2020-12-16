import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { GeneralColor } from "../../stylings/general/colors";
import { FontFamily } from "../../stylings/typography/typography";

const maindivlanding = StyleSheet.create({

    maindiv: {
        // width: moderateScale(400),
        height: verticalScale(200),
        paddingHorizontal: scale(20),


    },
    innerView: {
        // width: moderateScale(400),
        padding: scale(30),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


    },
    maindivcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    welcomeText: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontStyle: 'normal',
        fontSize: moderateScale(24),
        lineHeight: moderateScale(33),
        textTransform: 'capitalize',
        color: GeneralColor.solidgrey,
        marginTop: verticalScale(70),
        textAlign: 'center'

    },
    welcomeTextInfo: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontStyle: 'normal',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(19),
        color: GeneralColor.solidgrey,
        textAlign: 'center',
        marginTop: verticalScale(40),

    },

});

export const LandingPageStyles = {
    maindivlanding
}