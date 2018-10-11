import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Animated

} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { TextField } from 'react-native-material-textfield';



export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            buttonSignAnimmation: new Animated.Value(0)
        }

    }


    SignInHeandler() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                    <Icons name="street-view" size={100} color="#fff" />
                    <Text style={{ color: "#fff", fontSize: 18, marginTop: 0 }} >F Location</Text>
                </View>
                <View style={{ flex: 2, alignItems: "center" }} >
                    <View style={{ width: "90%", margin: 10, flex: 1, }} >
                        <View style={{ flex: 1 }} >
                            <TextField
                                value=""
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
                        <View style={{ flex: 1 }}>
                            <TextField
                                value=""
                                tintColor="#fff"
                                baseColor="#fff"
                                labelTextStyle={{ color: "#fff" }}
                                label='Password'
                                textColor="#fff"
                                fontSize={18}
                                inputContainerPadding={15}
                                labelFontSize={15}
                                labelPadding={10} />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: "90%" }} >
                        <View style={{ marginTop: 20, }} >
                            <TouchableOpacity
                                SignInHeandler
                                onPress={() => { this.SignInHeandler() }}
                                style={{ height: 50, width: "100%", borderColor: "#fff", borderWidth: 1, backgroundColor: "#312e3f", borderRadius: 100, justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ color: "#fff", fontSize: 20 }}  >SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-end", padding: 15, }} >
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end", }} >
                                <Text style={{ color: "#f2f2f2", fontSize: 15 }} >don't have an account yet, </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: "#fff", fontSize: 18 }} > Sign Up </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#373447"
    }
});

