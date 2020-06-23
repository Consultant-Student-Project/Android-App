import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

import colors from "../config/colors";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
          leftIcon={<FontAwesome5 name="user-circle" />}
        />
        <Input
          placeholder="E-mail"
          leftIcon={<FontAwesome5 name="envelope" />}
        />
        <Input placeholder="Password" leftIcon={<FontAwesome5 name="lock" />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
  },
  form: {
    left: 20,
    right: 20,
  },
});
export default RegisterScreen;
