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
import { Item } from 'native-base';




export default class ListAnimation extends Component {
    constructor() {
        super()
        this.index = 0
        this.state = { valueArry: [] }
        this.animatedValue = new Animated.Value(0)
    }

    addRow() {
        this.animatedValue.setValue(0)
        let newAdd = { index: this.index }
        this.setState({ valueArry: [...this.state.valueArry, newAdd] }, () => {
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 500,
                easing:Easing.elastic(),
                useNativeDriver: true,
            }).start(() => {
                this.index = this.index + 1
            })
        })
    }



    render() {
        const animatedPower = this.animatedValue.interpolate({
            inputRange: [0, 1],
            // outputRange: [-70, 0], // ==>> Top to bottom
            outputRange: [-400, 0], // ==>> Bottom to top
        })


        let rows = this.state.valueArry.map((val, key) => {
            if ((key) === this.index) {
                return (
                    <Animated.View key={key} style={{
                        backgroundColor: "#000", margin: 10, padding:10,
                        transform: [{ translateX: animatedPower }], // ==>> Left to right 
                        //  transform: [{ translateY: animatedPower }], // ==>> Right to left 
                    }} >
                        <Text style={{ color: "#fff", }} >Row {val.index}</Text>
                    </Animated.View>
                )
            } else {
                return (
                    <View key={key} style={{ backgroundColor: "#000", margin: 10, padding: 10, }} >
                        <Text style={{ color: "#fff", }}>Row {val.index}</Text>
                    </View>
                )

            }
        })


        return (
            <View style={{ flex: 1, justifyContent: "center", }} >
                <ScrollView>
                    <View>
                        {
                            rows
                        }
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={() => this.addRow()} activeOpacity={0.6} style={{
                    height: 60,
                    width: 60,
                    backgroundColor: "green",
                    position: "absolute",
                    bottom: 30, right: 30,
                    elevation: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100
                }} >
                    <Text style={{ fontSize: 30, color: "#fff" }} >+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

