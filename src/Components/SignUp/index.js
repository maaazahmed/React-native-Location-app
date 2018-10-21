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
import * as firebase from "firebase";
import { connect } from "react-redux";
import { currentUserAction } from "../../store/action/action"



const database = firebase.database().ref()
const { height } = Dimensions.get("window")
class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            logoPostion: new Animated.Value(0),
            opacity: new Animated.Value(0),
            heightWidth: new Animated.Value(0),
            isLoader: true,
            email: "",
            password: "",
            username: "",
            printError: "assaas"

        }

    }
    heideLoader() {
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
    }
    showLoader() {
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


    componentDidMount() {
        setTimeout(() => {
            this.heideLoader()
        }, 1000)
    }


    backToSignIn() {
        this.props.navigation.navigate("SignIn")
    }

    signHendler() {
        let user = {
            username: this.state.username,
            Email: this.state.email,
            Password: this.state.password,
            profilePic: "https://www.shareicon.net/data/512x512/2015/10/07/113704_user_512x512.png"
        }
        this.showLoader()
        firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password)
            .then((res) => {
                database.child(`user/${res.user.uid}`).set(user)
                    .then(() => {
                        database.child(`user/${res.user.uid}`).on("value", (snap) => {
                            let obj = snap.val()
                            obj.id = snap.key;
                            this.props.currentUserAction(obj)
                            setTimeout(() => {
                                this.heideLoader()
                                this.props.navigation.navigate("Dashboard")
                            }, 2000)
                        })
                    })
            }).catch((error) => {
                setTimeout(() => {
                    this.heideLoader()
                }, 2000)
            });
    }




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



        return (
            <View style={styles.container2} >
                <View style={styles.TextFields2} >
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
                        <View style={[styles.InputView2]} >
                            <Icon name="contact" style={{ color: "#c3bfd8", paddingBottom: 10, fontSize: 22 }} />
                            <TextInput
                                style={styles.Input2}
                                value={this.state.username}
                                placeholder="Usernaem"
                                returnKeyType="next"
                                keyboardType="default"
                                placeholderTextColor="#c3bfd8"
                                underlineColorAndroid="transparent"
                                onChangeText={(username) => this.setState({ username })}
                            />
                        </View>
                        <View style={[styles.InputView2]} >
                            <Icon name="mail" style={{ color: "#c3bfd8", paddingBottom: 10, fontSize: 22 }} />
                            <TextInput
                                style={styles.Input2}
                                value={this.state.email}
                                placeholder="Email"
                                returnKeyType="next"
                                keyboardType="email-address"
                                placeholderTextColor="#c3bfd8"
                                underlineColorAndroid="transparent"
                                onChangeText={(email) => this.setState({ email })}
                            />
                        </View>
                        <View style={styles.InputView2} >
                            <Icon name="lock" style={{ color: "#c3bfd8", paddingBottom: 10, fontSize: 23 }} />
                            <TextInput
                                value={this.state.password}
                                style={styles.Input2}
                                placeholder="Password"
                                returnKeyType="next"
                                keyboardType="default"
                                placeholderTextColor="#c3bfd8"
                                underlineColorAndroid="transparent"
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.signHendler()} activeOpacity={0.5} style={styles.buttonContainer2} >
                            <Text style={styles.buttonText2} >Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 10 }} >
                            <Text style={{ color: "#c3bfd8", fontSize: 15 }} >Already have an account? </Text>
                            <TouchableOpacity onPress={() => this.backToSignIn()} ><Text style={{ color: "#c3bfd8", fontSize: 17 }} > Sign In</Text></TouchableOpacity>
                        </View>
                    </Animated.View>
                    {(this.state.isLoader) ?
                        <View style={{ justifyContent: "center", width: "100%", alignItems: "center", position: "absolute", bottom: 10 }} >
                            <Pulse size={20} color="#c3bfd8" />
                        </View>
                        : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        padding: 60,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#373447"
    },
    Input2: {
        paddingLeft: 20,
        height: 50,
        fontSize: 15,
        marginBottom: 10,
        color: "#c3bfd8",
        flex: 1,
    },
    InputView2: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#c3bfd8",
        marginBottom: 5
    },
    TextFields2: {
        height: height / 1.5
    },
    buttonContainer2: {
        height: 60,
        backgroundColor: "#312e3f",
        justifyContent: "center",
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 30
    },
    buttonText2: {
        color: "#c3bfd8",
        fontSize: 15,
    },
});





const mapStateToProp = (state) => {
    return ({

    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        currentUserAction: (data) => {
            dispatch(currentUserAction(data))
        },
    };
};



export default connect(mapStateToProp, mapDispatchToProp)(SignUp)


