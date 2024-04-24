import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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
      <Button title="Go Home" onPress={() => navigation.navigate('SwippableImages')} />
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
});

export default ConfirmationScreen;