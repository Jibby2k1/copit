import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface ConfirmationScreenProps {
  route: {
    params: {
      productName: string;
    };
  };
  navigation: {
    navigate: (screen: string) => void;
  };
}

const ConfirmationScreen = ({ route, navigation }: ConfirmationScreenProps) => {
  const { productName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchase Successful!</Text>
      <Text style={styles.description}>Thank you for purchasing {productName}.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SwippableImages')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
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
});

export default ConfirmationScreen;