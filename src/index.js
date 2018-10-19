import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import { MyFriends, AllUsers, RequestComponent } from "./Components"


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: "games" }

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
            key: 'movies-tv',
            icon: require("./images/group.png"),
            label: 'send',
            barColor: '#312e3f',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: require("./images/search.png"),
            label: 'Search',
            barColor: '#312e3f',
            pressColor: '#rgba(255, 255, 255, 0.16)'
        }
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
            return < View style={{ flex: 1 }} ><MyFriends /></View>
        }
        else if (this.state.activeTab == "movies-tv") {
            return < View style={{ flex: 1 }}><RequestComponent /></View>
        }
        else if (this.state.activeTab == "music") {
            return < View style={{ flex: 1 }} ><AllUsers /></View>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }} >
                    {this.trnderScreen()}
                </View>
                <BottomNavigation
                    acactiveTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        )
    }
}



