// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { ImageHeader } from '../../components/headers/imageicon';
import { PatientmessagesStyles } from './patientmessagesStyles';

export const PatientmessagesScreen = () => {
    return (
        <View style={[]}>
            <ImageHeader name={'Vicky Uwaoma'} time={'Last seen 2 Aug 2020'} />
            <View style={[PatientmessagesStyles.nochatsview]}>
                <Text style={[PatientmessagesStyles.nochats]}>no current chat(s)</Text>
            </View>

        </View>
    );
}
