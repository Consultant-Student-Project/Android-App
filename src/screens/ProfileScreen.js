import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text, Avatar } from "react-native-elements";

import colors from "../config/colors";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ProfileScreen({ navigation }) {
  const { user, logOut } = useAuth();

  const name = "Ege Yıldır";
  const username = "egeyildir";
  const faculty = "Faculty of Engineering";
  const department = "Computer Engineering";

  return (
    <KeyboardAwareScrollView>
      <View style={styles.profile}>
        <Avatar
          size="xlarge"
          rounded
          source={{ uri: "https://picsum.photos/200/200" }}
        />
        <View style={styles.name}>
          <Text h1>{name} </Text>
          <Text h4>{username} </Text>
        </View>
        <View style={styles.faculty}>
          <Text h3>{faculty} </Text>
          <Text h4>{department} </Text>
        </View>
        <View style={styles.consButton}>
          <Button
            title="Become A Consultant!"
            onPress={() => {
              navigation.navigate("ConsultantForm");
            }}
            color={colors.neon}
          />
        </View>
        <View style={styles.logoutButton}>
          <Button title="Logout" onPress={() => logOut()} color={colors.grey} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    marginTop: 30,
  },
  consButton: {
    marginTop: 50,
    marginBottom: 10,
  },
  logoutButton: {
    width: "50%",
  },
  name: {
    marginTop: 10,
    alignItems: "center",
  },
  faculty: {
    marginTop: 25,
    alignItems: "center",
  },
});

export default ProfileScreen;
