//Index.ios.js - place code in here for IOS!!!!

//Import a library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

//Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Swift!"} />
      <AlbumList />
    </View>
  );
};

//Render the component to a device
AppRegistry.registerComponent("albums", () => App);
