
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




export default class FirstAnimation extends Component {
    constructor() {
        super()
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,{
                toValue:1,
                duration:5000
            }
        ).start()

    }


    render() {
        const opacity = this.state.fadeAnim
        return (
            <Animated.View style={{
                backgroundColor: "red",
                height: "50%",
                width: "80%",
                opacity: opacity,
                justifyContent:"center",
                alignItems:"center"
            }} >
                <Text style={{fontSize:30}}>A</Text>
            </Animated.View>
        )
    }
}




