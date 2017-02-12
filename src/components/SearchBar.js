import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    // // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // handleInputChange(event) {
  //   this.setState({
  //     searchTerm: event.target.value
  //   });
  // }

  onSubmitEditing(event) {
    this.props.getAlbums(this.state.text);
    // if (event.key === "Enter") {
    // }
  }


          // onChangeText={this.handleInputChange}
  render() {
    return (
      <View>
        <Text>SEARCH BAR</Text>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onSubmitEditing}
        />
      </View>
    );
  }
};

export default SearchBar;