// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, Button, Alert, Dimensions } from 'react-native';
import { GeneralColor } from '../../stylings/general/colors';


import ChatingImage from '../../../assets/images/svg/chatting.svg';

import PhoneCallsImage from '../../../assets/images/svg/phonecalls.svg';

import DrugsImage from '../../../assets/images/svg/drugs.svg';
import { GettingStaetedPageStyles } from './gettingstartedpage';
import Carousel, { Pagination, } from 'react-native-snap-carousel';
import { moderateScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
const SliderDatas = [
    {
        chat: true,
        phone: false,
        drugs: false,
        title: "chat with a doctor",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
    },
    {
        chat: false,
        phone: true,
        drugs: false,
        title: "call a doctor",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
    },
    {
        chat: false,
        phone: false,
        drugs: true,
        title: "online prescriptions",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
    }
]

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
export const GettingStartedScreen = () => {


    const { navigate } = useNavigation();
    let isCarousel: any = {};
    const [index, setIndex] = React.useState(0);

    const gotoSelectUser = () => {

        navigate("SelectUsertypeScreen")
    }
    const nextSlide = () => {


        let currentSlide = index;

        currentSlide++;
        if (currentSlide >= SliderDatas.length) {
            gotoSelectUser();
            return
        }
        setIndex(currentSlide)
        isCarousel.snapToItem(currentSlide);
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: GeneralColor.backgroundwhite }}>
                <View style={[GettingStaetedPageStyles.pageview]}>
                    <View style={[GettingStaetedPageStyles.courouselview]}>
                        <Carousel
                            layout={'default'}
                            ref={(c) => { isCarousel = c; }}
                            data={SliderDatas}
                            renderItem={SlidingerComponet}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            useScrollView={true}
                            onSnapToItem={(index) => setIndex(index)}
                            enableSnap={true}

                        />
                    </View>
                    <View style={[GettingStaetedPageStyles.bottomdiv]}>
                        <Button
                            title="Skip"
                            onPress={() => gotoSelectUser()}
                            color={GeneralColor.solidgrey}

                        />
                        <Pagination
                            dotsLength={SliderDatas.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                backgroundColor: GeneralColor.primary
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            tappableDots={true}

                        />
                        <Button

                            title="Next"
                            onPress={nextSlide}
                            color={GeneralColor.primary}
                        />
                    </View>

                </View>
            </SafeAreaView>
        </>
    );
}


interface SlidingerComponetProps {
    item?: any;
    index?: any;
}
const SlidingerComponet = (props: SlidingerComponetProps) => {


    let { item } = props;
    return (
        <>
            <View style={[GettingStaetedPageStyles.sliderMain]}>
                {item.chat ? <ChatingImage /> : <></>}
                {item.phone ? <PhoneCallsImage /> : <></>}
                {item.drugs ? <DrugsImage /> : <></>}
                <Text style={[GettingStaetedPageStyles.title]}>{item.title}</Text>
                <Text style={[GettingStaetedPageStyles.subtitle]}>{item.subtitle}</Text>
            </View>
        </>
    );
}
