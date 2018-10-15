import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native';
import { Icon } from 'native-base';
import { Pulse } from 'react-native-loader';
import { SignUp } from "../index"
const { width, height } = Dimensions.get("window")



export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            logoPostion: new Animated.Value(0),
            opacity: new Animated.Value(0),
            heightWidth: new Animated.Value(0),
            signUpHeight: new Animated.Value(0),
            signUpRadius: new Animated.Value(0),
            signContentOpactiy: new Animated.Value(0),
            signContentMarginBottom: new Animated.Value(0),

            email: "",
            password: "",
            isLoader: true
        }
    }


    componentDidMount() {
        setTimeout(() => {
            Animated.sequence([
                Animated.timing(this.state.logoPostion, {
                    toValue: 1,
                    duration: 500
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 500
                }),

            ]).start()
            Animated.timing(this.state.heightWidth, {
                toValue: 1,
                duration: 500
            }).start()
            this.setState({ isLoader: false })
        }, 1000)
    }

    signHendler() {
        Animated.parallel([
            Animated.timing(this.state.logoPostion, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 300
            }),
        ]).start()
        Animated.timing(this.state.heightWidth, {
            toValue: 0,
            duration: 500
        }).start()
        this.setState({ isLoader: true })
    }



    createAccountPage() {
        Animated.timing(this.state.signUpHeight, {
            toValue: 1,
            duration: 200
        }).start()
        Animated.sequence([
            Animated.timing(this.state.signUpRadius, {
                toValue: 1,
                duration: 350
            }),
            Animated.timing(this.state.signContentOpactiy, {
                toValue: 1,
                duration: 500
            })
        ]).start()
        Animated.timing(this.state.signContentMarginBottom, {
            toValue: 1,
            duration: 300
        }).start()
    }


    // backToSignIn() {
    //     Animated.timing(this.state.signUpHeight, {
    //         toValue: 0,
    //         duration: 200
    //     }).start()
    //     Animated.sequence([
    //         Animated.timing(this.state.signUpRadius, {
    //             toValue: 0,
    //             duration: 350
    //         }),
    //         Animated.timing(this.state.signContentOpactiy, {
    //             toValue: 0,
    //             duration: 500
    //         })
    //     ]).start()
    //     Animated.timing(this.state.signContentMarginBottom, {
    //         toValue: 0,
    //         duration: 300
    //     }).start()
    // }



    render() {
        const marginTop = this.state.logoPostion.interpolate({
            inputRange: [0, 1],
            outputRange: ["50%", "1%"],
        })
        const opacity = this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        })
        const heightWidth = this.state.heightWidth.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 170],
        })
        let signUpHeight = this.state.signUpHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [0, height],
        })
        let signUpWidth = this.state.signUpHeight.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, height / 2, width],
        })
        let signUpRadius = this.state.signUpRadius.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [height, width, 0],
        })

        let signContentOpactiy = this.state.signContentOpactiy.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        })

        let signContentMarginBottom = this.state.signContentMarginBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [-1000, 0],
        })
        let signContentMarginLeft = this.state.signContentMarginBottom.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0],
        })

        return (
            <View style={{ flex: 1, justifyContent: "center", }} >
                <View style={styles.container} >
                    <View style={styles.TextFields} >
                        <View style={{
                            flex: 1,
                            alignItems: "center"
                        }} >
                            <Animated.Image
                                resizeMode="contain"
                                source={require("./images/logo2.png")}
                                style={{ height: heightWidth, width: heightWidth, marginTop: marginTop }} />
                        </View>
                        <Animated.View style={{ opacity }} >
                            <View style={[styles.InputView]} >
                                <Icon name="mail" style={{ color: "#c3bfd8", paddingBottom: 10, fontSize: 22 }} />
                                <TextInput
                                    style={styles.Input}
                                    value={this.state.email}
                                    placeholder="Email"
                                    returnKeyType="next"
                                    keyboardType="email-address"
                                    placeholderTextColor="#c3bfd8"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </View>
                            <View style={styles.InputView} >
                                <Icon name="lock" style={{ color: "#c3bfd8", paddingBottom: 10, fontSize: 23 }} />
                                <TextInput
                                    value={this.state.password}
                                    style={styles.Input}
                                    placeholder="Password"
                                    returnKeyType="next"
                                    keyboardType="default"
                                    placeholderTextColor="#c3bfd8"
                                    underlineColorAndroid="transparent"
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </View>
                            <TouchableOpacity onPress={() => this.signHendler()} activeOpacity={0.5} style={styles.buttonContainer} >
                                <Text style={styles.buttonText} >Log In</Text>
                            </TouchableOpacity>
                            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 10 }} >
                                <Text style={{ color: "#c3bfd8", fontSize: 15 }} >Create an account? </Text>
                                <TouchableOpacity onPress={() => this.createAccountPage()}><Text style={{ color: "#c3bfd8", fontSize: 17 }} > Sign Up</Text></TouchableOpacity>
                            </View>
                        </Animated.View>
                        {(this.state.isLoader) ?
                            <View style={{ justifyContent: "center", width: "100%", alignItems: "center", position: "absolute", bottom: 10, }} >
                                <Pulse size={20} color="#c3bfd8" style={{}} />
                            </View>
                            : null}
                    </View>
                </View>
                <Animated.View style={{
                    height: signUpHeight,
                    width: signUpWidth,
                    backgroundColor: "#fff",
                    position: "absolute",
                    borderRadius: signUpRadius,
                    alignSelf: "center",
                    alignContent: "flex-end",
                    bottom: signContentMarginBottom,
                }}>
                    <Animated.View style={{ opacity: signContentOpactiy, flex: 1, borderRadius: signUpRadius, }} >
                        <SignUp />
                    </Animated.View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#373447"
    },
    Input: {
        paddingLeft: 20,
        height: 50,
        fontSize: 15,
        marginBottom: 10,
        color: "#c3bfd8",
        flex: 1,
    },
    InputView: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#c3bfd8",
        marginBottom: 5
    },
    TextFields: {
        height: height / 1.8
    },
    buttonContainer: {
        height: 60,
        backgroundColor: "#312e3f",
        justifyContent: "center",
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 30
    },
    buttonText: {
        color: "#c3bfd8",
        fontSize: 15,
    },
});

