import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';


let arr = [
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Haris Ahmed",
        email: "haris@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.8UiX79bKZsDXbD-bIUz7AAHaJ4&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Salma Ahmed",
        email: "salma@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.G7t0mS2Lrm5TIbxNDxRgnQHaJ6&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Ghazi Ahmed",
        email: "ghazi@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse3.mm.bing.net/th?id=OIP.rHVsvkMy5Z93RSgBSa2qBgHaE7&pid=15.1&P=0&w=230&h=153"
    },
    {
        username: "Aslam Khan",
        email: "aslam@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.o5mjydXPukRieEiTAETvPQHaKK&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Aalam Khan",
        email: "alam@gmail@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse1.mm.bing.net/th?id=OIP.G-aZmAKu77bzDA8JuXBS3AAAAA&pid=15.1&P=0&w=300&h=300"

    },
    {
        username: "Hameed Gull",
        email: "hameed@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse4.mm.bing.net/th?id=OIP.ifutY-djFTb5U9I0ZASvYwHaJE&pid=15.1&P=0&w=300&h=300"
    },
    {
        username: "Maaz Ahmed",
        email: "maazahmed2k16@gmail.com",
        lastSeen: "04:30 AM",
        pic: "https://tse2.mm.bing.net/th?id=OIP.O51F5Tx08mYTBsPxcr7HUwHaJ3&pid=15.1&P=0&w=300&h=300"
    },
]



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
                <FlatList
                    data={arr}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flex: 1, alignItems: "center" }} >
                                <View style={styles.customCard} >
                                    <View style={styles.avatarContainer} >
                                        <Image style={{ height: 75, width: 75, borderRadius: width / 2 }}
                                            resizeMode="cover" source={{ uri: 'http://2.bp.blogspot.com/_vW1GG83Zr1U/TPfiJbObpiI/AAAAAAAAHI8/etK921cL5l4/s400/hamid%2Bgul.jpg' }} />
                                        <Icons name="circle" style={{ color: "#ff2a68", alignSelf: "flex-start", fontSize: 9, marginLeft: 7, marginTop: 1 }} />
                                    </View>
                                    <View style={{ flex: 3, marginTop: -5 }}>
                                        <View style={{ flex: 1, paddingLeft: 25, }} >
                                            <Text style={{ fontSize: 17, color: "#fff" }} >General Hameed Gul</Text>
                                            <Text style={{ color: "#c3bfd8" }} >maaz@gmail.com</Text>
                                            <Text style={{ color: "#c3bfd8" }} >Last update 4:30 AM </Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, width: "25%", backgroundColor: "yellow" }}></View>
                                </View>
                            </View>
                        )
                    }} keyExtractor={(item) => {
                        return item.email
                    }} />








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