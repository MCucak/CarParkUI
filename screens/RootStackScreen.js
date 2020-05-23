import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React, {Component} from 'react';

import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';
import SplashScreen from './Splash';

const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => {
  return (
        <RootStack.Navigator>
        <RootStack.Screen name="Splash" component={SplashScreen} options={{
        headerShown:false}}/>
        <RootStack.Screen name="Login" component={SignInScreen} options={{
        headerShown:false}}/>
        <RootStack.Screen name="SignUp" component={SignUpScreen}options={{
        headerShown:false,
        }}/>
      </RootStack.Navigator>
)};

export default RootStackScreen;
