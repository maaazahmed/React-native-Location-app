import React, { Component } from "react"
import {
    View,
    Text,
    Image,
    Dimensions
} from "react-native"


const { width, height } = Dimensions.get("window")
export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ backgroundColor: "#373447", width: width, height: 100, borderTopColor: "#312e3f", borderTopWidth: 5 }} >

                </View>
                <View style={{ backgroundColor: "#373447", width: width, height: 100, borderTopColor: "#312e3f", borderTopWidth: 5 }} >

                </View>
            </View>
        )
    }
}