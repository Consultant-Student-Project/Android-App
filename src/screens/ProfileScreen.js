import React, { useState } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import ProfilePicture from "../components/ProfilePicture";

function ProfileScreen() {
    const name = "Ege Yıldır";
    const username = useState();
    const university = "Akdeniz";
    const faculty = useState();

    return (
        
        <View>
            <ProfilePicture picture="https://picsum.photos/200/200"/>
            <Text>{name}</Text>
            <Text>{username}</Text>
            <Text>{university}</Text>
            <Text>{faculty}</Text>
            <Button 
                title="Settings"
                onPress={() => {
                    console.log("Forwarded to settings page.");
                }}
            />
            <Button
                title="Become A Consultant!"
                onPress={() => {
                    console.log("Forwarded to become consultant form.");
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ProfileScreen
