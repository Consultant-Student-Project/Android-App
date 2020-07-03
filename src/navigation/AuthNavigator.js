import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={AppNavigator} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;