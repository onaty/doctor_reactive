import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";
import { AppDimensionLen } from '../../navigation/navigation';

export const GettingStaetedPageStyles = StyleSheet.create({

    sliderMain: {
        width: '100%',
        height: verticalScale(450),
        // padding: moderateScale(40),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontFamily: FontFamily.OpenSansSemiBold600,
        fontStyle: 'normal',
        fontSize: moderateScale(26),
        lineHeight: moderateScale(38),
        textTransform: 'capitalize',
        color: GeneralColor.solidgrey,
        textAlign: 'center',
        marginTop:verticalScale(30)

    },
    subtitle: {
        fontFamily: FontFamily.OpenSansRegular400,
        fontStyle: 'normal',
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        textTransform: 'capitalize',
        color: GeneralColor.black,
        textAlign: 'center',
        marginTop:verticalScale(10)

    },
    bottomdiv: {

        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal:moderateScale(20,2),
        alignItems:'center'
    },
    pageview:{
        display:'flex',
        justifyContent:'space-between',
        height:'100%',
        backgroundColor: GeneralColor.backgroundwhite 
    },
    courouselview:{
       marginTop:verticalScale(30),
       width:'100%',
       display:'flex',
       flexDirection:'row',
       justifyContent:'center'
    }


});

