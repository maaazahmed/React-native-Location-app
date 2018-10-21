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






// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     Animated,
//     Dimensions,
//     Easing,
//     TouchableOpacity,
//     Button,
//     ScrollView,
// } from 'react-native';




// export default class ListAnimation extends Component {
//     constructor() {
//         super()
//         this.index = 0
//         this.state = { valueArry: [] }
//         this.animatedValue = new Animated.Value(0)
//     }
//     componentWillMount(){

//     }

//     addRow() {
//         this.animatedValue.setValue(0)
//         let newAdd = { index: this.index }
//         this.setState({ valueArry: [...this.state.valueArry, newAdd] }, () => {
//             Animated.timing(this.animatedValue, {
//                 toValue: 1,
//                 duration: 500,
//                 easing: Easing.elastic(),
//                 useNativeDriver: true,
//             }).start(() => {
//                 this.index = this.index + 1
//             })
//         })
//     }



//     render() {
//         const animatedPower = this.animatedValue.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-400, 0], // ==>> Top to bottom
//             // outputRange: [70, 0], // ==>> Bottom to top
//         })

//         const opacity = this.animatedValue.interpolate({
//             inputRange: [0, 0.5, 1],
//             outputRange: [0, 0, 1],
//         })


//         let rows = this.state.valueArry.map((val, key) => {
//             if ((key) === this.index) {
//                 return (
//                     <Animated.View key={key} style={{
//                         backgroundColor: "#000", margin: 10, padding: 10,
//                         opacity,
//                         transform: [{ translateX: animatedPower }], // ==>> Left to right 
//                         //  transform: [{ translateY: animatedPower }], // ==>> Right to left 
//                     }} >
//                         <Text style={{ color: "#fff", }} >Row {val.index}</Text>
//                     </Animated.View>
//                 )
//             } else {
//                 return (
//                     <View key={key} style={{ backgroundColor: "#000", margin: 10, padding: 10, }} >
//                         <Text style={{ color: "#fff", }}>Row {val.index}</Text>
//                     </View>
//                 )
//             }
//         })


//         return (
//             <View style={{ flex: 1, justifyContent: "center", }} >
//                 <ScrollView>
//                     <View>
//                         {
//                             rows
//                         }
//                     </View>
//                 </ScrollView>

//                 <TouchableOpacity onPress={() => this.addRow()} activeOpacity={0.6} style={{
//                     height: 60,
//                     width: 60,
//                     backgroundColor: "green",
//                     position: "absolute",
//                     bottom: 30, right: 30,
//                     elevation: 10,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: 100
//                 }} >
//                     <Text style={{ fontSize: 30, color: "#fff" }} >+</Text>
//                 </TouchableOpacity>

//             </View>
//         )
//     }
// }






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
import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['email', 'username'];
let arr = [
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Haris Ahmed",
        email: "haris@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.8UiX79bKZsDXbD-bIUz7AAHaJ4&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Ghazi Ahmed",
        email: "ghazi@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.rHVsvkMy5Z93RSgBSa2qBgHaE7&pid=15.1&P=0&w=230&h=153"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Salma Ahmed",
        email: "salma@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.G7t0mS2Lrm5TIbxNDxRgnQHaJ6&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },

]



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        const filteredEmails = arr.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <View style={styles.container}>
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a message to search"
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <TouchableOpacity>
                                <View>
                                    <Text>{email.username}</Text>
                                    <Text style={styles.emailSubject}>{email.email}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
});