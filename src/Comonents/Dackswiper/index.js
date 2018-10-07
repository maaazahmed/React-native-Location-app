
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    Image
} from 'react-native';


const ARTICALS = [
    { id: "1", uri: require("./media/img1.jpg") },
    { id: "2", uri: require("./media/img2.jpg") },
    { id: "3", uri: require("./media/img3.jpg") },
    { id: "4", uri: require("./media/img4.jpg") },
    { id: "5", uri: require("./media/img5.jpg") },
    { id: "6", uri: require("./media/img6.jpg") },
]

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width
export default class DackSwiper extends Component {
    constructor() {
        super()
        this.state = {
            animatedPositionLeft: new Animated.Value(0),
            animatedPositionTop: new Animated.Value(0),
        }
    }

    renderArtical() {
        return ARTICALS.map((item, i) => {

            return (
                <View key={item.id} style={{ flex: 1, position: "absolute", height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: "#fff" }} >
                    <View style={{ flex: 2, backgroundColor:"#000" }} >
                        <Image style={{flex:1, height:null, width:null, resizeMode:"center"}}
                            source={ARTICALS[i].uri}
                        />
                    </View>
                    <View style={{ flex: 3, padding:5 }} >
                        <Text>
                            Button is a pure NativeBase component.
                            Buttons are the
                            integral part of an application. They
                            are used for various purposes like,
                            submit or reset a form, navigate,
                            performing interactive actions such as
                            showing or hiding something in an app on
                            click of the button, etc.
                            Note: Always import and use Text from NativeBase with Buttons.
                      </Text>
                    </View>

                </View>
            )

        })
    }




    render() {
        return (
            <View style={{
                flex: 1,

            }} >
                {this.renderArtical()}

            </View>
        )
    }
}


