
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
            tranceformAnuim: new Animated.Value(0),
        }
    }

    componentDidMount() {


        // const Animated_1 = 
        const Animated_1 = Animated.timing(this.state.tranceformAnuim, {
            toValue: 1,
            duration: 100,
        })

        const Animated_2 = Animated.timing(this.state.tranceformAnuim, {
            toValue: 0,
            duration: 100
        })

        const final =  Animated.sequence([Animated_1, Animated_2])
        Animated.loop(final).start()



        // const Animation1 = Animated.timing(this.state.colorAnuim,
        //     {
        //         toValue: 1,
        //         duration: 1000
        //     }
        // )
        // const Animation2 = Animated.timing(this.state.colorAnuim,
        //     {
        //         toValue: 0,
        //         duration: 1000
        //     }
        // )
        // const finalAnim = Animated.sequence([Animation1, Animation2])
        // Animated.loop(finalAnim).start()
    }


    render() {
        // const backgroundColor = this.state.colorAnuim.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ["green", "yellow"]
        // })

        // const rotate = this.state.colorAnuim.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: ['15deg', "0deg", '-15deg']
        // })

        const rotate = this.state.tranceformAnuim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["5deg", "0deg", "-5deg"]
        })

        return (
            <View  style={{}} >
                <Animated.View style={{
                    ...this.props.style,
                    height: 100,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 0,
                    marginBottom: 30,
                    transform: [{rotate}]
                }} >
                    {this.props.children}
                </Animated.View>
            </View>

        )
    }
}




