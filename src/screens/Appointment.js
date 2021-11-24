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
  Dimensions,
} from 'react-native';
import {
  FlatList,
  // ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import SearchBar from '../Components/SearchBar';
// import BottomBar from '../Components/BottomBar';
import COLORS from '../consts/colors';
import ItemType from '../Components/ItemType';
import DoctorCategories from '../Components/DoctorCategories';
import Doctor from '../consts/Doctor';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Doctors from '../consts/Doctor';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const Appointment = ({navigation}) => {
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

  const ListsDoctors = [
    {
      background: require('../assets/images/doctor1.jpg'),

      name: `TANVEER BAIG`,
      type: 'Assistant Professor',
      country: 'Pakistan',
      smile: 97,
    },
    {
      background: require('../assets/images/doctor2.jpg'),

      name: `DR WARIS AHMAD`,
      type: 'Clinical Assistant Professor',
      country: 'Pakistan',

      smile: 80,
    },
  ];
  const renderDoctors = item => {
    return <DoctorCategories data={item} />;
  };
  const Card = ({Doctor}) => {
    console.log(Doctor);
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DoctorDetails', Doctor)}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image
              source={Doctor.image}
              style={{height: 120, width: 120, borderRadius: 30}}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {Doctor.name}
            </Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {Doctor.Consultant}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.orange} />
                <Icon name="star" size={15} color={COLORS.grey} />
              </View>
            </View>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <View style={{paddingLeft: 23, paddingTop: 40}}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.primary}
            onPress={navigation.goBack}
            sty
          />
        </View>
        <View style={styles.wrap} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>Doctor's Categories</Text>
              <Text style={styles.description}>1240 Doctors availabe</Text>
            </View>
          </View>
          {/* <SearchBar /> */}
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={30} style={{marginLeft: 20}} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="gray"
              style={{fontSize: 20, paddingLeft: 10}}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.listItemType}>
              {types.map((item, index) => {
                return <ItemType selected={index == 1} key={index} {...item} />;
              })}
            </View>
          </ScrollView>
          <View style={styles.listDoctor}>
            <Text style={styles.listRestaurantText}>Doctors Near You</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={Doctor}
              renderItem={({item}, index) => <Card Doctor={item} key={index} />}
            />
          </View>
        </View>
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
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
    padding: 10,
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

  listDoctor: {
    marginTop: 10,
  },
  card: {
    height: 250,
    width: cardWidth,
    margin: 5,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
