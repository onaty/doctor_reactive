import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgUri,
} from 'react-native-svg';



import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TestingSVGDD = () => {

    return (
        <View
            style={[

                { alignItems: 'center', justifyContent: 'center' },
            ]}
        >
            <SvgUri
                width="100%"
                height="100%"

                uri="../../../assets/images/svg/doctorimage.svg"
            />

        </View >
    );

}