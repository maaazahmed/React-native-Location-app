import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import BottomNavigation, {
    FullTab,
    tab
} from 'react-native-material-bottom-navigation'
import Icon from "react-native-vector-icons/MaterialIcons"




export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { activeTab: 0 }

    }


    tabs = [
        {
            key: 'games',
            icon: 'gamepad-variant',
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: 'movie',
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: 'music-note',
            label: 'Music',
            barColor: '#E64A19',
            pressColor: '#312e3f'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
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


    trnderScreen(){
        console.log(this.state.activeTab, "-----")
        if(this.state.activeTab == "games"){
            return < View  style={{backgroundColor:"green", flex:1}} />
        }
        else if (this.state.activeTab == "movies-tv"){
            return < View  style={{backgroundColor:"red", flex:1}} />
        }
        else if (this.state.activeTab == "music"){
            return < View  style={{backgroundColor:"blue", flex:1}} />
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
               
                {this.trnderScreen()}

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








// import React, { Component } from 'react'
// import { View, StyleSheet } from 'react-native'
// import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
// import Icon from 'react-native-vector-icons/MaterialIcons'

/**
 * In this Example, the active Tab will be stored in the state.
 */

// export default class StatefulBottomNavigation extends Component {
//   constructor(props) {
//     super(props)

//     this.state = { activeTab: 0 }
//     this.handleTabChange = this.handleTabChange.bind(this)
//   }

//   handleTabChange(newTabIndex, oldTabIndex) {
//     this.setState({ activeTab: newTabIndex })
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <BottomNavigation
//           activeTab={this.state.activeTab}
//           labelColor="white"
//           rippleColor="white"
//           style={styles.bottomNavigation}
//           onTabChange={this.handleTabChange}

//         >
//           <Tab
//             barBackgroundColor="#37474F"
//             label="Movies & TV"
//             icon={<Icon size={24} color="white" name="ondemand-video" />}
//           />
//           <Tab
//             barBackgroundColor="#00796B"
//             label="Music"
//             icon={<Icon size={24} color="white" name="music-note" />}
//           />
//           <Tab
//             barBackgroundColor="#5D4037"
//             label="Books"
//             icon={<Icon size={24} color="white" name="book" />}
//           />
//           <Tab
//             barBackgroundColor="#3E2723"
//             label="Newsstand"
//             icon={<Icon size={24} color="white" name="newspaper" />}
//           />
//         </BottomNavigation>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   bottomNavigation: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: 56
//   }
// })