import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, TextInput, Button, View } from "react-native";
import { Input } from "react-native-elements";

import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().min(2).trim().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={() => console.log("helo")}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, handleBlur, touched }) => (
            <>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={handleBlur("email")}
                onChangeText={(text) => setEmail(text)}
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                leftIcon={<FontAwesome5 name="envelope" />}
                errorMessage={touched.email && errors.email}
              />
              <Input
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={handleBlur("password")}
                onChangeText={(text) => setPassword(text)}
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
  }
});
export default LoginScreen;
