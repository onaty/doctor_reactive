import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const PatientappointmentStyles = StyleSheet.create({

    scrollview: {
        width: '100%',
     
      

    },
    appointmentcard: {
        width: '100%',
        height: verticalScale(100),
        padding: scale(20),
        backgroundColor: GeneralColor.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(12)
    },
    doctorename: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontSize: scale(14),
        lineHeight: scale(19),
        textTransform: 'capitalize',
        color: GeneralColor.solidgrey
    },
    date: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontSize: scale(10),
        lineHeight: scale(14),
        color: GeneralColor.date
    },
    amount: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontSize: scale(16),
        lineHeight: scale(22),
        color: GeneralColor.solidgrey
    },
    duration: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontSize: scale(12),
        lineHeight: scale(16),
        color: GeneralColor.solidgrey

    },
    status: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontSize: scale(12),
        lineHeight: scale(16),
    },
    statusdiv: {
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    infodiv: {

    },

});

