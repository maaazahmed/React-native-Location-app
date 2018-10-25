import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import firebase from "firebase"
import { connect } from "react-redux";
import { userRequestAction } from "../../../store/action/action"




const database = firebase.database().ref("/")
let arr = [
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Haris Ahmed",
        email: "haris@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.8UiX79bKZsDXbD-bIUz7AAHaJ4&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Ghazi Ahmed",
        email: "ghazi@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.rHVsvkMy5Z93RSgBSa2qBgHaE7&pid=15.1&P=0&w=230&h=153"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Salma Ahmed",
        email: "salma@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.G7t0mS2Lrm5TIbxNDxRgnQHaJ6&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },

]





const { height, width } = Dimensions.get("window")
 class UserRequest extends Component {
    constructor() {
        super()
        this.inputFeildAnim = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
        this.textInputOpacity = new Animated.Value(0)
        this.listOpacity = new Animated.Value(0)
        this.listPadding = new Animated.Value(0)
        this.state = {
            searchVal: "",
            userRquest: ""
        }
    }

    componentWillMount() {
        database.child(`Request/${this.props.currentUserData.currentUser.id}`).on("value", (snapshoot) => {
            let obj = snapshoot.val()
            let users = []
            for (let key in obj) {
                users.push({ ...obj[key], key })
            }
            users

            this.setState({ userRquest: users })
        })
    }

    componentDidMount() {
        Animated.timing(this.listOpacity, {
            toValue: 1,
            duration: 500,
        }).start()
        Animated.timing(this.listPadding, {
            toValue: 1,
            duration: 500,
            easing: Easing.elastic()
        }).start()
    }

    searchUser() {
        Animated.parallel([
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: 300
            }),
            Animated.timing(this.inputFeildAnim, {
                toValue: 1,
                duration: 300
            }),
        ]).start()
        Animated.timing(this.textInputOpacity, {
            toValue: 1,
            duration: 300
        }).start(() => {
            setTimeout(() => {
                if (this.state.searchVal === "") {
                    this.cancleSearch()
                }
            }, 30000)
        })
    }


    cancleSearch() {
        Animated.parallel([
            Animated.timing(this.opacity, {
                toValue: 0,
                duration: 300
            }),
            Animated.timing(this.inputFeildAnim, {
                toValue: 0,
                duration: 300
            }),
        ]).start()

        Animated.timing(this.textInputOpacity, {
            toValue: 0,
            duration: 300
        }).start()
    }

    render() {
        let listOpacity = this.listOpacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1]
        })
        let listPadding = this.listPadding.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [10, 5, 0]
        })
        return (
            <View style={styles.container} >
                <Animated.View >
                    <FlatList
                        data={arr}
                        renderItem={({ item, index }) => {
                            return (
                                <Animated.View style={[styles.customCardContainer, { opacity: listOpacity, margin: listPadding, }]} >
                                    <View style={styles.customCard} >
                                        <View style={styles.avatarContainer} >
                                            <Image style={styles.avatarPic}
                                                resizeMode="cover" source={{ uri: item.pic }} />
                                            <Icons name="circle" style={styles.circleIcon} />
                                        </View>
                                        <View style={styles.detiles}>
                                            <View style={styles.usernameList} >
                                                <Text style={styles.username} >{item.username}</Text>
                                                <Text style={styles.emailAndSeenText} >{item.email}</Text>
                                                <Text style={styles.emailAndSeenText}>Last update {item.lastSeen}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.listButnView}>
                                            <TouchableOpacity style={styles.ListButn} transparent  >
                                                <Image style={styles.AproveRejcetBtn} source={require("./images/checked.png")} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.ListButn} transparent  >
                                                <Image style={styles.AproveRejcetBtn} source={require("./images/cancel.png")} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Animated.View>
                            )
                        }} keyExtractor={(item) => {
                            return item.email
                        }} />
                </Animated.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#312e3f" },
    customCardContainer: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#312e3f"
    },
    headerContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%", zIndex: 1,
    },
    customCard: {
        height: 100,
        width: width,
        backgroundColor: "#312e3f",
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        flexDirection: "row",
    },

    searcBarContainerr: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        right: 0,
        backgroundColor: "#312e3f",
        paddingTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
    },
    searcBarIconButton: {
        width: 30, height: 30,
        alignItems: "center",
        alignSelf: "flex-end",
        borderBottomColor: "#c3bfd8",
        borderBottomWidth: 1
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    TextInput: {
        borderBottomColor: "#c3bfd8",
        borderBottomWidth: 1,
        flex: 1,
        height: "100%",
        backgroundColor: "#312e3f",
        color: "#fff"
    },
    seachIconForInput: {
        color: "#fff",
        fontSize: 23,
        marginRight: 10
    },
    heandingTitle: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
    },
    closeIcon: {
        color: "#fff",
        fontSize: 20
    },
    circleIcon: {
        color: "#ff2a68",
        alignSelf: "flex-start",
        fontSize: 9,
        marginLeft: 7,
        marginTop: 1
    },
    avatarPic: {
        height: 75,
        width: 75,
        borderRadius: width / 2
    },
    usernameList: {
        flex: 1,
        paddingLeft: 25,
    },
    detiles: {
        flex: 3,
        marginTop: -5
    },
    username: {
        fontSize: 17,
        color: "#fff"
    },

    emailAndSeenText: {
        color: "#c3bfd8"
    },
    listButnView: {
        flex: 1,
        width: "25%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    ListButn: {
        alignSelf: "center",
        justifyContent: "center", alignItems: "center"
    },
    AproveRejcetBtn: {
        height: 19,
        width: 19,
    }
})


const mapStateToProp = (state) => {
    return ({
        userRequestList: state.root,
        currentUser: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        userRequestAction: (data) => {
            dispatch(userRequestAction(data))
        },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(UserRequest)
