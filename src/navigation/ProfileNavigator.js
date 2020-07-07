import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import ConsultantForm from "../screens/ConsultantForm";

const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title:"Profile" }}
        />
        <Stack.Screen 
            name="ConsultantForm" 
            component={ConsultantForm}
            options={{ title:"Consultant Form" }}
         />
    </Stack.Navigator>
)

export default ProfileNavigator;