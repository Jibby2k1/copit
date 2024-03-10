import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ProfileComponent = () => {
    return (
        <Text style={styles.text}>Profile Component</Text>
    );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default ProfileComponent;