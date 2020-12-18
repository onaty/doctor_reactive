import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const DoctorsDashboardScreenStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F6F6F6'

    },
    flatlist: {


    }

});



export const DoctorsDashboardModalStyles = StyleSheet.create({

    maindiv: {
        width: '100%',
        height: '100%',

    },
    innerMain: {
        width: '100%',
        height: '30%',
        backgroundColor: GeneralColor.white,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: scale(20),
        paddingTop: moderateScale(20, 0.4),
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    title: {

        fontFamily: FontFamily.OpensansBold700,
        color: '#1DA1F2',
        fontSize: moderateScale(16, .2),
        lineHeight: moderateScale(22, .2),
        textAlign: 'center'


    },
    subtitle: {

        fontFamily: FontFamily.OpensansBold700,
        color: GeneralColor.solidgrey,
        fontSize: moderateScale(12, .2),
        lineHeight: moderateScale(16, .2),
        textAlign: 'center',
        marginTop: verticalScale(10),
        

    }

});