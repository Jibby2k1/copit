import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

// Assume `item` parameter includes these properties
interface Item {
  id: string;
  productName: string;
  price: string;
  image: string;
}

interface PurchaseScreenProps {
  route: {
    params: {
      item: Item;
    };
  };
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const PurchaseScreen = ({ route, navigation }: PurchaseScreenProps) => {
  const { item } = route.params;

  const handlePurchase = () => {
    // Ensure 'ConfirmationScreen' expects 'productName' as a parameter
    navigation.navigate('ConfirmationScreen', { productName: item.productName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.productName}</Text>
      <Text style={styles.title}>{item.price}</Text>
      <Button title="Purchase" onPress={handlePurchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});

export default PurchaseScreen;