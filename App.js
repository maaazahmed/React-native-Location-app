/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });










// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Animated
// } from 'react-native'

// const arr = []
// for (var i = 0; i < 500; i++) {
//   arr.push(i)
// }

// export default class App extends Component {

//   constructor () {
//     super()
//     this.animatedValue = []
//     arr.forEach((value) => {
//       this.animatedValue[value] = new Animated.Value(0)
//     })
//   }

//   componentDidMount () {
//     this.animate()
//   }

//   animate () {
//     const animations = arr.map((item) => {
//       return Animated.timing(
//         this.animatedValue[item],
//         {
//           toValue: 1,
//           duration: 1
//         }
//       )
//     })
//     Animated.sequence(animations).start()
//   }

//   render () {
//     const animations = arr.map((a, i) => {
//       return <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
//     })
//     return (
//       <View style={styles.container}>
//         {animations}
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   }
// })



















// import React from 'react';
// import { Animated, Text, View } from 'react-native';

// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0), 
//   }

//   componentDidMount() {
//     Animated.timing(                 
//       this.state.fadeAnim,            
//       {
//         toValue: 1,                  
//         duration: 10000,             
//       }
//     ).start();                       
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View                
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim,         
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
//         <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//         </FadeInView>
//       </View>
//     )
//   }
// }







import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import {
  FirstAnimation,
  SlidAnimation,
  TransfromAnimation,
  BackAnimation,
  ImageAnimation,
  RresponseAnimation,
  MovingPointm,
  ImageSlider,
  HeaderAnimation
} from "./src/Comonents"



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      animatedPositionLeft: new Animated.Value(0),
      animatedPositionTop: new Animated.Value(0),
    }
  }




  render() {
    return (
      <View style={{
        flex: 1,
        // justifyContent: "center", alignItems: "center"
      }} >
        {/* <FirstAnimation /> */}
        {/* <SlidAnimation /> */}
        {/* <TransfromAnimation/>
        <TransfromAnimation/> */}
        {/* <TransfromAnimation style={{backgroundColor:"blue"}}>  
          <Text style={{fontSize: 30, color: "#fff", fontWeight: "bold", }}>Rotate box</Text>
          </TransfromAnimation>
          <TransfromAnimation style={{backgroundColor:"red"}} >
          <Text style={{fontSize: 30, color: "#fff", fontWeight: "bold", }}>Rotate box 2</Text>
        </TransfromAnimation> */}
        {/* <ImageAnimation /> */}
        {/* <RresponseAnimation /> */}
        {/* <MovingPoint /> */}
        {/* <ImageSlider /> */}
        <HeaderAnimation />
      </View>
    )
  }
}

















































