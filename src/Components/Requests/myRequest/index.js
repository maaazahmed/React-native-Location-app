import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    Animated,
    Easing
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Button } from 'native-base';
import { connect } from "react-redux"
import firebase from "firebase";
import { myRequestAction } from "../../../store/action/action"




let arr = [
    {

  
  
   
]





const database = firebase.database().ref()
const { height, width } = Dimensions.get("window")
class MyRequest extends Component {
    constructor() {
        super()
        this.inputFeildAnim = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
        this.textInputOpacity = new Animated.Value(0)
        this.listOpacity = new Animated.Value(0)
        this.listPadding = new Animated.Value(0)
        this.state = {
            searchVal: "",
            MyRequestList: {},
            isLoader:true
        }
    }

    componentWillMount() {
        database.child(`Request`).on("value", (snapshoot) => {
            let obj = snapshoot.val()
            let users = []
            for (let key in obj) {
                for (let id in obj[key]) {
                    users.push({ ...obj[key][id], id })
                }
            }
            this.setState({ MyRequestList: users })
            console.log(users)
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
        }).start(() => {
            this.props.myRequestAction(this.state.MyRequestList)
        })
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
        let MyRequest_List = this.props.MyRequest_List.myRequestList
        let dummyPro = "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"

        let listOpacity = this.listOpacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1]
        })
        let listPadding = this.listPadding.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [10, 5, 0]
        })

        return (
            (this.state.isLoader) ?
            <View style={[styles.container, styles.isLoaderContainer]} >
                <Pulse size={25} color="#c3bfd8"/>
            </View>
            :
            <View style={styles.container} >
                <Animated.View  >
                    <FlatList
                        data={MyRequest_List}
                        renderItem={({ item, index }) => {
                            return (
                                <Animated.View key={index} style={[styles.customCardContainer, { opacity: listOpacity, margin: listPadding, }]} >
                                    <View style={styles.customCard} >
                                        <View style={styles.avatarContainer} >
                                            <Image style={styles.avatarPic}
                                                resizeMode="cover" source={{ uri: item.pic || dummyPro }} />
                                            <Icons name="circle" style={styles.circleIcon} />
                                        </View>
                                        <View style={styles.detiles}>
                                            <View style={styles.usernameList} >
                                                <Text style={styles.username} >{item.sender.username}</Text>
                                                <Text style={styles.emailAndSeenText} >{item.sender.Email}</Text>
                                                <Text style={styles.emailAndSeenText}>Last update {item.sender.username}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.listButnView}>
                                            <Button style={styles.ListButn} transparent  >
                                                <Image style={{ height: 18, width: 18, }} source={require("./images/forward.png")} />
                                            </Button>
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
        justifyContent: "center",
        alignItems: "center"
    },
    ListButn: {
        alignSelf: "center"
    },
    ListButnIcon: {
        color: "#ff2a68",
    }
})







const mapStateToProp = (state) => {
    return ({
        currentUserData: state.root,
        MyRequest_List: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        myRequestAction: (data) => {
            dispatch(myRequestAction(data))
        },
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(MyRequest)

















































