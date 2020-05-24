/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStackScreen from '../CarParkUI/screens/RootStackScreen';

import HomeScreen from '../CarParkUI/screens/Home';
import ProfileScreen from '../CarParkUI/screens/Profile';
import ReservationsScreen from '../CarParkUI/screens/Reservations';
import { AuthContext } from '../CarParkUI/components/context'

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  const [isLoading,setIsLoading] = React.useState(true);
  const [userToken,setUserToken] = React.useState(null);

  const authContext = React.useMemo(() =>({
    signIn:() => {
      setUserToken('selam');
      setIsLoading(false);
    },
    signOut:() => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp:() => {
      setUserToken('selam');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  }, []);

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {userToken === null ? (
      <RootStackScreen/>) :
    //  <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Profile" component={ProfileScreen} />
    //     <Drawer.Screen name="Reservations" component={ReservationsScreen} />
    //   </Drawer.Navigator> 
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
        <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profil',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="md-contact" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Harita',
        tabBarIcon: ({ color }) => (
          <Icon name="md-pin" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Reservations"
      component={ReservationsScreen}
      options={{
        tabBarLabel: 'Rezervasyonlarım',
        tabBarIcon: ({ color }) => (
          <Icon name="md-list" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

  }
    
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
