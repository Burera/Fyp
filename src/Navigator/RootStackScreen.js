import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreens';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
         <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;