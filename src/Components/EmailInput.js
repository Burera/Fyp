import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const EmailInput = ({onChange}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length == 25) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
      onChange(val);
    }
  };
  return (
    /* <View>


            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>

                <FontAwesome name="user-o"
                    color="#05375a"
                    size={20} />
                <TextInput placeholder="Your Email"
                    onChangeText={(val) => textInputChange(val)}
                    style={styles.textInput} />
                {data.check_textInputChange ?

                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="#ff1744"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
 
            </View>
        </View> */
    <View>
      <LinearGradient colors={['#E5E5E5', '#E5E5E5']} style={styles.Email}>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          onChangeText={val => textInputChange(val)}
          style={styles.textInput}
        />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  text_footer: {
    color: '#50C2C9',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 0,

    color: '#05375a',
  },
  Email: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default EmailInput;
