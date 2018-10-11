
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing
} from 'react-native';
import h1 from "./media/img1.jpg"
import h2 from "./media/img2.jpg"
import h3 from "./media/img3.jpg"
import h4 from "./media/img4.jpg"
import h5 from "./media/img5.jpg"
import h6 from "./media/img6.jpg"


const { width, height } = Dimensions.get("window")



var imgArr = [h1, h2, h3, h4, h5, h6]
export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            XPosition: null,
            YPosition: null,
            rotate: new Animated.Value(0),
            index: 0

        }
    }




    onPress(eve) {
        this.setState({
            XPosition: eve.nativeEvent.locationX,
            YPosition: eve.nativeEvent.locationY
        })
    }
    onMove(eve) {
        const { locationX, locationY } = eve.nativeEvent
        const { XPosition, YPosition } = this.state
        let imgPos = new Animated.Value(1.5 * (locationX - XPosition) / width)
        if (1.5 * (locationX - XPosition) / width > 1) {
            this.setState({
                index: (this.state.index + 1) % 5,
                XPosition: locationX,
                YPosition: locationY
            })
        }
        if (1.5 * (locationX - XPosition) / width < -1) {
            this.setState({
                index: (this.state.index - 1 + 5) % 5,
                XPosition: locationX,
                YPosition: locationY
            })
        }
        this.setState({ rotate: imgPos })

    }

    onRelease(eve) {
        Animated.timing(this.state.rotate, {
            toValue: 0,
            duration: 500,
            easing: Easing.bounce
        }).start()

    }


    render() {

        let rotate = this.state.rotate.interpolate({
            inputRange: [-1, 1],
            outputRange: ["-40deg", "40deg"]
        })

        let opacity = this.state.rotate.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0]
        })

        return (
            <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent: "center", alignItems: "center", }}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}>
                <Animated.Image

                    source={imgArr[this.state.index]}
                    style={{ height: 200, width: 150, opacity, transform: [{ rotate }] }} />
            </View>
        )
    }
}




