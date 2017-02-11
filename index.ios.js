// index.ios.js - place code in here for ios

// import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => {
  return (
    <Header />
  );
};

// render it to the device
  // register the App component 
AppRegistry.registerComponent('albums', () => App);