
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    ScrollView,
    Image,
} from 'react-native';





let HEADER_MAX_HEIGHT = 120;
let HEADER_MIN_HEIGHT = 70;
let PROFILE_IMG_MAX_HEIGHT = 80
let PROFILE_IMG_MIN_HEIGHT = 40
export default class HeaderAnimation extends Component {
    constructor() {
        super()
        this.state = {
            scrollY: new Animated.Value(0)


        }
    }



    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: "clamp"
        })
        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMG_MAX_HEIGHT, PROFILE_IMG_MIN_HEIGHT],
            extrapolate: "clamp"
        })
        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMG_MAX_HEIGHT/2), HEADER_MAX_HEIGHT],
            extrapolate: "clamp"
        })


        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [1,0],
            extrapolate: "clamp"
        })



        return (
            <View style={{ flex: 1 }}>
                < Animated.View style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: headerHeight,
                    backgroundColor: "#87CEFA",
                    zIndex:headerZindex,
                }} >
                </Animated.View>

                <ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}
                >
                    <Animated.View style={{
                        flex: 1,
                        height: profileImageHeight,
                        width: profileImageHeight,
                        borderRadius: PROFILE_IMG_MAX_HEIGHT / 2,
                        backgroundColor: "green",
                        borderColor: "#fff",
                        borderWidth: 3,
                        marginTop: profileImageMarginTop,
                        overflow: "hidden",
                        marginLeft: 10,
                    }} >
                        <Image style={{
                            height: null,
                            width: null,
                            flex: 1,
                            borderRadius: PROFILE_IMG_MAX_HEIGHT / 2,
                        }} source={require("./images/profile.jpg")} />
                    </Animated.View >
                    <View style={{ height: 1000 }} >
                        <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }} >Maaz Ahmed</Text>
                    </View>
                </ScrollView>
            </View>

        )
    }
}




