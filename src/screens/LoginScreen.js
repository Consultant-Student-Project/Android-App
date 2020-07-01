import React, { useState } from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { Input } from "react-native-elements";

import colors from "../config/colors";

function LoginScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    leftIcon={<FontAwesome5 name="envelope"/>}
                    //value={e-mail}
                />
                <Input
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    leftIcon={<FontAwesome5 name="lock"/>}
                    //value={password}
                />
                <Button
                    title="Login"
                    onPress={() => {
                        // TODO: Delete log statement after debugging.
                        console.log(email + " " + password);
                    }}
                    color="#32E0C4"
                />
                <Button
                    title="Register"
                    onPress={() => {
                        console.log("goto Register...");
                        navigation.navigate("RegisterScreen");
                    }}
                    color="#393E46"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: "center",
      },
      form: {
        left: 20,
        right: 20,
      },
})

export default LoginScreen
