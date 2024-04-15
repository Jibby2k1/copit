import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import data from './data';

const LikedComponent = ({ wishlist, setWishlist }) => {
  
  const deleteItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => deleteItem(item.id)}>
            <Image source={{uri: item.image}} style={styles.image} resizeMode="contain"/>
            <Text style={styles.text}>{item.productName}</Text>
            <Text style={styles.price} numberOfLines={1} ellipsizeMode='tail'>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    flexShrink: 1,
    fontSize: 18, 
    fontWeight: 'bold',
    marginLeft: 5, // add some space to the left of the text
    textAlign: 'center', // center the text
  },
  image: {
    width: 100,
    height: 100, 
  },
});

export default LikedComponent;