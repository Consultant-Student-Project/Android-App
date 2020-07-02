import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import { Input, Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().min(3).trim().label("First name"),
  lastname: Yup.string().required().min(3).trim().label("Last name"),
  username: Yup.string().required().min(3).trim().label("Username"),
  email: Yup.string().required().email().trim().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.form}>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              username: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, handleBlur, touched }) => (
              <>
                <Input
                  autoCapitalize="words"
                  placeholder="First name"
                  onBlur={handleBlur("firstname")}
                  onChangeText={handleChange("firstname")}
                  textContentType="name"
                  leftIcon={<FontAwesome5 name="user" />}
                  errorMessage={touched.firstname && errors.firstname}
                />
                <Input
                  autoCapitalize="words"
                  placeholder="Last name"
                  onBlur={handleBlur("lastname")}
                  onChangeText={handleChange("lastname")}
                  textContentType="familyName"
                  leftIcon={<FontAwesome5 name="user" />}
                  errorMessage={touched.lastname && errors.lastname}
                />
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={handleBlur("username")}
                  textContentType="username"
                  placeholder="Username"
                  onChangeText={handleChange("username")}
                  leftIcon={<FontAwesome5 name="user-circle" />}
                  errorMessage={touched.username && errors.username}
                />
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={handleBlur("email")}
                  placeholder="Email"
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                  leftIcon={<FontAwesome5 name="envelope" />}
                  errorMessage={touched.email && errors.email}
                />
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={handleBlur("password")}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  textContentType="password"
                  secureTextEntry
                  leftIcon={<FontAwesome5 name="lock" />}
                  errorMessage={touched.password && errors.password}
                />
                <Button
                  title="Register"
                  onPress={handleSubmit}
                  color="#32e0c4"
                />
                <Text
                  style={styles.textStyle}
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  Already have account? Click here to login
                </Text>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 20,
  },
  textStyle: {
    marginTop: 15,
    color: colors.grey,
    textAlign: "center",
  },
});
export default RegisterScreen;
