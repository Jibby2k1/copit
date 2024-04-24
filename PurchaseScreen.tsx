import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity , ScrollView} from 'react-native';

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

  const [form, setForm] = useState({
    fullName: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handlePurchase = () => {
    // Ensure 'ConfirmationScreen' expects 'productName' as a parameter
    navigation.navigate('ConfirmationScreen', { productName: item.productName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.productName}</Text>
      <Text style={styles.title}>{item.price}</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={form.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={form.cardNumber}
        onChangeText={(text) => handleInputChange('cardNumber', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={form.expiryDate}
        onChangeText={(text) => handleInputChange('expiryDate', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={form.cvv}
        onChangeText={(text) => handleInputChange('cvv', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePurchase}>
        <Text style={styles.buttonText}>Purchase</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default PurchaseScreen;