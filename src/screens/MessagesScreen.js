import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const messages = [
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

function MessagesScreen({ navigation }) {
  return (
    <FlatList
      data={messages}
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
          onPress={() => navigation.navigate("ChatScreen", item)}
        />
      )}
    />
  );
}

export default MessagesScreen;
