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
import Icons from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux"


const { width, height } = Dimensions.get("window")
class Profile extends Component {
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
        console.log(this.props.currentUserData)
        let currentUserData = this.props.currentUserData.currentUser;

        return (
            <View style={styles.container} >
                <View style={styles.content} >
                    <ScrollView>
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
                                        <Icon name="camera" style={styles.firest3icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={styles.listText} >
                                        <Text style={styles.nameSndEmailText} >{currentUserData.username}</Text>
                                    </View>
                                    <View style={styles.listButonContainer} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icon name="create" style={styles.firest3icon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={styles.listText} >
                                        <Text style={styles.nameSndEmailText} >{currentUserData.Email}</Text>
                                    </View>
                                    <View style={styles.listButonContainer} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icon name="create" style={styles.firest3icon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={styles.listText} >
                                        <Text style={styles.textsStyle} >Location</Text>
                                    </View>
                                    <View style={styles.listButonContainer} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.listButon} >
                                            <Icons name="map-marker" size={23} style={styles.locationIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={styles.listText} >
                                        <Text style={styles.textsStyle} >Friends</Text>
                                    </View>
                                    <View style={styles.listIcon} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.blockAndLocatBtn} >
                                            <Text style={styles.numText} >203+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>
                        {/* 7777777777777777777777777777777 */}
                        <Animated.View style={[styles.detileContaner, { marginTop: ProfileDataAnim, opacity: listOpacity }]} >
                            <View style={styles.ListContainer} >
                                <View style={styles.listContaint} >
                                    <View style={styles.listText} >
                                        <Text style={styles.textsStyle} >Blocked</Text>
                                    </View>
                                    <View style={styles.listIcon} >
                                        <TouchableOpacity activeOpacity={0.5} style={styles.blockAndLocatBtn} >
                                            <Text style={styles.numText} >20+</Text>
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
    container: {
        flex: 1,
        backgroundColor: "#312e3f",
    },
    content: { marginTop: 15, },
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
    },
    listText: {
        flex: 1,
        padding: 5
    },
    nameSndEmailText: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "300"
    },
    textsStyle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "300"
    },
    listIcon: {
        width: "50%",
        alignItems: "flex-end"
    },
    listButonContainer: {
        width: "10%",
        alignItems: "flex-end"
    },
    firest3icon: {
        fontSize: 27,
        color: "#ff2a68"
    },
    locationIcon: {
        color: "#ff2a68"
    },
    blockAndLocatBtn: {
        borderRadius: width / 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    numText: {
        fontSize: 15,
        color: "#ff2a68",
        fontWeight: "bold"
    }

})





const mapStateToProp = (state) => {
    return ({
        currentUserData: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        // allUsersList: (data) => {
        //     dispatch(allUsersList(data))
        // },
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(Profile)


