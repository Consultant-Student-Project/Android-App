import React from 'react';
import { View, Image, StyleSheet } from "react-native";

export default function ProfilePicture( { picture } ) {
    return (
        <View>
            <Image
                source={{uri: picture}}
                style={StyleSheet.picture}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    picture: {
        width: 200,
        height: 200,
        borderRadius: 100,
    }
})

