import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MessagingComponent = () => {
    return (
        <Text style={styles.text}>Messaging Component</Text>
    );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default MessagingComponent;