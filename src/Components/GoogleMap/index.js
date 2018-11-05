
// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Icon } from "native-base"



// const { width, height } = Dimensions.get("window")
// export default class MapComponant extends Component {
//   constructor() {
//     super()
//     this.state = {
//       latitude: 0,
//       longitude: 0,
//       latitudeDelta: 0.01000,
//       longitudeDelta: 0.01000,
//     }
//   }


//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         console.log(position, position.coords)
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });

//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           zoomLevel={100}
//           loadingEnabled
//           scrollEnabled
//           zoomEnabled
//           pitchEnabled
//           mapType="satellite"
//           rotateEnabled
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: this.state.latitudeDelta,
//             longitudeDelta: this.state.longitudeDelta,
//           }}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: this.state.latitudeDelta,
//             longitudeDelta: this.state.longitudeDelta,
//           }}>
//           <MapView.Marker
//             title={"Maaz Ahmed are here"}
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//               latitudeDelta: this.state.latitudeDelta,
//               longitudeDelta: this.state.longitudeDelta,
//             }} />
//         </MapView>


//         <View style={styles.backButtonContainer} >
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate("Dashboard")}
//             activeOpacity={.5} style={styles.backButton} >
//             <Icon name="arrow-back" style={{ color: "#fff", fontSize: 30 }} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.datailContainer} >
//           <View style={styles.locatDetail} >
//             <Text style={{ fontSize: 19, color: "#fff" }} >Maaz Ahmed</Text>
//             <Text style={{ fontSize: 15, color: "#fff" }} >maazahmed2k16@gmail.com</Text>
//             <Text style={{ fontSize: 15, color: "#fff" }} >Karachi</Text>
//           </View>
//           <View style={styles.imageContainer} >
//             <Image source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=460&v=4" }}
//               style={styles.image} />
//           </View>
//         </View>
//       </View >
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     flex: 1
//   },
//   map: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: -1,
//   },
//   backButtonContainer: {
//     height: 57,
//     width: 57,
//     borderRadius: width,
//     position: "absolute",
//     zIndex: 1,
//     top: 20,
//     left: 20,
//     backgroundColor: "rgba(55,52,71, 0.5)",
//     padding: 10

//   },
//   backButton: {
//     flex: 1,
//     backgroundColor: "rgba(55,52,71, 0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: width,
//   },
//   datailContainer: {
//     height: 90,
//     width: "95%",
//     backgroundColor: "rgba(55,52,71, 0.7)",
//     position: "absolute",
//     zIndex: 1,
//     bottom: 13,
//     borderRadius: 3,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row"
//   },
//   imageContainer: {
//     height: "100%",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingRight: 5
//   },
//   image: {
//     height: 75,
//     width: 75,
//     borderRadius: width,
//   },
//   locatDetail: {
//     flex: 3,
//     height: "100%",
//     justifyContent: "center",
//     paddingLeft: 10

//   }
// });


















import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  Image
} from "react-native";
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import haversine from "haversine";
import { Icon } from "native-base"


const { width, height } = Dimensions.get("window")
const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

class MapComponant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position, "")
      }, error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }



  componentDidMount() {
    const { coordinate } = this.state;
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        console.log(position, "")
        const { coordinate, routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }




  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude, // from 
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={1} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate} />
        </MapView>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={[styles.bottomBarContent, { color: "#fff" }]}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
            <Text style={[styles.bottomBarContent, { color: "#fff" }]}>
              {this.state.latitude}  {this.state.longitude}
            </Text>
          </TouchableOpacity>
        </View> */}
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
            {/* <Text style={{ fontSize: 15, color: "#fff" }} >Karachi</Text> */}
            {/* <Text style={[styles.bottomBarContent, { color: "#fff" }]}>
              {this.state.latitude}  {this.state.longitude}
            </Text> */}
            <Text style={[styles.bottomBarContent, { color: "#fff" }]}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </View>
          <View style={styles.imageContainer} >
            <Image source={{ uri: "https://avatars2.githubusercontent.com/u/31310451?s=460&v=4" }}
              style={styles.image} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
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
  bubble: {
    flex: 1,
    backgroundColor: "rgba(55,52,71,0.5)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
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
  locatDetail: {
    flex: 3,
    height: "100%",
    justifyContent: "center",
    paddingLeft: 10

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
});

export default MapComponant;
