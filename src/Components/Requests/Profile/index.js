import React, { Component } from "react"
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from "react-native"
import { Icon } from "native-base"
import Icons from "react-native-vector-icons/FontAwesome"


const { width, height } = Dimensions.get("window")
export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center" }} >
                <View  style={{}} >
                    <ScrollView  >
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 8, borderTopColor: "#312e3f", borderTopWidth: 5, justifyContent: "center", alignItems: "center", padding: 10 }} >
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
                                        <Icon name="camera" style={{ fontSize: 27, color: "#ff2a68" }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* 7777777777777777777777777777777 */}
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 13, borderTopColor: "#312e3f", borderTopWidth: 5, padding: 10 }} >
                            <View style={{ justifyContent: "center", flex: 1 }} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 1, padding: 5 }} >
                                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "300" }} >Maaz Ahmed</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                            <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 7777777777777777777777777777777 */}
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 13, borderTopColor: "#312e3f", borderTopWidth: 5, padding: 10 }} >
                            <View style={{ justifyContent: "center", flex: 1 }} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "300" }} >maazahmed2k16@gmail.com</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                            <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 7777777777777777777777777777777 */}
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 13, borderTopColor: "#312e3f", borderTopWidth: 5, padding: 10 }} >
                            <View style={{ justifyContent: "center", flex: 1 }} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "300" }} >Location</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={{ height: 40, width: 40, borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                            <Icons name="map-marker" size={23} style={{ color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 7777777777777777777777777777777 */}
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 13, borderTopColor: "#312e3f", borderTopWidth: 5, padding: 10 }} >
                            <View style={{ justifyContent: "center", flex: 1 }} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "300" }} >Friends</Text>
                                    </View>
                                    <View style={{ width: "50%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={{ borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                            <Text style={{ fontSize: 15, color: "#ff2a68", fontWeight: "bold" }} >203+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* 7777777777777777777777777777777 */}
                        <View style={{ backgroundColor: "#373447", width: width, height: height / 13, borderTopColor: "#312e3f", borderTopWidth: 5, padding: 10 }} >
                            <View style={{ justifyContent: "center", flex: 1 }} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "300" }} >Blocked</Text>
                                    </View>
                                    <View style={{ width: "50%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={{ borderRadius: width / 2, justifyContent: "center", alignItems: "center", padding: 5 }} >
                                            <Text style={{ fontSize: 15, color: "#ff2a68", fontWeight: "bold" }} >20+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}