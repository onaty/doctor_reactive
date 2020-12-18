import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { GeneralColor } from "../../stylings/general/colors";
import { FontFamily } from "../../stylings/typography/typography";

export const LoginPageStlyl= StyleSheet.create({

    maindiv: {
        // width: moderateScale(400),
        height: verticalScale(200),
        paddingHorizontal: scale(20),


    },
    title: {
        color: GeneralColor.primary,
        fontFamily: FontFamily.OpenSansSemiBold600,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(20),
        marginTop: verticalScale(15),
        marginBottom: verticalScale(6)
    },
});
