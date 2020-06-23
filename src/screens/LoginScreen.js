import React, { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

function LoginScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <TextInput
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                //icon="email"
                keyboardType="email-address"
                //value={e-mail}
            />
            <TextInput
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                secureTextEntry
                //value={password}
            />
            <Button
                title="Login"
                onPress={ () => {
                    // TODO: Delete log statement after debugging.
                    console.log(email + " " + password);
                }}
                color="#32E0C4"
            />
            <Button
                title="Register"
                onPress={ () => {
                    console.log("goto Register...");
                }}
                color="#393E46"
            />
        </div>
    )
}

const styles = StyleSheet.create({

})

export default LoginScreen
