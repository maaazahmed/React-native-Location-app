import React, { Component } from 'react';
import {
  View,
  Animated,
} from 'react-native';
import {
  Map,
  Signin,
  SignUp
} from "./src/Components/index"
import Dashboard from "./src/index"
import { Provider } from "react-redux"
import store from "./src/store/index"


export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <View style={{ flex: 1 }} >
        {/* <Map /> */}
        <Provider store={store} >
          <Signin />
        </Provider>
        {/* <SignUp/> */}
        {/* <Dashboard/> */}
      </View>
    )
  }
}

















































