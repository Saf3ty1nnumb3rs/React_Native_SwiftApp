import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  
    state = {
        albums: []
    };
  
    componentDidMount() {
    this.fetchList();
  }

  renderAlbums = () => {
      return this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />)
  }

  fetchList = async () => {
    try {
      const response = await axios.get(
        "https://rallycoding.herokuapp.com/api/music_albums"
      );
      console.log(response);
      this.setState({ albums: response.data })
    } catch (err) {
      console.log(err);
    }
  };


  render() {
      console.log(this.state)
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
