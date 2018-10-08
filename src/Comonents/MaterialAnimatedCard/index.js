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
            buttonBottomPosition: new Animated.Value(0),
            buttonLeftPosition: new Animated.Value(0),
            buttonHeightWidth: new Animated.Value(0),
            buttonTextFont: new Animated.Value(0),
            butnText: "+",
            functionFlage: true
        }
    }

    onpenModal() {
        Animated.parallel([
            Animated.timing(this.state.modalHeight, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic()
            }),
        ]).start()
        Animated.parallel([
            Animated.timing(this.state.buttonBottomPosition, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonLeftPosition, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonHeightWidth, {
                toValue: 1,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonTextFont, {
                toValue: 1,
                duration: 300,
            })
        ]).start(() => {
            this.setState({ butnText: "-", functionFlage: false })
        })
    }


    closeModal() {
        Animated.parallel([
            Animated.timing(this.state.modalHeight, {
                toValue: 0,
                duration: 500,
                easing: Easing.elastic()
            }),
        ]).start()
        Animated.parallel([
            Animated.timing(this.state.buttonBottomPosition, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonLeftPosition, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonHeightWidth, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease
            }),
            Animated.timing(this.state.buttonTextFont, {
                toValue: 0,
                duration: 300,
            })
        ]).start(() => {
            this.setState({ butnText: "+", functionFlage: true })
        })
    }


    render() {
        const { functionFlage } = this.state
        const height = this.state.modalHeight.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["0%", "50%", "80%"],
        })
        const buttonBottom = this.state.buttonBottomPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["5%", "30%", "71%"],
        })
        const buttonLeft = this.state.buttonLeftPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ["5%", "20%", "35%"],
        })

        const buttonHeightWidth = this.state.buttonHeightWidth.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [60, 100, 150],
        })
        const buttonTextFont = this.state.buttonTextFont.interpolate({
            inputRange: [0, 1],
            outputRange: [30, 80],
        })


        return (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#11fbd8" }} >
                <View style={{ flex: 1, justifyContent: "flex-end", elevation: 20 }}>
                    <Animated.View style={{ backgroundColor: "#fff", height }} ></Animated.View>
                </View>
                <Animated.View style={{
                    height: buttonHeightWidth,
                    width: buttonHeightWidth,
                    borderRadius: 100,
                    position: "absolute",
                    bottom: buttonBottom,
                    right: buttonLeft,
                    elevation: 20,
                    backgroundColor: "#fff"
                }} >
                    <TouchableOpacity onPress={() => functionFlage ? this.onpenModal() : this.closeModal()} activeOpacity={.7} style={{
                        flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#8911fb", borderRadius: 100,
                    }} >
                        <Animated.Text style={{ color: "#fff", fontSize: buttonTextFont }} >
                            {this.state.butnText}
                        </Animated.Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )
    }
}

