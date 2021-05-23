import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../Components/Logo';
import {useTheme} from '@react-navigation/native';

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
      <View
        style={[styles.footer]}
        // animation="fadeInUpBig"
      >
        <Animatable.View animation="fadeInUpBig"></Animatable.View>
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
    backgroundColor: 'pink',
  },
  header: {
    flex: 1,

    paddingHorizontal: 20,
  },
  footer: {
    flex: 2,

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
  text_footer_two: {
    color: '#ff1744',
    fontSize: 18,
    // marginTop: 40,
  },

  button: {
    alignItems: 'center',
    marginVertical: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sign: {
    color: '#fff',
    fontSize: 18,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  or: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 20,
    color: '#bcbcbc',
  },
  forget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  forget_password: {
    color: '#bcbcbc',
    marginTop: 2,
    fontSize: 15,
  },
  forget_signUp: {
    paddingHorizontal: 10,
    fontSize: 17,
    color: '#50C2C9',
  },
});
