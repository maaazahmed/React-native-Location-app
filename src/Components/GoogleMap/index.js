
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity

} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from "./mapStyle.json"
import Icons from "react-native-vector-icons/Ionicons"
import { Icon } from "native-base"


const { width, height } = Dimensions.get("window")
export default class Map extends Component {
  constructor() {
    super()
    this.state = {
      region: {
        latitude: 24.8955,
        longitude: 67.0271,
        latitudeDelta: 0.01000,
        longitudeDelta: 0.0100,

      }
    }
  }
  componentWillMount() {

  }
  render() {
    return (
      <View style={styles.container}>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          zoomLevel={100}
          loadingEnabled
          scrollEnabled
          showsUserLocation={true}
          zoomEnabled
          pitchEnabled
          rotateEnabled
          initialRegion={this.state.region}
          region={this.state.region}>
          <MapView.Marker
            title={"This is a title"}
            coordinate={this.state.region} />
        </MapView>

        <View style={{
          height: 60,
          width: 60,
          borderRadius: width,
          position: "absolute",
          zIndex: 1,
          top: 30,
          left: 30,
        }} >
          <TouchableOpacity activeOpacity={.5} style={{
            flex:1,
            backgroundColor: "rgba(55,52,71, 0.7)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width,
          }} >
            <Icon name="arrow-back" style={{ color: "#fff", fontSize: 35 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 80,
         width: "90%", backgroundColor: "rgba(55,52,71, 0.7)",  position: "absolute", zIndex: 1, bottom: 20, borderRadius:3 }} >

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,


  }
});






// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import RetroMapStyles from './mapStyle.json';
// let { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// export default class Map extends Component {
//   constructor() {
//     super();
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }
//     };
//   }
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }
//         });
//       },
//     (error) => console.log(error.message),
//     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//     this.watchID = navigator.geolocation.watchPosition(
//       position => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }
//         });
//       }
//     );
//   }
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }
//   render() {
//     return (
//       <MapView
//         provider={ PROVIDER_GOOGLE }
//         zoomLevel={100}
//         loadingEnabled
//         scrollEnabled
//         showsUserLocation={true}
//         zoomEnabled
//         pitchEnabled
//         rotateEnabled
//         style={{height:"100%", width:"100%"} }
//         showsUserLocation={ true }
//         region={ this.state.region }
//         onRegionChange={ region => this.setState({region}) }
//         onRegionChangeComplete={ region => this.setState({region}) }
//       >
//         <MapView.Marker
//           coordinate={ this.state.region }
//         />
//       </MapView>
//     );
//   }
// }
