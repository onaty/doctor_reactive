import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const PatientmessagesStyles = StyleSheet.create({

    nochatsview: {
        width: "100%",
        height: "100%",
        padding: scale(10),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:verticalScale(250)

    },
    nochats: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontStyle: 'normal',
        fontSize: moderateScale(18),
        lineHeight: moderateScale(25),
        textTransform: 'capitalize',
        color: '#373737'

    }

});

