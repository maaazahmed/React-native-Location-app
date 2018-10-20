import React, { Component } from "react"
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native"
import { Icon } from "native-base"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
 

const { width, height } = Dimensions.get("window")
export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >

                <View style={{ backgroundColor: "#373447", width: width, height: 110, borderTopColor: "#312e3f", borderTopWidth: 5, justifyContent: "center", alignItems: "center", padding: 10 }} >
                    <View style={{ flex: 1, flexDirection: "row", }} >
                        <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{
                                    height: 80,
                                    width: 80,
                                    borderRadius: width / 2
                                }}
                                source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=88&v=4" }} />
                        </View>
                        <View style={{ width: "80%", height: "100%", justifyContent: "center", alignItems: "flex-end" }}>
                            <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                <Icon name="camera" style={{ fontSize: 30, color: "#ff2a68" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#373447", width: width, height: 60, borderTopColor: "#312e3f", borderTopWidth: 5, padding:10 }} >
                    <View style={{ justifyContent: "center", flex: 1 }} >
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <View style={{ flex: 3, paddingLeft:10 }} >
                                <Text style={{fontSize:17, color:"#fff", fontWeight:"300"}} >Maaz Ahmed</Text>
                            </View>
                            <View style={{ flex: 1, alignItems:"flex-end" }} >
                                <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                    <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "#373447", width: width, height: 60, borderTopColor: "#312e3f", borderTopWidth: 5, padding:10 }} >
                    <View style={{ justifyContent: "center", flex: 1 }} >
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <View style={{ flex: 3, }} >
                                <Text style={{fontSize:17, color:"#fff", fontWeight:"300"}} >maazahmed2k16@gmail.com</Text>
                            </View>
                            <View style={{ flex: 1, alignItems:"flex-end" }} >
                                <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                    <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}