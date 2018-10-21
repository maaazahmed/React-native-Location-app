
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Icon } from "native-base"


const { width, height } = Dimensions.get("window")
export default class MapComponant extends Component {
  constructor() {
    super()
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.01000,
      longitudeDelta: 0.01000,
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position, position.coords)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          zoomLevel={100}
          loadingEnabled
          scrollEnabled
          zoomEnabled
          pitchEnabled
          rotateEnabled
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}>
          <MapView.Marker
            title={"Maaz Ahmed are here"}
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
            }} />
        </MapView>


        <View style={styles.backButtonContainer} >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Dashboard")}
            activeOpacity={.5} style={styles.backButton} >
            <Icon name="arrow-back" style={{ color: "#fff", fontSize: 30 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.datailContainer} >
          <View style={styles.locatDetail} >
            <Text style={{ fontSize: 19, color: "#fff" }} >Maaz Ahmed</Text>
            <Text style={{ fontSize: 15, color: "#fff" }} >maazahmed2k16@gmail.com</Text>
            <Text style={{ fontSize: 15, color: "#fff" }} >Karachi</Text>
          </View>
          <View style={styles.imageContainer} >
            <Image source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=460&v=4" }}
              style={styles.image} />
          </View>
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
  },
  backButtonContainer: {
    height: 57,
    width: 57,
    borderRadius: width,
    position: "absolute",
    zIndex: 1,
    top: 20,
    left: 20,
    backgroundColor: "rgba(55,52,71, 0.5)",
    padding: 10

  },
  backButton: {
    flex: 1,
    backgroundColor: "rgba(55,52,71, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width,
  },
  datailContainer: {
    height: 90,
    width: "95%",
    backgroundColor: "rgba(55,52,71, 0.7)",
    position: "absolute",
    zIndex: 1,
    bottom: 13,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  imageContainer: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: width,

  },
  locatDetail: {
    flex: 3,
    height: "100%",
    justifyContent: "center",
    paddingLeft: 10

  }
});











































// //////////////////////////////////////
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























// const { width, height } = Dimensions.get("window");

// const CARD_HEIGHT = height / 4;
// const CARD_WIDTH = CARD_HEIGHT - 50;

// export default class screens extends Component {
//   constructor() {
//     super()
//     this.state = {
//       markers: [
//         {
//           coordinate: {
//             latitude: 24.8937322,
//             longitude: 67.0287092,
//           },
//           title: "Best Place",
//           description: "This is the best place in Portland",
//           image: Images[0],
//         },
//         {
//           coordinate: {
//             latitude: 24.8937311,
//             longitude: 67.0287022,

//           },
//           title: "Second Best Place",
//           description: "This is the second best place in Portland",
//           image: Images[1],
//         },
//       ],
//       // region: {
//       latitude: 24.8937311,
//       longitude: 67.0287022,
//       latitudeDelta: 0.01000,
//       longitudeDelta: 0.0100,
//       // },
//     };
//   }
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//       },

//       (error) => { console.log(error), this.setState({ error: error.message }) },
//       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//     );
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           zoomLevel={100}
//           loadingEnabled
//           scrollEnabled
//           zoomEnabled
//           pitchEnabled
//           rotateEnabled
//           onRegionChange={(ev)=>console.log(ev)}
//           ref={map => this.map = map}
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: this.state.latitudeDelta,
//             longitudeDelta: this.state.longitudeDelta,
//           }}
//           style={styles.container}

//         >
//   





















// <View style={styles.container}></View>
//         <MapView
//           zoomLevel={100}
//           loadingEnabled
//           scrollEnabled
//           zoomEnabled
//           pitchEnabled
//           rotateEnabled
//           onRegionChange={(ev)=>console.log(ev)}
//           ref={map => this.map = map}
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: this.state.latitudeDelta,
//             longitudeDelta: this.state.longitudeDelta,
//           }}
//           style={styles.container}

//         >
//           {this.state.markers.map((marker, index) => {
//             return (
//               <MapView.Marker
//                key={index}
//                 title="Maaz Ahmed"
//                 coordinate={marker}>
//                 <View style={[styles.markerWrap]}>
//                   <View style={styles.marker} >
//                     <Image source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=460&v=4" }}
//                       style={{ height: 30, width: 30, borderRadius: 100 }} />
//                   </View>
//                 </View>

//               </MapView.Marker>
//             );
//           })
//           }
//         </MapView>
//       </View>