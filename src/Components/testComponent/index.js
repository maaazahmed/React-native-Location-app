// import React, {
//     Component
//   } from "react";
//   import {
//     Platform,
//     StyleSheet,
//     Dimensions,
//     FlatList,
//     Text,
//     View,
//     Animated
//   } from "react-native";
  
//   export default class TestComponent extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
//         rotation_an: new Animated.Value(0),
//       };
//     }
//     componentDidMount() {
//       this.runRotate();
//     }
  
//     shouldComponentUpdate(nextProps, nextState) {
//       if (this.state.rotation_an != nextState.rotation_an) {
//         return false;
//       }
  
//     }
  
//     runRotate = () => {
//       this.state.rotation_an.setValue(0); //重置Rotate动画值为0
//       Animated.timing(this.state.rotation_an, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true
//       }).start(() => this.runRotate())
//     }
//     renderItem = (info) => {
//       return (
//         <View style = {styles.item}>
//             <Text>{info.item}</Text>
//           </View>
//       )
//     }
//     render() {
//       let rowh = 50;
//       console.log("sssss");
//       return (
//         <View style = {styles.container}>
//           <FlatList
//             data={this.state.list}
//             renderItem ={this.renderItem}
//             getItemLayout = {(data, index) => ( {length: rowh, offset: (rowh) * index, index} )}
//             initialNumToRender = {15}
//             keyExtractor = {(item, index)=>{return "h" + index}}
//             showsVerticalScrollIndicator = {false}
//             legacyImplementation = {false}
//           />
//         </View>
//       );
//     }
//   }
//   const SCREEN_WIDTH = Dimensions.get("window").width;
//   const SCREEN_HEIGHT = Dimensions.get("window").height;
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       backgroundColor: "#F5FCFF",
//     },
//     item: {
//       width: SCREEN_WIDTH,
//       height: 50,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "green",
//     }
//   });







import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    TouchableOpacity,
    Button,
    ScrollView,
} from 'react-native';




export default class ListAnimation extends Component {
    constructor() {
        super()
        this.index = 0
        this.state = { valueArry: [] }
        this.animatedValue = new Animated.Value(0)
    }
    componentWillMount(){
        
    }

    addRow() {
        this.animatedValue.setValue(0)
        let newAdd = { index: this.index }
        this.setState({ valueArry: [...this.state.valueArry, newAdd] }, () => {
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic(),
                useNativeDriver: true,
            }).start(() => {
                this.index = this.index + 1
            })
        })
    }



    render() {
        const animatedPower = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-400, 0], // ==>> Top to bottom
            // outputRange: [70, 0], // ==>> Bottom to top
        })

        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1],
        })


        let rows = this.state.valueArry.map((val, key) => {
            if ((key) === this.index) {
                return (
                    <Animated.View key={key} style={{
                        backgroundColor: "#000", margin: 10, padding: 10,
                        opacity,
                        transform: [{ translateX: animatedPower }], // ==>> Left to right 
                        //  transform: [{ translateY: animatedPower }], // ==>> Right to left 
                    }} >
                        <Text style={{ color: "#fff", }} >Row {val.index}</Text>
                    </Animated.View>
                )
            } else {
                return (
                    <View key={key} style={{ backgroundColor: "#000", margin: 10, padding: 10, }} >
                        <Text style={{ color: "#fff", }}>Row {val.index}</Text>
                    </View>
                )
            }
        })


        return (
            <View style={{ flex: 1, justifyContent: "center", }} >
                <ScrollView>
                    <View>
                        {
                            rows
                        }
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={() => this.addRow()} activeOpacity={0.6} style={{
                    height: 60,
                    width: 60,
                    backgroundColor: "green",
                    position: "absolute",
                    bottom: 30, right: 30,
                    elevation: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100
                }} >
                    <Text style={{ fontSize: 30, color: "#fff" }} >+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
