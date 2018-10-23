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
    Easing
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome";
import { Header, Button, Icon, } from 'native-base';
import { connect } from "react-redux"
import SearchInput, { createFilter } from 'react-native-search-filter';
import firebase from "firebase";
import { allUsersList } from "../../store/action/action"


const database = firebase.database().ref()
let arr = [
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
    },
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
    },

    {
        username: "Haris Ahmed",
        email: "haris@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"

    },
    {
        username: "Ghazi Ahmed",
        email: "ghazi@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"

    },
    {
        username: "Salma Ahmed",
        email: "khan@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
    },

]



const KEYS_TO_FILTERS = ['Email', 'username'];
const { height, width } = Dimensions.get("window")
class AllUsers extends Component {
    constructor() {
        super()
        this.inputFeildAnim = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
        this.textInputOpacity = new Animated.Value(0)
        this.listOpacity = new Animated.Value(0)
        this.listPadding = new Animated.Value(0)
        this.state = {
            searchVal: "",
            searchTerm: "",
            userArr: []
        }
    }


    componentWillMount() {
        database.child("user").on("value", (snapshoot) => {
            let obj = snapshoot.val()
            let users = []
            for (let key in obj) {
                if (this.props.currentUserData.currentUser.id !== key) {
                    users.push({ ...obj[key], key })
                }
            }
            this.setState({ userArr: users })
        })
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.listOpacity, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(this.listPadding, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic()
            })
        ]).start(() => {
            this.props.allUsersList(this.state.userArr)
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
                if (this.state.searchTerm === "") {
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
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    addUser(sender) {
        const currentUser = this.props.currentUserData.currentUser
        const obj = {
            sender,
            currentUser
        }
        alert()
        database.child(`Request/${sender.key}/${currentUser.id}`).set(obj)
    }



    render() {
        let allUsers = this.props.allUsers.allUserList
        const filteredEmails = allUsers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        let dummyPro = "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
        let bgOpacity = this.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        })

        let inputFeildWidth = this.inputFeildAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0]
        })

        let textInputOpacity = this.textInputOpacity.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.2, 1]
        })

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
                <Header style={styles.header} >
                    <Animated.View style={[styles.headerContent, { opacity: bgOpacity, }]} >
                        <View >
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </View>
                        <View  >
                            <View style={styles.inputContainer} >
                                <Icon name='search' style={styles.seachIconForInput} />
                                <Text style={styles.heandingTitle} >Find Friend</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }} >
                            <Button onPress={() => this.searchUser()} transparent>
                                <Icon name='search' />
                            </Button>
                        </View>
                    </Animated.View>
                </Header>
                <Animated.View style={[styles.searcBarContainerr, { top: inputFeildWidth, opacity: textInputOpacity, }]} >
                    <SearchInput placeholder="Search "
                        inputViewStyles={styles.TextInput}
                        onChangeText={(term) => { this.searchUpdated(term) }}
                        placeholderTextColor="#c3bfd8"
                        underlineColorAndroid="transparent" />
                    <View style={styles.searcBarIconButton} >
                        <TouchableOpacity onPress={() => this.cancleSearch()} style={{ flex: 1 }} >
                            <Icon name='close' style={styles.closeIcon} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>

                <Animated.View  >
                    <FlatList
                        data={filteredEmails}
                        renderItem={({ item, index }) => {
                            return (
                                <Animated.View style={[styles.customCardContainer, { opacity: listOpacity, margin: listPadding, }]} >
                                    <View style={styles.customCard} >
                                        <View style={styles.avatarContainer} >
                                            <Image style={styles.avatarPic}
                                                resizeMode="cover" source={{ uri: (item.pic) || (dummyPro) }} />
                                            <Icons name="circle" style={styles.circleIcon} />
                                        </View>
                                        <View style={styles.detiles}>
                                            <View style={styles.usernameList} >
                                                <Text style={styles.username} >{item.username}</Text>
                                                <Text style={styles.emailAndSeenText} >{item.Email}</Text>
                                                <Text style={styles.emailAndSeenText}>Last update {item.lastSeen}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.listButnView}>
                                            <Button style={styles.ListButn} transparent onPress={this.addUser.bind(this, item)}  >
                                                <Icon name="person-add" style={styles.ListButnIcon} />
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
        backgroundColor: "#312e3f",
        justifyContent: "center",
        alignItems: "center"
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
        allUsers: state.root,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        allUsersList: (data) => {
            dispatch(allUsersList(data))
        },
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(AllUsers)


