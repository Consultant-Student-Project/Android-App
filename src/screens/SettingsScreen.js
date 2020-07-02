import React from 'react';
import { View, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

const usernameValidation = Yup.object().shape({
    username: Yup.string().required().min(3).trim().label("New Username"),
});
const passwordValidation = Yup.object().shape({
    newPassword: Yup.string().required().min(4).label("New Password"),
    oldPassword: Yup.string().required().min(4).label("Old Password"),
});

export default function SettingsScreen() {
    return (
        <View>
            <Formik
              initialValues={{
                  username: "",
              }}
              onSubmit={(newUsername) => console.log(newUsername)}
              validationSchema={usernameValidation}
            >
                {({ handleChange, handleSubmit, errors, handleBlur, touched}) => (
                    <>
                        <Input 
                            placeholder="New Username"
                            textContentType="username"
                        />
                        <Button 
                            title="Change Username"
                        />
                    </>
                )}
            </Formik>
            <Formik
              initialValues={{
                  newPassword: "",
                  oldPassword: "",
              }}
              onSubmit={(oldPassword, newPassword) => console.log(oldPassword, newPassword)}
              validationSchema={passwordValidation}
            >
                {({ handleChange, handleSubmit, errors, handleBlur, touched}) => (
                    <>
                        <Input 
                            placeholder="New Password"
                        />
                        <Input 
                            placeholder="New Password"
                        />
                        <Button
                            title="Change Password"
                        />
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

