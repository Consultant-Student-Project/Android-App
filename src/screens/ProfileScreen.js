import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { ProfilePicture } from "../components/ProfilePicture.js";

function ProfileScreen() {
    const name = useState();
    const username = useState();
    const university = useState();
    const faculty = useState();

    return (
        <View>
            <ProfilePicture></ProfilePicture>
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
