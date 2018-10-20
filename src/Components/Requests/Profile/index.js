import React, { Component } from "react"
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Animated,
    Easing,
    StyleSheet
} from "react-native"
import { Icon } from "native-base"
import Icons from "react-native-vector-icons/FontAwesome"


const { width, height } = Dimensions.get("window")
export default class Profile extends Component {

    constructor() {
        super()
        this.ProfileDataAnim = new Animated.Value(0),
            this.listOpacity = new Animated.Value(0)
    }


    componentDidMount() {
        Animated.timing(this.listOpacity, {
            toValue: 1,
            duration: 500,
        }).start()
        Animated.timing(this.ProfileDataAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.elastic()
        }).start()
    }

    render() {
        let ProfileDataAnim = this.ProfileDataAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [10, 5, 0]
        })

        let listOpacity = this.listOpacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1]
        })

        return (
            <View style={{ flex: 1 }} >
                <View style={{ marginTop: 15 }} >
                    <ScrollView style={{}} >
                        <Animated.View style={[styles.profilePicCard, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.cardContent} >
                                <View style={styles.profilePicCardContain}>
                                    <Image
                                        style={styles.profilePic}
                                        source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=88&v=4" }} />
                                </View>
                                <View style={styles.cameraContainer}>
                                    <TouchableOpacity activeOpacity={0.5}
                                        style={styles.camreBut} >
                                        <Icon name="camera" style={{ fontSize: 27, color: "#ff2a68" }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 1, padding: 5 }} >
                                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "300" }} >Maaz Ahmed</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "300" }} >maazahmed2k16@gmail.com</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icon name="create" style={{ fontSize: 27, color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={{ flex: 5, padding: 5 }} >
                                        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "300" }} >Location</Text>
                                    </View>
                                    <View style={{ width: "10%", alignItems: "flex-end" }} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icons name="map-marker" size={23} style={{ color: "#ff2a68" }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
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
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
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
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    profilePicCard: {
        padding: 10,
        backgroundColor: "#373447",
        width: "100%",
        height: height / 8,
        borderTopColor: "#312e3f",
        borderTopWidth: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    profilePicCardContain: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: width / 2
    },
    cameraContainer: {
        width: "80%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    detileContaner: {
        backgroundColor: "#373447",
        width: "100%",
        height: height / 13,
        borderTopColor: "#312e3f",
        borderTopWidth: 5,
        padding: 10,
    },
    cardContent: {
        flex: 1,
        flexDirection: "row",
    },
    camreBut: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    ListContainer: {
        justifyContent: "center",
        flex: 1
    },
    listContaint: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    listButon: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    }

})