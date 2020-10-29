import { StatusBar } from "expo-status-bar";
import React from "react";
import {Platform,Dimensions} from 'react-native'
import { Block, GalioProvider } from "galio-framework";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./navigation/Screen";
import { NavigationContainer } from "@react-navigation/native";

import { materialTheme } from "./constants/";
const {width}=Dimensions.get("screen")
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          {Platform.OS==="ios" && <StatusBar style="auto" />}
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
    </Provider>
  );
};

export default App;