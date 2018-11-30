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
    Modal,
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import firebase from "firebase"
import { connect } from "react-redux";
import { userRequestAction, selectedRequest } from "../../../store/action/action";
import { Pulse } from "react-native-loader"



const database = firebase.database().ref("/")
const { height, width } = Dimensions.get("window")
class UserRequest extends Component {
    constructor() {
        super()
        this.inputFeildAnim = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
        this.textInputOpacity = new Animated.Value(0)
        this.state = {
            userRquest: "",
            isModalVisible: false,
            isLoader: true,
            replyType: ""
        }
    }

    componentDidMount() {
        const currentUser = this.props.currentUserData.currentUser
        database.child(`Request/${currentUser.id}`).on("value", (snapshoot) => {
            let obj = snapshoot.val()
            let users = []
            for (let key in obj) {
                users.push({ ...obj[key], key })
            }
            setTimeout(() => {
                this.setState({
                    isLoader: false
                })
            }, 2000);
            this.props.userRequestAction(users)
        })
    }

    rquestListButtonuest(data, replyType) {
        this.props.selectedRequest(data)
        this.setState({
            isModalVisible: true,
            replyType
        })
    }


    deleteRequest() {
        this.setState({ isModalVisible: false })
        const selectedRequest = this.props.selected_Request.selectedRequest
        database.child(`Request/${selectedRequest.reciveer.key}/${selectedRequest.sender.id}`).remove()
    }


    approveRequest() {
        this.setState({ isModalVisible: false })
        const selectedRequest = this.props.selected_Request.selectedRequest
        // database.child(`Request/${selectedRequest.reciveer.key}/${selectedRequest.sender.id}`).remove()
        // database.child(`user/${selectedRequest.reciveer.key}/friends/`).push(selectedRequest.sender)
        // database.child(`user/${selectedRequest.sender.id}/friends/`).push(selectedRequest.reciveer)
        console.log(selectedRequest)
        let obj = {
            friend_1:selectedRequest.sender.username,
            friend_2:selectedRequest.reciveer.username,
            id_1:selectedRequest.sender.id,
            id_2:selectedRequest.reciveer.key,
            email_1:selectedRequest.sender.Email,
            email_2:selectedRequest.reciveer.Email,
        }
        database.child(`friends/`).push(selectedRequest)
        console.log(obj)
    }


    render() {
        let dummyPro = "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
        let requestList = this.props.userRequestList.requestList
        return (
            (this.state.isLoader) ?
                <View style={[styles.container, styles.isLoaderContainer]} >
                    <Pulse size={25} color="#c3bfd8" />
                </View>
                :
                <View style={styles.container} >
                    <Animated.View >
                        <FlatList
                            data={requestList}
                            renderItem={({ item, index }) => {
                                return (
                                    <Animated.View key={index} style={[styles.customCardContainer]} >
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
                                                <TouchableOpacity activeOpacity={0.6}
                                                    onPress={this.rquestListButtonuest.bind(this, item, "approve")}
                                                    style={styles.ListButn} transparent  >
                                                    <Image style={styles.AproveRejcetBtn}
                                                        source={require("./images/checked.png")} />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    onPress={this.rquestListButtonuest.bind(this, item, "delete")}
                                                    activeOpacity={0.6}
                                                    style={styles.ListButn} transparent  >
                                                    <Image style={styles.AproveRejcetBtn}
                                                        source={require("./images/cancel.png")} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Animated.View>
                                )
                            }} keyExtractor={(item) => {
                                return item.key
                            }} />
                    </Animated.View>
                    <Modal
                        onRequestClose={() => { this.setState({ replyType: "" }) }}
                        animationType="fade"
                        transparent={true}
                        visible={this.state.isModalVisible} >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent} >
                                <View style={[styles.modalThing, { flex: 2 }]}>
                                    <Image
                                        source={{ uri: dummyPro }}
                                        style={styles.modalImg} />
                                </View>
                                <View style={[styles.modalThing, { padding: 20 }]}>
                                    <Text style={styles.modalText} >
                                        Are you sure you want to {this.state.replyType} this request ?
                                   </Text>
                                </View>
                                <View style={styles.modalThing}>
                                    <View style={styles.modalButtonContainer} >
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => this.setState({ isModalVisible: false })}
                                            style={styles.modalButton} >
                                            <Text style={styles.modalText} >
                                                Cancele
                                           </Text>
                                        </TouchableOpacity>
                                        {(this.state.replyType === "approve") ?
                                            <TouchableOpacity
                                                onPress={this.approveRequest.bind(this)}
                                                activeOpacity={0.7}
                                                style={styles.modalButton} >
                                                <Text style={styles.modalText} >
                                                    Approve
                                               </Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={this.deleteRequest.bind(this)}
                                                style={styles.modalButton} >
                                                <Text style={styles.modalText} >
                                                    Delete
                                             </Text>
                                            </TouchableOpacity>}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
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
        height: 22,
        width: 22,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",

    },
    modalContent: {
        width: width / 1.5,
        height: height / 2,
        backgroundColor: "#312e3f",
        justifyContent: "center",
        alignItems: "center",
        elevation: 20,
        borderRadius: 3,

    },
    modalThing: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10

    },
    isLoaderContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    modalImg: {
        height: 100,
        width: 100,
        borderRadius: width,
        borderColor: "#fff",
        borderWidth: 1
    },
    modalButton: {
        height: 30,
        width: 100,
        backgroundColor: "#ff2a68",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
    },
    modalButtonContainer: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    modalText: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center"
    }
})


const mapStateToProp = (state) => {
    return ({
        userRequestList: state.root,
        currentUserData: state.root,
        selected_Request: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        userRequestAction: (data) => {
            dispatch(userRequestAction(data))
        },
        selectedRequest: (data) => {
            dispatch(selectedRequest(data))
        },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(UserRequest)
