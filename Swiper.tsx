import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from './data';
import Animated, {
  FadeOutDown,
  BounceInUp,
} from 'react-native-reanimated';

const SwipableImages = ({setWishlist}) => {
  const [index, setIndex] = React.useState(0);

  const Card = ({ card }) => (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
    </View>
  );

  const onSwiped = () => {
    setIndex((index + 1) % data.length);
  };

  const onSwipedRight = () => {
    setWishlist((wishlist) => {
      // Check if the item already exists in the wishlist
      const itemExists = wishlist.some(item => item.id === data[index].id);
  
      // If the item doesn't exist, add it to the wishlist
      if (!itemExists) {
        return [...wishlist, data[index]];
      }
  
      // If the item already exists, return the existing wishlist
      return wishlist;
    });
  };

  const onPress = () => {
    // pressing on card moves into product's page
    // navigation.navigate('Profile'); currently works, uncomment once page is set up, replace w/ profile 
  }

  const CardDetails = ({ index }) => {
    return (
      <Animated.View style={styles.cardDetails} entering={BounceInUp} exiting={FadeOutDown}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', letterSpacing: 0.5 }}>{data[index].productName}</Text>
        <Text style={{ color: '#32e909', fontSize: 32, fontWeight: 'bold', letterSpacing: 0.5 }}>{data[index].price}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={data}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />}
          onSwiped={onSwiped}
          onSwipedRight={onSwipedRight}
          stackSize={4}
          stackScale={10}
          stackSeparation={14}
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          animateOverlayLabelsOpacity
          infinite
          backgroundColor="transparent"
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: '#ff0000',
                  color: '#ff0000',
                  borderWidth: 5,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'transparent',
                  borderColor: '#00ff00',
                  color: '#00ff00',
                  borderWidth: 5,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.productDetails}>
        <CardDetails index={index} />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  card: {
    flex: 0.7,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    flex: 0.7,
  },
});

export default SwipableImages;