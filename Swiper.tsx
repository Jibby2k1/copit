import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const SwipableImages = () => {
  const images = [
    require('./assets/dress.jpg'),
    require('./assets/hat.jpg'),
    require('./assets/Jacket.jpg'),
    require('./assets/pants.jpg'),
    require('./assets/shirt2.jpg'),
    require('./assets/shirts.jpg'),
    // Add more images as needed
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} resizeMode="contain"/>
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
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Assuming the images are square
  },
});

export default SwipableImages;
