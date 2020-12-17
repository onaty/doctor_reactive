import { AppDimensionLen } from './../../navigation/navigation';
import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale, } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const PatientSignupStyles = StyleSheet.create({

    maindiv: {
        // width: AppDimensionLen.width,
        height: '100%',
        paddingHorizontal: scale(10),

        backgroundColor: GeneralColor.white,

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
    sectiontitle: {
        color: GeneralColor.black,
        fontFamily: FontFamily.OpenSansSemiBold600,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(21),
        marginTop: verticalScale(15),
        marginBottom: verticalScale(6)
    },
    topdiv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    steppercontainer: {
        width: '100%',
        marginTop: verticalScale(15),
        marginBottom: verticalScale(15),

    },
    holdingContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: scale(5),
        alignItems: 'center',
        justifyContent:'space-between'
    },
    filledBE: {
        borderColor: GeneralColor.primary,
        borderWidth: verticalScale(.37),
        borderStyle: 'solid',
        height: verticalScale(0),
        flex: 2,
        marginTop: verticalScale(-30),
    },
    emptyBE: {
        borderColor: GeneralColor.anotherGrey,
        borderWidth: verticalScale(.37),
        borderStyle: 'solid',
        height: verticalScale(0),
        flex: 2,
        marginTop: verticalScale(-30)
    },
    filledMid: {
        borderColor: GeneralColor.primary,
        borderTopWidth: verticalScale(.37),
        borderStyle: 'solid',
        height: verticalScale(0),
        flex: 1,
        marginTop: verticalScale(-30)
    },
    emptyMid: {
        borderWidth: verticalScale(.37),
        borderStyle: 'solid',
        height: verticalScale(0),
        flex: 1,
        marginTop: verticalScale(-30)
    },
    contentData:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        marginHorizontal:scale(6)
    },
    steperlabel:{
        color: GeneralColor.solidgrey,
        fontFamily: FontFamily.OpenSansRegular400,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: moderateScale(10),
        lineHeight: moderateScale(13),
        marginTop: verticalScale(2),
        marginBottom: verticalScale(0)
    }

});

