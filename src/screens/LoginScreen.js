import React, { useState, useContext } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, Button, View } from "react-native";
import { Input } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import colors from "../config/colors";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).trim().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ username, password }) => {
    const result = await authApi.login(username, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ErrorMessage
          error="Invalid username and/or password."
          visible={loginFailed}
        />
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, handleBlur, touched }) => (
            <>
              <Input
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={handleBlur("username")}
                textContentType="username"
                onChangeText={handleChange("username")}
                leftIcon={<FontAwesome5 name="user" />}
                errorMessage={touched.username && errors.username}
              />
              <Input
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                textContentType="password"
                secureTextEntry
                leftIcon={<FontAwesome5 name="lock" />}
                errorMessage={touched.password && errors.password}
              />
              <Button
                title="Login"
                onPress={handleSubmit}
                color={colors.neon}
              />
            </>
          )}
        </Formik>
        <View style={styles.button}>
          <Button
            title="Register"
            onPress={() => navigation.navigate("RegisterScreen")}
            color={colors.grey}
          />
        </View>
      </View>
    </View>
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
  button: {
    marginTop: 10,
  },
});
export default LoginScreen;
