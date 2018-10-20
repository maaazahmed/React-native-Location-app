import React, { Component } from "react"
import {
    View,
    Text,
    Image,
    Dimensions
} from "react-native"
import {} from "ma"


const { width, height } = Dimensions.get("window")
export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >

                <View style={{ backgroundColor: "#373447", width: width, height: 110, borderTopColor: "#312e3f", borderTopWidth: 5, justifyContent: "center", alignItems: "center", padding: 10 }} >
                    <View style={{ flex: 1, flexDirection: "row", }} >
                        <View style={{ width: "20%", height: "100%", justifyContent:"center", alignItems:"center" }}>
                            <Image
                                style={{
                                    height: 80,
                                    width: 80,
                                    borderRadius: width / 2
                                }}
                                source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=88&v=4" }} />
                        </View>
                        <View style={{ width: "80%", height: "100%", justifyContent:"center", alignItems:"flex-end" }}>
                            
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#373447", width: width, height: 110, borderTopColor: "#312e3f", borderTopWidth: 5 }} >

                </View>
            </View>
        )
    }
}