import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const messages = [
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
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
  },
];

function MessagesScreen() {
  return (
    <FlatList
      data={messages}
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
  );
}

export default MessagesScreen;
