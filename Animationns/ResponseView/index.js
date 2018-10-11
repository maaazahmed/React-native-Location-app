
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




export default class RresponseAnimation extends Component {
    constructor() {
        super()
        this.state = {
            XPosition: null,
            YPosition: null,
            marginTop: new Animated.Value(0),
            marginLeft: new Animated.Value(0),

        }
    }

    componentDidMount() {

    }


    onPress(eve) {
        this.setState({
            XPosition: eve.nativeEvent.locationX,
            YPosition: eve.nativeEvent.locationY
        })
    }
    onMove(eve) {
        const { locationX, locationY } = eve.nativeEvent
        const marginLeft = new Animated.Value(locationX - this.state.XPosition);
        const marginTop = new Animated.Value(locationY - this.state.YPosition);
        this.setState({
            marginLeft,
            marginTop
        })

    }

    onRelease(eve) {
        const anim1 = Animated.timing(this.state.marginLeft, {
            toValue: 0,
            duration: 1000,
            easing: Easing.bounce
        })
        const anim2 = Animated.timing(this.state.marginTop, {
            toValue: 0,
            duration: 1000,
            easing: Easing.bounce
        })
        Animated.parallel([anim1, anim2]).start()
    }


    render() {
        let { marginTop, marginLeft } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: "lightblue" }}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}>
                <Animated.Image
                    source={require("./images/logo.png")}
                    style={{ height: 100, width: 100, marginTop, marginLeft }} />
            </View>
        )
    }
}




