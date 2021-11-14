import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DoctorCategories = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={data.background} style={styles.image} />
      </View>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>
        {data.type} • {data.country}
      </Text>
      <View style={styles.smileList}>
        <Image
          source={require('../assets/images/smile.png')}
          style={styles.icon}
        />
        <Text style={styles.smile}>{data.smile}%</Text>
      </View>
    </View>
  );
};

export default DoctorCategories;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // backgroundColor: '#F1F2F6',
    // borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    justifyContent: 'space-around',
    margin: 0,
  },
  image: {
    width: '50%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'CeraPro-Bold',
    fontSize: 16,
    marginTop: 15,
  },

  description: {
    fontFamily: 'CeraPro-Medium',
    color: 'gray',
    marginVertical: 8,
  },

  smile: {
    color: '#59B7C9',
    fontFamily: 'CeraPro-Bold',
    marginLeft: 5,
  },

  smileList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
