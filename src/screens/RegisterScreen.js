import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import { Formik } from "formik";

import colors from "../config/colors";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <Input
                placeholder="First name"
                leftIcon={<FontAwesome5 name="user" />}
              />
              <Input
                placeholder="Last name"
                leftIcon={<FontAwesome5 name="user" />}
              />
              <Input
                placeholder="Username"
                autoCapitalize={false}
                leftIcon={<FontAwesome5 name="user-circle" />}
              />
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                leftIcon={<FontAwesome5 name="envelope" />}
              />
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                onChangeText={handleChange("password")}
                textContentType="password"
                secureTextEntry
                leftIcon={<FontAwesome5 name="lock" />}
              />
              <Button title="Register" onPress={handleSubmit} color="#32e0c4" />
            </>
          )}
        </Formik>
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
});
export default RegisterScreen;
