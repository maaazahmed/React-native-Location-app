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
    Dimensions
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { TextField } from 'react-native-material-textfield';


const { width } = Dimensions.get("window")
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
            <View style={styles.backgroundContainer} >
                <View style={{ alignItems: "center", marginTop: 10 }} >
                    <Icons name="street-view" size={100} color="#fff" />
                    <Text style={{ color: "#fff", fontSize: 20 }} >F Location</Text>
                </View>
                <View style={{ height: 100, width: width, alignItems: "center" }} >
                    <TextField
                        value=""
                        inputContainerStyle={{ width: width - 55 }}
                        tintColor="#fff"
                        baseColor="#fff"
                        labelTextStyle={{ color: "#fff" }}
                        label='Email'
                        textColor="#fff"
                        fontSize={18}
                        inputContainerPadding={15}
                        labelFontSize={15}
                        labelPadding={10}

                    />
                </View>
                <View style={{ height: 100, width: width, alignItems: "center" }} >
                    <TextField
                        value=""
                        inputContainerStyle={{ width: width - 55 }}
                        tintColor="#fff"
                        baseColor="#fff"
                        labelTextStyle={{ color: "#fff" }}
                        label='Password'
                        textColor="#fff"
                        fontSize={18}
                        inputContainerPadding={15}
                        labelFontSize={15}
                        labelPadding={10}
                        secureTextEntry={true}
                    />
                    <View style={{ width: width - 55, marginTop: 20, alignItems: "center", justifyContent: "center" }} >
                        <Animated.View style={{
                            height: 50,
                            width: sighButtonWidth,
                            borderColor: "#fff",
                            borderWidth: 1,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }} >
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#312e3f",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 100,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onPress={() => { this.SignInHeandler() }}  >
                                <Text style={{ color: "#fff", fontSize: 20 }}  >SIGN IN</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: null,
        width: null,
        backgroundColor: "#373447"
        // backgroundColor:"rgba(55,52, 71, .8)"
    }
});

