import React, { Component } from 'react';
import {
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    Image,
    PanResponder
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
    constructor(props) {
        super(props)
        this.position = new Animated.ValueXY(0)
        this.swipedCardPosition = new Animated.ValueXY(0)
        this.state = {
            currentIndex: 0
        }
    }


    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestrueState) => true,
            onPanResponderMove: (evt, gestrueState) => {
                if (gestrueState.dy > 0 && (this.state.currentIndex > 0)) {
                    this.swipedCardPosition.setValue({
                        x: 0,
                        y: -SCREEN_HEIGHT + gestrueState.dy
                    })
                }
                else {
                    this.position.setValue({ y: gestrueState.dy })
                }

            },
            onPanResponderRelease: (evt, gestrueState) => {

                if (this.state.currentIndex > 0 && gestrueState.dy > 50 && gestrueState.vy > 0.7) {
                    Animated.timing(this.swipedCardPosition, {
                        toValue: { x: 0, y: 0 },
                        duration: 400
                    }).start(() => {
                        this.setState({
                            currentIndex: this.state.currentIndex - 1,
                        })
                        this.swipedCardPosition.setValue({
                            x: 0,
                            y: -SCREEN_HEIGHT
                        })
                    })
                }

                else if (-gestrueState.dy > 50 && -gestrueState.vy > 0.7) {
                    Animated.timing(this.position, {
                        toValue: { x: 0, y: -SCREEN_HEIGHT },
                        duration: 400
                    }).start(() => {
                        this.setState({
                            currentIndex: this.state.currentIndex + 1,
                        })
                        this.position.setValue({
                            x: 0,
                            y: 0
                        })
                    })
                }
                else {
                    Animated.parallel([
                        Animated.timing(this.position, {
                            toValue: { x: 0, y: 0 },
                            easing: Easing.elastic()
                        }),
                        Animated.timing(this.swipedCardPosition, {
                            toValue: { x: 0, y: -SCREEN_HEIGHT },
                            easing: Easing.elastic()
                        })
                    ]).start()
                }
            }
        })

    }

    renderArtical() {
        return ARTICALS.map((item, i) => {
            if (i === this.state.currentIndex - 1) {
                return (
                    <Animated.View key={item.id} style={this.swipedCardPosition.getLayout()} {...this.PanResponder.panHandlers} >
                        <View style={{ flex: 1, position: "absolute", height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: "#fff" }} >
                            <View style={{ flex: 2, backgroundColor: "#000" }} >
                                <Image style={{ flex: 1, height: null, width: null, resizeMode: "center" }}
                                    source={item.uri}
                                />
                            </View>
                            <View style={{ flex: 3, padding: 5 }} >
                                <Text>
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                      </Text>
                            </View>
                        </View>
                    </Animated.View>
                )

            }

            else if (i < this.state.currentIndex) {
                return null
            }

            if (i === this.state.currentIndex) {

                return (
                    <Animated.View key={item.id} style={this.position.getLayout()} {...this.PanResponder.panHandlers} >
                        <View style={{ flex: 1, position: "absolute", height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: "#fff" }} >
                            <View style={{ flex: 2, backgroundColor: "#000" }} >
                                <Image style={{ flex: 1, height: null, width: null, resizeMode: "center" }}
                                    source={item.uri}
                                />
                            </View>
                            <View style={{ flex: 3, padding: 5 }} >
                                <Text>
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the

                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                      </Text>
                            </View>
                        </View>
                    </Animated.View>

                )
            }
            else {
                return (
                    <Animated.View key={item.id}  >
                        <View style={{ flex: 1, position: "absolute", height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: "#fff" }} >
                            <View style={{ flex: 2, backgroundColor: "#000" }} >
                                <Image style={{ flex: 1, height: null, width: null, resizeMode: "center" }}
                                    source={item.uri}
                                />
                            </View>
                            <View style={{ flex: 3, padding: 5 }} >
                                <Text>
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,

                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Button is a pure NativeBase component.
                                    Buttons are the
                                    integral part of an application. They
                                    are used for various purposes like,
                                    submit or reset a form, navigate,
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    performing interactive actions such as
                                    showing or hiding something in an app on
                                    click of the button, etc.
                                    Note: Always import and use Text from NativeBase with Buttons.
                                    Note: Always import and use Text from NativeBase with Buttons.
                  </Text>
                            </View>
                        </View>
                    </Animated.View>
                )
            }


        }).reverse()
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


