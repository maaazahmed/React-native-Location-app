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
            modalHeight: new Animated.Value(0)
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#007867" }} >
                <View style={{ flex: 1, justifyContent: "flex-end", elevation: 20 }}>
                    <View style={{ backgroundColor: "#fff", height: "80%" }} >
                    
                    </View>
                </View>


                <TouchableOpacity activeOpacity={.7} style={{
                    height: 60,
                    width: 60,
                    borderRadius: 100,
                    position: "absolute",
                    bottom: 20, right: 20,
                    elevation: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#007867"
                }} >
                    <Text style={{ color: "#fff", fontSize: 30 }} >
                        +
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }
}

