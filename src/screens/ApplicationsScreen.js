import React from 'react';
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import Screen from "../components/Screen";

const applications = [
    {
        id = 1,
        name: "Kenan Abbak",
        image: "https://picsum.photos/128/128"
    },
    {
        id = 2,
        name: "Ege Yıldır",
        image: "https://picsum.photos/128/128"
    },
];

function ApplicationsScreen({ navigation }) {
    return (
        <Screen>
            <FlatList 
                data={applications}
                keyExtractor={(application) => application.id.toString()}
                renderItem={({ item }) => (
                    <ListItem 
                        title={item.name}
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
    )
}

export default ApplicationsScreen;