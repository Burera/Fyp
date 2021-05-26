import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../Components/Logo';
import {useTheme} from '@react-navigation/native';
import {Button} from 'react-native';
import {Image} from 'react-native';

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
          <View
            style={styles.boxWrapper}>
            <View
              style={styles.boxstyle}>
               <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={43}
            color="#50C2C9"
            onPress ={()=>navigation.navigate('ChatScreen')}
          />
              <Text style={styles.boxTxt} >Hello</Text>
            </View>
            <View
              style={
                styles.boxstyle
              }>
             <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={43}
            color="#50C2C9"
            onPress ={()=>navigation.navigate('ChatScreen')}
          />
              <Text style={styles.boxTxt}>Hello</Text>
            </View>
          </View>
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
  img: {
    width: 20,
    height: 30,
  },
  boxWrapper :{
  flexDirection: 'row',
  width: 80,
  
  width: '100%',
  paddingHorizontal: 20,
  justifyContent: 'space-between',
  
  },
  boxstyle : {
   
    width: '45%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor : '#50C2C9',
    borderWidth : 2,
    
  },
  boxTxt : {
    color :'#50C2C9',
    fontWeight : 'bold'
  }
});
