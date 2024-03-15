import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const SwipableImages = () => {
  const images = [
    require('./assets/redbobsta.jpg'),
    require('./assets/saitama.jpg'),
    // Add more images as needed
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: width, // Set your desired height
  },
});

export default SwipableImages;
