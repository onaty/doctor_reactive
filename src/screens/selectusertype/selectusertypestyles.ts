import { AppDimensionLen } from './../../navigation/navigation';
import { GeneralColor } from './../../stylings/general/colors';
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { moderateScale, scale, verticalScale, } from "react-native-size-matters";
import { FontFamily } from "../../stylings/typography/typography";

export const SelectUsertypeStyles = StyleSheet.create({

    maindiv: {
        // width: AppDimensionLen.width,
        height: '100%',
        // padding: scale(10),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GeneralColor.white,

    },
    SelectDiv: {
        width: '100%'

    },
    chooseAccounttype: {
        color: GeneralColor.primary,
        fontFamily: FontFamily.OpenSansSemiBold600,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(20),
        marginTop: verticalScale(35),
        marginBottom: verticalScale(35)
    },
    emptyStateforradio: {
        borderWidth: 1,
        backgroundColor: GeneralColor.white,
        borderStyle: 'solid',
        borderColor: GeneralColor.anotherGrey,
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    filledStateforradio: {
        borderWidth: scale(3),
        backgroundColor: GeneralColor.white,
        borderStyle: 'solid',
        borderColor: GeneralColor.primary,
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(10)
    },
    Accounttype: {

    },
    Accounttext: {
        fontFamily:FontFamily.OpenSansRegular400,
        fontSize:scale(14),
        lineHeight:scale(19),
        textAlign:'center',
        textTransform:'capitalize',
        marginTop:verticalScale(5)
        // font-family: Open Sans;
        // font-style: normal;
        // font-weight: normal;
        // font-size: 14px;
        // line-height: 19px;
        // /* identical to box height */
        
        // text-align: center;
        // text-transform: capitalize;
        
        // color: #373737;
    },
    innerView: { width: '100%', display: 'flex', alignItems: 'center' },
    selectDivempty: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: GeneralColor.anotherGrey,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        width: '45%',
        display: 'flex',
        alignItems: 'center'

    },
    selectDivfilled: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: GeneralColor.primary,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        borderRadius: moderateScale(10),
        width: '45%',
        display: 'flex',
        alignItems: 'center'

    },
    selectdivholder: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    accountDocs: {
        width:'100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: moderateScale(5)

    }


});

