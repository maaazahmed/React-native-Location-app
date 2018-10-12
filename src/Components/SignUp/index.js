import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    Dimensions,
} from 'react-native';
import { Icon } from 'native-base';
import { Pulse } from 'react-native-loader';


const { width, height } = Dimensions.get("window")
export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            logoPostion: new Animated.Value(0),
            opacity: new Animated.Value(0),
            heightWidth: new Animated.Value(0),
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

    render() {
        const marginTop = this.state.logoPostion.interpolate({
            inputRange: [0, 1],
            outputRange: ["100%", "0%"],
        })
        const opacity = this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        })
        const heightWidth = this.state.heightWidth.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 100],
        })

        return (
            <View style={styles.container} >
                <View style={styles.TextFields} >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                        <Animated.Image
                            source={require("./images/logo.png")}
                            style={{ height: heightWidth, width: heightWidth, marginTop: marginTop }} />
                        <Text style={{ color: "#c3bfd8", fontSize: 18, marginTop: 10 }} >F Location</Text>
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
                    </Animated.View>
                    {(this.state.isLoader) ?
                        <View style={{ justifyContent: "center", width: "100%", alignItems: "center", position: "absolute", bottom: 10 }} >
                            <Pulse size={20} color="#c3bfd8" style={{}} />
                        </View>
                        : null}
                </View>
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
        marginBottom: 30
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

