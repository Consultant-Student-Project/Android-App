import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, Button, View } from "react-native";
import { Input, Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import usersApi from "../api/register";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().min(2).trim().label("First name"),
  lastname: Yup.string().required().min(2).trim().label("Last name"),
  username: Yup.string().required().min(3).trim().label("Username"),
  email: Yup.string().required().email().trim().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const registerApi = useApi(usersApi.register);
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    navigation.navigate("LoginScreen");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              username: "",
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
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
                  color={colors.neon}
                />
                <Text
                  style={styles.textStyle}
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  Already have account?
                  <Text style={styles.boldText}> Click here to login.</Text>
                </Text>
                <ErrorMessage error={error} visible={error} />
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </Screen>
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
  boldText: {
    fontWeight: "bold",
  },
});
export default RegisterScreen;
