
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




export default class BackAnimation extends Component {
    constructor() {
        super()
        this.state = {
            colorAnuim: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const Animated1 = Animated.timing(this.state.colorAnuim, {
            toValue: 1,
            duration:1000
        })
        const Animated2 = Animated.timing(this.state.colorAnuim, {
            toValue: 0,
            duration:1000

        })

        Animated.loop(Animated.sequence([Animated1, Animated2])).start()
    }


    render() {

        const backgroundColor = this.state.colorAnuim.interpolate({
            inputRange: [0, 1],
            outputRange: ["blue", "orange"]
        })

        const backgroundColo2 = this.state.colorAnuim.interpolate({
            inputRange: [0, 1],
            outputRange: ["red", "green"]
        })

        return (
            <View >
                <Animated.View style={{
                    backgroundColor: backgroundColor,
                    height: 300,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 0,
                    marginBottom: 30,
                    // transform: [{ rotate }]
                }} >
                    {/* {this.props.children} */}
                    <Animated.View style={{
                    backgroundColor: backgroundColo2,
                    height: 100,
                    width: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 0,
                    marginBottom: 30,
                    // transform: [{ rotate }]
                }} >
                    {this.props.children}
                </Animated.View>
                </Animated.View>
            </View>

        )
    }
}




