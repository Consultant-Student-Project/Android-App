import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Text, Avatar } from "react-native-elements";
import AuthContext from "../auth/context";

import colors from '../config/colors';

function ProfileScreen({ navigation }) {
    const name = "Ege Yıldır";
    const username = "egeyildir";
    const faculty = "Faculty of Engineering";
    const department = "Computer Engineering";

    const { user, setUser } = useContext(AuthContext);

    return (
        <View style={styles.profile}>
            <Avatar
                size="xlarge"
                rounded
                source="https://picsum.photos/200/200"
            />
            <View style={styles.name}>
                <Text h1>{name} </Text>
                <Text h4>{username} </Text>
            </View>
            <View style={styles.faculty}>
                <Text h3>{faculty} </Text>
                <Text h4>{department} </Text>
            </View>
            <View style={styles.consButton}>
                <Button
                    title="Become A Consultant!"
                    onPress={() => {
                        navigation.navigate("ConsultantForm");
                    }}
                    color={colors.neon}
                />
                
            </View>
            <View style={styles.logoutButton}>
                <Button
                    title="Logout"
                    onPress={() => setUser(null)}
                    color={colors.grey}
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
    consButton: {
        marginTop: 50,
        marginBottom: 10,
    },
    logoutButton: {
        width: "50%",
    },
    name: {
        marginTop: 10,
        alignItems: "center",
    },
    faculty: {
        marginTop: 25,
        alignItems: "center",
    },
})

export default ProfileScreen
