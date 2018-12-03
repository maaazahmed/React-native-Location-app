import React, { Component } from 'react';
import {
    View,
    Image,
    AppState
} from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import { MyFriends, AllUsers, RequestComponent } from "./Components"
import firebase from "firebase";
import { friendsListAction } from "./store/action/action"
import { connect } from "react-redux"




let database = firebase.database().ref()
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "games",
            appState: AppState.currentState
        }
    }


    componentWillMount() {
        const currentUser = this.props.currentUser.currentUser;
        database.child("friends").on("value", (snapshot) => {
            let obj = snapshot.val()
            let arr = []
            for (key in obj) {
                if (currentUser.id === obj[key].id_1) {
                    let obj_1 = {
                        friend: obj[key].friend_2,
                        id: obj[key].id_2,
                        email: obj[key].email_2,
                        nodeKey: key,
                        isOnline: obj[key].isOnline
                    }
                    console.log(obj[key])
                    arr.push({ ...obj_1, key })
                }
                else if (currentUser.id === obj[key].id_2) {
                    let obj_2 = {
                        friend: obj[key].friend_1,
                        id: obj[key].id_1,
                        email: obj[key].email_1,
                        nodeKey: key,
                        isOnline: obj[key].isOnline
                    }

                    // console.log(obj[key])
                    // for(var a in obj[key]){
                    //     console.log( obj[key][a])
                    // }
                    arr.push({ ...obj_2, key })
                }
                if (currentUser.id === obj[key].id_1 || currentUser.id === obj[key].id_2) {
                    // database.child(`friends/${key}/isOnline`).set(true)
                    database.child(`friends/${key}/${currentUser.id}`).set(true)
                }
            }
            this.props.friendsListAction(arr)
        })
    }

    componentWillUnmount() {
        // console.log(this.props.myFriendsList.friendList)
        let friendList = this.props.myFriendsList.friendList
        const currentUser = this.props.currentUser.currentUser;
        for (let i = 0; i < friendList.length; i++) {
            const element = friendList[i];
            console.log(element)
            database.child(`friends/${element.nodeKey}/${currentUser.id}`).set(false)
        }
    }



    tabs = [
        {
            key: 'games',
            icon: require("./images/person_pin_circle.png"),
            label: 'Friends',
            barColor: '#312e3f',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: require("./images/search.png"),
            label: 'Search',
            barColor: '#312e3f',
            pressColor: '#rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: require("./images/setting.png"),
            label: 'More',
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
        let navigation = this.props.navigation
        if (this.state.activeTab == "games") {
            return < View style={{ flex: 1 }} ><MyFriends navigation={navigation} /></View>
        }
        else if (this.state.activeTab == "movies-tv") {
            return < View style={{ flex: 1 }}><RequestComponent navigation={navigation} /></View>
        }
        else if (this.state.activeTab == "music") {
            return < View style={{ flex: 1 }} ><AllUsers navigation={navigation} /></View>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }} >
                    {this.trnderScreen()}
                </View>
                <BottomNavigation
                    style={{ justifyContent: "space-between", elevation: 0 }}
                    acactiveTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        )
    }
}

const mapStateToProp = (state) => {
    return ({
        myFriendsList: state.root,
        currentUser: state.root
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        friendsListAction: (data) => {
            dispatch(friendsListAction(data))
        },
    };
};


export default connect(mapStateToProp, mapDispatchToProp)(Dashboard)




