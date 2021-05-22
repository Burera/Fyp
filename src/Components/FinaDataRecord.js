import React from 'react'

import Icon from 'react-native-vector-icons/AntDesign'
import { ListItem } from 'react-native-elements'


import {
  StyleSheet,
  Text,
  View,

} from 'react-native';

const list = [
  {
    id: 1,
    title: 'Risk Assessment',
    icon: 'stepforward '
  },
  {
    id: 2,
    title: 'Working Enviroment',
    icon: 'flight-takeoff'
  },
  {
    id: 3,
    title: 'Well Being',
    icon: 'av-timer'
  }

]


const FinaDataRecord = () => {
  return (
    <View>
      {
        list.map((item) => (
          <ListItem key={item.id} bottomDivider containerStyle={styles.listoStyl}>
            <Icon name={props.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.CheckBox
              key={item.id}
              onPress={Presses}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check}
              checkedColor="#ff1744"
              uncheckedColor="#bcbcbc" />
          </ListItem>
        ))
      }
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 0,
    paddingVertical: 0,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#364f6b',
    marginTop: 30,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingTop: 35
  },
  shortText: {
    color: '#bcbcbc',
    fontWeight: '100',
    marginHorizontal: 20,
    paddingBottom: 30
  },
  bottmbtn: {
    justifyContent: 'flex-end',
    flex: 1
  },
  listoStyl: {
    paddingVertical: 30,
    fontWeight: 'bold',
    marginHorizontal: 10
  }

});

export default FinaDataRecord
