import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
// import BottomBar from '../Components/BottomBar';
import ItemType from '../Components/ItemType';
import DoctorCategories from '../Components/DoctorCategories';

const Appointment = () => {
  const types = [
    {
      type: ' Brain',
      image: 'brain',
    },
    {
      type: 'stomach',
      image: 'stomach',
    },
    {
      type: 'lungs',
      image: 'lungs',
    },
    {
      type: 'Bone',
      image: 'bone',
    },
  ];

  const listRestaurans = [
    {
      background: require('../assets/images/bread.png'),

      name: `TANVEER BAIG`,
      type: 'Assistant Professor',
      country: 'Pakistan',
      smile: 97,
    },
    {
      background: require('../assets/images//pho.png'),

      name: `DR WARIS AHMAD`,
      type: 'Clinical Assistant Professor',
      country: 'Pakistan',

      smile: 80,
    },
    {
      background: require('../assets/images/bread.png'),

      name: `TANVEER BAIG`,
      type: 'Assistant Professor',
      country: 'Pakistan',
      smile: 97,
    },
    {
      background: require('../assets/images//pho.png'),

      name: `DR WARIS AHMAD`,
      type: 'Clinical Assistant Professor',
      country: 'Pakistan',

      smile: 80,
    },
  ];
  const renderRestaurant = item => {
    return <DoctorCategories data={item} />;
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>Doctor's Categories</Text>
              <Text style={styles.description}>1240 Doctors availabe</Text>
            </View>
          </View>
          <SearchBar />
          <View style={styles.listItemType}>
            {types.map((item, index) => {
              return <ItemType selected={index == 1} {...item} />;
            })}
          </View>
          <View style={styles.listRestaurant}>
            <Text style={styles.listRestaurantText}>Doctors Near You</Text>
            <View style={styles.listRes}>
              {listRestaurants.map(renderRestaurant)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Appointment;
const styles = StyleSheet.create({
  listRestaurantText: {
    // fontFamily: 'CeraPro-Medium',
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    padding: 14,
  },
  headerTitle: {
    width: '55%',
  },
  headerCart: {},
  heading: {
    fontSize: 25,
    // fontFamily: 'CeraPro-Bold',
    lineHeight: 30,
  },
  description: {
    // fontFamily: 'CeraPro-Medium',
    color: 'gray',
    marginTop: 10,
  },
  buttonCart: {
    backgroundColor: '#F7CB6B',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowColor: '#F7CB6B',
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  numCart: {
    // fontFamily: 'CeraPro-Medium',
    color: '#FFF',
    paddingLeft: 10,
  },
  listItemType: {
    flexDirection: 'row',
  },
  listRes: {
    marginBottom: 15,
  },

  listRestaurant: {
    marginTop: 10,
  },
});
