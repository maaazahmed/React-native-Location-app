import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';



const { height, width } = Dimensions.get("window")
export default class AllUsers extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#373447" }} >
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
                <View style={{ flex: 1 }} >
                    {/* <Card style={styles.card} >
                        <CardItem style={{ flex: 1, width: "100%" }} >
                            <Left>
                                <Thumbnail source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.wVna9FeVjRDkvlsdMAg8wQHaJQ&pid=15.1&P=0&w=300&h=300' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                    <Card style={styles.card} >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.wVna9FeVjRDkvlsdMAg8wQHaJQ&pid=15.1&P=0&w=300&h=300' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card> */}
                    <View style={{ height: "15%", width: width, backgroundColor: "#fff", flexDirection:"row" }} >
                        <View style={{flex:1, backgroundColor:"red"}} ></View>
                        <View style={{flex:3, backgroundColor:"blue"}}></View>
                        <View style={{flex:1, backgroundColor:"yellow"}}></View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        margin: 0,
        elevation: 0,
        borderTopWidth: 0,
        marginBottom: 0,
        marginTop: 0,
        height: 90,

    }
})