import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LikedComponent = () => {
    return (
        <Text style={styles.text}>Liked Component</Text>
    );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default LikedComponent;