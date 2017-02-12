import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import * as musicApi from '../api/musicApi';

class AlbumList extends Component {

  // constructor() {
  //   super();
  //   this.state = ({
  //     albums: [],
  //     tracks: [],
  //   });

  //   this.processAlbums = this.processAlbums.bind(this);
  // }

  // componentWillMount() {
  //   // when a component is about to be rendered..
  //   console.log('comp will mount in album list');
  //   musicApi.getAlbums('Blonde', this.processAlbums);

  // }

  // getAlbums(artist) {
  //   musicApi.getAlbums(artist, this.processAlbums);
  // }

  // processAlbums(payload) {
  //   this.setState({
  //     albums: payload.albums.items,
  //     tracks: []
  //   });
  //   console.log('PROCESSING ALBUMS! - ', payload, this.state);
  // }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
};


export default AlbumList;