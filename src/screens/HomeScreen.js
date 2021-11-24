import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from '../Components/Logo';
import {useTheme} from '@react-navigation/native';
import {Button} from 'react-native';
import {Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SignIn = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={true}
            height={200}
            activeDotColor="#50C2C9">
            <View style={styles.slide}>
              <Image
                source={require('../../assets/slide4.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../assets/slide5.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../../assets/slide7.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.imgoo}>
          <Logo imgSource={require('../../assets/getStarted.png')} />

          <Text
            style={[styles.text_header, {fontFamily: 'Montserrat-SemiBold'}]}>
            Welcome to BAZbot
          </Text>
          <Text style={styles.text_header_two}>
            Hi there! Nice to see you again.
          </Text>
        </View>
      </View>
      <View style={[styles.footer]}>
        <Animatable.View animation="fadeInUpBig">
          <View style={styles.boxWrapper}>
            <View style={styles.boxstyle}>
              <MaterialCommunityIcons
                name="chat"
                style={{marginBottom: 5, marginRight: 5}}
                size={43}
                color="#50C2C9"
                onPress={() => navigation.navigate('ChatScreen')}
              />
              <Text style={styles.boxTxt}>Chat</Text>
            </View>
            <View style={styles.boxstyle}>
              <FontAwesome
                name="user-md"
                style={{marginBottom: 5, marginRight: 5}}
                size={43}
                color="#50C2C9"
                onPress={() => navigation.navigate('Appointment')}
              />
              <Text style={styles.boxTxt}>Doctor's</Text>
            </View>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  // imgoo: {
  //   paddingTop: 25,
  // },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 4,

    paddingHorizontal: 20,
  },
  footer: {
    flex: 1,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sliderContainer: {
    height: 200,
    width: '98%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
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
  boxWrapper: {
    flexDirection: 'row',
    width: 80,

    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  boxstyle: {
    width: '45%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#50C2C9',
    borderWidth: 2,
  },
  boxTxt: {
    color: '#50C2C9',
    fontWeight: 'bold',
  },
});
