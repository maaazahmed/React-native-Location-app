
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




export default class SlidAnimation extends Component {
    constructor() {
        super()
        this.state = {
            slideAnuim1: new Animated.Value(-1000),
            slideAnuim2: new Animated.Value(-1000),
        }
    }

    componentDidMount() {
        const Animated1 = Animated.timing(this.state.slideAnuim1, {
            toValue: 0,
            duration: 600,
            // easing:Easing.bounce,
            // easing:Easing.back,
            // easing: Easing.ease,
            // easing: Easing.elastic(),
        })

        const Animated2 = Animated.timing(this.state.slideAnuim2,
            {
                toValue: 0,
                duration: 500,
                // easing:Easing.bounce,
                // easing:Easing.back,
                // easing: Easing.ease,
                // easing: Easing.elastic(),
            }
        )

        // Animated.parallel([Animated1, Animated2]).start()
        // Animated.sequence([Animated1, Animated2]).start()
        Animated.stagger(200,[Animated1, Animated2]).start()
    }


    render() {
        const slideAnuim1 = this.state.slideAnuim1
        const slideAnuim2 = this.state.slideAnuim2
        return (
            <View >
                <Animated.View style={{
                    backgroundColor: "green",
                    height: 300,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: slideAnuim1,
                    marginBottom: 30
                }} >
                    <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>Slide Animation</Text>
                </Animated.View>
                <Animated.View style={{
                    backgroundColor: "green",
                    height: 300,
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: slideAnuim2
                }} >
                    <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>Slide Animation</Text>
                </Animated.View>
            </View>

        )
    }
}




