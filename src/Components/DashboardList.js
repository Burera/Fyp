import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements';

const DashboardList = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <ListItem
          underlayColor="#fff"
          bottomDivider
          style={styles.dashboardList}
          onPress={props.onPress}>
          <Avatar source={props.source} />
          <ListItem.Content>
            <ListItem.Title style={styles.dashboardListTitle}>
              {props.name}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.dashboardListSub}>
              {props.subtitle}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron size={26} color="#ff1744" />
        </ListItem>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  dashboardList: {
    paddingVertical: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  dashboardListTitle: {
    fontSize: 19,
    color: '#364f6b',
    fontWeight: 'bold',
  },
  dashboardListSub: {
    fontSize: 12,
  },
});

export default DashboardList;
