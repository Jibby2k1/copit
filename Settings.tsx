import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SettingsComponent = () => {
    return (
        <Text style={styles.text}>Settings Component</Text>
    );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});

export default SettingsComponent;