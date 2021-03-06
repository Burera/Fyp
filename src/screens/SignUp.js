import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');

  const dispatch = useDispatch();

  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.header}>
        <View style={styles.imgoo}>
          <Logo imgSource={require('../../assets/pic5.png')} />

          <Text
            style={[styles.text_header, {fontFamily: 'Montserrat-SemiBold'}]}>
            Welcome Onboard!
          </Text>
          <Text style={styles.text_header_two}>
            Let’s help you meet up your tasks
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <KeyboardAwareScrollView
        style={[styles.footer]}
        // animation="fadeInUpBig"
      >
        <Animatable.View animation="fadeInUpBig">
          <EmailInput pass=" Enter Email" onChange={value => setEmail(value)} />
          <EmailInput pass=" Enter Name" onChange={value => setEmail(value)} />

          <PasswordInput
            pass="Enter Password"
            onChange={value => setPassword(value)}
          />

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() =>
                dispatch(
                  customisedAction(SIGNUP, {
                    email,
                    number: '123344',
                    first_name,
                    last_name: 'abcdeff',
                    username: email,
                    password,
                    navigation,
                  }),
                )
              }>
              <LinearGradient
                colors={['#50C2C9', '#50C2C9']}
                style={styles.signIn}>
                <Text style={styles.sign}>SignUp</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.or}>or</Text>
            <TouchableOpacity style={styles.forget}>
              <Text style={styles.forget_password}>Already Have Account?</Text>

              <Text
                style={styles.forget_signUp}
                onPress={() => navigation.navigate('SignIn')}>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  imgoo: {
    paddingTop: 60,
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
