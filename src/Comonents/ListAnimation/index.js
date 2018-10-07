

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
    LayoutAnimation
} from 'react-native';
import { Item } from 'native-base';




export default class ListAnimation extends Component {
    constructor() {
        super()
        this.state = {
            arry: [],
            id: 0
        }
    }

    addNotification() {
        var newId = this.state.id + 1
        let newArr = this.state.arry.slice()
        newArr.push({ id: newId })
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        this.setState({ arry: newArr, id: newId })

    }


    removeItem(id) {
        let newArr = this.state.arry.slice()
        const index = newArr.findIndex(item => item.id === id)
        if(index > -1){
            newArr.splice(index,1)
        }
        this.setState({
            arry:newArr
        })
    }


    render() {
        const { arry } = this.state
        const Views = arry.map((val, index) => {
            return (
                <View
                    key={index}
                    style={{
                        height: 40,
                        backgroundColor: "#000",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                        margin: 10,
                        borderRadius: 5,
                    }}  >
                    <Text style={{ color: "#fff" }} >{val.id}</Text>
                    <TouchableOpacity onPress={() => this.removeItem(val.id)} >
                        <Text style={{ color: "#fff" }}>Remove</Text>
                    </TouchableOpacity>
                </View>
            )
        })
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                <Button title="Add" onPress={() => this.addNotification()} />
                <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: "tomato" }} >{Views}</View>
            </View>
        )
    }
}

