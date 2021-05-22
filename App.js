/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './src/screens/SplashScreens'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'


const SplashStack = createStackNavigator();
const SignInStack = createStackNavigator();
const SignUpStack = createStackNavigator();



const SplashStackScreen = ()=>(
  <SplashStack.Navigator screenOptions={{
    headerShown: false
  }}>

<SplashStack.Screen name="SplashScreen" component={SplashScreen} />
  </SplashStack.Navigator>
)

const SignInStackScreen = ()=>(
  <SignInStack.Navigator  screenOptions={{
    headerShown: false
  }}>

<SignInStack.Screen name="SignIn" component={SignIn} />
  </SignInStack.Navigator>
)

const Drawer = createDrawerNavigator();



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
   
 <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="SplashScreen" component={SplashStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
