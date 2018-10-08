import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    TouchableOpacity,
    Button,
    ScrollView,
} from 'react-native';




export default class MaiterailCard extends Component {
    constructor() {
        super()
        this.state = {
            modalHeight: new Animated.Value(0),
            buttonBottomPosition: new Animated.Value(0)
        }
    }

    onpenModal() {
        Animated.parallel([
            Animated.timing(this.state.modalHeight, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic()
            }),
            Animated.timing(this.state.buttonBottomPosition, {
                toValue: 1,
                duration: 500,
                easing: Easing.ease
            })
        ]).start()
    }

    render() {
        const height = this.state.modalHeight.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["0%", "50%", "80%"],
        })
        const buttonBottom = this.state.buttonBottomPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["5%", "30%", "77%"],
        })
        const buttonLeft= this.state.buttonBottomPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["5%", "20%", "42%"],
        })


        return (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#11fbd8" }} >
                <View style={{ flex: 1, justifyContent: "flex-end", elevation: 20 }}>
                    <Animated.View style={{ backgroundColor: "#fff", height }} ></Animated.View>
                </View>
                <Animated.View style={{
                    height: 60,
                    width: 60,
                    borderRadius: 100,
                    position: "absolute",
                    bottom: buttonBottom,
                    right: buttonLeft,
                    elevation: 20,
                    backgroundColor: "#fff"
                }} >
                    <TouchableOpacity onPress={() => this.onpenModal()} activeOpacity={.7} style={{
                        flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#8911fb", borderRadius: 100,
                    }} >
                        <Text style={{ color: "#fff", fontSize: 30 }} >
                            +
                    </Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )
    }
}

