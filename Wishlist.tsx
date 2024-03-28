import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity  } from 'react-native';

const LikedComponent = () => {
  
  const wishlist = [
    { id: '1', name: 'Floral Dress', price: '$49.99' },
    { id: '2', name: 'Running Shoes', price: '$85.00' },
    { id: '3', name: 'Leather Jacket', price: '$120.00' },
    { id: '4', name: 'Blue Jeans', price: '$39.99' },
    { id: '5', name: 'Sweater', price: '$29.99' },
    { id: '6', name: 'T-Shirt', price: '$14.99' },
    { id: '7', name: 'Scarf', price: '$19.99' },
    { id: '8', name: 'Beanie', price: '$9.99' },
    { id: '9', name: 'Belt', price: '$24.99' },
    { id: '10', name: 'Sunglasses', price: '$59.99' },
    { id: '11', name: 'Watch', price: '$199.99' },
    { id: '12', name: 'Handbag', price: '$89.99' },
    { id: '13', name: 'High Heels', price: '$79.99' },
    { id: '14', name: 'Swimsuit', price: '$34.99' },
    { id: '15', name: 'Shorts', price: '$24.99' },
    { id: '16', name: 'Hoodie', price: '$44.99' },
    { id: '17', name: 'Socks', price: '$4.99' },
    { id: '18', name: 'Hat', price: '$14.99' },
    { id: '19', name: 'Gloves', price: '$19.99' },
    { id: '20', name: 'Tie', price: '$29.99' },
  ];

  
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
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
  },
});

export default LikedComponent;