import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInput from '../Components/PasswordInput';
import EmailInput from '../Components/EmailInput';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {customisedAction} from '../redux/actions';
import {SIGNUP} from '../Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Logo from '../Components/Logo';
import {useTheme} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ScrollView style={styles.container}>
      <KeyboardAwareScrollView style={styles.header}>
        <View style={styles.imgoo}>
          <Logo imgSource={require('../../assets/pic5.png')} />

          <Text
            style={[styles.text_header, {fontFamily: 'Montserrat-SemiBold'}]}>
            Contact Us
          </Text>
          <Text style={styles.text_header_two}>How May I help you</Text>
        </View>
      </KeyboardAwareScrollView>
      <KeyboardAwareScrollView
        style={[styles.footer]}
        // animation="fadeInUpBig"
      >
        <Animatable.View animation="fadeInUpBig">
          <PasswordInput pass="Name" onChange={value => setPassword(value)} />
          <PasswordInput pass="Email" onChange={value => setPassword(value)} />
          <PasswordInput pass="Number" onChange={value => setPassword(value)} />
          <PasswordInput
            pass="Message"
            onChange={value => setPassword(value)}
          />
          <PasswordInput
            pass="Problem"
            onChange={value => setPassword(value)}
          />

          <View style={styles.button}>
            <LinearGradient
              colors={['#50C2C9', '#50C2C9']}
              style={styles.signIn}>
              <TouchableOpacity onPress={navigation.goBack}>
                <Text style={styles.sign}>Contact</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  imgoo: {
    paddingTop: 20,
  },

  container: {
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
  },
  footer: {
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
});
