import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import AboutScreen from "./Screens/AboutScreen";
import SkillScreen from "./Screens/SkillScreen";
import AddScreen from "./Screens/AddScreen";
import ProjectScreen from "./Screens/ProjectScreen";

// import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Button title="Login" onPress={() =>
      navigation.push('Login')} />
    <Button title="Menuju Skill Screen" onPress={() =>
      navigation.push('Skill')} />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Login = ({ route }) => (
  <ScreenContainer>
    <LoginScreen />
  </ScreenContainer>
);

export const About = ({ route }) => (
  <ScreenContainer>
    <AboutScreen />
  </ScreenContainer>
);

export const Skill = ({ route }) => (
  <ScreenContainer>
    <SkillScreen />
  </ScreenContainer>
);

export const Add = ({ route }) => (
  <ScreenContainer>
    <AddScreen />
  </ScreenContainer>
);

export const Project = ({ route }) => (
  <ScreenContainer>
    <ProjectScreen />
  </ScreenContainer>
);