import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import BottomNavigation, {
    FullTab,
    tab
} from 'react-native-material-bottom-navigation'
import Icon from "react-native-vector-icons/FontAwesome";

import MyFriends from "./Components/myFriends/index"




export default class App extends React.Component {
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
           icon: require("./images/person_pin_circle.png"),
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
           icon: require("./images/search.png"),
            label: 'Search',
            barColor: '#E64A19',
            pressColor: '#rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        // <Icon size={24} color="white" name={icon} />
        <Image source={icon} style={{height:25, width:25}} />
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
            return < View style={{ backgroundColor: "green", flex: 1 }} ><MyFriends /></View>
        }
        else if (this.state.activeTab == "movies-tv") {
            return < View style={{ backgroundColor: "red", flex: 1 }} />
        }
        else if (this.state.activeTab == "music") {
            return < View style={{ backgroundColor: "blue", flex: 1 }} />
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









// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// import Icon from "react-native-vector-icons/MaterialIcons"
// import {Signin, SignUp, } from "./Components/index"


// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// // const a = () => <Text>Recents</Text>;

// export default class MyComponent extends React.Component {
//     state = {
//         index: 0,
//         routes: [
//             { key: 'music', title: 'Friends', icon: 'place', color: '#312e3f' },
//             { key: 'albums', title: 'Albums', icon: 'arrow-down', color: '#312e3f' },
//             { key: 'recents', title: 'Recents', icon: 'colorize', color: '#312e3f' },
//             { key: 'search', title: 'Search', icon: 'search', color: '#312e3f' },
//         ],
//     };

//     _handleIndexChange = index => this.setState({ index });
//     _renderScene = BottomNavigation.SceneMap({
//         music: Signin,
//         albums: SignUp,
//         recents: RecentsRoute,
//         search: RecentsRoute,
//     });


//     render() {
//         return (
//             <BottomNavigation
//                 navigationState={this.state}
//                 onIndexChange={this._handleIndexChange}
//                 renderScene={this._renderScene}
//             />
//         );
//     }
// }






