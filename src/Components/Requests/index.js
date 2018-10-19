// import React, { Component } from 'react';
// import {
//   View,
//   Text
// } from 'react-native';
// import { Provider } from "react-redux"
// import firebase from "firebase" 



// export default class App extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <View style={{ flex: 1 }} >
//           <Text>Hello</Text>
//       </View>
//     )
//   }
// }



import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

import UserRequest from "./UserRequest/index"
import MyRequest from "./myRequest/index"

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#312e3f" }}  ></Header>
                <Tabs tabContainerStyle={{ backgroundColor: "#312e3f"}} >
                    <Tab heading={<TabHeading><Icon name="camera" /></TabHeading>}>
                        <UserRequest />
                    </Tab>
                    <Tab heading={<TabHeading><Icon name="camera" /></TabHeading>}>
                        <MyRequest />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}













































