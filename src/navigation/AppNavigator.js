import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/SearchScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
)

export default AppNavigator;