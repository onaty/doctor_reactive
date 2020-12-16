import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

const maindivlanding = StyleSheet.c dreate({

    maindiv: {
        width: moderateScale(400),
        height: verticalScale(450),
        padding: scale(10),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    welcomeText: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontStyle: 'normal',
        fontSize: moderateScale(24),
        lineHeight: moderateScale(33),
        textTransform: 'capitalize',
        color: '#373737'

    }

});

export const LandingPageStyles = {
    maindivlanding
}