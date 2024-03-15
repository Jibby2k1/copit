import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const LikedComponent = () => {
    return (
      <View style={styles.background}>
        <Text style={styles.text}>Liked Component</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default LikedComponent;