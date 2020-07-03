import React, { Component } from "react";
import { FlatList } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

import Screen from "../components/Screen";

export default class SearchScreen extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const users = [
      {
        id: 1,
        title: "T1",
        description: "D1",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      },
      {
        id: 2,
        title: "T2",
        description: "D2",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      },
    ];
    const { search } = this.state;

    return (
      <Screen>
        <SearchBar
          round
          lightTheme
          searchIcon={{ size: 24 }}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={search}
        />
        <FlatList
          data={users}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              leftAvatar={{
                source: item.image && { uri: item.image },
                title: item.title[0],
              }}
              bottomDivider
              chevron
            />
          )}
        />
      </Screen>
    );
  }
}
