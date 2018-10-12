// import React, { Component } from 'react';
// import {
//     View,
// } from 'react-native';
// import BottomNavigation, {
//     FullTab
// } from 'react-native-material-bottom-navigation'
// import Icon from "react-native-vector-icons/MaterialIcons"




// export default class App extends React.Component {
//     tabs = [
//         {
//             key: 'games',
//             icon: 'gamepad-variant',
//             label: 'Games',
//             barColor: '#388E3C',
//             pressColor: 'rgba(255, 255, 255, 0.16)'
//         },
//         {
//             key: 'movies-tv',
//             icon: 'movie',
//             label: 'Movies & TV',
//             barColor: '#B71C1C',
//             pressColor: 'rgba(255, 255, 255, 0.16)'
//         },
//         {
//             key: 'music',
//             icon: 'music-note',
//             label: 'Music',
//             barColor: '#E64A19',
//             pressColor: '#312e3f'
//         }
//     ]

//     renderIcon = icon => ({ isActive }) => (
//         <Icon size={24} color="white" name={icon} />
//     )

//     renderTab = ({ tab, isActive }) => {
//         console.log(tab, isActive)
//         return (
//             <FullTab
//                 isActive={isActive}
//                 key={tab.key}
//                 label={tab.label}
//                 renderIcon={this.renderIcon(tab.icon)}
//             />
            
//         )
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <View style={{ flex: 1 }}>
//                     {/* Your screen contents depending on current tab. */}

//                 </View>
//                 <BottomNavigation
//                     onTabPress={newTab => this.setState({ activeTab: newTab.key })}
//                     renderTab={this.renderTab}
//                     tabs={this.tabs}
//                 />
//             </View>
//         )
//     }
// }









import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons"


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}




