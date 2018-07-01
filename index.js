//Index.ios.js - place code in here for IOS!!!!


//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

import Header from './src/components/Header'

//Create a component
const App = () => {
    return (
    <Header />  
    )
}


//Render the component to a device
AppRegistry.registerComponent('albums', () => App);

