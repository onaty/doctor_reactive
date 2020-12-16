import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { GeneralColor } from "../../stylings/general/colors";
import { LandingPageStyles } from "../landingpage/landingpage";


export const LoginScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: GeneralColor.backgroundwhite }}>
                <ScrollView contentContainerStyle={[LandingPageStyles.maindivlanding.maindivcontainer]} style={[LandingPageStyles.maindivlanding.maindiv]}>
                    <View style={[LandingPageStyles.maindivlanding.innerView]} >
                   <Text>gosd</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    );
}