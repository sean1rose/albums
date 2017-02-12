// index.ios.js - place code in here for ios

// import library to help create a component
import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import SearchBar from './src/components/SearchBar';
// import axios from 'axios';
import * as musicApi from './src/api/musicApi';

// create a component
class App extends Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
      tracks: [],
    });
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }

  componentWillMount() {
    // when a component is about to be rendered..
    console.log('comp will mount in album list');
    musicApi.getAlbums('Blonde', this.processAlbums);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
      tracks: []
    });
    console.log('PROCESSING ALBUMS! - ', payload, this.state);
  }

  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
        <SearchBar getAlbums={this.getAlbums}/>
      </View>
    );
  }

}


// render it to the device
  // register the App component 
AppRegistry.registerComponent('albums', () => App);