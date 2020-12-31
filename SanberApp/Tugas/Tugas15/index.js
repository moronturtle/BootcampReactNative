import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigation, createDrawerNavigator } from '@react-navigation/drawer';
import { SignIn, CreateAccount, Search, Home, Details, Search2, Profile } from './Screen';

const AuthStack = createStackNavigator();
const TabsStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home}></HomeStack.Screen>
      <HomeStack.Screen
        name='Details'
        component={Details}
        options={
          ({ route }) => (
            { title: route.params.name }
          )}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}


const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={Search}></SearchStack.Screen>
      <SearchStack.Screen name='Search2' component={Search2}></SearchStack.Screen>
    </SearchStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile}></ProfileStack.Screen>
    </ProfileStack.Navigator>
  )
}

const Tabs = () => {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen name="Home" component={HomeStackScreen}></TabsStack.Screen>
      <TabsStack.Screen name="Search" component={SearchStackScreen}></TabsStack.Screen>
    </TabsStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Tabs}></Drawer.Screen>
        <Drawer.Screen name="Profile" component={ProfileStackScreen}></Drawer.Screen>
      </Drawer.Navigator>
      {/* <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen}></Tabs.Screen>
        <Tabs.Screen name="Search" component={SearchStackScreen}></Tabs.Screen>
      </Tabs.Navigator> this code for tab navigation */}
      {/* <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }}></AuthStack.Screen>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Create Account' }}></AuthStack.Screen>
      </AuthStack.Navigator>  this is code for using AuthStack*/}
    </NavigationContainer>
  );
}

