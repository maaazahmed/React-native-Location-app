import React from 'react';
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
import { Header, Icon, Button, Tab, Tabs, TabHeading, } from 'native-base';
import { connect } from "react-redux"




const { width } = Dimensions.get("window")
class Dashboard extends React.Component {
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
        const currentUserData = this.props.currentUserData.currentUser;
        let dummyPro = "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
        return (
            <View style={styles.container}>
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
                        <View style={styles.profileTitle} >
                            <View style={styles.inputContainer} >
                                <Image source={require("./images/baseline_person_white_18dp.png")}
                                    style={styles.seachIconForInput} />
                                <Text style={styles.heandingTitle} >Profile</Text>
                            </View>
                        </View>
                    }
                </Header>
                <View style={styles.profileImgContainer} >
                    <Image
                        style={styles.profileImg}
                        source={{ uri: currentUserData.profilePic || dummyPro }} ></Image>
                    <Text style={styles.heandingTitle} >{currentUserData.username}</Text>
                </View>
                {/* <BottomNavigation
                    style={styles.BottomNavigation}
                    acactiveTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
                <View style={{ flex: 1 }} >
                    {this.trnderScreen()}
                </View> */}
                <Tabs
                    tabContainerStyle={{ paddingTop: 5, paddingBottom: 5, backgroundColor: "#312e3f" , elevation:0}} >
                    <Tab
                        heading={
                            <TabHeading style={{ flexDirection: "column", backgroundColor: "#312e3f" }} >
                                <View>
                                    {/* <Icon name="camera" /> */}
                                    {/**/}
                                    <Image style={{ height: 25, width: 25 }}
                                        source={ require("./images/back-arrow.png") } />
                                </View>
                                <View>
                                    <Text style={{ color: "#fff" }} >Camera</Text>
                                </View>
                            </TabHeading>}>
                        <UserRequest />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{ flexDirection: "column", backgroundColor: "#312e3f" }} >
                                <View>
                                    {/* <Icon name="camera" /> */}
                                    <Image style={{ height: 25, width: 25 }}
                                        source={ require("./images/baseline_person_white_18dp.png") } />
                                </View>
                                <View>
                                    <Text style={{ color: "#fff" }} >Profile</Text>
                                </View>
                            </TabHeading>}>
                        <Profile />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{ flexDirection: "column", backgroundColor: "#312e3f" }} >
                                <View>
                                    {/* <Icon name="camera" /> */}
                                    <Image style={{ height: 25, width: 25 }}
                                        source={require("./images/forward-arrow.png")} />
                                </View>
                                <View>
                                    <Text style={{ color: "#fff" }} >Camera</Text>
                                </View>
                            </TabHeading>}>
                        <MyRequest />
                    </Tab>
                </Tabs>
            </View>
        )
    }
}




const styles = StyleSheet.create({
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
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    seachIconForInput: {
        marginRight: 10,
        height: 25,
        width: 25
    },
    heandingTitle: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        fontWeight: "400",
        marginTop: 5
    },
    container: {
        flex: 1,
    },
    profileTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImgContainer: {
        height: "25%",
        backgroundColor: "#312e3f",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: width,
        borderColor: "#fff",
        borderWidth: 2
    },
    BottomNavigation: {
        justifyContent: "space-between",
        elevation: 0
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



export default connect(mapStateToProp, mapDispatchToProp)(Dashboard)


















































