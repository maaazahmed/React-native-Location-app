
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    Image,
    ImageBackground

} from 'react-native';




const { width, height } = Dimensions.get("window")
export default class ImageAnimation extends Component {
    constructor() {
        super()
        this.state = {
            time: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.time, {
            toValue: 2,
            duration: 2000
        }).start()
    }


    render() {
        const opacity = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 1]
        })

        const marginTop = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-100, 100, 100]
        })


        const marginLeft = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-2000, -1000, 0]
        })


        return (
            <Animated.View style={{ flex: 1, opacity: opacity }} >
                <ImageBackground source={require("./images/er.jpg")}
                    resizeMode="stretch"
                    style={{
                        height,
                        width,
                        alignItems: "center",
                    }}>
                    <Animated.Image
                        resizeMode="center"
                        style={{ marginTop: marginTop }}
                        source={require("./images/greenlogo.png")} />
                    <Animated.Text style={{
                        fontSize: 30,
                        color: "#fff",
                        marginTop: 400,
                        marginLeft,
                    }} >This is my Animation App
                    </Animated.Text>
                </ImageBackground>
            </Animated.View>



        )
    }
}




