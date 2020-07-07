import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

import consultantsApi from "../api/consultants";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const users = [
  {
    id: 1,
    name: "Alessia Howard",
    description: "Faculty of Law",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
  },
  {
    id: 2,
    name: "Loki Krause",
    description: "Faculty of Engineering",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  },
];

function SearchScreen() {
  const getConsultantsApi = useApi(consultantsApi.getConsultants);

  useEffect(() => {
    getConsultantsApi.request();
  }, []);

  return (
    <Screen>
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        placeholder="Search"
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <FlatList
        data={users}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.description}
            leftAvatar={{
              source: item.image && { uri: item.image },
              title: item.name[0],
            }}
            bottomDivider
            chevron
          />
        )}
      />
    </Screen>
  );
}
export default SearchScreen;
