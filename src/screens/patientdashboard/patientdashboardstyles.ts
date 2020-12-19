import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { GeneralColor } from "../../stylings/general/colors";
import { FontFamily } from "../../stylings/typography/typography";

export const PatientdashboardStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        minHeight: '100%',
        paddingBottom: verticalScale(200),
        paddingTop: verticalScale(20),
        paddingHorizontal: scale(20),



    },
    selectcarddiv: {
        width: '100%',
        height: verticalScale(165),
        backgroundColor: 'white'
    },
    infodiv: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10),
        height: verticalScale(55),
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    speacktoDoctor: {
        fontFamily: FontFamily.OpensansBold700,
        fontSize: moderateScale(14),
        lineHeight: moderateScale(19),
        textTransform: 'capitalize',
        color: '#373737'

    },
    amount: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: moderateScale(13),
        lineHeight: moderateScale(18),
        color: '#373737'

    },
    rate: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: moderateScale(10),
        lineHeight: moderateScale(14),
        color: '#1DA1F2',
    },
    overlay: {
        backgroundColor: "#00000066",
        height: verticalScale(205),
        width: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlaytext: {
        fontFamily: FontFamily.OpensansBold700,
        fontSize: moderateScale(25),
        lineHeight: moderateScale(34),
        color: GeneralColor.white
    },
    softdiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    leaguediv: {
        flex: 1,
        backgroundColor: GeneralColor.white,
        padding: scale(10),
        shadowColor: "#37373733",
        shadowOffset: {
            width: 11,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,

        elevation: 22,
        borderColor: '#B8DBF0',
        borderRadius: 3,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


    },
    leaguedivtext: {
        fontFamily: FontFamily.OpensansBold700,
        fontSize: moderateScale(12),
        lineHeight: moderateScale(19),
        textTransform: 'capitalize',
        color: '#373737',
        textAlign:'center'
    },
    leaguedivnumber: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: moderateScale(25),
        lineHeight: moderateScale(30),
        textTransform: 'capitalize',
        color: '#1DA1F2'
    }

});

