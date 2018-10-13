import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, H3 } from 'native-base';




export default class AllUsers extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: "#fff" }} >
                 <Header style={{paddingLeft:5, paddingRight:5, backgroundColor:"#373447"}} >  
                    <View  style={{flex:1,flexDirection:"row", justifyContent:"space-between", alignItems:"center"}} >
                        <View>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </View>
                        <View>
                            <Text style={{color:"#fff", fontWeight:"400", fontSize:20}} >Find Friend</Text>
                        </View>
                        <View>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </View>
                    </View>
                </Header>
            </View>
        )
    }
}