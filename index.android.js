import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Provider } from "react-redux"
import store from "./src/store/index"
import Routers from "./src/Routes/Routers"
import firebase from "firebase"
import { TestComponent } from "./src/Components"



export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Provider store={store} >
          <Routers />
          {/* <TestComponent /> */}
        </Provider>
      </View>
    )
  }
}

















































