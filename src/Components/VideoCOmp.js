import React from 'react';
import { Container, Content } from 'native-base';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';


import Video from 'react-native-video';



const VideoCOmp = (props) => {
  const { navigation } = props;
  return (

    <View>

      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        // Can be a URL or a local file.
        // Callback when video cannot be loaded
        playInBackground={false}
        playWhenInactive={false}
        style={styles.backgroundVideo}
        resizeMode="cover"
        // resizeMode="contain"
        controls={true}
        progressUpdateInterval={15}
        onLoadStart={() => {
          console.log('onLoadStart', new Date());
        }}
        onLoad={() => {
          console.log('onLoad', new Date());
        }}
      />
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 0,
    paddingVertical: 0,
  },
  imgStyl: {
    flex: 1,
    alignSelf: 'center',
    width: '90%', backgroundColor: 'silver',
    marginVertical: 10,
    borderWidth: 0.5, borderRadius: 20, overflow: 'hidden'
  }
});
export default VideoCOmp;
