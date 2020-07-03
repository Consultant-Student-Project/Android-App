import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const SearchNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="ChatScreen"
            component={ChatScreen}
            options={{ title:"Chat "}}
        />
    </Stack.Navigator>
)

export default SearchNavigator;