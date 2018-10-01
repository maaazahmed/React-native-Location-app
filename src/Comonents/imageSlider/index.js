
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing
} from 'react-native';


const {width, height} = Dimensions.get("window")

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            XPosition: null,
            YPosition: null,
            rotate:new Animated.Value(0)

        }
    }




    onPress(eve) {
        this.setState({
            XPosition: eve.nativeEvent.locationX,
            YPosition: eve.nativeEvent.locationY
        })
    }
    onMove(eve) {
        const { locationX, locationY } = eve.nativeEvent
        const { XPosition, YPosition } = this.state
        let imgPos = new Animated.Value((locationX - XPosition) / width)
        this.setState({rotate:imgPos})

    }

    onRelease(eve) {
        Animated.timing(this.state.rotate,{
            toValue:0,
            duration:500,
            easing:Easing.bounce
        }).start()
      
    }


    render() {
        let rotate = this.state.rotate.interpolate({
            inputRange:[-1 , 1],
            outputRange:["-40deg", "40deg"]
        })

        return (
            <View style={{ flex: 1, backgroundColor: "lightblue", justifyContent:"center", alignItems:"center",  }}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}>
                <Animated.Image
                    source={require("./media/img1.jpg")}
                    style={{ height: 200, width: 150,  transform:[{rotate}]}} />
            </View>
        )
    }
}




