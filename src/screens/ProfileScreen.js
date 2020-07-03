import React, { useState } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Text, Avatar } from "react-native-elements";

import colors from '../config/colors';

function ProfileScreen({ navigation }) {
    const name = "Ege Yıldır";
    const username = "egeyildir";
    const faculty = "Faculty of Engineering";
    const department = "Computer Engineering";

    return (
        <View style={styles.profile}>
            <Avatar
                size="xlarge"
                rounded
                source="https://picsum.photos/200/200"
            />
            <Text h1>{name} </Text>
            <Text h4>{username} </Text>
            <Text h3>{faculty} </Text>
            <Text h4>{department} </Text>

            <View style={styles.button}>
                <Button
                    title="Become A Consultant!"
                    onPress={() => {
                        navigation.navigate("ConsultantForm");
                    }}
                    color={colors.neon}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        alignItems: "center",
        marginTop: 30,
    },
    button: {
        marginTop: 50,
    },
})

export default ProfileScreen
