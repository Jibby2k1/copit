import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';

const LikedComponent = () => {
  
  const wishlist = [
    { id: '1', name: 'Dress', price: '$49.99', picture: require('./assets/dress.jpg') },
    { id: '3', name: 'Jacket', price: '$120.00', picture: require('./assets/Jacket.jpg') },

  ];
  
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.picture} style={styles.image} resizeMode="contain"/>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.price}</Text>
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
  },
  item: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20, 
  },
  image: {
    width: 100,
    height: 100, 
  },
});

export default LikedComponent;