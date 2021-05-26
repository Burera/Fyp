import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DashboardList from '../Components/DashboardList'

import Logo from '../Components/Logo';
import {useTheme} from '@react-navigation/native';
import {Button} from 'react-native';

const SignIn = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgoo}>
          <Logo imgSource={require('../../assets/home2.png')} />

          <Text
            style={[styles.text_header, {fontFamily: 'Montserrat-SemiBold'}]}>
            Welcome, Oliva Grace
          </Text>
          <Text style={styles.text_header_two}>
            Hi there! Nice to see you again.
          </Text>
        </View>
      </View>
      <View style={[styles.footer]}>
        <Animatable.View animation="fadeInUpBig">
          <Button
            title="Message"
            color="#50C2C9"
            onPress={() => navigation.navigate('MessageScreen')}
          />

          
        
        </Animatable.View>
      </View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  imgoo: {
    paddingTop: 25,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,

    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  text_header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingTop: 20,
  },
  text_header_two: {
    color: '#bcbcbc',
    fontWeight: '100',
    fontSize: 20,
    alignSelf: 'center',
  },
  text_footer: {
    color: '#ff1744',
    fontSize: 18,
  },
  


  
});
