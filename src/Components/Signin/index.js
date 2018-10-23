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
import { connect } from "react-redux";
import firebase from "firebase";
import { currentUserAction } from "../../store/action/action"

var config = {
    apiKey: "AIzaSyBgWBdLgrKWzavJsUqghhWswvkAghIFE70",
    authDomain: "adding-todo-app.firebaseapp.com",
    databaseURL: "https://adding-todo-app.firebaseio.com",
    projectId: "adding-todo-app",
    storageBucket: "adding-todo-app.appspot.com",
    messagingSenderId: "1007306870917"
};
firebase.initializeApp(config);



let database = firebase.database().ref("/")
const {  height } = Dimensions.get("window")
class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            logoPostion: new Animated.Value(0),
            opacity: new Animated.Value(0),
            heightWidth: new Animated.Value(0),
            signUpHeight: new Animated.Value(0),
            signUpRadius: new Animated.Value(0),
            signContentOpactiy: new Animated.Value(0),
            signContentClosOpactiy: new Animated.Value(0),
            signContentMarginBottom: new Animated.Value(0),
            email: "",
            password: "",
            isLoader: true
        }
    }


    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child(`user/${user.uid}`).on("value", (snap) => {
                    let obj = snap.val()
                    obj.id = snap.key;
                    this.props.currentUserAction(obj)
                    setTimeout(() => {
                        this.props.navigation.navigate("Dashboard")
                    }, 1000)
                })
            }
            else {
                setTimeout(() => {
                    this.heideLoader()
                }, 1000)
            }
        })
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




   
    createAccountPage() {
        this.props.navigation.navigate("SignUp")
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
        }).start(() => {
            this.setState({ isLoader: true })
            setTimeout(() => {
            }, 2000)
        })
    }





    signHendler() {
        let user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.showLoader()
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((users) => {
                database.child(`user/${users.user.uid}`).on("value", (snap) => {
                    let obj = snap.val()
                    obj.id = snap.key;
                    setTimeout(() => {
                        this.heideLoader()
                        this.props.currentUserAction(obj)
                        this.props.navigation.navigate("Dashboard")
                    }, 2000)
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


export default connect(mapStateToProp, mapDispatchToProp)(SignIn)
