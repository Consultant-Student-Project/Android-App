import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from 'react-native-elements';
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).trim().label("Name"),
    surname: Yup.string().required().min(2).trim().label("Surname"),
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
                    name:"",
                    surname:"",
                    faculty: "",
                    department: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, handleBlur, touched}) => (
                    <>
                        <Input 
                            placeholder="Name"
                            onBlur={handleBlur("name")}
                            onChangeText={handleChange("name")}
                            errorMessage={touched.name && errors.name}
                        />
                        <Input 
                            placeholder="Surname"
                            onBlur={handleBlur("surname")}
                            onChangeText={handleChange("surname")}
                            errorMessage={touched.surname && errors.surname}
                        />
                        <Input 
                            placeholder="Faculty"
                            onBlur={handleBlur("faculty")}
                            onChangeText={handleChange("faculty")}
                            errorMessage={touched.faculty && errors.faculty}
                        />
                        <Input 
                            placeholder="Department"
                            onBlur={handleBlur("department")}
                            onChangeText={handleChange("department")}
                            errorMessage={touched.department && errors.department}
                        />
                        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100}} />
                        <View style={styles.button}>
                            <Button 
                                title="Select Image"
                                onPress={selectImage}
                            />
                        </View>
                        
                        <View style={styles.button}>
                            <Button 
                                title="Become a Consultant!"
                                onPress={handleSubmit}
                                color={colors.neon}
                            />
                        </View>
                        
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
    },
    button: {
        marginTop: 5,
    }
})