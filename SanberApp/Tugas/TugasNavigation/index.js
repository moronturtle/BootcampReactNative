import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, About, Skill, Add, Project, Login } from './Screen';


const HomeStack = createStackNavigator();
const TabsStack = createBottomTabNavigator();
const AboutStack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home}></HomeStack.Screen>
      <HomeStack.Screen name='Login' component={Login}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}


const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About}></AboutStack.Screen>
    </AboutStack.Navigator>
  )
}

const Tabs = () => {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen name="Skill Screen" component={Skill}></TabsStack.Screen>
      <TabsStack.Screen name="Add Screen" component={Add}></TabsStack.Screen>
      <TabsStack.Screen name="Project Screen" component={Project}></TabsStack.Screen>
    </TabsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen}></Drawer.Screen>
        <Drawer.Screen name="About" component={AboutStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Tabs" component={Tabs}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

