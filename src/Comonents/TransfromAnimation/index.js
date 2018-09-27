
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




export default class TransfromAnimation extends Component {
    constructor() {
        super()
        this.state = {
            colorAnuim: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const Animation1 = Animated.timing(this.state.colorAnuim,
            {
                toValue: 1,
                duration: 1000
            }
        )
        const Animation2 = Animated.timing(this.state.colorAnuim,
            {
                toValue: 0,
                duration: 1000
            }
        )
        const finalAnim = Animated.sequence([Animation1, Animation2])
        Animated.loop(finalAnim).start()
    }


    render() {
        const backgroundColor = this.state.colorAnuim.interpolate({
            inputRange: [0, 1],
            outputRange: ["green", "yellow"]
        })

        const rotate = this.state.colorAnuim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', "0deg", '-15deg']
        })


        return (
            <View >
                <Animated.View style={{
                    ...this.props.style,
                    // backgroundColor: "green",
                    height: 100,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 0,
                    marginBottom: 30,
                    transform: [{ rotate }]


                }} >
                    {this.props.children}
                </Animated.View>
            </View>

        )
    }
}




