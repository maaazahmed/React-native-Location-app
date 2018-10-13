import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';


const { height, width } = Dimensions.get("window")
export default class AllUsers extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#312e3f" }} >
                <Header style={{ paddingLeft: 5, paddingRight: 5, backgroundColor: "#312e3f" }} >
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <View>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                <Icon name='search' style={{ color: "#fff", fontSize: 23, marginRight: 10 }} />
                                <Text style={{ color: "#fff", fontWeight: "400", fontSize: 20, }} >Find Friend</Text>
                            </View>
                        </View>
                        <View>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </View>
                    </View>
                </Header>


                {/* <View style={{ flex: 1, alignItems: "center" }} >
                    <View style={styles.customCard} >
                        <View style={styles.avatarContainer} >
                            <Image style={{ height: 75, width: 75, borderRadius: width / 2 }} 
                            resizeMode="cover" source={{ uri: 'http://2.bp.blogspot.com/_vW1GG83Zr1U/TPfiJbObpiI/AAAAAAAAHI8/etK921cL5l4/s400/hamid%2Bgul.jpg' }} />
                            <Icons name="circle" style={{ color: "#ff2a68", alignSelf:"flex-start", fontSize:9, marginLeft:7, marginTop:1 }} />
                        </View>
                        <View style={{ flex: 3, marginTop:-5 }}>
                            <View style={{ flex: 1, paddingLeft: 25, }} >
                                <Text style={{ fontSize: 17, color: "#fff" }} >General Hameed Gul</Text>
                                <Text style={{ color: "#c3bfd8" }} >maaz@gmail.com</Text>
                                <Text style={{ color: "#c3bfd8" }} >Last update 4:30 AM </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, width: "25%", backgroundColor: "yellow" }}></View>
                    </View>
                </View> */}



            </View>
        )
    }
}


const styles = StyleSheet.create({
    customCard: {
        height: 100,
        width: width,
        backgroundColor: "#312e3f",
        flexDirection: "row",
        padding: 20,
        marginBottom: 20,
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        flexDirection: "row",
      


    }
})