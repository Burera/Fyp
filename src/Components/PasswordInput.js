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
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const PasswordInput = ({pass, onChange}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const handlePasswordChange = val => {
    if (val.trim().length == 15) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
      onChange(val);
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    /* <View>
            <Text style={styles.text_footer_two}>{pass}</Text>
            <View style={styles.action}>

                <FontAwesome name="lock"
                    color="#05375a"
                    size={20} />
                <TextInput placeholder="Password"
                    onChangeText={(val) => handlePasswordChange(val)}
                    secureTextEntry={data.secureTextEntry ? true : false} style={styles.textInput} />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                        <Entypo
                            name="eye-with-line"
                            color="grey"
                            size={20}
                        />
                        :
                        <Entypo
                            name="eye"
                            color="#ff1744"
                            size={20}
                        />
                    }
                </TouchableOpacity>

            </View>
        </View>*/

    <View>
      <LinearGradient colors={['#E5E5E5', '#E5E5E5']} style={styles.Email}>
        <TextInput
          placeholder={pass}
          placeholderTextColor="rgba(0, 0, 0, 0.7)"
          onChangeText={val => handlePasswordChange(val)}
          secureTextEntry={data.secureTextEntry ? true : false}
          style={styles.textInput}
        />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text_footer_two: {
    color: '#50C2C9',
    fontSize: 18,
    marginTop: 20,
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
    marginTop: 15,
  },
});

export default PasswordInput;
