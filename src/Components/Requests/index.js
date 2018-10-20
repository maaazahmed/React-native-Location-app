


// import React, { Component } from 'react';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Button } from 'native-base';
// import { Image, StyleSheet, Dimensions, Animated, View } from "react-native"
// import Icons from "react-native-vector-icons/MaterialIcons"

// import UserRequest from "./UserRequest/index"
// import MyRequest from "./myRequest/index"
// const { height, width } = Dimensions.get("window")

// export default class App extends Component {
//     render() {
//         return (
//             <Container>
// 











import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import UserRequest from "./UserRequest/index"
import MyRequest from "./myRequest/index"
import Profile from "./Profile/index"
import { Container, Header, Tab, Tabs, TabHeading, Icon, Button } from 'native-base';



const { height, width } = Dimensions.get("window")
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: "games" }

    }


    tabs = [
        {
            icon: require("./images/back-arrow.png"),
            key: 'games',
            label: 'Received Request',
            barColor: '#312e3f',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'profile',
            icon: require("./images/baseline_person_white_18dp.png"),
            label: 'Profile',
            barColor: '#312e3f',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            icon: require("./images/forward-arrow.png"),
            key: 'movies-tv',
            label: 'Send Request',
            barColor: '#312e3f',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
    ]

    renderIcon = icon => ({ isActive }) => (
        <Image source={icon} style={{ height: 25, width: 25 }} />
    )

    renderTab = ({ tab, isActive }) => {
        return (
            <FullTab
                isActive={isActive}
                key={tab.key}
                label={tab.label}
                renderIcon={this.renderIcon(tab.icon)}
            />

        )
    }


    trnderScreen() {
        if (this.state.activeTab == "games") {
            return < View style={{ flex: 1 }} ><UserRequest /></View>
        }
        else if (this.state.activeTab == "profile") {
            return < View style={{ flex: 1, backgroundColor: "#312e3f" }}><Profile /></View>
        }
        else if (this.state.activeTab == "movies-tv") {
            return < View style={{ flex: 1 }}><MyRequest /></View>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header hasTabs style={styles.header} >
                    {(this.state.activeTab !== "profile") ?
                        <View style={[styles.headerContent]} >
                            <View >
                                <Button transparent>
                                    <Icon name='menu' />
                                </Button>
                            </View>
                            <View >
                                {(this.state.activeTab == "games") ?
                                    <View style={styles.inputContainer} >
                                        <Image source={require("./images/back-arrow.png")} style={styles.seachIconForInput} />
                                        <Text style={styles.heandingTitle} > Received Request</Text>
                                    </View>
                                    :
                                    <View style={styles.inputContainer} >
                                        <Image source={require("./images/forward-arrow.png")} style={styles.seachIconForInput} />
                                        <Text style={styles.heandingTitle} >Send Request</Text>
                                    </View>
                                }
                            </View>
                            <View style={{ flexDirection: "row" }} >
                                <Button onPress={() => { }} transparent>
                                    <Icon name='search' />
                                </Button>
                            </View>
                        </View>
                        :
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <View style={styles.inputContainer} >
                                <Image source={require("./images/baseline_person_white_18dp.png")} style={styles.seachIconForInput} />
                                <Text style={styles.heandingTitle} >Profile</Text>
                            </View>
                        </View>
                    }
                </Header>
                {/* 312e3f */}
                <View style={{ height:"25%", backgroundColor: "#312e3f", justifyContent: "center", alignItems: "center", padding: 10, }} >
                    <Image style={{ height: 120, width: 120, borderRadius: width, borderColor: "#fff", borderWidth: 2 }} source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=460&v=4" }} ></Image>
                    <Text style={styles.heandingTitle} >Maaz Ahmed</Text>
                </View>
                <BottomNavigation
                    style={{ justifyContent: "space-between", elevation:0 }}
                    acactiveTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
                <View style={{ flex: 1}} >
                    {this.trnderScreen()}
                </View>
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
        // fontSize: 23,
        marginRight: 10,
        height: 25,
        width: 25
    },
    heandingTitle: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        fontWeight:"400",
        marginTop: 5
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


















































