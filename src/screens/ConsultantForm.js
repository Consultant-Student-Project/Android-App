import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ImagePickerIOS } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from 'react-native-elements';
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
    faculty: Yup.string().required().min(3).trim().label("Faculty"),
    department: Yup.string().required().min(3).trim().label("Department"),
});

export default function ConsultantForm() {
const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!granted)
        alert("Need permission");
    }

    useEffect(() => {
        requestPermission();
    }, [])

    const selectImage= async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if(!result.cancelled)
                setImageUri(result.uri);
        } catch (error) {
            console.log("Error");
        }
    }

    return (
        <View style={styles.form}>
            <Formik 
                initialValues={{
                    faculty: "",
                    department: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, handleBlur, touched}) => (
                    <>
                        <Input 
                            placeholder="Faculty"
                        />
                        <Input 
                            placeholder="Department"
                        />
                        <Button 
                            title="Select Image"
                            onPress={selectImage}
                        />
                        <Button 
                            title="Become a Consultant!"
                            onPress={handleSubmit}
                            color={colors.neon}
                        />
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
    }
})