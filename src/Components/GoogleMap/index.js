
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
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
        latitude: 24.8937388,
        longitude: 67.0287008,
        latitudeDelta: 0.01000,
        longitudeDelta: 0.0100,

      },
      markers: [{
        title: 'hello',
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778
        },
      },
      {
        title: 'hello',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449
        },  
      }]
    }
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

        <View style={styles.backButtonContainer} >
          <TouchableOpacity activeOpacity={.5} style={styles.backButton} >
            <Icon name="arrow-back" style={{ color: "#fff", fontSize: 33 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.datailContainer} >
          <View style={styles.locatDetail} >
              <Text style={{fontSize:20, color:"#fff"}} >Maaz Ahmed</Text>
              <Text style={{fontSize:15, color:"#fff"}} >maazahmed2k16@gmail.com</Text>
              <Text style={{fontSize:15, color:"#fff"}} >Karachi</Text>
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
    height: 60,
    width: 60,
    borderRadius: width,
    position: "absolute",
    zIndex: 1,
    top: 30,
    left: 30,
    backgroundColor: "rgba(55,52,71, 0.5)",
    padding:10

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
    alignItems: "center"
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
    paddingLeft:10

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
