import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const AppText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
      <Text style={styles.shortText}>{props.shortText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#364f6b',
    marginTop: 30,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  shortText: {
    color: '#bcbcbc',
    fontWeight: '100',
    marginHorizontal: 20,
  },
});

export default AppText;
