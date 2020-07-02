import React from 'react';
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from 'react-native-elements';

const validationSchema = Yup.object().shape({
    faculty: Yup.string().required().min(3).trim().label("Faculty"),
    department: Yup.string().required().min(3).trim().label("Department"),
});

export default function ConsultantForm() {
    return (
        <View>
            // TODO: Make photo required
            /*Name Surname Faculty Department Image(ogr belgesi) 
                You should take Name and Surname directly
                and send them to db.
            */
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
                            placeholder="Deparment"
                        />
                        <Button 
                            title="Become a Consultant!"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </View>
    )
}
