import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ApplicationsScreen from "../screens/ApplicationsScreen";
import ApprovalScreen from "../screens/ApprovalScreen";

const Stack = createStackNavigator();

const ApplicationsNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
            name="ApplicationsScreen"
            component={ApplicationsScreen}
            options={{ title: "Applications" }}
        />
        <Stack.Screen 
            name="ApprovalScreen"
            component={ApprovalScreen}
            options={{ title: "Approval" }}
        />
    </Stack.Navigator>
)