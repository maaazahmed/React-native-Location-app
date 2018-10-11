// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     ImageBackground,
//     Image,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     Animated,
//     KeyboardAvoidingView,
//     Dimensions
// } from 'react-native';
// import Icons from "react-native-vector-icons/FontAwesome"
// import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
// import { TextField } from 'react-native-material-textfield';


// const { width } = Dimensions.get("window")
// export default class SignIn extends Component {
//     constructor() {
//         super()
//         this.state = {
//             buttonSignAnimmation: new Animated.Value(0),
//             buttonTextSignAnimmation: new Animated.Value(0),
//             signLoader: false
//         }

//     }


//     SignInHeandler() {
//         Animated.parallel([
//             Animated.timing(this.state.buttonSignAnimmation, {
//                 toValue: 1,
//                 duration: 300
//             }),
//         ]).start()
//     }

//     render() {

//         const { buttonSignAnimmation } = this.state
//         const sighButtonWidth = buttonSignAnimmation.interpolate({
//             inputRange: [0, 1],
//             outputRange: ["100%", "12%"]
//         })



//         return (
//             // <View style={styles.container}>
//             //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
//             //         <Icons name="street-view" size={100} color="#fff" />
//             //         <Text style={{ color: "#fff", fontSize: 18, marginTop: 0 }} >F Location</Text>
//             //     </View>
//             //     <View style={{ flex: 2, alignItems: "center" }} >
//             //         <View style={{ width: "90%", margin: 10, flex: 1, }} >
//             //             <View style={{ flex: 1 }} >
//             //                 <TextField
//             //                     value=""
//             //                     tintColor="#fff"
//             //                     baseColor="#fff"
//             //                     labelTextStyle={{ color: "#fff" }}
//             //                     label='Email'
//             //                     textColor="#fff"
//             //                     fontSize={18}
//             //                     inputContainerPadding={15}
//             //                     labelFontSize={15}
//             //                     labelPadding={10}
//             //                 />
//             //             </View>
//             //             <View style={{ flex: 1 }}>
//             //                 <TextField
//             //                     value=""
//             //                     tintColor="#fff"
//             //                     baseColor="#fff"
//             //                     labelTextStyle={{ color: "#fff" }}
//             //                     label='Password'
//             //                     textColor="#fff"
//             //                     fontSize={18}
//             //                     inputContainerPadding={15}
//             //                     labelFontSize={15}
//             //                     labelPadding={10} />
//             //             </View>
//             //         </View>
//             //         <View style={{ flex: 1, width: "90%" }} >
//             //             <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }} >
//             //                 <Animated.View style={{
//             //                     height: 50,
//             //                     width: sighButtonWidth,
//             //                     borderColor: "#fff",
//             //                     borderWidth: 1,
//             //                     borderRadius: 100,
//             //                     justifyContent: "center",
//             //                     alignItems: "center"
//             //                 }} >
//             //                     <TouchableOpacity
//             //                         style={{
//             //                             backgroundColor: "#312e3f",
//             //                             width: "100%",
//             //                             height: "100%",
//             //                             borderRadius: 100,
//             //                             justifyContent: "center",
//             //                             alignItems: "center"
//             //                         }}
//             //                         onPress={() => { this.SignInHeandler() }}  >

//             //                         <Text style={{ color: "#fff", fontSize: 20 }}  >SIGN IN</Text>
//             //                     </TouchableOpacity>
//             //                 </Animated.View>
//             //             </View>

//             //             <View style={{ flex: 1, justifyContent: "flex-end", padding: 15, }} >
//             //                 <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end", }} >
//             //                     <Text style={{ color: "#f2f2f2", fontSize: 15 }} >don't have an account yet, </Text>
//             //                     <TouchableOpacity>
//             //                         <Text style={{ color: "#fff", fontSize: 18, }} > Sign Up </Text>
//             //                     </TouchableOpacity>
//             //                 </View>
//             //             </View>
//             //         </View>
//             //     </View>
//             // </View>
//                 <View style={styles.backgroundContainer} >
//                     <View style={{ alignContent: "flex-start",  }} >

//                         <Text style={{ color: "#fff", fontSize: 30 }} >F Location</Text>
//                     </View>
//                     <View style={{ height: 100, width: width, alignItems: "center" }} >
//                         <TextField
//                             value=""
//                             inputContainerStyle={{ width: width - 55 }}
//                             tintColor="#fff"
//                             baseColor="#fff"
//                             labelTextStyle={{ color: "#fff" }}
//                             label='Email'
//                             textColor="#fff"
//                             fontSize={18}
//                             inputContainerPadding={15}
//                             labelFontSize={15}
//                             labelPadding={10}
//                         />
//                     </View>
//                     <View style={{ height: 100, width: width, alignItems: "center" }} >
//                         <TextField
//                             value=""
//                             inputContainerStyle={{ width: width - 55 }}
//                             tintColor="#fff"
//                             baseColor="#fff"
//                             labelTextStyle={{ color: "#fff" }}
//                             label='Password'
//                             textColor="#fff"
//                             fontSize={18}
//                             inputContainerPadding={15}
//                             labelFontSize={15}
//                             labelPadding={10}
//                             secureTextEntry={true}
//                         />
//                         <View style={{ width: width - 55, marginTop: 40, alignItems: "center", justifyContent: "center" }} >
//                             <Animated.View style={{
//                                 height: 50,
//                                 width: sighButtonWidth,
//                                 borderColor: "#fff",
//                                 borderWidth: 1,
//                                 borderRadius: 100,
//                                 justifyContent: "center",
//                                 alignItems: "center"
//                             }} >
//                                 <TouchableOpacity
//                                     style={{
//                                         backgroundColor: "#312e3f",
//                                         width: "100%",
//                                         height: "100%",
//                                         borderRadius: 100,
//                                         justifyContent: "center",
//                                         alignItems: "center"
//                                     }}
//                                     onPress={() => { this.SignInHeandler() }}  >
//                                     <Text style={{ color: "#fff", fontSize: 20 }}  >SIGN IN</Text>
//                                 </TouchableOpacity>
//                             </Animated.View>
//                             <View style={{ flex: 1, justifyContent: "flex-end", padding: 15, }} >
//                         </View>
//                             <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end", paddingBottom:10}} >
//                                 <Text style={{ color: "#f2f2f2", fontSize: 15 }} >don't have an account yet, </Text>
//                                 <TouchableOpacity>
//                                     <Text style={{ color: "#fff", fontSize: 18, }} > Sign Up </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     backgroundContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         height: null,
//         width: null,
//         backgroundColor: "#373447"
//         // backgroundColor:"rgba(55,52, 71, .8)"
//     }
// });










import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Dimensions,

} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { TextField } from 'react-native-material-textfield';


const { width, height } = Dimensions.get("window")
export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            buttonSignAnimmation: new Animated.Value(0),
            buttonTextSignAnimmation: new Animated.Value(0),
            signLoader: false
        }

    }


    SignInHeandler() {
        Animated.parallel([
            Animated.timing(this.state.buttonSignAnimmation, {
                toValue: 1,
                duration: 300
            }),
        ]).start()
    }

    render() {

        const { buttonSignAnimmation } = this.state
        const sighButtonWidth = buttonSignAnimmation.interpolate({
            inputRange: [0, 1],
            outputRange: ["100%", "12%"]
        })



        return (
            <View style={styles.container} >
                <View style={styles.TextFields} >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <Icons name="street-view" size={100} color="#fff" />
                            <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }} >F Location</Text>
                        </View>
                    <View style={styles.InputView} >
                        <Icon name="mail" style={{ color: "#fff", paddingBottom: 10, fontSize:22 }} />
                        <TextInput
                            style={styles.Input}
                            placeholder="Email"
                            returnKeyType="next"
                            keyboardType="email-address"
                            placeholderTextColor="#fff"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.InputView} >
                        <Icon name="lock" style={{ color: "#fff", paddingBottom: 10, fontSize:23 }} />
                        <TextInput
                            style={styles.Input}
                            placeholder="Password"
                            returnKeyType="next"
                            keyboardType="default"
                            placeholderTextColor="#fff"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer} >
                        <Text style={styles.buttonText} >Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#373447"
    },
    Input: {
        paddingLeft: 20,
        height: 50,
        fontSize: 15,
        marginBottom: 10,
        color: "#fff",
        flex: 1,
        // te
    },
    InputView: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginBottom: 30
    },
    TextFields:{
        // backgroundColor:"green",
        height:height / 1.8
    },
    buttonContainer: {
        height: 55,
        // borderColor: "#fff",
        // borderWidth: 1,
        backgroundColor: "#312e3f",
        justifyContent: "center",
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 30
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
    },
});

