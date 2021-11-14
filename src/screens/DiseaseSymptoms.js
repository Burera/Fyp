import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
const DiseaseSymptoms = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          color={COLORS.primary}
          onPress={navigation.goBack}
        />
      </View>
      <View style={style.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Medicne</Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: COLORS.primary}}>
              categories
            </Text>
          </View>
        </View>
      </View>
      <View style={style.searchInputContainer}>
        <Icon name="search" size={30} style={{marginLeft: 20}} />
        <TextInput
          placeholder="Search"
          style={{fontSize: 20, paddingLeft: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

export default DiseaseSymptoms;

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
