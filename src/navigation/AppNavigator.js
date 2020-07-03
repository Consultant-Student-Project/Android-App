import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
 
import SearchScreen from "../screens/SearchScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: colors.background,
            inactiveBackgroundColor: colors.grey,
            activeTintColor: colors.dark,
            inactiveTintColor: colors.background,
        }}
    >
        <Tab.Screen 
            name="SearchScreen" 
            component={SearchScreen} 
            options={{ tabBarIcon: ({ size, color }) => <FontAwesome5 name="search" size={size} color={color} />,
                title: "Search"
            }}
        />
        <Tab.Screen 
            name="MessagesScreen" 
            component={MessagesScreen} 
            options={{ tabBarIcon: ({ size, color }) => <FontAwesome5 name="envelope" size={size} color={color} />,
                title: "Messages"
            }}
        />
        <Tab.Screen 
            name="ProfileScreen" 
            component={ProfileScreen} 
            options={{ tabBarIcon: ({ size, color }) => <FontAwesome5 name="user" size={size} color={color} />,
                title: "Profile"
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;