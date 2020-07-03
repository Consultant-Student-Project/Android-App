import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import ConsultantForm from "../screens/ConsultantForm";

const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ConsultantForm" component={ConsultantForm} />
    </Stack.Navigator>
)

export default ProfileNavigator;