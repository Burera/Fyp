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
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import DrawerContent from './src/Navigator/DrawerContent'
import Profile from './src/screens/ProfileScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import  BookmarkScreen from './src/screens/BookmarkScreen'
import SupportScreen from './src/screens/SupportScreen'
import ChatScreen from './src/screens/ChatScreen'
import MessageScreen from './src/screens/MessageScreen'


const SplashStack = createStackNavigator();
const SignInStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const HomeStack = createStackNavigator();
const  Stack = createStackNavigator();


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
const HomeStackScreen = ({navigation})=>(
  <HomeStack.Navigator screenOptions={{
   headerStyle :{
     backgroundColor : '#50C2C9'
   },
   headerTintColor : 'white',
   headerTitleAlign : 'center',
   headerTitleStyle :{
    fontWeight : 'bold'
   }
  }}>

<HomeStack.Screen name="Home" component={HomeScreen}
options={{
  headerLeft :()=>(
    <Icon.Button name="ios-menu" size={25} backgroundColor ="#50C2C9" onPress={()=>navigation.openDrawer()}/>
  )
}}
/>
  </HomeStack.Navigator>
)


const Drawer = createDrawerNavigator();



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
   
 <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="SplashScreen" component={SplashStackScreen} />
        <Drawer.Screen name="SignIn" component={SignInStackScreen} />
        <Drawer.Screen  name="SignUp" component={SignUp} />
        <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen  name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
               <Drawer.Screen name="ChatScreen" component={ChatScreen} />
                <Drawer.Screen name="MessageScreen" component={MessageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
